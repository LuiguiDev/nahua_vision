import { useEffect, useRef, useState } from "react"
import '../styles/explorer.css'
import { useAstros } from "../hooks/useAstros"
import { UUIDtype, astro, astros } from "../types"
import React from "react"
import { Line } from "@react-three/drei"
import { Mesh } from "three"

const ModelElement = () => {
  return (
    <Line points={[2, 2, 2]}/>
  )
}

interface CardProps {
  astro: astro
  manageSetLookAt: (position: [number, number, number]) => void
  setSelectedId: (id: UUIDtype | undefined) => void
}

const ExploreCard: React.FC<CardProps> = ({ astro, manageSetLookAt, setSelectedId }) => {
  const [extended, setExtended] = useState(false)
  const { nameNa, nameEs, description, id, position } = astro
  const className = extended ? 'extended' : ''
  const cardRef = useRef<HTMLDivElement | null>(null)
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
    if(cardRef.current) {
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
                {description || 'there is not a description'}
              </div>
            </>
        </div>
      }
    </div>
  )
}

interface ExplorerProps {
  manageSetLookAt: (position: [number, number, number]) => void
  closeExplorer: () => void
}

export const Explorer: React.FC<ExplorerProps> = ({ manageSetLookAt, closeExplorer }) => {
  const exploreRef = useRef(null)
  const id = crypto.randomUUID()
  const { data } = useAstros()
  const [selectedId, setSelectedId] = useState<UUIDtype | undefined>(undefined)


  function manageScroll() {
    //to do: add smooth transition when scrolling the explroer
    //exploreRef.current.scrollTo({left: 150})  
  }

  function astrosFiltered(astros: astros) {
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
              astro={astro}
              manageSetLookAt={manageSetLookAt}
              setSelectedId={setSelectedId}
            />
          ))
        }
      </div>
    </div>
  )
}