import React from 'react';
import $ from 'jquery';

class ScrollBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.fadeInOutAnimate.bind(this));
    this.$page = $('html, body , document , window');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fadeInOutAnimate.bind(this));
  }


  onClick() {
    this.$page.animate({ scrollTop: 0 }, 'slow');
  }


  isFadeInOutAnimate() {
    const { display } = this.state;
    return display === false ? 'fadeOut' : 'fadeIn';
  }

  fadeInOutAnimate() {
    const scrollTop = $(window).scrollTop();
    this.setState({ display: (scrollTop > 20) });
  }


  render() {
    return (
      <button
        type="button"
        id="scrollTop"
        className={`scrollup to-top text-center ${this.isFadeInOutAnimate()}`}
        onClick={this.onClick}
      >
        <i
          className="fa fa-angle-up"
          aria-hidden="true"
        />
      </button>
    );
  }
}

export default ScrollBtn;
