import React from "react";

import Image, { ImgData } from "./Image";

interface Props {
  img_data: ImgData[];
  handleFavorite: (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string) => void;
}

const ImageList: React.FC<Props> = ({ img_data, handleFavorite }) => {
  return (
    <div className="Imagelist">
      {img_data.map(i => (
        <Image key={i.id} img_data={i} handleFavorite={handleFavorite} />
      ))}
    </div>
  );
};

export default ImageList;
