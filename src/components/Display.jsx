export const Display = ({options}) => {
  const { hidden, title, description } = options

  if (hidden) return

  return (
    <div className="display">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}