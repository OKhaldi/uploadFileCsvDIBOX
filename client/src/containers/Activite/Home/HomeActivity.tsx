import { useCallback, useState, useEffect } from "react"
import * as React from "react"
import useHome from "@/hooks/containers/Activite/Home/useHome"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { API_BASE_URL } from "@/constants/config"
import MeService from "@/services/meService"
import RequestService from "@/services/requestService"

export default function HomeActivity() {
  const [isDisabled, setIsDisabled] = React.useState(true)
  const { getMe } = useHome()
  const onClickValiderT = (e: React.SyntheticEvent) => {
    e.preventDefault()
    // setFile(URL.createObjectURL(e.target.files[0]))
    // console.log(file)
    getMe()
  }
  const onClickValider = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }

  const handleOnChange = e => {
    setFile(e.target.files[0])
    console.log(selectedFiles)
  }
  const onClickUpload = async () => {
    await MeService.get()
  }

  const [selectedFiles, setSelectedFiles] = React.useState()
  const [selectedFile, setSelectedFile] = React.useState()
  const [file, setFile] = useState<File | undefined>()
  const onUpload = () => {
    console.log(selectedFiles)
  }
  function handleOnSubmitt(e: React.SyntheticEvent) {
    e.preventDefault()
    console.log("results", e.target.value)
    setFile(URL.createObjectURL(e.target.files[0]))
    console.log(file)
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

  const editionUpdate = async () => {
    if (selectedFile != null) {
      setFile(URL.createObjectURL(e.target.files[0]))
      await upFileCsv(file)
      fetchData()
    }
  }
  function search() {
    console.log(file)
  }
  const handleFileUpload = () => {
    if (selectedFile != null) {
      const formData = new FormData()
      formData.append("file", selectedFile)
    }
  }
  return (
    <div style={{ marginTop: 70, marginLeft: 100 }}>
      <div>
        <output>CSV Déstockage </output>
      </div>
      <div style={{ marginTop: 15 }}>
        <input ref={fileRef} type="file" name="csvFile" id="csvFileInput" accept={".csv"} onChange={handleOnSubmitt} />
      </div>
      <div style={{ marginTop: 70 }}>
        <div>
          <output>CSV Destribution en annomalie </output>
        </div>
        <div style={{ marginTop: 15 }}>
          <input name="csvFilee" type="file" onChange={onClickValider} />
        </div>
        <div style={{ marginTop: 75, marginLeft: 100 }}>
          <button style={{ marginBottom: 10 }} onClick={onClickValiderT}>
            Valider
          </button>
        </div>
      </div>
    </div>
  )
}
