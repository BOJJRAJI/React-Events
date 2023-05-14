import {Component} from 'react'
import './index.css'

const lists = {
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  registered: 'REGISTERED',
  notRegistered: 'YET_TO_REGISTER',
}

class ActiveEventRegistrationDetails extends Component {
  renderRegistrationStatus = () => {
    const {activeRegistration} = this.props
    console.log(this.props)
    console.log(activeRegistration)
    switch (activeRegistration) {
      case lists.registrationsClosed:
        return this.renderRegistrationsClosed()
      case lists.registered:
        return this.renderRegistered()
      case lists.notRegistered:
        return this.renderNotRegistered()
      default:
        return this.renderNoActivity()
    }
  }

  renderNoActivity = () => (
    <div className="no-activity">
      <p className="no-activity-para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="status-container">
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="closed-image"
        />
        <h1 className="closed-heading">Registrations Are Closed Now!</h1>
        <p className="closed-para">Stay tuned. We will reopen</p>
      </div>
    </div>
  )

  renderRegistered = () => (
    <div className="status-container">
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-image"
        />
        <h1 className="registered-heading">
          You have already registered for the event
        </h1>
      </div>
    </div>
  )

  renderNotRegistered = () => (
    <div className="status-container">
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="not-registered-image"
        />
        <p className="not-registered-para">
          A live performance brings so much to your relationship with dance
        </p>
        <button className="register-button" type="button">
          Register Here
        </button>
      </div>
    </div>
  )

  render() {
    return <>{this.renderRegistrationStatus()}</>
  }
}
export default ActiveEventRegistrationDetails
