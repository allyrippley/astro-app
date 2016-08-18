import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import styles from './styles'
import radium from 'radium'
import moment from 'moment'
import { connect } from 'react-redux'
import Fa from 'react-fontawesome'
class App extends React.Component {
  constructor(props){
    super(props)
    this.time = `${moment(Date.now()).format('h:mm a')}   `
    this.date = moment(Date.now()).format('MMMM Do YYYY')
  }
  componentDidMount(){
    setTimeout(function() {
      document.getElementById('logo').style.transition = 'width 3s ease-in-out, left 3s'
      document.getElementById('logo').style.width = '120px'
      document.getElementById('logo').style.left = '0'
    }, 1500)
    setInterval(() => {this.time += 1}, 1000)
  }
  toggleSidebar() {

  }
  render() {
    return (
      <div className="root" style={[styles.root, {backgroundColor: '#212326'}]}>
        <div style={styles.toolbar}>
          <span style={{fontWeight: 'lighter', paddingTop: 30, maxWidth: 100}}>{this.time.substr(0,8)}</span>
          <div style={styles.linkHolder}>
            <IndexLink to="/"><span style={styles.link}>Home</span></IndexLink>
          </div>
          <div style={styles.linkHolder}>
            <Link to="/astro-events"><span style={styles.link}>Event List</span></Link>
          </div>
          <div style={styles.linkHolder}>
            <Link to="/about"><span style={styles.link}>About</span></Link>
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.logoHolder}>
            <Fa name="bars" style={{display: 'none'}} />
            <Link to="/">
              <div id="logo" style={{position: 'relative', width: '40%', maxWidth: '300px', left: '10%', paddingTop: 10}}>
                <img style={{width: '100%', height: 'auto'}} src={require('../img/logo.png')} />
              </div>
            </Link>
          </div>
          <div style={styles.view}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}

function mapStateToProps(state) {
  return {
    showSidebar: state.showSidebar
  }
}

export default connect(mapStateToProps)(radium(App))
