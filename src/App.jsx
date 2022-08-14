import react from 'react';
import DropFile from './components/drop/DropFile.jsx';
import './App.css';
import GridImages from './components/grid/GridImages.jsx';

function App() {
  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <>
    <div className='box'>
      <h2 className='header'>
      React Drop
      </h2>
     <DropFile
        onFileChange={(files) => onFileChange(files)}
     />
    </div>
     <GridImages/>
    </>
    
  )
}

export default App
