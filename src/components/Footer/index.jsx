import React from 'react'
// import pressUrl from '../../img/press-img.png'
import  {NavLink} from 'react-router-dom'

const Footer = () => (
      <footer className="p-4" id="news">
 
        <div className="row">
          <p className="company text-center pt-3 mx-auto col-lg-6 col-md-6 col-sm-12">
          《節點》│ 交大傳科系畢業成果展
          <br/>
          <br/>
          新竹展時間：4/30(Tue.)
          <br/>
          新竹展地點：貳貳柒 Lab 227
          <br/>
          台北展時間：5/10(Fri.) - 5/12(Sun.)
          <br/>
          台北展地點:
          <br/>
          <a className="map" href="https://www.google.com/maps/place/%E5%89%9D%E7%9A%AE%E5%AF%AE%E6%AD%B7%E5%8F%B2%E8%A1%97%E5%8D%80/@25.0372842,121.5013591,17.73z/data=!4m5!3m4!1s0x3442a9a8d017b6dd:0xff3361bbadd40fe9!8m2!3d25.036838!4d121.5021648">台北剝皮寮歷史街區(展間145、147、149、151)</a>
          </p>
          <p className="col-lg-6 col-md-6 col-sm-12">
            <iframe width='100%' height='200' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' src='https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=108台北市萬華區康定路173巷&z=16&output=embed&t='></iframe>
          </p>
        </div>
     
    </footer>
)
 
export default Footer