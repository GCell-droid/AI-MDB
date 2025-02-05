import React from 'react'

import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlaying);
    if (movies == null)
        return;
    let rand = Math.floor(Math.random() * 19);
    const mainMovie = movies[rand];
    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} movieId={id} overview={overview} />
            <VideoBackground id={id} />
        </div>
    )
}

export default MainContainer
