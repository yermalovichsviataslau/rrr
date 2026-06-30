export const BreedSelect = ({
  countInput,
  countUpdate,
  isLoading,
  breedsList,
  selectedBreed,
  onChangeBreed,
  onChangeCount,
  onUpdate,
}) => {
  return (
    <div className="controls-panel">
      <p>
        Картинки обновлены: <strong>{countUpdate}</strong> раз(а)
      </p>

      <div className="control-group">
        <label htmlFor="breedDog-select">Выберите породу: </label>
        <select
          id="breedDog-select"
          onChange={(e) => onChangeBreed(e.target.value)}
          value={selectedBreed}
        >
          <option value="">-- Все породы --</option>
          {breedsList.map((breedName) => (
            <option key={breedName} value={breedName}>
              {breedName}
            </option>
          ))}
        </select>
      </div>

      <div className="control-group">
        <label>
          Показать собак:
          <input
            type="number"
            value={countInput}
            onChange={(e) => onChangeCount(e.target.value)}
          />
        </label>
        <button onClick={onUpdate} disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Обновить"}
        </button>
      </div>
    </div>
  );
};
