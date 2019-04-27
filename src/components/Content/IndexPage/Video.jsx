import React from 'react';

import video from '../../../video/promo2.mp4';

const Video = () => (
  <section className="video">
    <video autoPlay muted playsInline loop id="myVideo">
      <source src={video} type="video/mp4" />
    </video>

    <div className="typewriter">
      <h1>我們是如何看待動物表演?</h1>
    </div>
  </section>
);

export default Video;
