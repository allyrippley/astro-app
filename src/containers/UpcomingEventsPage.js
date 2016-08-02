import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/astroEventsActions'
import AstroCard from '../components/AstroCard'

class AstroEventsPage extends Component {
  constructor(props) {
    super(props)
    this.organizeEvents = this.organizeEvents.bind(this)
  }

  componentDidMount() {
    this.props.actions.getEvents()
  }
  organizeEvents(){
    const { astroEvents } = this.props
    window.console.log(astroEvents)
    const now = new Date()
    const oneDay = new Date(now)
    oneDay.setDate(oneDay.getDate() + 1)
    const oneWeek = new Date(now)
    oneWeek.setDate(oneWeek.getDate() + 7)
    const twoWeeks = new Date(now)
    twoWeeks.setDate(twoWeeks.getDate() + 14)
    this.todaysEventsGlobal = []
    this.oneWeekEventsGlobal = []
    this.twoWeeksEventsGlobal = []
    astroEvents.events.map((r)=>{
      const newDate = new Date(r.date)
      if(newDate > now) {
          if(newDate < oneDay) {
          this.todaysEventsGlobal.push(r)
        } else if(newDate < oneWeek) {
          this.oneWeekEventsGlobal.push(r)
        } else if(newDate < twoWeeks) {
          this.twoWeeksEventsGlobal.push(r)
        }
      }
      // window.console.log('UpcomingEventsPage: todaysEventsGlobal:',this.todaysEventsGlobal)
      // window.console.log('UpcomingEventsPage: oneWeekEventsGlobal:',this.oneWeekEventsGlobal)
      // window.console.log('UpcomingEventsPage: twoWeeksEventsGlobal:',this.twoWeeksEventsGlobal)
    })
  }
  renderEvents() {
    this.organizeEvents()
    let todaysEventsToggle = false
    let todaysEventsComp
    let oneWeekEventsToggle = false
    let oneWeekEventsComp
    let twoWeeksEventsToggle = false
    let twoWeeksEventComp
    if (this.todaysEventsGlobal.length > 0) {
      todaysEventsToggle = true
      const todaysEventsDivs = this.todaysEventsGlobal.map((r, i)=>{
        return (<AstroCard key={i} data={r} />)
      })
      todaysEventsComp = (
        <div style={{display: 'flex', flexDirection: 'column', fontSize: '3vw'}}>
          Within the 24 hours:
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', fontSize: 'initial'}}>
            {todaysEventsDivs}
          </div>
        </div>
      )
    }
    if (this.oneWeekEventsGlobal.length > 0) {
      oneWeekEventsToggle = true
      const oneWeekEventsDivs = this.oneWeekEventsGlobal.map((r, i)=>{
        return (<AstroCard key={i} data={r} />)
      })
      oneWeekEventsComp = (
        <div style={{display: 'flex', flexDirection: 'column', fontSize: '3vw'}}>
          Within the next week:
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', fontSize: 'initial'}}>
            {oneWeekEventsDivs}
          </div>
        </div>
      )
    }
    if (this.twoWeeksEventsGlobal.length > 0) {
      twoWeeksEventsToggle = true
      const twoWeeksEventsDivs = this.twoWeeksEventsGlobal.map((r, i)=>{
        return (<AstroCard key={i} data={r} />)
      })
      twoWeeksEventComp = (
        <div style={{display: 'flex', flexDirection: 'column', fontSize: '3vw', backgroundColor: 'rgba(255,255,255,.1)', borderRadius: 10}}>
          Within the next two weeks:
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', fontSize: 'initial'}}>
            {twoWeeksEventsDivs}
          </div>
        </div>
      )
    }
    // const eventDivs = this.twoWeeksEventsGlobal.map((r, i)=>{
    //   return (<AstroCard key={i} data={r} />)
    // })
    return (
      <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
        {todaysEventsToggle && todaysEventsComp}
        {oneWeekEventsToggle && oneWeekEventsComp}
        {twoWeeksEventsToggle && twoWeeksEventComp}
      </div>)
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
