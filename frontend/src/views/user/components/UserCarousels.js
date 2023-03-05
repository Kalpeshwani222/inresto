import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./UserCarousels.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const data = [
  {
    id: 1,
    image:
      "https://cdn3.mydukaan.io/app/image/600x600/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/689de402-c848-4896-871f-120ba88def3d/image.png",
  },

  {
    id: 2,
    image:
      "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1651992920320-6084da33-883f-4fba-886c-91e358a46625.jpeg",
  },

  // {
  //   id: 3,
  //   image:
  //     "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645359885952-f9c6672e-2234-4c01-a873-bf0f1c0ff7ff.jpeg",
  // },
  {
    id: 4,
    image:
      "https://cdn3.mydukaan.io/app/image/600x600/?url=https://dukaan-us.s3.amazonaws.com/730950/570a0a01-8039-4174-b518-9bf54edfe5fb/image-38aa007c-d468-4d67-9b5f-e50075e0649d.png",
  },
  {
    id: 5,
    image:
      "https://cdn3.mydukaan.io/app/image/600x600/?url=https://dukaan-core-file-service.s3.ap-southeast-1.amazonaws.com/upload_file_service/f51ef6b8-bb05-4409-b12a-7dafdf942cc6/image.png",
  },
  
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="ArrowBackIos" />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="ArrowForwardIos" />
    </div>
  );
};

const UserCarousels = () => {
  const [images, setImages] = useState(data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },

      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 943,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
      <div
        className="carousels-div" >
        <Slider
          // prevArrow={<PreviousBtn />}
          // nextArrow={<NextBtn />}
          {...settings}
        >
          {images.map((cur) => {
            const { id } = cur;

            return (
              <>
                <div
                  key={id}
                  style={{
                    margin: "0",
                    maxHeight: "180px",
                  }}
                >
                  <img
                    className="slider-img"
                    src={cur.image}
                    alt="sliderimages"
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default UserCarousels;
