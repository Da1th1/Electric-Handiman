import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Electric Hand💡man",
  description: "Electric Handiman provides reliable, affordable electrical handyman services in Dublin 13, specializing in small but crucial jobs for local residents. Quick response and quality service for your home.",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>      

      <body className={inter.className} cz-shortcut-listen="true">
      
        {children}
       
      </body>
    </html>
  );
}
