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
      props.onFileChange(updateList)

      const formData = new FormData()
      formData.append('image', newFile)
      
      fetch('http://localhost:4000/api/image', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'multipart/form-data',
        },
        credentials: 'include'
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFileList(updateList)
      })
      .catch(err => console.log(err))

    }

  }


  

  return (
    <>
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
        <form>
        <input onChange={handleFileDrop} type='file' accept='image/*' multiple={false}/>
        </form>
    </div>
    </>
    
  )
}

DropFile.prototype = {
  // onFileChange: React.PropTypes.func
}

export default DropFile