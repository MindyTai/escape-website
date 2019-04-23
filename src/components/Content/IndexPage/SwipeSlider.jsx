import React from 'react';
import PropTypes from 'prop-types'

import video from '../../../video/promo2.mp4'

class SwipeSlider extends React.Component {
  render() {
    const { sliderDatas } = this.props

    return(
      <section className="swiper-slider">
        <video autoPlay muted playsInline loop id="myVideo">
			    <source src={video}  type="video/mp4" />
		    </video>

        <div className="typewriter">
					<h1>我們是如何看待動物表演?</h1>
				</div>

      </section>
    )
  }
}

SwipeSlider.propTypes = {
  sliderDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    href: PropTypes.string,
  }))
}

SwipeSlider.defaultProps = {
  sliderDatas: [],
}

export default SwipeSlider
