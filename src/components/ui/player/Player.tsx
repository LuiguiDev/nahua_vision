import React from 'react'
//import { ReactComponent as SVG } from './public/svg/sound_waves.svg'

const SoundWaves = () => {
  return (
    <div>
      {/* <SVG height="50" /> */}
    </div>
  )
}

interface PlayerProps {
  type: 'PLAY' | 'PÁUSE' | 'SKIP_FORWARD' | 'SKIP_BACKWARD'
}

const PlayerBtn: React.FC<PlayerProps> = ({ type }) => {
  const ICONS = {
    PLAY: '▶',
    PAUSE: '⏸',
    SKIP_FORWARD: '⏩',
    SKIP_BACKWARD: '⏪'
  }

  return (
    <button className='w-6 h-6 rounded-full fill-white'>
      {}
    </button>
  )
}

export const Player = () => {
  return (
    <div id='player' className="w-full bg-background rounded-s-lg fixed bottom-0">

      <div className="w-50 h-0.5 bg-white mr-auto"></div>

      <div className="w-full grid grid-cols-3">
        <div className="">
          <img className="w-full" src="" alt="" />
          {/* <SoundWaves /> */}
        </div>

        <div id='player_buttons'>
          <PlayerBtn type='SKIP_BACKWARD' />
          <PlayerBtn type='PLAY' />
          <PlayerBtn type='SKIP_FORWARD' />
        </div>
      </div>

      <div className="w-full bg-white h-0.5"></div>

    </div>
  )
}