import './style.css'
import Movie from "./Movie";
// add movie list component 
const MovieList =({movies,handleDelete})=>{
    return (
        <div className='movieList'>
            {/* mapping from movies our data to send it to our card movie by movie  */}
            {movies.map((mov,index)=>
                <Movie handleDelete={handleDelete} key={movies.id} {...mov}/>)}
        </div>
    )
}
export default MovieList;