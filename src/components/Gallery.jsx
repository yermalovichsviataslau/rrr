import { useEffect, useState } from "react";
import { BreedSelect } from "./BreedSelect";
import { ImagesGrid } from "./ImageGrid";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://dog.ceo/api/";

function Gallery() {
  const [images, setImages] = useState({
    count: 3,
    urls: [],
    countUpdate: 0,
    isLoading: false,
    error: "",
  });

  const [breed, setBreed] = useState({
    breedList: [],
    select: "",
    error: "",
  });

  const [countInput, setCountInput] = useState(3);

  const loadImages = async (currentBreed, currentCount) => {
    setImages((prev) => ({ ...prev, isLoading: true, error: "" }));
    try {
      let url;
      if (currentBreed) {
        url = `${API_BASE_URL}breed/${currentBreed}/images/random/${currentCount}`;
      } else {
        url = `${API_BASE_URL}breeds/image/random/${currentCount}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Ошибка сервера: ${response.status}`);

      const data = await response.json();
      if (data.status === "error")
        throw new Error(data.message || "Ошибка API");

      setImages((prev) => ({
        ...prev,
        urls: Array.isArray(data.message) ? data.message : [data.message],
        isLoading: false,
      }));
    } catch (error) {
      console.error("Ошибка загрузки:", error.message);
      setImages((prev) => ({
        ...prev,
        urls: [],
        error: error.message,
        isLoading: false,
      }));
    }
  };

  const getBreedDogObj = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}breeds/list/all`);

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }
      const dateObj = await response.json();

      if (dateObj.status === "error") {
        throw new Error(dateObj.message || "Ошибка API");
      }

      const date = Object.keys(dateObj.message);

      setBreed((prev) => ({
        ...prev,
        breedList: date,
        error: "",
      }));
      return true;
    } catch (error) {
      console.error(error);
      setBreed((prev) => ({
        ...prev,
        error: error.message,
        breedList: [],
      }));
    }
  };

  const handleUpdate = async () => {
    if (!countInput) {
      alert("Укажите корректное количество картинок");
      return;
    }

    setImages((prev) => ({
      ...prev,
      count: countInput,
      countUpdate: prev.countUpdate + 1,
    }));

    loadImages(breed.select, countInput);
  };

  const handleBreedChange = (selectedBreed) => {
    setBreed((prev) => ({ ...prev, select: selectedBreed }));
    loadImages(selectedBreed, countInput);
  };

  const handleChangeCount = (value) => {
    if (value === "") {
      setCountInput("");
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

    setCountInput(num);
  };

  useEffect(() => {
    getBreedDogObj();
    loadImages(breed.select, images.count);
  }, []);

  return (
    <div className="gallery-contener">
      {breed.error && (
        <p style={{ color: "red" }}>Ошибка пород: {breed.error}</p>
      )}
      <BreedSelect
        countInput={countInput}
        countUpdate={images.countUpdate}
        isLoading={images.isLoading}
        breedsList={breed.breedList}
        selectedBreed={breed.select}
        onChangeBreed={handleBreedChange}
        onChangeCount={handleChangeCount}
        onUpdate={handleUpdate}
      />

      <ImagesGrid
        urls={images.urls}
        isLoading={images.isLoading}
        error={images.error}
      />
    </div>
  );
}

export default Gallery;
