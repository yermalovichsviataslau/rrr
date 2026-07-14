import { memo } from "react"

const UserInfo = ({user}) =>{
  
  return(
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>isActive: {user.isActive ? 'true' : 'false'}</p>
    </div>
  )
}

export default memo(UserInfo, (prevState, nextState)=>{
  return prevState.user !== nextState.user
})