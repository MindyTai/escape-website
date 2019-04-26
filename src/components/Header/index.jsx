import React from 'react';
import $ from 'jquery';
import logoUrl from '../../img/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hambergerBarOpened: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.toggleLangSignIn);
    this.$page = $('html, body , document , window');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.toggleLangSignIn);
  }

  toggleLangSignIn = () => {
    const $langSignIn = $('#lang-sign-in');
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= 40) {
      $langSignIn.addClass('active');
    } else {
      $langSignIn.removeClass('active');
    }
  }

  render() {
    const { hambergerBarOpened } = this.state;
    const hambergerActiveClass = hambergerBarOpened ? 'active' : '';

    return (
      <header>
        <div className="nav-bar m-0 p-0">
          <div className="container-fluid">
            <div className="row menu ml-0 mr-0">
              <a href="/escape-website" className="col-sm-4 col-md-3 col-lg-3">
                <img
                  src={logoUrl}
                  className="p-3"
                  alt="logo"
                />
              </a>
              <ul className="col-sm-9 col-md-9 col-lg-9 list m-0">
                <li>
                  <a href="#about">我們的訴求</a>
                </li>
                <li>
                  <a href="#level">關卡介紹</a>
                </li>
                <li>
                  <a href="#character">角色介紹</a>
                </li>
                <li>
                  <a href="#know-us">團隊成員</a>
                </li>
                <li>
                  <a href="#news">展覽消息</a>
                </li>
              </ul>
              <button
                type="button"
                className="sm-hamberger-bar"
                onClick={() => (this.setState({
                  hambergerBarOpened: !hambergerBarOpened,
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
    );
  }
}

export default Header;
