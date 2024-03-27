import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ExploreFunc() {
  {
    /*Movies Details */
  }
  const {id} = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);
  useEffect(() =>{
    const detailData = async () => {
      const respond = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=498d5fb86f45e1f05cb32796f4d6f180`
      );
      console.log(respond);
      setMovie(respond.data);
    };
    detailData();
  }, []);
  console.log(movie);
  return (
    <Link to={`/movies/${movie.id}`}>
      <p className="text-white">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
        {movie.title}
        {movie.vote_average}
        {movie.status}
        {movie.overview}
      </p>
    </Link>
  );
}
export default ExploreFunc;
