function Object({ user }) {
  return (
    <div>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
}

export default Object