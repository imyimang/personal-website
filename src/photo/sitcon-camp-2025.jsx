import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const SITCONCAMP25 = () => {
    const photos = [
        '/photo/sitcon-camp-2025/img.webp',
        '/photo/sitcon-camp-2025/img2.webp',
        '/photo/sitcon-camp-2025/img3.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="SITCON Camp 2025" />
        </>
    );
};

export default SITCONCAMP25;