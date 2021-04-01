import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './MovieRow.css';

function Series({ fetchUrl }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const request = await api.get(fetchUrl);
            setMovies(request.data);
            return request;
        }
        getMovies();
    }, [fetchUrl]);

    return (
        <div className='trending_section'>
            <div className='row_head'>
                <h2 className='heading'>Top Series</h2>
            </div>
            <div className='row_posters'>
                {movies.map((movie) => (
                    <Link
                        key={movie?._id}
                        to={`/series/${movie?._id}`}>
                        <img
                            className='row_poster'
                            src={movie?.imgUrl}
                            alt={movie?.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Series;