import React, { useState, useEffect } from 'react';
import api from '../api';
import { useRouteMatch, useHistory } from 'react-router-dom';
import './MovieDetails.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MoreInfo from './MoreInfo';
import Trailer from './Trailer';

function TrendingDetails({ singleUrl }) {

    const [singlemovie, setSingleMovie] = useState([]);
    const [value, setValue] = useState(0);

    //Getting the id of the clicked movie from the url
    const match = useRouteMatch();
    const id = match.params.id;

    const history = useHistory();

    const theme = createMuiTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff',
            },
            background:{
                paper: '#111',
            }
        },
    })

    useEffect(() => {
        const getSingleMovie = async () => {
            const request = await api.get(singleUrl + `/${id}`);
            setSingleMovie(request.data);
            return request;
        }
        getSingleMovie();
    }, [singleUrl, id]);

    const handleBack = () => {
        history.push('/');
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className='movie__details'>
            <div className='persistant__nav'>
                <img
                    className='nav_logo'
                    src='https://logopond.com/logos/29c9d93968e1ff492c67f780d4ee8b1e.png'
                    alt='Movie Info Logo'
                />
                <img
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='Avatar Logo'
                />
            </div>

            <ArrowBackIosIcon className='back_icon' onClick={handleBack} fontSize="large" />

            <div className="head_info">
                <div className="movie__contents">
                    <h1 className='movie_head'>{singlemovie?.title}</h1>
                    <h4 className='release'>{singlemovie?.release}</h4>
                    <h4 className='view'>{singlemovie?.viewAt}</h4>
                    <p className='movie_desc'>{singlemovie?.description}</p>
                </div>
                <div className="movie_poster">
                    <img className='movie_image' src={singlemovie?.imgUrl} alt={singlemovie?.title} />
                </div>
            </div>
            {/* Tabs */}
            <div className='tabs'>
                <ThemeProvider theme={theme}>
                    <Paper square>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                        >
                            <Tab label="More Info" />
                            <Tab label="Trailer" />
                        </Tabs>
                    </Paper>
                </ThemeProvider>
                { 
                    value === 0 ? 
                    <MoreInfo 
                        director={singlemovie?.director}
                        producer={singlemovie?.producer}
                        production={singlemovie?.production}
                        actors={singlemovie?.cast}
                    /> : 
                    <Trailer trailerId={singlemovie?.trailerId}/> 
                }
            </div>
        </div>
    );
}

export default TrendingDetails;
