"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Hexagon, MessageCircle, Settings, Package, ShoppingCart, FileText, TrendingUp, Mail, Phone, MapPin } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { industries } from "@/data/industries";
import AuthModal from "@/components/AuthModal";

const trustedBrands = [
  {
    name: "Microsoft",
    logo: (
      <svg className="h-12 w-auto text-gray-600" viewBox="0 0 23 23" fill="currentColor">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
      </svg>
    ),
  },
  {
    name: "Google",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 272 92" fill="none">
        <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335" />
        <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05" />
        <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4" />
        <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
        <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335" />
        <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 603 182" fill="none">
        <path d="M374.1 143.8c-36.8 27.2-90.2 41.7-136.2 41.7-64.5 0-122.6-23.9-166.5-63.5-3.4-3.1-.4-7.3 3.8-4.9 47.2 27.5 105.6 44 165.9 44 40.7 0 85.5-8.4 126.8-25.9 6.2-2.6 11.4 4.1 5.8 8.6h.4z" fill="#FF9900" />
        <path d="M387.8 128.2c-4.7-6-31.1-2.9-43-1.5-3.6.4-4.2-2.7-.9-5 21-14.8 55.6-10.5 59.6-5.5 4 5-1.1 39.7-20.9 56.3-3 2.5-5.9 1.2-4.6-2.2 4.5-11.3 14.6-36.6 9.8-42.1z" fill="#FF9900" />
        <path d="M347.4 23.3V8.7c0-2.2 1.7-3.7 3.7-3.7h65.3c2.1 0 3.8 1.5 3.8 3.7v12.5c0 2.1-1.8 4.8-4.9 9.1l-33.8 48.3c12.6-.3 25.9 1.6 37.3 8 2.6 1.4 3.3 3.5 3.5 5.6v15.6c0 2.1-2.3 4.6-4.8 3.3-20.1-10.6-46.8-11.7-69 .1-2.3 1.2-4.7-1.2-4.7-3.3v-14.8c0-2.4.1-6.5 2.4-10.1l39.2-56.2h-34.1c-2.1 0-3.8-1.5-3.8-3.7l-.1-.4zM125.5 109.3h-19.8c-1.9-.1-3.4-1.5-3.5-3.3V8.9c0-2 1.7-3.6 3.8-3.6h18.5c1.9.1 3.5 1.6 3.6 3.4v12.5h.4c4.8-12.2 13.9-17.8 26.1-17.8 12.4 0 20.2 5.6 25.8 17.8 4.8-12.2 15.7-17.8 27.4-17.8 8.3 0 17.4 3.4 23 11.1 6.3 8.6 5 21.1 5 32v65.1c0 2-1.7 3.6-3.8 3.6h-19.8c-2-.1-3.6-1.7-3.6-3.6V49.7c0-4.3.4-15-.6-19.1-1.5-6.8-6-8.7-11.8-8.7-4.9 0-10 3.3-12.1 8.5-2.1 5.2-1.9 13.9-1.9 19.2v56c0 2-1.7 3.6-3.8 3.6h-19.8c-2-.1-3.6-1.7-3.6-3.6l-.1-56c0-11.8 1.9-29.1-12.4-29.1-14.5 0-13.9 16.6-13.9 29.1v56c0 2-1.7 3.6-3.8 3.6l.1-.1zM532.1 3.5c29.4 0 45.4 25.3 45.4 57.4 0 31.1-17.6 55.7-45.4 55.7-28.9 0-44.7-25.3-44.7-56.8 0-31.7 15.9-56.3 44.7-56.3zm.2 20.7c-14.6 0-15.5 19.9-15.5 32.3 0 12.4-.2 38.9 15.3 38.9 15.3 0 16-21.3 16-34.3 0-8.5-.4-18.8-2.4-26.9-1.7-7.1-5.1-10-13.4-10zm81.4 85.1h-19.7c-2-.1-3.6-1.7-3.6-3.6l-.1-97.4c.1-1.9 1.8-3.5 3.8-3.5h18.3c1.7.1 3.2 1.3 3.5 2.9v14.9h.4c5.4-13.4 13-19.7 26.3-19.7 8.7 0 17.1 3.1 22.6 11.6 5 7.7 5 20.7 5 30v63.3c-.2 1.8-1.8 3.3-3.8 3.3h-19.8c-1.8-.1-3.3-1.5-3.5-3.2V53.1c0-11.6 1.3-28.5-12.9-28.5-5 0-9.6 3.4-11.9 8.5-2.9 6.5-3.3 12.9-3.3 20v52.4c-.1 2-1.8 3.6-3.9 3.6l.6.2zM43.2 109.3H23.6c-1.9-.1-3.4-1.6-3.5-3.4l-.1-97.3c.2-1.8 1.9-3.3 3.9-3.3h18.2c1.8.1 3.3 1.4 3.6 3.1v14.3h.4C50.9 9.5 59.4 3.5 72.3 3.5c9 0 17.8 3.3 23.4 12.2 5.2 8.1 5.2 21.7 5.2 31.4v58.7c-.2 1.7-1.9 3.2-3.9 3.2H77.3c-1.8-.1-3.3-1.5-3.5-3.1V51.3c0-11.8 1.4-29.1-13.1-29.1-5.1 0-9.8 3.4-12.1 8.7-2.9 6.7-3.3 13.3-3.3 20.6v54.5c0 2-1.7 3.6-3.8 3.6l1.7-.3z" fill="#221F1F" />
      </svg>
    ),
  },
  {
    name: "Meta",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 512 512" fill="none">
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" fill="#1877F2" />
      </svg>
    ),
  },
  {
    name: "Apple",
    logo: (
      <svg className="h-12 w-auto text-gray-900" viewBox="0 0 814 1000" fill="currentColor">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
      </svg>
    ),
  },
  {
    name: "Samsung",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 2560 773" fill="none">
        <path d="M483.4 38.8c-99.3 0-180.5 20.2-243.6 60.6-63.1 40.4-94.7 94.7-94.7 162.9 0 68.2 31.6 122.5 94.7 162.9 63.1 40.4 144.3 60.6 243.6 60.6s180.5-20.2 243.6-60.6c63.1-40.4 94.7-94.7 94.7-162.9 0-68.2-31.6-122.5-94.7-162.9-63.1-40.4-144.3-60.6-243.6-60.6zm0 367.8c-76.8 0-139.8-15.6-189-46.8-49.2-31.2-73.8-72.9-73.8-125.1s24.6-93.9 73.8-125.1c49.2-31.2 112.2-46.8 189-46.8s139.8 15.6 189 46.8c49.2 31.2 73.8 72.9 73.8 125.1s-24.6 93.9-73.8 125.1c-49.2 31.2-112.2 46.8-189 46.8z" fill="#1428A0" />
        <path d="M1024.6 38.8c-99.3 0-180.5 20.2-243.6 60.6-63.1 40.4-94.7 94.7-94.7 162.9 0 68.2 31.6 122.5 94.7 162.9 63.1 40.4 144.3 60.6 243.6 60.6s180.5-20.2 243.6-60.6c63.1-40.4 94.7-94.7 94.7-162.9 0-68.2-31.6-122.5-94.7-162.9-63.1-40.4-144.3-60.6-243.6-60.6zm0 367.8c-76.8 0-139.8-15.6-189-46.8-49.2-31.2-73.8-72.9-73.8-125.1s24.6-93.9 73.8-125.1c49.2-31.2 112.2-46.8 189-46.8s139.8 15.6 189 46.8c49.2 31.2 73.8 72.9 73.8 125.1s-24.6 93.9-73.8 125.1c-49.2 31.2-112.2 46.8-189 46.8z" fill="#1428A0" />
        <path d="M1565.8 38.8c-99.3 0-180.5 20.2-243.6 60.6-63.1 40.4-94.7 94.7-94.7 162.9 0 68.2 31.6 122.5 94.7 162.9 63.1 40.4 144.3 60.6 243.6 60.6s180.5-20.2 243.6-60.6c63.1-40.4 94.7-94.7 94.7-162.9 0-68.2-31.6-122.5-94.7-162.9-63.1-40.4-144.3-60.6-243.6-60.6zm0 367.8c-76.8 0-139.8-15.6-189-46.8-49.2-31.2-73.8-72.9-73.8-125.1s24.6-93.9 73.8-125.1c49.2-31.2 112.2-46.8 189-46.8s139.8 15.6 189 46.8c49.2 31.2 73.8 72.9 73.8 125.1s-24.6 93.9-73.8 125.1c-49.2 31.2-112.2 46.8-189 46.8z" fill="#1428A0" />
        <path d="M2107 38.8c-99.3 0-180.5 20.2-243.6 60.6-63.1 40.4-94.7 94.7-94.7 162.9 0 68.2 31.6 122.5 94.7 162.9 63.1 40.4 144.3 60.6 243.6 60.6s180.5-20.2 243.6-60.6c63.1-40.4 94.7-94.7 94.7-162.9 0-68.2-31.6-122.5-94.7-162.9-63.1-40.4-144.3-60.6-243.6-60.6zm0 367.8c-76.8 0-139.8-15.6-189-46.8-49.2-31.2-73.8-72.9-73.8-125.1s24.6-93.9 73.8-125.1c49.2-31.2 112.2-46.8 189-46.8s139.8 15.6 189 46.8c49.2 31.2 73.8 72.9 73.8 125.1s-24.6 93.9-73.8 125.1c-49.2 31.2-112.2 46.8-189 46.8z" fill="#1428A0" />
      </svg>
    ),
  },
  {
    name: "IBM",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 1000 400" fill="none">
        <path d="M0 0h138.7v27.8H0V0zm0 55.6h138.7v27.8H0V55.6zm0 55.5h138.7v27.8H0v-27.8zm0 55.6h138.7v27.8H0v-27.8zm0 55.5h138.7v27.8H0v-27.8zm0 55.6h138.7v27.8H0v-27.8zm0 55.5h138.7V361H0v-27.8z" fill="#1F70C1" />
        <path d="M194.4 0h138.7v27.8H194.4V0zm0 55.6h138.7v27.8H194.4V55.6zm0 55.5h138.7v27.8H194.4v-27.8zm0 55.6h138.7v27.8H194.4v-27.8zm0 55.5h138.7v27.8H194.4v-27.8zm0 55.6h138.7v27.8H194.4v-27.8zm0 55.5h138.7V361H194.4v-27.8z" fill="#1F70C1" />
        <path d="M388.9 0h277.8v361H388.9V0z" fill="#1F70C1" />
        <path d="M722.2 0H861v361H722.2V0z" fill="#1F70C1" />
        <path d="M916.7 0h83.3v361h-83.3V0z" fill="#1F70C1" />
      </svg>
    ),
  },
  {
    name: "Intel",
    logo: (
      <svg className="h-12 w-auto" viewBox="0 0 2560 1024" fill="none">
        <path d="M736.5 0C329.8 0 0 329.8 0 736.5S329.8 1473 736.5 1473 1473 1143.2 1473 736.5 1143.2 0 736.5 0zm0 1396.9c-364.4 0-660.4-296-660.4-660.4S372.1 76.1 736.5 76.1s660.4 296 660.4 660.4-296 660.4-660.4 660.4z" fill="#0071C5" />
        <path d="M1920 384h-384v768h384V384zm-128 640h-128V512h128v512zM2560 384h-512v768h128V896h256V768h-256V512h384V384z" fill="#0071C5" />
      </svg>
    ),
  },
];



