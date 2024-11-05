"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import './CSS/home.css'
import React, { useState, useEffect,useRef } from "react";
import { Lamp, Plug, Microwave, CheckCircle, AwardIcon, MapIcon, PhoneIcon, MailIcon, KeyRound, Leaf } from 'lucide-react';
import BlurFade from "@/components/magicui/blur-fade";
import TypingAnimation from "@/components/magicui/typing-animation";
import MarqueeCard from "./Components/Marquee";
import WorkingAreas from "./static/WorkingAreas";
import SlideCard from "./Components/SlideCard";
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import railway from "./assets/railway.png";
import lake from "./assets/lake-beautification.png";
import road from "./assets/road-construction.jpg";
import fifteen from "./assets/15+.png";
import gogreen from "./assets/go_green.png";
import Link from 'next/link';
import Footer from "./Components/Footer";
import slides from "./static/Slides";


const Maps = dynamic(() => import('./map'), {
  ssr: false
});

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next or previous slide
  const moveSlide = (direction) => {
    const newSlide = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newSlide);
  };

  // Effect to auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1);
    }, 5000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  
const LazyLoadImage = ({ src, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isVisible ? (
              <Image src={src} alt={alt} className={className} placeholder='blur' />

      ) : (
        <div className="w-full h-full bg-gray-200" />
      )}
    </div>
  );
};

  return (
    <div className="container">

   <Navbar  />

    <div className="hero">
        <div className="carousel-container">
        {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            >
              <div className="hero-content">
                <TypingAnimation
                  className="text-4xl font-bold text-black dark:text-white"
                  text={slide.title}
                />
                <p>{slide.description}</p>
                <Link href={slide.page} className="hero-button">{slide.buttonText}</Link>
                {/* Add the image with lower opacity */}
                {/* <Image src={slide.image} alt={slide.title} className="carousel-image" /> */}
               
                  <LazyLoadImage src={slide.image} alt={slide.title} className="carousel-image" placeholder="blur"/>
               

                {/* <LazyLoadImage 
                src={slide.image} 
                alt={slide.title} 
                className="carousel-image" 
                placeholderSrc={blurImage}
                
                /> */}
              </div>
            </div>
          ))}
          {/* <div className="carousel-buttons">
            <button className="prev-btn" onClick={() => moveSlide(-1)}>
              &#10094;
            </button>
            <button className="next-btn" onClick={() => moveSlide(1)}>
              &#10095;
            </button>
          </div> */}
        </div>
      </div>

    


<BlurFade delay={0.25} inView>
<div className="info">
        <div className="info-container">
          <div className="info-head">
          {/* <Image src={fifteen} alt="15+" width={100} height={100}/>
          <Image src={gogreen} alt="Go Green" width={100} height={100}/> */}
          </div>
            
            <p>Are you looking for a reliable local electrician to help with those small but crucial electrical jobs around your home or business in Dublin 13? Electric Handiman is here to make sure your lights are always bright, your appliances are wired perfectly, and every outlet in your space works like a charm. Whether you're tackling minor fixes or looking for safe electrical upgrades, Electric Handiman is your go-to partner for electrical solutions. 
                <br></br>
                <br></br>
                Contact us today to discuss your requirements, we are here to help and will provide a quote over the phone free of charge!</p>
            <div className="info-btn">
              <Link href="Contact">
              <Button text={"Start Now!"} ></Button>

              </Link>
            
            </div>
            <br></br>
            
            </div>
    </div>
</BlurFade>
    
    

<BlurFade delay={0.25} inView>
    <div className="services">
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="service-cards">
                <div className="service-card">
                    <div className="icon">
                    <Lamp />
                    </div>
                    <h3>Lighting Installation & Repair</h3>
                    <p>Replace that flickering light bulb or upgrade to energy-efficient LED lighting throughout your home. We make your home shine brighter!</p>
                </div>
                <div className="service-card">
                    <div className="icon">
                      <Plug />
                    </div>
                    <h3>Socket & Switch Installation</h3>
                    <p>Need extra power points? Whether it’s for your living room, kitchen, or office space, we can add or repair sockets and switches where needed.</p>
                </div>
                <div className="service-card">
                    <div className="icon">
                      <Microwave />
                    </div>
                    <h3>Appliance Wiring & Repairs</h3>
                    <p>Get those new appliances up and running safely. We can install cookers, extractors, and even wall-mounted TVs.</p>
                </div>
            </div>
        </div>
    </div>
