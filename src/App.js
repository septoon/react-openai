import React from 'react'
import './App.css'

const App = () => {
  return (
    <div>
       <header>
      <div className="navbar">
        <div className="logo">
          <h2>OpenAI Image Generator</h2>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="https://github.com/septoon" target="_blank">by Septon</a
              >
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main>
      <section className="showcase">
        <form id="image-form">
          <h1>Describe An Image</h1>
          <div className="form-control">
            <input type="text" id="prompt" placeholder="Enter Text" />
          </div>
          
          <div className="form-control">
            <select name="size" id="size">
              <option value="small">Small</option>
              <option value="medium" selected>Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <button type="submit" className="btn">Generate</button>
        </form>
      </section>

      <section className="image">
        <div className="image-container">
          <h2 className="msg"></h2>
          <img src="" alt="" id="image" />
        </div>
      </section>
    </main>

    <div className="spinner"></div>
    </div>
  )
}

export default App