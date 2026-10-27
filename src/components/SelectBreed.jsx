function SelectBreed({ listDog, errorBreed, selectedBreed, setSelectedBreed }) {
  return (
    <>
      {errorBreed && <p style={{ color: 'red' }}>Ошибка загрузки пород: {errorBreed}</p>}
      <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
        <option value="">Все породы (случайные)</option>
        {listDog.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </>
  )
}

export default SelectBreed