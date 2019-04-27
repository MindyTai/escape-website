import React from 'react';
import PropTypes from 'prop-types';

const About = (props) => {
  const { aboutDatas } = props;

  return (
    <section className="about" id="about">
      <h5 className="pt-5">我們的訴求</h5>
      <div className="icons mt-5">
        <div className="container">
          <div className="row">
            {
              aboutDatas.map((data, i) => (
                <p className="statement ml-4 mr-4 mb-5" id={i} key={data.statement}>{data.statement}</p>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  aboutDatas: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    statement: PropTypes.string,
  })),
};

About.defaultProps = {
  aboutDatas: [],
};

export default About;
