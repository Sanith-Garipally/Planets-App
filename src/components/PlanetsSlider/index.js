import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
}
const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets" className="bg-container">
      <div className="slider-container">
        <h1 className="main-head">Planets</h1>
        <Slider {...settings}>
          {planetsList.map(object => (
            <PlanetItem key={object.id} item={object} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
