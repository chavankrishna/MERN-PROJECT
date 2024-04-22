import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>
                    Our mission at ReserveEase is simple: to enhance the dining experience for both diners and restaurants alike. 
                    We strive to provide a convenient and reliable solution for making reservations, allowing diners to focus on 
                    savoring their meal and creating memorable moments with friends and family.
                    Welcome to ReserveEase, your ultimate destination for effortless restaurant reservations. 
                    We're dedicated to streamlining the dining experience, connecting diners with their favorite 
                    restaurants in just a few clicks. With real-time availability and instant confirmations, we make 
                    booking a table quick, easy, and stress-free. Join ReserveEase today and discover the joy of hassle-free dining!
                </p>
                <Link to={"/"}> Explore Menu
                    <span> 
                        <HiOutlineArrowNarrowRight />  
                    </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>

        </div>

      
    </section>
  )
}

export default About;
