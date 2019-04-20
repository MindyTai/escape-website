import React from 'react';
import PropTypes from 'prop-types'

class Character extends React.Component {
  
  render(){
    const { characterDatas } = this.props
    return (
      <section className="character" id="character">
        <h5 className="pt-5">角色介紹</h5>
        <div className="icons mt-5 mb-4">
          <div className="container">
            <div className="row">
            {
              characterDatas.map((data,i) => (
                <div key={data.src} className="col-sm-12 col-md-3 col-lg-3 p-4">
                  <a>
                    <div className="box">
                      <img
                        id={`Btn`}
                        src= {data.src}
                        className={`mb-2 level-img img-${i}`} />
                    </div>
                    <p className="title mb-0">{data.title}</p>
                   
                  </a>
                  <div id="Modal" className="modal">
                  {/* Modal content  */}
                    <div className="modal-content">
                      <div className="modal-header">
                        <span className="close">&times;</span>
                      </div>
                      <div className="modal-body">
                      <p className={`statement`}>{data.statement}</p> 
                      </div>  
                    </div>
                  </div>
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

Character.propTypes = {
  aboutDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string
  }))
}

Character.defaultProps = {
  aboutDatas:[] 
}

export default Character
