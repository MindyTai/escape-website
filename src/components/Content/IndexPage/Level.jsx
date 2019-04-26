import React from 'react';
import PropTypes from 'prop-types'

class Level extends React.Component {
  componentDidMount() {
    const modal = document.getElementsByClassName('modal');
    const btn = document.getElementsByClassName("myBtn");
    const span = document.getElementsByClassName("close");

    btn[0].onclick = () => {
      modal[0].style.display = "block";
    }

    btn[1].onclick = () => {
      modal[0].style.display = "block";
    }

    btn[2].onclick = () => {
      modal[1].style.display = "block";
    }

    btn[3].onclick = () => {
      modal[1].style.display = "block";
    }

    btn[4].onclick = () => {
      modal[2].style.display = "block";
    }

    btn[5].onclick = () => {
      modal[2].style.display = "block";
    }

    span[0].onclick = function () {
      modal[0].style.display = "none";
    }

    span[1].onclick = function () {
      modal[1].style.display = "none";
    }

    span[2].onclick = function () {
      modal[2].style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal[0]) {
        modal[0].style.display = "none";
      } else if (event.target == modal[1]) {
        modal[1].style.display = "none";
      } else if (event.target == modal[2]) {
        modal[2].style.display = "none";
      }
    }
  }

  render() {

    let cameraPosition = {
      x: 150,
      y: 300,
      z: 350
    }

    const { levelDatas } = this.props

    return (
      <section className="level" id="level">
        <h5 className="pt-5">關卡介紹</h5>
        <div className="icons mt-5">
          <div className="container">
            <div className="row">
              {
                levelDatas.map((data, i) => (
                  <div key={data.src} className="col-sm-12 col-md-4 col-lg-4 p-4">
                    <a>
                      <div className="box">
                        <img
                          src={data.src}
                          className={`mb-2 level-img img-${i} pb-2 myBtn`}></img>
                      </div>
                      <button className="button myBtn title mb-0 mt-5">{data.title}</button>

                    </a>

                    <div id={`myModal`} className={`modal`}>
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="close">&times;</span>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <p className="statement p-3">{data.statement}</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                              <model-viewer id="reveal" preload  poster={data.src} src={data.model} alt="A 3D model" auto-rotate camera-controls background-color="#455A64" class="glb"></model-viewer>
                            </div>
                          </div>
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

Level.propTypes = {
  levelDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string
  }))
}

Level.defaultProps = {
  aboutDatas: []
}

export default Level
