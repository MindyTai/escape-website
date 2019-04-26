import React from 'react';
import PropTypes from 'prop-types'

const About = (props) => {
  const { aboutDatas } = props
  
  return (
    <section className="about" id="about">
      <h5 className="pt-5">我們的訴求</h5>
      <div className="icons mt-5">
        <div className="container">
          <div className="row">
          {
            aboutDatas.map((data,i) => (
              <div key={data.src} className="col-sm-12 col-md-12 col-lg-12 pb-4 pl-4 pr-4">
                <a>
                <img
                  id={i}
                  src= {data.src}
                  className="mb-2" alt="" />
                  <p className="title mb-0">{data.title}</p>
                  <p className="statement">{data.statement}</p>
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

About.propTypes = {
  aboutDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string
  }))
}

About.defaultProps = {
  aboutDatas:[] 
}

export default About
