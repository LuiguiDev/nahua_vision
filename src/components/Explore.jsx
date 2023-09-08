import { useEffect, useRef } from "react"
import { data } from "../data"
import '../styles/explore.css'

const ExploreCard = ({ nameNa, nameEs, position, manageLookAt }) => {
  const url = './src/images/explore_images/${nameNa} labeled.png'
  const styles = {
    backgroundImage: `url('./src/images/explore_images/${nameNa} labeled.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  } 

  function lookAt () {
    manageLookAt(position)
  }

  return (
    <div className="explore_card">
      <div className="card_image" 
      style={styles} ></div>
      <div className="card_content">
        <h3>{nameNa}</h3>
        <h3><span>{nameEs}</span></h3>
      </div>
    </div>
  )
}

export const Explore = (manageLookAt) => {
  const exploreRef = useRef(null)

  function manageScroll(e) {
    //exploreRef.current.scrollTo({left: 150})  
  }
  useEffect(() => {
/*     if(exploreRef.current) {
      exploreRef.current.addEventListener('scroll', (e) => manageScroll(e))

      const midExploreScroll = exploreRef.current.scrollWidth / 10
      const exploreWidth = exploreRef.current.innerWidth

      exploreRef.current.scrollLeft = 140
    }

    return () => {
      exploreRef.current.removeEventListener('scroll', manageScroll)
    }
 */  }, [])

  return (
    <div className="explore" ref={exploreRef}>
      {
        data.map(astro => (
          <ExploreCard
            nameNa={astro.nameNa}
            nameEs={astro.nameEs}
            position={astro.position}
            manageLookAt={manageLookAt}
          />
        ))
      }
    </div>
  )
}