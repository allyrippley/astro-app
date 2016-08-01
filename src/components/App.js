import React, { Component, PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './styles'
import radium from 'radium'

class App extends Component{
  constructor(props){
    super(props)
  }
  componentDidMount(){
    setTimeout(function() {
      document.getElementById('logo').style.transition = 'width 3s ease-in-out, left 3s'
      document.getElementById('logo').style.width = '50px'
      document.getElementById('logo').style.left = '10px'
    }, 5000)
  }
  render() {
    return (
      <div style={[styles.container, {backgroundColor: '#212326'}]}>
        <div>
          <img id="logo" style={{left: '30%', width: '40%', height: 'auto'}} src={require('../img/logo.png')} />
        </div>
        {this.props.children}
        <div style={styles.toolbar}>
          <IndexLink to="/"><span style={styles.link}>Home</span></IndexLink>
          {' | '}
          <Link to="/astro-events"><span style={styles.link}>Event List</span></Link>
          {' | '}
          <Link to="/about"><span style={styles.link}>About</span></Link>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

export default radium(App)
