import React, { PropTypes } from 'react'
import string from '../../utils/string'
import moment from 'moment'
import radium from 'radium'

const App = (props) => {
  const planetUrls = {
    moon: require('../../img/moon.png'),
    sun: require('../../img/sun.png'),
    mercury: require('../../img/mercury.png'),
    venus: require('../../img/venus.png'),
    mars: require('../../img/mars.png'),
    uranus: require('../../img/uranus.png'),
    saturn: require('../../img/saturn.png'),
    jupiter: require('../../img/mercury.png'),
    neptune: require('../../img/neptune.png'),
    chiron: require('../../img/neptune.png')
  }
  const { data } = props
  window.console.log(data)
  let multi = false
  let multiPlanets = {}
  if(data.planet.indexOf(',')!=-1) {
    multiPlanets = data.planet.split(',')
    multi = true
  }
  const degreeDisplay = (<span>at {data.degree}&deg;</span>)
  if(multi) {
    return (
      <div style={{backgroundColor: '#27292d', height: 250, margin: 20, padding: 10, borderRadius: 5, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}} key={data.id}>
        <span style={{display: 'flex', position: 'relative', justifyContent: 'center'}}><img height="100" width="100" src={planetUrls[multiPlanets[0]]}/><img style={{position: 'absolute', left: 70}} height="100" width="100" src={planetUrls[multiPlanets[1]]}/></span>
        <span>{string.capitalize(multiPlanets[0])} and {string.capitalize(multiPlanets[1])}</span>
        <span>{string.capitalize(data.type)} in {string.capitalize(data.sign)}</span>
        <span>{data.degree && degreeDisplay}</span>
        <span>{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: '#27292d', height: 250, margin: 20, padding: 10, borderRadius: 5, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} key={data.id}>
        <span><img height="100" width="100" src={planetUrls[data.planet]}/></span>
        <span>{string.capitalize(data.planet)}</span>
        <span>{string.capitalize(data.type)} in {string.capitalize(data.sign)}</span>
        <span>{data.degree && degreeDisplay}</span>
        <span>{moment(data.date).format('MMMM Do YYYY, h:mm:ss a')}</span>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object
}

export default radium(App)
