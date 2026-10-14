function StatusBadge({isAvailable}){
  return (
      <p>IsAvailable: {isAvailable ? 'Доступен для проекта' : 'Не Доступен для проекта'}</p>
  )
}

export default StatusBadge