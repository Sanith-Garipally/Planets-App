import './index.css'

const PlanetItem = props => {
  const {item} = props
  const {name, imageUrl, description} = item
  return (
    <div className="planet-container">
      <img className="planet-img" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-desc">{description}</p>
    </div>
  )
}

export default PlanetItem
