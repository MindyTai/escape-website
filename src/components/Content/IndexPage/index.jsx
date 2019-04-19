import React from 'react'
import SwipeSlider from './SwipeSlider'
import About from './About'
import KnowUs from './KnowUs'
import Level from './Level'
import Character from './Character' 
import aboutData from '../../info/about.json'
import levelData from '../../info/level.json'
import characterData from '../../info/character.json'
import knowUsData from '../../info/knowUs.json'
import AvatarSlider from './AvatarSlider'

class Content extends React.Component {
  render(){
    return (
      <article>
        <SwipeSlider />
        <About aboutDatas={aboutData}/>
        <Level levelDatas={levelData}/>
        <AvatarSlider levelDatas={characterData}/>
        {/* <Character characterDatas={characterData}/> */}
        <KnowUs knowUsDatas={knowUsData}/>
      </article> 
    )
  }
}

export default Content