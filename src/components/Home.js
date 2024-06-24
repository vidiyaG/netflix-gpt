import React, { useEffect } from "react";
import Header from "./Header";
import PopularMovies from "./Popular-movies";
import Trailer from "./Trailer";
function Home() {
    return (
        <div>
            <Header></Header>
            <Trailer></Trailer>
            <PopularMovies></PopularMovies>
        </div>
    );
}

export default Home;
