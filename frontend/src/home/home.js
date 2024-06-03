import React from 'react';
import './home.css';

function Home(){
    return(
        <> 
            <nav>
            {/* <h2>Virtual Wardrobe</h2> */}
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Upload Pics</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Contact</a></li>
                    
                </ul>
            </nav>
                    <div className='beauty'>

            <h1>Welcome to Home page</h1>
            <p>loremw mfrn vrjnvjre vjnvj rjvke hasd  hda c hd c bj cd cbbc ch jc h e ceh</p>
            <form>
              <h3>Fill Some Persnol Details</h3>
                <label>Date Of Birth</label>
                <input type='datetime-local' placeholder='01/01/2000'/> <br></br>
                <label>Age</label><br></br>
                <input type='number' placeholder='13+'/> <br></br>

            <div className='dropdown'>
                  <div className='select'>
                    <span>Marriage Status</span>
                  </div>
                <ul>
                    <li>Single</li>
                    <li>Marriaged</li>
                </ul>
             </div>
             <div className='dropdown'>
                <div className='select'>
                    <span>Gender</span>
                </div>
                <ul>
                    <li>Male</li>
                    <li>Female</li>
                    <li>Others</li>
                </ul>
             </div>
                
                <h4>Additonal detail</h4>
                <textarea placeholder='eg: Height, Weight, SkinColor'></textarea>
                <button>Submit</button>
                
            </form>
            <div>
                 <img src ='image.jpg' alt='profile picture' />

            </div>
        </div> 
        </>
    )
}
export default Home;