import React from 'react';
import PropTypes from 'prop-types'

import video from '../../../video/promo2.mp4'

class Video extends React.Component {
  render() {
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

export default Video
