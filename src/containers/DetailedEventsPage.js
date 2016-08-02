import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/astroEventsActions'
import AstroCard from '../components/AstroCard/featured'

class AstroEventsPage extends Component {
  constructor(props) {
    super(props)
    this.getEvent = this.getEvent.bind(this)
    this.findEvent = this.findEvent.bind(this)
    this.eventId = props.params.id
  }

  componentDidMount() {
    this.props.actions.getEvents()
  }
  findEvent(event) {
    return event.id === +this.eventId
  }
  getEvent(){
    const { astroEvents } = this.props
    const event = astroEvents.events.filter(this.findEvent)[0]
    return (
      <AstroCard data={event} />
    )
  }

  render() {
    return (
      <div>{this.getEvent()}</div>
    )
  }
}

AstroEventsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  astroEvents: PropTypes.object.isRequired,
  params: PropTypes.object
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
