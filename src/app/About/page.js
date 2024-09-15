"use client";

import "../CSS/about.css";
import "../CSS/Components/Navbar.css";
import React, { useState, useEffect } from 'react';
import { Tool, Truck, Users, Leaf, Mail, Phone, MapPin, Infinity } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Image from "next/image";
import Road from "../assets/road-construction.jpg";
import { Medal } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ChartNoAxesCombined } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import forest from "../assets/forest.jpg";
import Footer from "../Components/Footer";
import InfoGrid from "../Components/InfoCard";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('expertise');
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectCount(prevCount => (prevCount < 500 ? prevCount + 1 : prevCount));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const TabContent = ({ id, title, items }) => (
    <div className={`tab-content ${activeTab === id ? 'active' : ''}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="parent">
       <Navbar />
       
       <div className="about-us-container">
       <BlurFade delay={0.25} inView>
       <h2>Company Profile</h2>
      <div className="about-profile">
        
        

        <div className="about-profile-image">
          <Image src={Road} alt="Truck" />
        </div>

        <div className="about-profile-text">
        
        <p>
          LTPS INFRA PVT. LTD. is a leading construction company in India. We specialize in earth-filling,
          excavation works, dam and canal works, road works and highways, SEZ's development, township development,
          and mining transportation works. Our team has over 15 years of experience in the industry, and we have
          successfully completed over 500 projects.

<br /><br />
          We are committed to delivering quality projects on time and within budget. We prioritize the safety of our
          employees, subcontractors, and the public. We are also committed to sustainable practices and materials.

          
        </p>
        </div>
      </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
      <div className="about-management">
        <div className="management-lead">
          <h2>Meet Our Management Team</h2>
          <div className="management-grid">
            <div className="management-card">
              <div className="management-icon">
              <Image src={Road} alt="Road" />
              </div>
              <div className="management-text">
              <h3>John Doe</h3>
              <p>CEO</p>
              </div>
            </div>
            <div className="management-card">
             <div className="management-icon">
              <Image src={Road} alt="Road" />
              </div>
              <div className="management-text">
              <h3>Jane Doe</h3>
              <p>COO</p>
              </div>
            </div>
            <div className="management-card">
             <div className="management-icon">
              <Image src={Road} alt="Road" />
              </div>
              <div className="management-text">
              <h3>John Smith</h3>
              <p>CFO</p>
              </div>
            </div>
            </div>
          </div>
      </div>
      </BlurFade>


      <BlurFade delay={0.25} inView>
      <div className="about-vision">
        <Medal size={48} color="
        #f1c40f
        " className="medal"/>
        <h2>Our Vision</h2>
        <p>
          Our vision is to be the leading construction company in India, known for delivering quality projects on time and within budget.
        </p>
      </div>
      </BlurFade>


      <BlurFade delay={0.25} inView>
      <InfoGrid />
      </BlurFade>
      
      <div className="go-green-section">
        <div className="go-green-container">
          {/* <div className="go-green-card"> */}
          <Leaf size={48} color="#FFD700" />
          {/* </div> */}
        
        <h2 className="card-title">Our Go-Green Policy</h2>
        <p>
          We are committed to protecting our environment. As part of our go-green initiative, 
          we plant 100 trees for every completed project.
        </p>
        </div>
      </div>
      
     
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
