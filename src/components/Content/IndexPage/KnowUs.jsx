import React from 'react';
import PropTypes from 'prop-types'

class KnowUs extends React.Component  {
 
  render(){
    const { knowUsDatas } = this.props

  return (
    <section className="know-us" id="know-us">
      <h5 className="pt-5">團隊成員</h5>
      <div className="icons mt-5">
        <div className="container">
          <div className="row">
          {
            knowUsDatas.map((data,i) => (
              <div key={data.src} className="col-sm-12 col-md-3 col-lg-3 p-3">
                <a>
                <div className="box">
                <img
                  id={i}
                  src= {data.src}
                  className={`mb-2 level-img img-${i}`}></img>
                </div>
                <p className="title mb-2">{data.title}</p>
                <p className="statement mb-0">{data.statement}</p>
                </a>
              
                </div>             
            )) 
          }
          </div>
        </div>
      </div>
    </section>
  )
  }
  
}

KnowUs.propTypes = {
  knowUsDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string
  }))
}

KnowUs.defaultProps = {
  aboutDatas:[] 
}

export default KnowUs
