import React from 'react'
import $ from 'jquery'
import logoUrl from  '../../img/logo.png'
import  {a} from 'react-router-dom'


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hambergerBarOpened : false,
    }
    // this._onClick = this.onClick.bind(this);
  }

componentDidMount(){
  window.addEventListener("scroll",this.toggleLangSignIn)
  this.$page = $("html, body , document , window");
}

componentWillUnmount(){
  window.removeEventListener('scroll',this.toggleLangSignIn)
}

toggleLangSignIn(){
  const $langSignIn = $("#lang-sign-in")
  const scrollTop = $(window).scrollTop()

  if(scrollTop >= 40) {
    $langSignIn.addClass("active")
 }else{
   $langSignIn.removeClass("active")
 }
}

// onClick ()  {
//   this.$page.animate({scrollTop: 700}, 'slow')
// }
  
render() {
  const hambergerActiveClass = this.state.hambergerBarOpened ? "active": ""
  return (
    <header>   
      <div className="nav-bar m-0 p-0">
        <div className="container-fluid">
          <div className="row menu ml-0 mr-0">
            <a href="/" className="col-sm-4 col-md-3 col-lg-3">
              <img  
               src={logoUrl} 
               className="p-3"
               alt="logo"
              />
            </a>
            <ul className="col-sm-9 col-md-9 col-lg-9 list m-0">
              <li>
                <a href ="#about" >我們的訴求</a>
              </li>
              <li>
                <a href ="#level">關卡介紹</a>
              </li>
              <li>
                <a href ="#character">角色介紹</a>
              </li>
              <li>
                <a href ="#know-us">團隊成員</a>
              </li>
              <li>
                <a href ="#news">展覽消息</a>
              </li>
            </ul>  
            <div
              className="sm-hamberger-bar" 
              onClick={() => (this.setState({
                  hambergerBarOpened: !this.state.hambergerBarOpened,
              }))} 
            />
          </div>
          <div className={`nav-collapse ${hambergerActiveClass}`}>
            <div className={`sign-in ${hambergerActiveClass}`}>
              <ul className="navList">
                <li><a href="#about">我們的訴求</a></li>
                <li><a href="#level">關卡介紹</a></li>
                <li><a href="#character">角色介紹</a></li>
                <li><a href="#know-us">團隊成員</a></li>
                <li><a href="#news">展覽消息</a></li> 
              </ul>
            </div>
          </div>
        </div>       
      </div>
    </header>
    )
  }
}

export default Header