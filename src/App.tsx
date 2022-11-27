import "./App.css";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorPage from "./components/ErrorPage";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import { ImgData } from "./components/Image";
import ImageDetail from "./components/ImageDetail";
import ImageList from "./components/ImageList";

function App() {
  // https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json
  const [imgData, setImgData] = useState<ImgData[]>([]);
  const [favoritesData, setFavoritesData] = useState<ImgData[]>([]);

  // componentDidMount
  useEffect(() => {
    // step 2
    // fetch(
    //   "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     setImgData(data);
    //   });

    const localState = localStorage.getItem("local_state");

    if (localState) {
      const localStateParsed: ImgData[] = JSON.parse(localState);

      setImgData(localStateParsed);
    } else {
      fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then(res => res.json())
        .then(data => {
          setImgData(data);
        });
    }
  }, []);

  // every time we change imgData array - that means a favorite is toggled inside
  // save that favorite in favoritesData array
  useEffect(() => {
    setFavoritesData(imgData.filter(el => el.isFavorite));
  }, [imgData]);

  // every time we change favorites array - save the new favorites in localStorage
  useEffect(() => {
    if (favoritesData.length > 0) {
      // console.log("item added in favorites");
      localStorage.setItem("local_state", JSON.stringify(imgData));
    } else {
      localStorage.removeItem("local_state");
    }
  }, [imgData, favoritesData.length]);

  const handleFavorite = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => {
    e.preventDefault();
    // console.log("hello from ImageList, you clicked on ID", id);

    setImgData(imgData.map(el => (el.id === id ? { ...el, isFavorite: !el.isFavorite } : el)));
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={<ImageList img_data={imgData} handleFavorite={handleFavorite} />}
          />
          <Route path="/favorites" element={<Favorites favoritesData={favoritesData} />} />
          <Route path="/imageDetail/:id" element={<ImageDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
