import React, {useRef, useState} from 'react'
import uploadImg from '../../assets/img/image.png'
import './dropFile.css'

const DropFile = (props) => {

  const [fileList, setFileList] = useState([])

  const wrapperRef = useRef(null)
  const handleDragEnter = () => wrapperRef.current.classList.add('dragover')
  const handleDragLeave = () => wrapperRef.current.classList.remove('dragover')
  const handleDrop = () => {}
  const handleFileDrop = (e) => {
    const newFile = e.target.files[0]
    if(newFile){
      const updateList = [...fileList, newFile]
      setFileList(updateList)
      props.onFileChange(updateList)
    }
  }

  return (
    <div 
    ref={wrapperRef}
    className='drop-file-content'
    onDragEnter={handleDragEnter}
    onDragLeave={handleDragLeave}
    onDrop={handleDrop}

    >
        <div className='drop-file-label'>
            <img className='img' src={uploadImg} alt='upload' />
            <p>Drag & Drop your image here</p>
        </div>
        <input onChange={handleFileDrop} type='file' name='file' id='file' value=""/>
    </div>
  )
}

DropFile.prototype = {
  // onFileChange: React.PropTypes.func
}

export default DropFile