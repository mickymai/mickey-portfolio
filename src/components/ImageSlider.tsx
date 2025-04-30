'use client'
import React from "react";
import Slider from "react-slick";

type Props = {
    images: Array<string>
}

const ImageSlider = ({ images }: Props) => {
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <>
            <Slider {...settings}>
                {images.map(item => {
                    return (
                        <img src={item} alt='' />
                    )
                })}
            </Slider>
        </>
    )
}

export default ImageSlider
