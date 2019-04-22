import React from 'react';
import PropTypes from 'prop-types'

class AvatarSlider extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentIndex : 0,
    }
    this.autoPlayInterval = null
  }

  componentDidMount() {
    this.autoPlayInterval = setInterval(
      () => (this.changeToNextSlider())
    ,2800)
  } 

  isActiveClass(i) {
    return (this.state.currentIndex) === i ? "active" : ""
  }

  changeToNextSlider(){
    const total = this.props.levelDatas.length
    let nextIndex = this.state.currentIndex + 1
    if((nextIndex+1) > total) {nextIndex = 0}
    
    this.setState({
      currentIndex: nextIndex,
    })
  }

  render() {
    const { levelDatas } = this.props
    
    return(
      <section className="avatar" id="character">
       <h5 className="pt-5">角色介紹</h5>
        {
          levelDatas.map((data, i) => (
            <div key={data.src} className={ `avatar-slide pt-5 p-3 mt-5 mb-5 ${this.isActiveClass(i)}`}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4">
                    <img
                    className="avatar-img"  
                    src={data.src} 
                    alt= {data.alt} />
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-8">
                    <span className="title">{ data.title }</span>
                    <p className={ `p-${i}`}> {data.statement} </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        } 
        <div className="col-sm-12 col-md-12 col-lg-12">
          <ul className="d-flex justify-content-center avatar-list">
          {
            levelDatas.map((data, i) => (
              <li 
              key={data.src}
              className={`${this.isActiveClass(i)}`}
              onClick={
                () => {
                  this.setState({currentIndex: i})
                  clearInterval(this.autoPlayInterval)
                  }
                }
              />
            ))
          }
            </ul>
          </div>
        </section>
      )
    }
  }

AvatarSlider.propTypes = {
  levelDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string
  }))
}

AvatarSlider.defaultProps = {
  levelDatas: []
}

export default AvatarSlider
