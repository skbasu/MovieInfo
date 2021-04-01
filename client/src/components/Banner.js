import React, { useEffect, useState } from 'react';
import endpoints from '../endpoints';
import api from '../api';
import './Banner.css';

function Banner() {

    const [bannerMovie, setbannerMovie] = useState([]);

    useEffect(() => {
        const fetchBannerMovie = async () => {
            const request = await api.get(endpoints.fetchBanner);
            setbannerMovie(
                request.data[
                    Math.floor(Math.random() * request.data.length)
                ]
            )
            return request;
        }
        fetchBannerMovie();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(${bannerMovie?.imgUrl})`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {bannerMovie?.title}
                </h1>
                <h4 className='banner_view'>{bannerMovie?.viewAt}</h4>

                <h2 className='banner_description'>
                    {truncate(bannerMovie?.description, 150)}
                </h2>
            </div>

            <div className='banner_fadeBottom' />
        </header>
    );
}

export default Banner;
