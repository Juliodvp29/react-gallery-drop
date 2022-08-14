import {React, useEffect, useState} from 'react'
import { get } from '../../helpers/fetch'
import './gridImages.css'

const GridImages = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
   fetch('http://localhost:4000/api/photos',  {
    method: 'GET',
    headers: {
        'content-type': 'application/json, charset=utf-8',
        'Accept': 'application/json, text/plain'
    },
    credentials: 'include'
}).then(res => res.json())
.then(data => {
  console.log(data)
    setImages(data.photos)
}
)}, [])
   
  return (
    <div className='grid'>
        {
          images.map((image, index) => {
            return (
              <img key={index} src={`http://localhost:4000/api/photos/${image.imagePath}`} alt={image._id}/>
            )
          }
          )
        }
    </div>
  )
}

export default GridImages