import React from 'react';
import PropTypes from 'prop-types'

import video from '../../../video/promo2.mp4'

class SwipeSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0,
    }
    this.autoPlayInterval = null
  }

  componentDidMount(){
    this.autoPlayInterval = setInterval(() => ( this.changeToNextSlider()), 5000)
  }
  
  isActiveClass(i) {
    return (this.state.currentIndex) === i ? "active" : ""
  }

  changeToNextSlider() {
    const total = this.props.sliderDatas.length
    let nextIndex = this.state.currentIndex + 1

    if((nextIndex+1) > total) {nextIndex = 0}

    this.setState({
      currentIndex: nextIndex,
    })
  }

  render() {
    const { sliderDatas } = this.props

    return(
      <section className="swiper-slider">
        <video autoPlay muted loop id="myVideo">
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
