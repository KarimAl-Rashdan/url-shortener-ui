import React, { useState } from 'react';

function UrlForm(props) {
  const [title, setTitle] = useState("")
  const [urlToShorten, setUrlToShorten] = useState("")
  

  // const handleNameChange = e => {
  //   setTitle(e.target.value)
  //   console.log(title)
  //   // this.setState({ [e.target.name]: e.target.value });
  // }

  // const handleUrlChange = e => {
  //   setUrlToShorten(e.target.value)
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const newUrl = {
      title:title,
      long_url: urlToShorten
    }
    props.addNewUrl(newUrl)
    clearInputs();
  }

  const clearInputs = () => {
    setTitle("")
    setUrlToShorten("")
  }

  
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='url'
          value={urlToShorten}
          onChange={e =>  setUrlToShorten(e.target.value)}
        />

        <button onClick={handleSubmit}>
          Shorten Please!
        </button>
      </form>
    )
  
}

export default UrlForm;
