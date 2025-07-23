import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const COMPUTEX25 = () => {
    const photos = [
        '/photo/computex-2025/img.webp',
        '/photo/computex-2025/img2.webp',
        '/photo/computex-2025/img3.webp',
        '/photo/computex-2025/img4.webp',
        '/photo/computex-2025/img5.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="COMPUTEX 2025" />
        </>
    );
};

export default COMPUTEX25;