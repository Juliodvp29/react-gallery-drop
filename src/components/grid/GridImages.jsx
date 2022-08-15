import {React, useEffect, useState} from 'react'
import './gridImages.css'


const GridImages = () => {
  const [images, setImages] = useState([])
  const [totalImages, setTotalImages] = useState(0)  

useEffect( () => {
  loadImages();
}, [images])


async function loadImages(){
  try {
    await fetch('http://localhost:4000/api/images',  {
  method: 'GET',
  headers: {
      'content-type': 'application/json, charset=utf-8',
      'Accept': 'application/json, text/plain'
  },
  credentials: 'include'
}).then(res => res.json())
.then(data => {
  console.log(data)
    setImages(data.data)
    setTotalImages(images.length)
}
)
.catch(err => console.log(err))    
  } catch (error) {
    console.log(error)
  }
}


   
  return (
    <>
    <div className='grid'>
        {
          images.map((image, index) => {
            return (
              <img key={index} src={`http://localhost:4000/api/images/${image.path}`} alt={image._id}/>
            )
          }
          )
        }
    </div>
    <p>Total Image {totalImages}</p>
    </>

    

  )
}

export default GridImages