import React from "react";
import { Link } from "react-router-dom";

export interface ImgData {
  url: string;
  id: string;
  isFavorite: boolean;
}

interface Props {
  img_data: ImgData;
  handleFavorite: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
}

const Image: React.FC<Props> = ({ img_data, handleFavorite }) => {
  return (
    <Link to={`/imageDetail/${img_data.id}`} className="Image">
      <img src={img_data.url} alt="img" />

      {/* fas - favorite */}
      {/* far - non-favorite */}
      <i
        onClick={e => handleFavorite(e, img_data.id)}
        className={`${img_data.isFavorite ? "fas" : "far"} fa-heart fa-3x`}
      />
    </Link>
  );
};

export default Image;
