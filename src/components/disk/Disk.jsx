import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import FileList from "./fileList/file/FileList"
import './disk.css'
import { createDir, getFiles, uploadFile } from "../../actions/files"
import Popup from "./Popup"
import { setCurrentDir, setPopupDisplay } from "../../reducers/fileReducer"
import Uploader from "../uploader/Uploader"

const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState('type')

  useEffect(() => {
      dispatch(getFiles(currentDir, sort))
  }, [currentDir, sort])

  function showPopupHandler() {
      dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler() {
      const backDirId = dirStack.pop()
      dispatch(setCurrentDir(backDirId))
  }

  function fileUploadHandler(event) {
      const files = [...event.target.files]
      files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  function dragEnterHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }

  function dragLeaveHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }

  function dropHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    let files = [...event.dataTransfer.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
    setDragEnter(false)
  }

  return (!dragEnter ?
      <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
          <div className="disk__btns">
              <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
              <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
              <div className="disk__upload">
                  <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
                  <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
              </div>
              <select className="disk__select" onChange={(e) => setSort(e.target.value)}>
                <option value="name">По имени</option>
                <option value="type">По типу</option>
                <option value="date">По дате</option>
              </select>
          </div>
          <FileList/>
          <Popup/>
          <Uploader />
      </div>
      :
      <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>Drag and drop</div>
  );
};

export default Disk;