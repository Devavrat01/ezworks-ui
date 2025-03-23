import logo from '../Logo/EZ Works Blue@2x.png';
import './Header.css'

const Header = () => {
  return (
    <>
    <div id='left-container'>
    <div className="header"> 
       
        <div className="logo">
        <img src={logo} alt="EZ Works Logo" />
            
        </div>
        <div>
        <h2>Suite Of Business Support Services</h2>
        <p>
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem  ipsum dolor sit amet, consectetur adipiscing elit, sed
      </p>
        </div>
    </div>
    </div>
    </> 
  )
}

export default Header