export default function LandingPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-muted  backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="flex items-center justify-center p-1.5 bg-blue-500 text-white rounded-lg shadow-sm">
              <Hexagon className="h-5 w-5 fill-current" />
            </div>
            <span className="text-black">
              Astiga ERP
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#solutions" className="hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="hover:text-primary transition-colors">
              How it works
            </Link>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setShowAuthModal(true)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-4 py-2"
            >
              Login
            </button>
            <button
              onClick={() => setShowAuthModal(true)}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <main className="relative">
        <div className="absolute top-14 left-1/2 -translate-x-1/2 z-0 flex items-center justify-center pointer-events-none w-full h-[1100px]">
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={520}
            path={true}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-md border ">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" fill="#4285F4" />
                <path d="M12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8C13 7.44772 12.5523 7 12 7Z" fill="white" />
              </svg>
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-md border ">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-md border ">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A" />
              </svg>
            </div>
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white shadow-md border ">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <rect x="0" y="0" width="10" height="10" rx="2" fill="#0079BF" />
                <rect x="0" y="12" width="10" height="10" rx="2" fill="#0079BF" />
                <rect x="12" y="0" width="10" height="10" rx="2" fill="#0079BF" />
                <rect x="12" y="12" width="10" height="10" rx="2" fill="#0079BF" />
              </svg>
            </div>
          </OrbitingCircles>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-20 pointer-events-none">
          <div className="absolute top-40 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 flex flex-col items-center w-full px-4 mt-52">
          <div className="flex flex-wrap items-center justify-center gap-9.5">
            <div className="flex items-center justify-center flex-col space-y-2">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center">
                <Package className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Create</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-2">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Manage</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-2">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Schedule</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-2">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">Chat</span>
            </div>
            <div className="flex items-center justify-center flex-col space-y-2">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-muted-foreground font-medium">& More</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="mt-5 mb-8">
              <h1 className="text-5xl font-bold leading-tight mb-6">
                Aplikasi ERP yang didesain <br /> untuk bisnis Anda yang unik
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                Tidak perlu lagi faham akuntansi untuk mencatat semua kegiatan bisnis anda
              </p>
            </div>
            <div className="flex items-center justify-center mt-8">
              <Button className="bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 py-6 px-10 rounded-full text-base font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-16 mx-auto w-1/2">
          <div className="flex items-center justify-center">
            <Image src="/assets/images/hero.png" alt="Hero" className="rounded-lg" width={1920} height={1080} />
          </div>
          <div className="relative py-20 px-4">
            <div className="container mx-auto max-w-7xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted by 100+ companies</h3>
                <p className="text-muted-foreground">Ribuan perusahaan terkemuka telah mempercayai sistem kami</p>
              </div>
              <InfiniteMovingCards
                items={trustedBrands}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </div>
        <section id="services" className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Solusi Lengkap untuk Operasional Bisnis
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tingkatkan efisiensi operasional dengan sistem yang fokus pada value bisnis Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Pencatatan Bahan Baku</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kelola inventori bahan baku secara terpusat dengan sistem yang rapi, transparan, dan mudah digunakan.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Tracking Real-Time</p>
                        <p className="text-sm text-gray-600">Pantau stok bahan baku kapan saja secara akurat.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Alert Otomatis</p>
                        <p className="text-sm text-gray-600">Dapatkan notifikasi saat stok mencapai batas minimum.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Multi-Gudang</p>
                        <p className="text-sm text-gray-600">Kelola stok dari berbagai lokasi gudang dalam satu sistem.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <ShoppingCart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Pencatatan Penjualan</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Catat transaksi penjualan dengan cepat dan rapi untuk mendukung kontrol bisnis yang lebih baik.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Pencatatan transaksi harian</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Pembuatan invoice otomatis</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Mendukung berbagai metode pembayaran</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Monitoring performa penjualan secara terpusat</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Laporan Bahan Baku</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Analisis penggunaan bahan baku untuk membantu perencanaan dan pengambilan keputusan bisnis.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Laporan stok real-time</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Analisis penggunaan harian</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Forecast kebutuhan bahan baku berbasis data</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <BarChart3 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Laporan Keuangan</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Dashboard keuangan terintegrasi untuk memantau kondisi finansial bisnis sesuai standar akuntansi.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Laporan Laba Rugi</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Neraca</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Arus Kas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-900">Ringkasan keuangan bulanan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                ERP untuk Setiap Industri
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sistem yang dirancang khusus untuk kebutuhan unik bisnis Anda
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {industries.map((industry, index) => (
                <Link
                  key={industry.id}
                  href={`/apps/${industry.slug}`}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-bl-full" />

                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {industry.description}
                    </p>

                    <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      <span>Lihat Detail</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="about" className="text-white py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center p-1.5 bg-blue-500 text-white rounded-lg">
                  <Hexagon className="h-5 w-5 fill-current" />
                </div>
                <span className="font-bold text-xl text-black">Astiga ERP</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Sistem ERP terpercaya untuk membantu bisnis Anda tumbuh lebih cepat dan efisien dengan solusi yang disesuaikan untuk industri Anda.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Solutions</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#services" className="hover:text-white transition-colors">Manfaat Aplikasi</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Pencatatan Bahan Baku</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Pencatatan Penjualan</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Laporan Keuangan</Link></li>
                <li><Link href="#how-it-works" className="hover:text-white transition-colors">Industri</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><Link href="#about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimoni</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/career" className="hover:text-white transition-colors">Karir</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partner</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>
                  <a href="mailto:info@astiga.id" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>info@astiga.id</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+6281234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>+62 812-3456-7890</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">Pusat Bantuan</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Astiga ERP. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  );
}


const Icons = {
  gitHub: () => (
    <svg width="30" height="30" viewBox="0 0 438.549 438.549">
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      />
    </svg>
  ),
  notion: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),
  openai: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-black dark:fill-white"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
}