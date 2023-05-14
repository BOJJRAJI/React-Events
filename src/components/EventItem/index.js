import './index.css'

const EventItem = props => {
  const {eventDetails, getRegistrationStatus, isActive} = props
  const {imageUrl, id, name, location} = eventDetails

  const ActiveEventClassName = isActive ? 'active-event-image' : 'event-image'

  function clickImage() {
    getRegistrationStatus(id)
  }

  return (
    <li className="event">
      <button className="event-button" type="button" onClick={clickImage}>
        <img src={imageUrl} alt="event" className={ActiveEventClassName} />
      </button>

      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
