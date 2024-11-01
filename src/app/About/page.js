"use client";

import "../CSS/about.css";
import "../CSS/Components/Navbar.css";
import React, { useState, useEffect } from 'react';
import { Tool, Truck, Users, Leaf, Mail, Phone, MapPin, Infinity } from 'lucide-react';
import Navbar from "../Components/Navbar";
import Image from "next/image";
import D13 from "../assets/D13.jpg";
import { Medal } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import { ChartNoAxesCombined } from "lucide-react";
import NumberTicker from "@/components/magicui/number-ticker";
import forest from "../assets/forest.jpg";
import Footer from "../Components/Footer";
import InfoGrid from "../Components/InfoCard";
import elect from "../assets/elect.jpg";

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
       <h2>Dublin 13's Trusted Electrical Handyman</h2>
      <div className="about-profile">
        
        

        <div className="about-profile-image">
          <Image src={D13} alt="Mountain Side" />
        </div>

        <div className="about-profile-text">
        
        <p>
        Electric Hand💡man provides reliable, affordable electrical handyman services in Dublin 13, specializing in small but crucial jobs for local residents. Quick response and quality service for your home.



<br /><br />
Are you looking for a reliable local electrician to help with those small but crucial electrical jobs around your home or business in Dublin 13? Electric Hand💡man is here to make sure your lights are always bright, your appliances are wired perfectly, and every outlet in your space works like a charm. Whether you're tackling minor fixes or looking for safe electrical upgrades, Electric Hand💡man is your go-to partner for electrical solutions.

          
        </p>
        </div>
      </div>
      </BlurFade>

      <BlurFade delay={0.25} inView>
      <div className="about-management">
        <div className="management-lead">
          <h2>Why Choose Electric Hand💡man?</h2>
          <div className="management-grid">
            <div className="management-card">
              <div className="management-icon">
              <Image src={elect} alt="Road" />
              </div>
              <div className="management-text">
                <p>Electric Hand💡man specializes in handling minor electrical tasks for local customers, bringing expert skills and personalized service right to your doorstep. We understand that many electrical jobs are often too small for big contractors, but too important to ignore. That's where we come in!
                <br /><br />
                <ul>
                  <li>Local Expertise: We know Dublin 13 inside out. We’re not just another electrical service—we’re part of your community, dedicated to helping our neighbours.</li>
                  <br />
                  <li>Affordable Rates: Our pricing is fair, transparent, and tailored to smaller jobs. No hidden costs, no surprises—just straightforward, value-for-money service.</li>
                  <br />
                  <li>Quick Response Time: Our local presence means we can respond to your call faster. No more waiting around for days to have that socket fixed!</li>
                </ul>
              </p>
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
        <h2>Our Promise</h2>
        <p>
        At Electric Hand💡man, we promise to deliver reliable, high-quality service for every job, no matter how small. Our commitment to our customers is rooted in honesty, professionalism, and a dedication to excellence.
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
        
        <h2 className="card-title">The Local Difference</h2>
        <p>
        Electric Hand💡man is different because we genuinely care about the Dublin 13 community. We take the time to get the job done right, and our customers’ satisfaction is our highest priority. Our team is fully qualified, insured, and passionate about delivering top-quality electrical services to every household.
        <br /><br />
        When you call Electric Hand💡man, you're not just getting a handyman—you're getting a trusted local partner dedicated to keeping your home comfortable, safe, and fully functional. Plus, since we’re based right here in Dublin 13, you’ll always know who you’re working with.
        </p>
        </div>
      </div>
      
     
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
