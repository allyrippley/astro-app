import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/astroEventsActions'
import AstroCard from '../components/AstroCard'

class AstroEventsPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.getEvents()
    String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1)
    }
  }
  renderEvents() {
    const { astroEvents } = this.props
    const eventDivs = astroEvents.events.map((r, i)=>{
      window.console.log(r.date)
      window.console.log(Date.now())
      if(new Date(r.date) < Date.now()) { return null }
      return (<AstroCard key={i} data={r} />)
    })
    return (<div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>{eventDivs}</div>)
  }
  render() {
    return (
      <div>{this.renderEvents()}</div>
    )
  }
}

AstroEventsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  astroEvents: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    astroEvents: state.astroEvents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AstroEventsPage)
