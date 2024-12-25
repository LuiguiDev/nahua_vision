import React from "react";
// types
import { featureProps } from "./notification_types";
import { Link } from "react-router-dom";
//styles
import './news.css'
import { SUPORTED_ROUTES } from "../../../constants/suported_routes";

const FeatureCard: React.FC<featureProps> = (  
  {
    headline,
    description,
    image,
    button
  }
) => {
  const {imgSrc, imgAlt} = image

  return(
    <article className="feature_container">
      <img className="feature_img" src={imgSrc} alt={imgAlt} />

      <section className="feature_section">
        <h3>{headline}</h3>
        <p>{description}</p>
        <div className="feature_btns">
          <button className="feature_btn">
            <Link to={SUPORTED_ROUTES.PLANETARY}>{button}</Link>
          </button>
        </div>
      </section>
    </article>
  )
}

export default FeatureCard