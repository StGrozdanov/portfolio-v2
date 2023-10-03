import './App.css';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    await fetch('http://localhost:8080/cv/upload', {
      method: 'POST',
      body: formData
    });
  }
  return (
    <form onSubmit={submitHandler}>
      <input onChange={e => setFile(e.target.files[0])} type="file"></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
