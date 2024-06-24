import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HTTP_REQ_OPTIONS } from "../constants";
import { addPopularMovies } from "../store/movies-slice";
import { showToast } from "../toast";

const useMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        loadPopularMovies();
    }, []);

    const loadPopularMovies = async () => {
        try {
            const response = await fetch(
                "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
                HTTP_REQ_OPTIONS
            );
            const data = await response.json();
            dispatch(addPopularMovies(data?.results));
        } catch (err) {
            showToast(err, "error");
            console.error(err);
        }
    };
};

export default useMovies;
