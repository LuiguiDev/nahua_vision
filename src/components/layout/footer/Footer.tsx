import React from "react"
import './footer.css'

interface FooterProps {
  extended: boolean
}

export const Footer: React.FC<FooterProps> = ({extended}) => {
  return (
    <footer>
      {
        extended &&
        <div className="footer_content">
          <div className="autor">
            Developed by<br />
            Luis Rodríguez
          </div>
          <div className="contact">
            <p>Contact</p>
            <div className="contact_ancors">
              <a href="https://www.facebook.com/profile.php?id=100081431242233">
                <i className="fa-brands fa-facebook" style={{color: "#ffffff"}}></i>
              </a>

              <a href="https://www.instagram.com/luigui._/">
                <i className="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
              </a>
              
              <a href="mailto:lfrz.arc@gmail.com">
                <i className="fa-solid fa-envelope" style={{color: "#ffffff"}}></i>
              </a>
            </div>
          </div>
        </div>
      }

      <img src="https://i.ibb.co/zscR2BK/grecas-extended.jpg" alt="Mitla frets" className="frets lg:hidden"/>
    </footer>
    
  )
}