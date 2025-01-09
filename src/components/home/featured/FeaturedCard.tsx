import React from "react";
// types
import { featureProps } from "./featureProps";
import { Link } from "react-router-dom";
//styles
import './featured_card.css'
import { DEVELOPMENT_ROUTES, SUPPORTED_ROUTES } from "../../../constants/suported_routes";


// COMPONENTS
const ProximamenteBtn = () => {
  return(
    <>
      Próximamente <i className="fa-solid fa-lock" style={{color: '#000'}}></i>
    </>
  )
}

interface featureCardProps {
  feature: featureProps
  onDevelopment: boolean
}
const FeatureCard: React.FC<featureCardProps> = (
  {
    feature,
    onDevelopment
  }
) => {

  return(
    <article className="feature_container">
      <img className="feature_img" src={feature.image.imgSrc} alt={feature.image.imgAlt} />

      <section className="feature_section">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <div className="feature_btns">
          <button className={`feature_btn ${onDevelopment ? 'btn_disabled' : ''}`} disabled={onDevelopment}>
            {
              onDevelopment
              ? <ProximamenteBtn />
              : <Link to={feature.path}>{feature.button}</Link>
            }
          </button>
        </div>
      </section>
    </article>
  )
}

// MAIN COMPONENT
const Featured = (feature : featureProps) => {
  const onDevelopment = Object.values(DEVELOPMENT_ROUTES).includes(feature.path)

  return (
    <FeatureCard feature={feature} onDevelopment={onDevelopment}/>  
  )
}


export default Featured