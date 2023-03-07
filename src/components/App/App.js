import React, { useState, useEffect } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

function App () {
  const [urls, setUrls] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    (async () => {
   await getUrls()
    .then(data => setUrls(data.urls))
    .catch(error => setError(error.message))
    })()
  }, [])

  const addNewUrl = (newUrl) => {
    const bodyObject = {
      method:"POST",
      body: JSON.stringify(newUrl),
      headers: {
        "Content-type" : "application/json"
      }
    }
    return fetch('http://localhost:3001/api/v1/urls', bodyObject)
      .then((response) => {
        if(!response.ok) {
          throw new Error ("Could not post url. Please try again!")
        } else {
          return response.json()
        }
      })
      .then((data) => setUrls([...urls, data]))
      .catch((error) => setError(error.message))
  }

    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          {error && error}
          <UrlForm addNewUrl={addNewUrl}/>
        </header>

        <UrlContainer className="urlContainer" urls={urls}/>
      </main>
    );
  
}

export default App;
