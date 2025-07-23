import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const CyberSec24 = () => {
    const photos = [
        '/photo/cybersec-2024/img.webp',
        '/photo/cybersec-2024/img2.webp',
        '/photo/cybersec-2024/img3.webp',
        '/photo/cybersec-2024/img4.webp',
        '/photo/cybersec-2024/img5.webp',
        '/photo/cybersec-2024/img6.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="CYBERSEC 臺灣資安大會 2024" />
        </>
    );
};

export default CyberSec24;