import React from 'react';
import img from "../../assests/images/img13.jpeg";
import img2 from '../../assests/images/img14.jpeg';
import img3 from "../../assests/images/img15.jpeg";
import img4 from "../../assests/images/img16.jpeg";
import img5 from "../../assests/images/img17.jpeg";
import img6 from "../../assests/images/img18.jpeg";
import img7 from '../../assests/images/img19.jpeg';
import img8 from '../../assests/images/img20.jpeg';
import img9 from '../../assests/images/img21.webp';
import img10 from '../../assests/images/img22.jpeg';
import img11 from '../../assests/images/img11.jpeg';
import img12 from '../../assests/images/img8.jpeg';
const films = [ 
   
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
        img2:img2,
        img3:img3,
        img4:img4,
        img5:img5,
        img6:img6,
        img7:img7,
        img8:img8,
        img9:img9,
        img10:img10,
        img11:img11,
        img12:img12,
        name:'Гарри Поттер', 
        name2:'Властелин Колец',
        name3:'Форсаж',
        name4:'Зеленая Миля',
        name5:'Тетрадь Смерти',
        name6:'Миньоны',
        name7:'Шерлок Холмс',
        name8:'Человек паук',
        name9:'Мстители',
        name10:'Аватар',
        name11:'Один Дома',
        name12:' Тупой И Еще Тупее',

        year:'16+'
        
    }
]
const Comedy = () => {
    
    return (
        films.map((i) => { 
            return( 


                

                            // 1
                            <div className='home-cont'>
                                <h1 className='home-title'>Комедии</h1>
               <div className='home-container'>
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                      <a href='https://youtu.be/AFwrmkAHEk4'><p className='text'>{i.name}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 
                                {/* 2 */}
                            
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img2} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/RNksw9VU2BQ'><p className='text'>{i.name2}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 3 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img3} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/arwlt8fK_pc'><p className='text'>{i.name3}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 4 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img4} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/TODt_q-_4C4'><p className='text'>{i.name4}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 5 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img5} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/6HpOBE-QLgY'><p className='text'>{i.name5}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 6 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img6} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/A0SQ0HobtS8'><p className='text'>{i.name6}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 7 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img7} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/rxFr59-5M9U'><p className='text'>{i.name7}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 8 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img8} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/uwcmv7aD9QM'><p className='text'>{i.name8}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 9 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img9} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/QPRtU7EqQy0'><p className='text'>{i.name9}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 10 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img10} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/yKrzARVuePw'><p className='text'>{i.name10}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 11 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img11} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                            <a href='https://youtu.be/-NodS4RmC14'><p className='text'>{i.name11}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 

                                {/* 12 */}
                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={i.img12} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                                <a href='https://youtu.be/hlANal2_tsc'><p className='text'>{i.name12}</p></a>
                            </nav>
                            <nav className='home-nav'>
                        <p className='text'>({i.year})</p> 
                            </nav>
                        </div>
                    </div> 
                </div> 
                </div>
                </div>

                
            ) 
        })
    );
}

export default Comedy;
