import React, { useState } from 'react'; 
 
import '../Home/Home.scss'; 
 
import img from "../../assests/images/img1.jpeg"; 
import img2 from '../../assests/images/img2.jpeg'; 
import img3 from "../../assests/images/img3.jpeg"; 
import img4 from "../../assests/images/img4.jpeg"; 
import img5 from "../../assests/images/img5.jpeg"; 
import img6 from "../../assests/images/img6.jpeg"; 
import img7 from '../../assests/images/img7.jpeg'; 
import img8 from '../../assests/images/img8.jpeg'; 
import img9 from '../../assests/images/img9.jpeg'; 
import img10 from '../../assests/images/img10.jpeg'; 
import img11 from '../../assests/images/img11.jpeg'; 
import img12 from '../../assests/images/img12.jpeg'; 
 
const films = [ 
  { 
    id: 1, 
    img: img, 
    name: 'Гарри Поттер', 
    year: '16+' 
  }, 
  { 
    id: 2, 
    img: img2, 
    name: 'Властелин Колец', 
    year: '16+' 
  }, 
  { 
    id: 3, 
    img: img3, 
    name: 'Форсаж', 
    year: '16+' 
  }, 
  { 
    id: 4, 
    img: img4, 
    name: 'Зеленая Миля', 
    year: '16+' 
  }, 
  { 
    id: 5, 
    img: img5, 
    name: 'Тетрадь Смерти', 
    year: '16+' 
  }, 
  { 
    id: 6, 
    img: img6, 
    name: 'Миньоны', 
    year: '16+' 
  }, 
  { 
    id: 7, 
    img: img7, 
    name: 'Шерлок Холмс', 
    year: '16+' 
  }, 
  { 
    id: 8, 
    img: img8, 
    name: 'Тупой И Еще Тупее', 
    year: '16+' 
  }, 
  { 
    id: 9, 
    img: img9, 
    name: 'Мстители', 
    year: '16+' 
  }, 
  { 
    id: 10, 
    img: img10, 
    name: 'Аватар', 
    year: '16+' 
  }, 
  { 
    id: 11, 
    img: img11, 
    name: 'Один Дома', 
    year: '16+' 
  }, 
  { 
    id: 12, 
    img: img12, 
    name: 'Человек паук', 
    year: '16+' 
  } 
]; 
 
const Admin = () => { 
  const [movies, setMovies] = useState(films); 
 
  const handleDeleteMovie = (name) => { 
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.name !== name)); 
  }; 
 
  return ( 
    <> 
      <div className='home-cont'> 
        <h1 className='home-title'>Вы находитесь на странице админа</h1> 
        <div className='home-container'> 
          {movies.map((movie) => ( 
            <div className='home-box' key={movie.id}> 
              <h1>{movie.h1}</h1> 
              <div className='card'> 
                <img className='img' src={movie.img} alt="" /> 
                <div className='card-box'> 
                  <nav className='card-nav'> 
                    <a href='https://youtu.be/AFwrmkAHEk4'> 
                      <p className='text'>{movie.name}</p> 
                    </a> 
                  </nav> 
                  <nav className='home-nav'> 
                    <p className='text'>({movie.year})</p> 
                  </nav> 
                </div> 
              </div> 
              <button onClick={() => handleDeleteMovie(movie.name)}>Delete</button> 
            </div> 
          ))} 
        </div> 
      </div> 
    </> 
  ); 
}; 
 
export default Admin;