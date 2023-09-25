import '../styles/loader.css'

export const Loading = () => {
  return (
    <div className="loader">
      <div className="spin">
      </div>
      <img className="eye" src='./src/images/loader_eye.png'/>
    </div>
  )
}