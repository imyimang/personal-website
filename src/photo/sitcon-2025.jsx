import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const SITCON25 = () => {
    const photos = [
        '/photo/sitcon-2025/img.webp',
        '/photo/sitcon-2025/img2.webp',
        '/photo/sitcon-2025/img3.webp',
        '/photo/sitcon-2025/img4.webp',
        '/photo/sitcon-2025/img5.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="SITCON 2025" />
        </>
    );
};

export default SITCON25;