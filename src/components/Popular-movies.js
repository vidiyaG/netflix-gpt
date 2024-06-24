import React from "react";
import { useSelector } from "react-redux";
import useMovies from "../utils/hooks/useMovies";
import Trailer from "../components/Trailer";

const PopularMovies = () => {
    useMovies();
    const storedMovies = useSelector((store) => store.movies.popular);

    return (
        <div>
            {storedMovies && storedMovies?.length > 0 ? (
                <Trailer></Trailer>
            ) : null}
        </div>
    );
};

export default PopularMovies;
