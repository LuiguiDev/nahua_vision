import { useEffect, useRef, useState } from "react"
import '../styles/explorer.css'
import { useAstros } from "../hooks/useAstros"

const ExploreCard = ({ nameNa, nameEs, position, manageSetLookAt, setSelectedId, id, description }) => {
  const [extended, setExtended] = useState(false)
  const url = './src/images/explore_images/${nameNa} labeled.png'
  const className = extended ? 'extended' : ''
  const cardRef = useRef(null)
  const checkDescription = description.length > 0 ? description : 'Missing info about this glyph'

  const styles = {
    backgroundImage: `url('./src/images/explore_images/${nameNa} labeled.png')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  } 

  function manageClick() {
    manageSetLookAt(position)
    setExtended(!extended)
    setSelectedId(id)
  }

  function backToExplorer() {
    setSelectedId(undefined)
    setExtended(false)
  }

  useEffect(() => {
    if(cardRef) {
      cardRef.current.addEventListener('click', manageClick)
    }
  }, [])

  return (
    <div className={`explore_card ${className}`} ref={cardRef}>
      <div className={`basic_info_${className}`}>
        <div className="card_image" 
        style={styles} ></div>
        <div className="card_content">
          {
            extended &&
            <button
              onClick={backToExplorer}
              className="go_back_button"
            >
              Back
            </button>
          }
          <h3>{nameNa}</h3>
          <h3><span>{nameEs}</span></h3>
        </div>
      </div>
      {
        extended &&
        <div className="extended_info">
            <>
              <div
                style={{whiteSpace: "pre-line"}}
              >
                {checkDescription}
              </div>
            </>
        </div>
      }
    </div>
  )
}

export const Explorer = ({ manageSetLookAt, closeExplorer }) => {
  const exploreRef = useRef(null)
  const id = crypto.randomUUID()
  const { data } = useAstros()
  const [selectedId, setSelectedId] = useState(undefined)


  function manageScroll(e) {
    //exploreRef.current.scrollTo({left: 150})  
  }

  function astrosFiltered(astros) {
    if(selectedId) return astros.filter(astro => {
      return astro.id === selectedId
    })

    return astros
  }

  const astros = astrosFiltered(data)

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

  const className = selectedId ? 'isolated' : 'explore_list'

  return (
    <div className="explore">
      <div className={className} ref={exploreRef}>
        {
          astros.map(astro => (
            <ExploreCard
              key={astro.id}
              id={astro.id}
              nameNa={astro.nameNa}
              nameEs={astro.nameEs}
              position={astro.position}
              manageSetLookAt={manageSetLookAt}
              setSelectedId={setSelectedId}
              description={astro.description}
            />
          ))
        }
      </div>
    </div>
  )
}