</BlurFade>

{/* <BlurFade delay={0.25} inView>
    <div className="projects">
        <div className="projects-container">
            <h2>Featured Projects</h2>
            <div className="project-cards">
                <div className="project-card">
                    <div className="project-image">
                      <Image src={lake} alt="Project 1" />
                    </div>
                    <h3>Lake Beautification</h3>
                    <p>Development and beautification of Lendale Lake</p>
                    <Button text={"View More"} onClick={()=>{
                      window.location.href = "/Services/sea-port-works";
                    }}></Button>

                </div>
                <div className="project-card">
                    <div className="project-image">
                      <Image src={road} alt="Project 1" />
                    </div>
                    <h3>Road Construction</h3>
                    <p>Construction of concrete roads in Panvel Municipal Corporation</p>
                    <Button text={"View More"} onClick={()=>{
                      window.location.href = "/Services/road-and-highway-construction";
                    }}></Button>

                </div>
                <div className="project-card">
                    <div className="project-image">
                      <Image src={railway} alt="Project 1" />
                    </div>
                    <h3>Railway Station Maintenance</h3>
                    <p>Cleaning and sanitation services for multiple railway stations</p>
                    <Button text={"View More"} onClick={()=>{
                      window.location.href = "/Services/general-civil-works";
                    }}></Button>
                </div>
            </div>
        </div>
    </div>
</BlurFade> */}

{/* <BlurFade delay={0.25} inView>
    <div className="testimonials">
        <div className="testimonials-container">
            <h2 style={{color:"#2563eb"}}>Our Customers</h2>
            <MarqueeCard/>
            
        </div>
    </div>
</BlurFade>

<BlurFade delay={0.25} inView>
    <div className="testimonials">
        <div className="testimonials-container">
          <div className="clients-part">
            <h2>Our Working Areas</h2>
            <SlideCard works={WorkingAreas} />
        
          </div>
            
            
        </div>
    </div>
</BlurFade> */}

<BlurFade delay={0.25} inView>
    <div className="about-us">
        <div className="about-us-container">
            <h2>Why Choose Us</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="icon"><CheckCircle/></div>
                    <h3>Quality Assurance</h3>
                    <p>Committed to delivering projects on time, within budget, and exceeding client expectations</p>
                </div>
                <div className="feature-card">
                    <div className="icon"><AwardIcon/></div>
                    <h3>Client Satisfaction</h3>
                    <p>Building strong relationships with our clients is essential 
                        to 
                        our 
                        success. 
                        We 
                        maintain 
                        open 
                        communication and collaboration 
                        throughout the entire construction process.
                        </p>
                </div>
            </div>

<br></br>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="icon"><KeyRound/></div>
                    <h3>Safety</h3>
                    <p>We prioritize the safety of our employees, subcontractors, and the
                    public on every project. </p>
                </div>
                <div className="feature-card">
                    <div className="icon"><Leaf/></div>
                    <h3>Sustainability</h3>
                    <p>We are committed to incorporating sustainable practices and
                    materials into our projects whenever possible </p>
                </div>
            </div>

           
        </div>
    </div>
</BlurFade>
  
<BlurFade delay={0.25} inView>
    <div className="contact">
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-sub-container">
            <div className="map">
               <Maps/>
            </div>
            <div className="contact-info">
                <div className="sub-contact-info">
                    <div className="icon"><MapIcon/></div>
                    <p>
                        Red Arches Drive, The Coast, Baldoyle, Dublin 13
                    </p>
                  
                    
                </div>
                <div className="sub-contact-info">
                    <div className="icon"><PhoneIcon/></div>
                    <p>087 9762 554</p>
                </div>
                <div className="sub-contact-info">
                    <div className="icon"><MailIcon/></div>
                    <p>dave@electrichandiman</p>
                </div>
            </div>
            </div>
            <br></br>
            
        </div>
    </div>
</BlurFade>

  <Footer/>
</div>
  );
}