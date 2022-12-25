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
      "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1646234575562-39e32617-a344-4c70-a39a-713c04197277.jpeg",
  },

  {
    id: 2,
    image:
      "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1651992920320-6084da33-883f-4fba-886c-91e358a46625.jpeg",
  },

  {
    id: 3,
    image:
      "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645359885952-f9c6672e-2234-4c01-a873-bf0f1c0ff7ff.jpeg",
  },
  {
    id: 4,
    image:
      "https://cdn3.mydukaan.io/app/image/420x420/?url=https://dukaan-us.s3.amazonaws.com/5885408/21b71ee3-2baa-4293-8e8b-33140c85b024/1645359885952-f9c6672e-2234-4c01-a873-bf0f1c0ff7ff.jpeg",
  },
];

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos className="ArrowBackIos"
      />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos className="ArrowForwardIos"
      />
    </div>
  );
};

const UserCarousels = () => {
  const [images, setImages] = useState(data);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //   autoplay: true,
    autoplaySpeed: 2000,
    responsive:[
        {
            breakpoint:600,
            settings:{
                slidesToShow:1
            }
        },
         {
            breakpoint:992,
            settings:{
                slidesToShow:1.3
            }
        },

        {
            breakpoint:1245,
            settings:{
                slidesToShow:1.5
            }
        },
        
         {
            breakpoint:1400,
            settings:{
                slidesToShow:3
            }
        },
    ]
  };
  return (
    <>
      <div className="carousels-div">
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          {...settings}
        >
          {images.map((cur) => {
            const { id } = cur;

            return (
              <>
                <div key={id}>
                  <img className="slider-img"
                    src={cur.image}
                    alt={id}
                    style={{
                      width: "25.5rem",
                      height: "160px",
                      borderRadius: "15px",
                    }}
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
