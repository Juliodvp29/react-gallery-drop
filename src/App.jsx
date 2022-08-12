import react from 'react';
import DropFile from './components/drop/DropFile';
import './App.css';

function App() {
  const onFileChange = (files) => {
    console.log(files);
  }

  return (
    <div className='box'>
      <h2 className='header'>
      React Drop
      </h2>
     <DropFile
        onFileChange={(files) => onFileChange(files)}
     />
    </div>
  )
}

export default App
