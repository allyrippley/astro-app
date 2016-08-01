import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/astroEventsActions'
import moment from 'moment'
// import AstroEventsForm from '../components/AstroEventsForm'

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
      return (<div key={i}>{r.type.capitalize()} {r.planet.capitalize()} in {r.sign.capitalize()} at {r.degree} {moment(r.date).format('MMMM Do YYYY, h:mm:ss a')} </div>)
    })
    return (<div>{eventDivs}</div>)
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
