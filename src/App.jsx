import './App.css'
import Description from './components/Description.jsx'
import Image from './components/Image.jsx'
import Name from "./components/Name.jsx"
import Pric from './components/Pric.jsx'
function App() {
  return (
    <main className="page">
      <h1 className="page-title">
        <strong>Creation de card</strong>
      </h1>
      <article className="product-card">
        <figure className="product-image">
      <Image/>
        </figure>
        <div className="product-content">
          <h2 className="product-name">
            <Name />
          </h2>
          <div className="product-price"><Pric /></div>
          <div className="product-description"><Description /></div>
          <div className="product-actions">
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      </article>
    </main>
  )
}

export default App
