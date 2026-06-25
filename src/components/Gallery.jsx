import {  useEffect, useState } from "react";

function Gallery() {
  const [count, setCount] = useState(3);
  const [imgUrl, setImgUrl] = useState([]);
  const [imgCountUpdate, setImgCountUpdate] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorImg, setErrorImg] = useState("");
  const [breedDog, setBreedDog] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [errorBreed, setErrorBreed] = useState("");

  const loadImages = async () => {
    try {
      setIsLoading(true);
      setErrorImg("");

      let url;
      if(selectedBreed){
        url = `https://dog.ceo/api/breed/${selectedBreed}/images/random/${count}`
      } else {
        url = `https://dog.ceo/api/breeds/image/random/${count}`
      }

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "error") {
        throw new Error(data.message || "Ошибка API");
      }

      setImgUrl(data.message);
      setIsLoading(false);
      return true;
    } catch (error) {
      console.log("Ошибка загрузки:", error.message);
      setErrorImg(error.message);
      setImgUrl([]);
      setIsLoading(false);
      return false;
    }
  };

  const getBreedDogObj = async () => {
    try {
      setErrorBreed('')
      const response = await fetch("https://dog.ceo/api/breeds/list/all");

      if(!response.ok){
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      const dateObj = await response.json()

      if(dateObj.status === 'error'){
        throw new Error(dateObj.message || "Ошибка API");
      }

      const date = Object.keys(dateObj.message)

      setErrorBreed('')
      setBreedDog(date)
      return true 
    } catch (error) {
      console.log(error);
      setErrorBreed(error.message)
      setBreedDog([])
      return false
    }
  };

  const handleUpdate = async () => {
    const success = await loadImages();
    if (success) {
      setImgCountUpdate((prev) => prev + 1);
    } else {
      alert(`Не удалось загрузить картинки: ${errorImg}`);
    }
  };

  const handleChangeCount = (event) => {
    const value = event.target.value;

    if (value === "") {
      setCount("");
      return;
    }

    const num = Number(value);

    if (isNaN(num)) {
      alert("Пожалуйста, введите число");
      return;
    }

    if (num < 1 || num > 50) {
      alert("нужно ввести больше 1 или меньше 50");
      return;
    }

    setCount(num);
  };

  useEffect(() => {
    getBreedDogObj();
    loadImages();
  }, []);

  useEffect(()=>{
    loadImages();
  }, [selectedBreed])

  return (
    <div className="">
      <h1>Галерея собак</h1>
      <p>Картинки обнновлены {imgCountUpdate} раз(а)</p>

      {errorImg && <p style={{ color: "red" }}>{errorImg}</p>}
      {errorBreed&& <p style={{color: 'red'}}>{errorBreed}</p>}
      

      <label htmlFor="breedDog-select">Выберете породу: </label>
      <select name="breedDog" id="breedDog-select"  onChange={(e)=>{setSelectedBreed(e.target.value)}} value={selectedBreed}>
        <option value="">-- Выберите породу --</option>
        {breedDog.map((breedName)=>(
          <option key={breedName} value={breedName}>{breedName}</option>
        ))}
      </select>


      <div className="">
        <label htmlFor="">
          Показать
          <input type="number" value={count} onChange={handleChangeCount} />
        </label>
        <button onClick={handleUpdate}>
          {isLoading ? "Загрузка..." : "Обновить"}
        </button>
      </div>

      <div
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {imgUrl.length === 0 && !isLoading && !errorImg && (
          <p>Нет картинок для отображения</p>
        )}
        {imgUrl.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Собака ${index + 1}`}
            style={{ width: "150px", height: "150px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
