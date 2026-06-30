export const ImagesGrid = ({ urls, isLoading, error }) => {
  if (isLoading) {
    return <div className="loading">Загрузка картинок...</div>;
  }

  if (error) {
    return (
      <div className="error-message" style={{ color: "red" }}>
        {error}
      </div>
    );
  }

  if (urls.length === 0) {
    return <p>Нет картинок для отображения. Нажмите кнопку "Обновить"</p>;
  }

  return (
    <div
      className="gallery-grid"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "20px",
      }}
    >
      {urls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Собака ${index + 1}`}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        />
      ))}
    </div>
  );
};
