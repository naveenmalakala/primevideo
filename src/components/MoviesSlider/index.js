import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 4,
  }
  const {moviesList} = props
  return (
    <div>
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem key={eachMovie.id} movieDetails={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
