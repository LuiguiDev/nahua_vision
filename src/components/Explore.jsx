import { useEffect, useRef } from "react"
import { data } from "../data"
import '../styles/explore.css'

const ExploreCard = ({ nameNa, nameEs, position, manageSetLookAt }) => {
  const url = './src/images/explore_images/${nameNa} labeled.png'
  const styles = {
    backgroundImage: `url('./src/images/explore_images/${nameNa} labeled.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  } 
  const cardRef = useRef(null)

  function manageClick() {
    manageSetLookAt(position)
  }

  useEffect(() => {
    if(cardRef) {
      cardRef.current.addEventListener('click', manageClick)
    }
  }, [])

  return (
    <div className="explore_card" ref={cardRef}>
      <div className="card_image" 
      style={styles} ></div>
      <div className="card_content">
        <h3>{nameNa}</h3>
        <h3><span>{nameEs}</span></h3>
      </div>
    </div>
  )
}

export const Explore = ({ manageSetLookAt, closeExplorer }) => {
  const exploreRef = useRef(null)
  const id = crypto.randomUUID()

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
    <div className="explore">
      <div className="explore_list" ref={exploreRef}>
        {
          data.map(astro => (
            <ExploreCard
              key={astro.id}
              id={astro.id}
              nameNa={astro.nameNa}
              nameEs={astro.nameEs}
              position={astro.position}
              manageSetLookAt={manageSetLookAt}
            />
          ))
        }
      </div>
    </div>
  )
}