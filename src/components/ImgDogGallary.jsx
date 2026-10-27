function ImgDogGallary ({loading, style, arrImg, errorImg} ){
  return (
    <>
    {errorImg && <p style={{ color: 'red' }}>Ошибка: {errorImg}</p>}
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <ul style={style}>
          {arrImg.map((url, index) => (
            <li key={index}>
              <img
                src={url}
                alt="dog"
                style={{ width: '200px', height: '200px', margin: '5px' }}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default ImgDogGallary