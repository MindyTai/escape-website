import React from 'react';

const Footer = () => (
  <footer className="p-4" id="news">
    <div className="row">
      <p className="company text-center pt-3 mx-auto col-lg-6 col-md-6 col-sm-12">
          《節點》│ 交大傳科系畢業成果展
        <br />
        <br />
          新竹展時間：4/30(Tue.)
        <br />
          新竹展地點：
        <a className="map" href="https://www.google.com/maps/place/%E8%B2%B3%E8%B2%B3%E6%9F%92+lab227/@24.7899211,120.9987856,15z/data=!4m2!3m1!1s0x0:0x12839cd95251eadb?sa=X&ved=2ahUKEwidlK6ZneXhAhUGxLwKHQB2AYgQ_BIwCnoECA8QCA" target="_blank" rel="noreferrer noopener">貳貳柒 Lab 227</a>
        <br />
          台北展時間：5/10(Fri.) - 5/12(Sun.)
        <br />
          台北展地點:
        <br />
        <a className="map" href="https://www.google.com/maps/place/%E5%89%9D%E7%9A%AE%E5%AF%AE%E6%AD%B7%E5%8F%B2%E8%A1%97%E5%8D%80/@25.0372842,121.5013591,17.73z/data=!4m5!3m4!1s0x3442a9a8d017b6dd:0xff3361bbadd40fe9!8m2!3d25.036838!4d121.5021648" target="_blank" rel="noreferrer noopener">台北剝皮寮歷史街區(展間145、147、149、151)</a>
      </p>
      <p className="col-lg-6 col-md-6 col-sm-12">
        <iframe title="this is title." width="100%" height="200" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=108台北市萬華區康定路173巷&z=16&output=embed&t=" />
      </p>
    </div>
  </footer>
);

export default Footer;
