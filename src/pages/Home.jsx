import React from 'react';
import './Home.css'
import Brandlogo from '../files/ChaiLogo.png'
import CoffeeMov from '../files/CoffeeMov.gif'
import BurgerMov from '../files/Burger.gif'
import TeaMov from '../files/TeaMov.gif';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import Usercard from '../components/Usercard';

function Home(props) {
    const [typeEffect] = useTypewriter({
        words:['Garam chai','Chai Garam','Masala Chai','Chai Lelo','Kafi Lelo','Tea without sugar','Khana Khalo','Dal Khichidi','Bhindi Fry','Chicken Wicken','Paneer Dilruba','Baigan ka Bharta','Roshogolla','Sada Dosa','Masala Dosa'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40,
    });
    return (
        <div>
            <div id='brand-main'>
               <div className='tea-video-container'>
                    <img src={BurgerMov} alt="coffee" />
               </div>
               <div>
                <div className='brand_logo'>
                        <img src={Brandlogo} alt="Logo" />
                    </div>
                    <div className='typewritter-div'>
                    <h1 id='typewriter'>{typeEffect}</h1>
                    </div>
               </div>
               <div className='tea-video-container'>
                    <img src={TeaMov} alt="Tea" />
               </div>
            </div>
            {/* <div className='home-buttons'>
                <button><i class="fa-solid fa-list fa-lg" style={{color:'white'}}></i>&nbsp;&nbsp;Show Order's</button>
                <button><i class="fa-solid fa-right-to-bracket fa-lg" style={{color:'white'}}></i>&nbsp;&nbsp;Login</button>
            </div> */}
            <div className='user-main'>
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
            </div>
        </div>
    );
}

export default Home;