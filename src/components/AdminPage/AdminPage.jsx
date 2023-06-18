import React, { useState } from 'react';
import img from '../../assests/images/img1.jpeg'
const CardList = () => {
  const [cards, setCards] = useState([
    { 
        id1:1, 
        id2:2, 
        id3:3, 
        id4:1, 
        id5:5, 
        id6:6, 
        id7:7, 
        id8:8,
        id9:9, 
        id10:10, 
        id11:11, 
        id12:12, 
        img:img,
        // img2:img2,
        // img3:img3,
        // img4:img4,
        // img5:img5,
        // img6:img6,
        // img7:img7,
        // img8:img8,
        // img9:img9,
        // img10:img10,
        // img11:img11,
        // img12:img12,
        name:'Гарри Поттер', 
        name2:'Властелин Колец',
        name3:'Форсаж',
        name4:'Зеленая Миля',
        name5:'Тетрадь Смерти',
        name6:'Миньоны',
        name7:'Шерлок Холмс',
        name8:'Тупой И Еще Тупее',
        name9:'Мстители',
        name10:'Аватар',
        name11:'Один Дома',
        name12:'Человек паук',

        year:'16+'
        
    }
  ]);

  const deleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id}>
           <button onClick={() => deleteCard(card.id)}>Удалить</button> 
           <div className='home-box'> 
                <h1>{card.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={card.img} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                      <a href='https://youtu.be/AFwrmkAHEk4'><p className='text'>{card.name}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({card.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

        </div>
      ))}
    </div>
  );
};

export default CardList;