import React from 'react';
import './BurgerMenu.scss'
import {Link} from 'react-router-dom'

const BurgerMenu = () => {
    return (
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <Link to='/comedy'><li><a class="menu__item" href="#">Комедии</a></li></Link>
      <Link to='/cartoon'><li><a class="menu__item" href="#">Мультфильмы</a></li></Link>
      <Link to='/horror'><li><a class="menu__item" href="#">Ужасы</a></li></Link>
      <li><a class="menu__item" href="#">Фэнтези</a></li>
      <li><a class="menu__item" href="#">Аниме</a></li>
      <li><a class="menu__item" href="#">Мелодрамы</a></li>
      <li><a class="menu__item" href="#">Детективы</a></li>
      <li><a class="menu__item" href="#">Драмы</a></li>
      <li><a class="menu__item" href="#">Спортивные</a></li>
      <li><a class="menu__item" href="#">Боевики</a></li>
      <li><a class="menu__item" href="#">Боевики</a></li>
      <li><a class="menu__item" href="#">Приключения</a></li>

    </ul>
        </div>
    );
}

export default BurgerMenu;
