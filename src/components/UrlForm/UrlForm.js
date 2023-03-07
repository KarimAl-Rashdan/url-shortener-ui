import React, { useState } from 'react';

function UrlForm(props) {
  const [title, setTitle] = useState("")
  const [urlToShorten, setUrlToShorten] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      title:title,
      long_url: urlToShorten
    }
    if(!title || !urlToShorten) {
      setErrorMessage("Please fill out both inputs")
    } else {
    props.addNewUrl(newUrl)
    clearInputs();
    }
  }

  const clearInputs = () => {
    setTitle("")
    setUrlToShorten("")
  }

  
    return (
      <div>
      <form>
        <input
          className='titleInput'
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />

        <input
          className='urlInput'
          type='text'
          placeholder='URL to Shorten...'
          name='url'
          value={urlToShorten}
          onChange={e =>  setUrlToShorten(e.target.value)}
          required
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
        {errorMessage && <h2>{errorMessage}</h2>}
      </div>
    )
  
}

export default UrlForm;
