import React from 'react'; 
import '../Home/Home.scss' 
import img from "../../assests/images/horor.jpeg";
const films = [ 
   
    { 
        img:'img1',
        id:1, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:2, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:3, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:4, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
     { 
        img:'img1',
        id:5, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:6, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:7, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:8, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:9, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:10, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:11, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    { 
        img:'img1',
        id:12, 
        name:'Harry Potter', 
        edition:'2004',
        year:'18+'
        
    }, 
    
 
] 
 
const Home = () => { 
    return ( 
        films.map((i) => { 
            return( 

                <div>
                

                <div className='home-box'> 
                <h1>{i.h1}</h1>
                    <div className='card'> 
                        <img className='img' src={img} alt="" />
                        <div className='card-box' >
                            <nav className='card-nav'>
                        <p className='home-sub'>{i.name}</p>
                        <p className='home-sub'>({i.edition})</p>
                            </nav>

                            <nav className='home-nav'>
                        <p className='home-sub'>({i.year})</p>
                                
                            </nav>
                        </div>
                    </div> 
                </div> 
                </div>
            ) 
        }) 
    ) 
} 
 
export default Home;