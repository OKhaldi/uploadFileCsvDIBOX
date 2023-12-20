package com.altima.api.echo.controller

import com.opencsv.CSVReader
import com.opencsv.CSVWriter
import com.opencsv.exceptions.CsvException
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.Part
import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.io.*
import java.util.logging.Level
import java.util.logging.Logger
import org.apache.commons.net.ftp.FTPClient


@RestController
@RequestMapping(value = ["/api/v1/me"])
class MeController() {

    private val LOGGER: org.slf4j.Logger =
        LoggerFactory.getLogger(com.altima.api.echo.controller.MeController::class.java)

    @PostMapping(consumes = ["multipart/form-data"])
    fun importQuestion(
        request: HttpServletRequest
    ): String {
        //logger().debug("Post method of uploaded Questions ")
        //logger().debug("Uploaded file Name : " + request.pathInfo)

        // creating path components for saving the file
        val path = request.getParameter("destination")
        val filePart = if (request.getPart("file").toString().isNotEmpty()) request.getPart("file") else request.getPart("file2")
        //val filePart2 = request.getPart("file2")
        val fileName: String = getFileName(filePart)
        updateCSV(path, filePart, fileName)

        sendFtpFile(path + fileName, fileName)
        return ""
    }

    private fun getFileName(part: Part): String {
        val partHeader = part.getHeader("content-disposition")
        Logger.getLogger(javaClass.name).log(Level.INFO, "Part Header = {0}", partHeader)

        for (content in part.getHeader("content-disposition").split(";")) {
            if (content.trim().startsWith("filename")) {
                return content.substring(content.indexOf('=') + 1).trim().replace("\"", "")
            }
        }
        return ""
    }

    @Throws(IOException::class, CsvException::class)
    fun updateCSV(path: String, filePart: Part, fileName: String) {
        var fileToUpdatee = path + fileName
        val reader = CSVReader(FileReader(fileToUpdatee), ';')
        val csvBody = reader.readAll()
        try{
            val writer = CSVWriter(FileWriter(fileToUpdatee))

            for (i in 0 until csvBody.size) {
                if(csvBody[i].isNotEmpty()) {
                    val csvBodyClon = csvBody[i].toMutableList()
                    if(csvBody[i][11].length>10) {
                        csvBody[i][0] = csvBody[i][1] + csvBody[i][7].substring(csvBody[i][7].length - 12, csvBody[i][7].length)
                        if (csvBody[i][11].length > 30) {
                            csvBody[i][1] = csvBody[i][1] + csvBody[i][11].substring(31, csvBody[i][11].length) + "-"
                        } else {
                            csvBody[i][1] = csvBody[i][1] + csvBody[i][11].substring(12, csvBody[i][11].length) + "-"
                        }
                        csvBody[i][2] = csvBody[i][7].substring(csvBody[i][7].length - 12, csvBody[i][7].length)
                        csvBody[i] = remplirColonne(csvBody[i], csvBodyClon)
                    }
                }
                reader.close()
            }
            writer.writeAll(csvBody)
            writer.flush()
            writer.close()
        }catch (e: IOException) {
            LoggerFactory.getLogger(javaClass).error("The process cannot access the file {}", fileToUpdatee, e)
        }
    }



    private fun sendFtpFile(filePath: String, fileName: String ){


        val client = FTPClient()
        var fis: FileInputStream? = null

        try {
            client.connect("10.0.4.53")
            client.login("dibox", "dibox")
            client.changeWorkingDirectory("/input")

            // Create an InputStream of the file to be uploaded
            fis = FileInputStream(filePath)

            // Store file to server
            client.storeFile(fileName, fis)
            client.logout()
        } catch (e: Exception) {
            e.printStackTrace()
        } finally {
            try {
                fis?.close()
                client.disconnect()
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
    private fun remplirColonne(csvBody: Array<String>, csvBodyClon: List<String>): Array<String> {
        var csvData = csvBody;
        for (i in 0 until csvBodyClon.size) {
            if (csvData.size > i + 2) {
                csvData[i + 2] = csvBodyClon[i]
            } else {
                val listLine = csvData.toMutableList()
                listLine.add(csvBodyClon[i])
                csvData = listLine.toTypedArray()
            }
        }
        return csvData
    }
}
