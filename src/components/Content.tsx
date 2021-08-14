import {GenreResponseProps, MovieProps} from "../App"

import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';
interface ContentProps { // Interface Props para quando o component for chamado só aceitar como parâmetro os que aqui estão declarados
  selectedGenre: GenreResponseProps; // e ser "obrigatório" informar por causa da chamada do export com Props
  movies: MovieProps[];
}

export function Content({selectedGenre, movies}:ContentProps) { // selectedGenre, movies serão passadas como parâmetro na chamada do componente
  // Complete aqui
    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
      );
}