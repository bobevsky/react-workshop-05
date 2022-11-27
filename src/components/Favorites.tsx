import React from "react";

import { ImgData } from "./Image";

interface Props {
  favoritesData: ImgData[];
}

const Favorites: React.FC<Props> = ({ favoritesData }) => {
  return (
    <div className="Favorites">
      {favoritesData.length > 0 ? (
        favoritesData.map(f => <img src={f.url} alt="img" key={f.id} />)
      ) : (
        <p>Currently there are no favorites.</p>
      )}
    </div>
  );
};

export default Favorites;
