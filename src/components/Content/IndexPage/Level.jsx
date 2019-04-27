import React from 'react';
import PropTypes from 'prop-types';

class Level extends React.Component {
  componentDidMount() {
    const modal = document.getElementsByClassName('modal');
    const btn = document.getElementsByClassName('myBtn');
    const span = document.getElementsByClassName('close');

    for (let i = 0; i < btn.length; i += 1) {
      btn[i].onclick = () => {
        modal[Math.trunc(i / 2)].style.display = 'block';
      };
    }

    for (let j = 0; j < span.length; j += 1) {
      span[j].onclick = () => {
        modal[j].style.display = 'none';
      };
    }

    window.onclick = (event) => {
      if (event.target === modal[0]) {
        modal[0].style.display = 'none';
      } else if (event.target === modal[1]) {
        modal[1].style.display = 'none';
      } else if (event.target === modal[2]) {
        modal[2].style.display = 'none';
      }
    };
  }

  render() {
    const { levelDatas } = this.props;

    return (
      <section className="level" id="level">
        <h5 className="pt-5">關卡介紹</h5>
        <div className="icons mt-5">
          <div className="container">
            <div className="row">
              {
                levelDatas.map((data, i) => (
                  <div key={data.src} className="col-sm-12 col-md-4 col-lg-4 p-4">
                    <button type="button" className="levelBox">
                      <div className="box">
                        <img
                          src={data.src}
                          className={`mb-2 level-img img-${i} pb-2 myBtn`}
                          alt={data.statement}
                        />
                      </div>
                      <button type="button" className="button title mb-0 mt-5 bgBtn myBtn">{data.title}</button>

                    </button>

                    <div id="myModal" className="modal">
                      <div className="modal-content">
                        <div className="modal-header">
                          <span className="close">&times;</span>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-statement">
                              <p className="statement p-3">{data.statement}</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-statement">
                              <model-viewer id="reveal" preload poster={data.src} src={data.model} alt="A 3D model" auto-rotate camera-controls background-color="#455A64" class="glb" />
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
    );
  }
}

Level.propTypes = {
  levelDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string,
  })),
};

Level.defaultProps = {
  levelDatas: [],
};

export default Level;
