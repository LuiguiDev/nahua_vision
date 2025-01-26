import React from "react";
import image from '../../../public/img/cover.png'

interface CoverImagePorps {
  customImage?: string;
}

const CoverImage: React.FC<CoverImagePorps> = (props) => (
  <>
    {
      props.customImage
        ? <meta property="og:image" content={props.customImage} />
        : <meta name ="og:image" content={`https://nahua-vision.netlify.app/${image}`} />
    }
  </>
)

export default CoverImage