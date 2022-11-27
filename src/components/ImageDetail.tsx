import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { ImgData } from "./Image";

const ImageDetail: React.FC = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState<ImgData | undefined | null>(null);

  useEffect(() => {
    if (id) {
      fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then(res => res.json())
        .then(data => {
          // example 1
          // const imgData: ImgData[] = data;
          // const foundCurrentImage = imgData.find(el => el.id === id);

          // example 2
          const foundCurrentImage = (data as ImgData[]).find(el => el.id === id);
          // console.log(foundCurrentImage);
          setCurrentImage(foundCurrentImage);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  // if there is no image with that id -> redirect to Error Page
  if (currentImage === undefined) {
    // console.log(currentImage);
    // return <ErrorPage />;

    return <Navigate to="/404" />;
  }

  return (
    <div className="ImageDetail">
      <img src={currentImage?.url} alt="img" />
    </div>
  );
};

export default ImageDetail;
