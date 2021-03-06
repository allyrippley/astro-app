import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/astroEventsActions'

// import AstroEventsForm from '../components/AstroEventsForm'

class AstroEventsPage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.actions.getEvents()
  }
  renderEvents() {
    const { astroEvents } = this.props
    const eventDivs = astroEvents.events.map((r, i)=>{
      return (<div key={i} id={i} />)
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
