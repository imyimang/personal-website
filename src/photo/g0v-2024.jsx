import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const GZeroV24 = () => {
    const photos = [
        '/photo/g0v-2024/g0v.webp',
        '/photo/g0v-2024/g0v2.webp',
        '/photo/g0v-2024/g0v4.webp',
        '/photo/g0v-2024/g0v5.webp',
        '/photo/g0v-2024/g0v3.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="g0v Summit 2024" />
        </>
    );
};

export default GZeroV24;
