import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import sala from '../../images/sala.jpg';
import sala1 from '../../images/sala1.jpg';
import sala2 from '../../images/sala2.jpg';
import sala3 from '../../images/sala3.jpg';
import sala4 from '../../images/sala4.jpg';
import sala5 from '../../images/sala5.jpg';
import sala6 from '../../images/sala6.jpg';
import sala7 from '../../images/sala7.jpg';

const GaleriaSali = () => {

    const images = [
    {
        original: sala1,
        thumbnail: sala1
    },
    {
        original: sala2,
        thumbnail: sala2
    },
    {
        original: sala3,
        thumbnail: sala3
    },
    {
        original: sala4,
        thumbnail: sala4
    },
    {
        original: sala5,
        thumbnail: sala5
    },
    {
        original: sala6,
        thumbnail: sala6
    },
    {
        original: sala7,
        thumbnail: sala7
    }
]

    return (
        <>
            <ImageGallery items={images} />
        </>
    )
}

export default GaleriaSali