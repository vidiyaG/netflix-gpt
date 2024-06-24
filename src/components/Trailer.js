import React from "react";
import useMovies from "../utils/hooks/useMovies";
import { useSelector } from "react-redux";

const Trailer = () => {
    useMovies();
    const storedMovies = useSelector((store) => store.movies.popular);
    let trailerMovie =
        storedMovies && storedMovies.length > 0 ? storedMovies[0] : null;
    console.log(trailerMovie);
    // const {original_name,original_title , overview}
    if (trailerMovie) {
        // return <h1>Trailer Not found</h1>;
    } else {
        trailerMovie = {
            adult: false,
            gender: 2,
            id: 12799,
            known_for_department: "Acting",
            name: "Jeremy Piven",
            original_name: "Jeremy Piven",
            popularity: 228.303,
            profile_path: "/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
            known_for: [
                {
                    backdrop_path: "/sd4xN5xi8tKRPrJOWwNiZEile7f.jpg",
                    id: 920,
                    original_title: "Cars",
                    overview:
                        "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
                    poster_path: "/abW5AzHDaIK1n9C36VdAeOwORRA.jpg",
                    media_type: "movie",
                    adult: false,
                    title: "Cars",
                    original_language: "en",
                    genre_ids: [16, 12, 35, 10751],
                    popularity: 89.571,
                    release_date: "2006-06-08",
                    video: false,
                    vote_average: 6.967,
                    vote_count: 13560,
                },
            ],
        };
    }
    return (
        <div className="w-5 p-8">
            <h1 className="font-bold">{trailerMovie?.original_name}</h1>
            <p>{trailerMovie?.known_for?.[0]?.original_title}</p>
            <p>{trailerMovie?.known_for?.[0]?.overview}</p>
            <div className="">
                <button className="mr-4 bg- bg-slate-400 text-white w-28 rounded-md px-3 py-2 hover:bg-slate-500">
                    Play
                </button>
                <button className="bg- bg-slate-400 text-white w-28 rounded-md px-3 py-2 hover:bg-slate-500">
                    More info
                </button>
            </div>
        </div>
    );
};

export default Trailer;
