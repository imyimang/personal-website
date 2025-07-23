import React from 'react';
import HomeIcon from '../Homeicon';
import LazyPhotoGallery from '../components/LazyPhotoGallery';

const CyberSec25 = () => {
    const photos = [
        '/photo/cybersec-2025/img.webp',
        '/photo/cybersec-2025/img2.webp',
        '/photo/cybersec-2025/img3.webp',
        '/photo/cybersec-2025/img4.webp',
        '/photo/cybersec-2025/img5.webp',
    ];

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <HomeIcon />
            <LazyPhotoGallery photos={photos} title="CYBERSEC 臺灣資安大會 2025" />
        </>
    );
};

export default CyberSec25;