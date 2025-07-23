import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const HackaThon = () => {
    const photos = [
        '/photo/sitcon-hackathon-2024/img.webp',
        '/photo/sitcon-hackathon-2024/img2.webp',
        '/photo/sitcon-hackathon-2024/img3.webp',
        '/photo/sitcon-hackathon-2024/img4.webp',
        '/photo/sitcon-hackathon-2024/img5.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="SITCON Hackathon 2024" />
        </>
    );
};

export default HackaThon;
