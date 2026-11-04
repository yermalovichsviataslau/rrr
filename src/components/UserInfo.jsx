import { memo } from "react"

function UserInfo({user}) {
  console.log('UserInfo')
  return (
    <>
      <p>name: {user.name}</p>
      <p>age: {user.age}</p>
      <p>isActive: {String(user.isActive)}</p>
    </>
  )
}

export default memo(UserInfo)
