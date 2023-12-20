import { useState, useEffect } from "react"
import * as React from "react"
import useHome from "@/hooks/containers/Activite/Home/useHome"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { API_BASE_URL } from "@/constants/config"
import MeService from "@/services/meService"

export default function HomeActivity() {
  const [isDisabled, setIsDisabled] = React.useState(true)
  const { getMe } = useHome()
  const onClickValiderT = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log("name :", e.target.name.value)
    /* const handleOnChange = e => {
      setFile(e.target.files[0])
      console.log(selectedFiles)
      console.log("name :", e.target.csvFile.value)
    } */
    // getMe()
  }
  const onClickValider = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log("name :", e.target.csvFile.value)
    /* const handleOnChange = e => {
      setFile(e.target.files[0])
      console.log(selectedFiles)
      console.log("name :", e.target.csvFile.value)
    } */
    // getMe()
  }

  const handleOnChange = e => {
    setFile(e.target.files[0])
    console.log(selectedFiles)
  }
  /* const onClickUpload = async () => {
    await MeService.get()
  } */

  const [selectedFiles, setSelectedFiles] = React.useState()
  const [selectedFile, setSelectedFile] = React.useState()
  const [file, setFile] = useState<File | undefined>()
  const onUpload = () => {
    console.log(selectedFiles)
  }
  function handleOnSubmitt(e: React.SyntheticEvent) {
    e.preventDefault()
    // console.log("results", e.target.csvFileInput.value)
    // setState("sent")
    const formData = new FormData()
    formData.append("file", file)
    axios.post("", formData,{
    onUpload*Progress: (progressEvent) =>{ console.log("")
      headers: {
      }
    }})
    // setSelectedFile(e.target.files[0])
    // formData.append("file", selectedFile)
    // formData.append("upload_preset", "<Your Upload Preset>")

    /* const results = ""  await fetch("https://api.cloudinary.com/v1_1/<Your Cloud Name>/image/upload", {
      method: "POST",
      body: formData
    }).then(r => r.json()) */

    // console.log("results", results)
  }
  function handOnchangeFile(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      file: File
    }
  }
  // Upload de fichiers
  const [isUploadingFile, setIsUploadingFile] = useState(true)
  const fileRef = React.useRef()
  const onClickUploadd = () => {
    setIsUploadingFile(true)
    updateEvidenceWithFile(evidenceToEdit, refresh, configuration, personId)
  }
  const handleFileChange = event => {
    setSelectedFile(event.target.files[0])
  }
  const handleFileUpload = () => {
    if (selectedFile != null) {
      const formData = new FormData()
      formData.append("file", selectedFile)
    }
  }
  function handleOnSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append("file", selectedFile)
  }

  return (
    <div style={{ marginTop: 70, marginLeft: 100 }}>
      <div>
        <output>CSV Déstockage </output>
      </div>
      <div>
        <input ref={fileRef} type="file" />
      </div>
      <div style={{ marginTop: 70 }}>
        <div>
          <output>CSV Destribution en annomalie </output>
        </div>
        <div>
          <input name="csvFilee" type="file" onChange={onClickValider} />
          <button onClick={handleFileUpload}>Upload</button>
        </div>
        <div style={{ marginTop: 50 }}>
          <button style={{ marginBottom: 10 }} onClick={onClickValiderT}>
            Valider
          </button>
          <input type="file" name="csvFile" id="csvFileInput" accept={".csv"} onChange={handleOnSubmitt} />
          <button
            onClick={e => {
              handleOnSubmit(e)
            }}>
            IMPORT CSV
          </button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}
