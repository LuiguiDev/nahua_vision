import React from "react"
import '../styles/footer.css'

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
              <a href="http://facebook.com">Fb</a>
              <a href="http://instagram.com">Insta</a>
              <a href="mailto:lfrz.arc@gmail.com">Mail</a>
            </div>
          </div>
        </div>
      }

      <img src="./src/images/grecas extended.jpg" alt="Mitla frets" className="frets"/>
    </footer>
    
  )
}