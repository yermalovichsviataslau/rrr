import StatusBadge from "./StatusBadge"

function UserCard({name, role, experience, location, isAvailable, style}) {
  return (
    <div style={style}>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Experience: {experience}</p>
      <p>Location: city - {location.city}, country - {location.country}</p>
      <StatusBadge isAvailable={isAvailable}/>
    </div>
  )
}

export default UserCard
