import React, { Component } from 'react'
import  {BrowserRouter, Route, Switch ,NavLink} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollBtn from './components/ScrollBtn'
import Content from './components/Content/IndexPage' 




class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Content/>
          <Footer />
          <ScrollBtn />
        </div>
    )
  }
}

export default App
