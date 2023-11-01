import logo from '/assets/images/logo.jpg'
import './App.css'

function App() {

  return (

      <>
    <div className="logo">
        <img src={logo}  alt="Logo"/>
    </div>
    <h1>DRINKS MENU</h1>
    <div className="menu-container">
        <div className="menu-section">
            <div className="drink-item">
                <span>Lorem ipsum dolor</span>
                <span className="price">$10</span>
            </div>
           
        </div>
        <div className="menu-section">
            <div className="drink-item">
                <span>Lorem ipsum dolor</span>
                <span className="price">$10</span>
            </div>
          
        </div>
    </div>
    <div className="footer">
        FOR DELIVERY <span className="website">www.website.com</span>
    </div>
</>
  )
}

export default App
