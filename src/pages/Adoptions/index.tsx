import React from "react";

import Slider from "react-slick";

import "./styles.css";

// interface Pet {
//   id: number;
//   picture: string;
//   size: "P" | "M" | "G";
//   gender: "M" | "F";
//   description: string;
//   phone: string;
// }

export function Adoptions() {
  //   const [pets] = useState<Pet[]>([
  //     {
  //       id: 1,
  //       picture:
  //         "https://cdn.vox-cdn.com/thumbor/AxNHTlzoZsjZiGwESCxP15ut7Zg=/0x0:832x325/920x0/filters:focal(0x0:832x325):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10479969/Spots.png",
  //       gender: "M",
  //       size: "G",
  //       description: "Um cachorro do caralho",
  //       phone: "(61) 9 8362-0836",
  //     },
  //     {
  //       id: 2,
  //       picture:
  //         "https://cdn.vox-cdn.com/thumbor/AxNHTlzoZsjZiGwESCxP15ut7Zg=/0x0:832x325/920x0/filters:focal(0x0:832x325):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10479969/Spots.png",
  //       gender: "F",
  //       size: "G",
  //       description: "Uma cadela do caralho",
  //       phone: "(61) 9 8362-0836",
  //     },
  //     {
  //       id: 3,
  //       picture:
  //         "https://cdn.vox-cdn.com/thumbor/AxNHTlzoZsjZiGwESCxP15ut7Zg=/0x0:832x325/920x0/filters:focal(0x0:832x325):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10479969/Spots.png",
  //       gender: "M",
  //       size: "G",
  //       description: "Um cachorro do caralho",
  //       phone: "(61) 9 8362-0836",
  //     },
  //     {
  //       id: 4,
  //       picture:
  //         "https://cdn.vox-cdn.com/thumbor/AxNHTlzoZsjZiGwESCxP15ut7Zg=/0x0:832x325/920x0/filters:focal(0x0:832x325):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10479969/Spots.png",
  //       gender: "F",
  //       size: "G",
  //       description: "Um cadela do caralho",
  //       phone: "(61) 9 8362-0836",
  //     },
  //     {
  //       id: 5,
  //       picture:
  //         "https://cdn.vox-cdn.com/thumbor/AxNHTlzoZsjZiGwESCxP15ut7Zg=/0x0:832x325/920x0/filters:focal(0x0:832x325):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10479969/Spots.png",
  //       gender: "M",
  //       size: "G",
  //       description: "Um cachorro do caralho",
  //       phone: "(61) 9 8362-0836",
  //     },
  //   ]);

  const sliderSettings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 992,
    //     settings: {
    //       arrows: false,
    //       infinite: false,
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       infinite: false,
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="adoptions-container">
      <div className="carousel-container">
        <h1>PETS DISPONÍVEIS</h1>
        <Slider {...sliderSettings} className="col-12">
          <h1>ahahahhahaha</h1>
          <h1>ahahahhahaha</h1>
          <h1>ahahahhahaha</h1>
          <h1>ahahahhahaha</h1>
        </Slider>
      </div>
    </div>
  );
}
