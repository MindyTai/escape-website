import React from 'react'
import $ from 'jquery'

class ScrollBtn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: false,
    }
    this._onClick = this.onClick.bind(this);
  }

  componentDidMount(){
    window.addEventListener("scroll",this.fadeInOutAnimate.bind(this))
    this.$page = $("html, body , document , window");
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.fadeInOutAnimate.bind(this))
  }

  fadeInOutAnimate(){
    const scrollTop = $(window).scrollTop()
    this.setState({ display: (scrollTop > 20) })
  }

  isFadeInOutAnimate(){
    return (this.state.display) === false ? "fadeOut" : "fadeIn"
  }

  onClick(){
    this.$page.animate({scrollTop: 0}, 'slow')
  }
    
  render() {
    return (
      <div 
        id="scrollTop"
        className={`scrollup to-top text-center ${this.isFadeInOutAnimate()}`}
        onClick={this._onClick}
        >
        <i 
          className="fa fa-angle-up"  
          aria-hidden="true">
        </i>
      </div> 
      )
    }
}

export default ScrollBtn