import React from 'react'

import Video from './Video'
import KnowUs from './KnowUs'
import Level from './Level'
import About from './About'
import AvatarSlider from './AvatarSlider'

import aboutData from '../../info/about.json'
import levelData from '../../info/level.json'
import characterData from '../../info/character.json'
import knowUsData from '../../info/knowUs.json'


class Content extends React.Component {
  render(){
    return (
      <article>
        <Video />
        <About aboutDatas={aboutData}/>
        <Level levelDatas={levelData}/>
        <AvatarSlider levelDatas={characterData}/>
        <KnowUs knowUsDatas={knowUsData}/>
      </article> 
    )
  }
}

export default Content