import React from 'react';
import { Sparkles, BookOpen, PenTool, Share2, Users, Wand2, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Components ---

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
    <div className="flex items-center space-x-2">
      <div className="bg-sky-400 p-2 rounded-xl">
        <BookOpen className="text-white h-8 w-8" />
      </div>
      <span className="text-3xl font-black text-sky-900 tracking-tight">Storymate</span>
    </div>
    <button className="hidden md:block btn-primary">
      Start Your Adventure
    </button>
  </nav>
);

const Hero = () => (
  <section className="px-8 pt-12 pb-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 text-center md:text-left space-y-8"
    >
      <h1 className="text-5xl md:text-7xl font-black text-sky-900 leading-tight">
        Where Your Wildest Dreams <span className="text-rose-500">Become Real Stories!</span>
      </h1>
      <p className="text-xl md:text-2xl text-sky-700 font-medium">
        Turn your imagination into a beautiful storybook with Storymate. You dream it, we write it!
      </p>
      <div className="pt-4">
        <button className="btn-primary text-2xl px-12 py-6">
          Start Your Adventure
        </button>
      </div>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex-1 relative"
    >
      <div className="absolute -inset-4 bg-sky-200 rounded-storybook blur-2xl opacity-50 -z-10 animate-pulse"></div>
      <img 
        src="/src/assets/hero-child-robot.png" 
        alt="Child reading with a friendly robot" 
        className="w-full h-auto rounded-storybook shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
      />
      <div className="absolute -top-4 -right-4 bg-amber-300 p-4 rounded-full shadow-lg animate-bounce">
        <Sparkles className="h-8 w-8 text-amber-900" />
      </div>
    </motion.div>
  </section>
);

const HowItWorks = () => (
  <section className="bg-white py-24 px-8">
    <div className="max-w-7xl mx-auto text-center space-y-16">
      <h2 className="text-4xl md:text-5xl font-black text-sky-950">The 3-Step Magic</h2>
      
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-amber-100 p-8 rounded-storybook mb-4">
            <Wand2 className="h-16 w-16 text-amber-600" />
          </div>
          <h3 className="text-2xl font-bold text-sky-900 uppercase">1. Imagine Your World</h3>
          <p className="text-lg text-sky-700 leading-relaxed max-w-xs">
            Think of a brave knight, a talking cat, or a journey to the moon! What adventure will you choose today?
          </p>
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-rose-100 p-8 rounded-storybook mb-4">
            <Zap className="h-16 w-16 text-rose-600" />
          </div>
          <h3 className="text-2xl font-bold text-sky-900 uppercase">2. Magical AI Magic</h3>
          <p className="text-lg text-sky-700 leading-relaxed max-w-xs">
            Our friendly AI robot helps turn your ideas into a real storybook with cute pictures and exciting words.
          </p>
        </div>

        <div className="space-y-6 flex flex-col items-center">
          <div className="bg-sky-100 p-8 rounded-storybook mb-4">
            <Share2 className="h-16 w-16 text-sky-600" />
          </div>
          <h3 className="text-2xl font-bold text-sky-900 uppercase">3. Read and Share</h3>
          <p className="text-lg text-sky-700 leading-relaxed max-w-xs">
            Open your brand-new book and read it together with family and friends. Every story is a masterpiece!
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 px-8 bg-sky-50">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-sky-950">The Fun Stuff</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-amber-400 p-3 rounded-2xl flex-shrink-0">
                <Users className="text-amber-950 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-sky-900">Your Story, Your Way</h4>
                <p className="text-lg text-sky-700 mt-1">Every book is unique, just like you! You pick the characters, the place, and the magic.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-rose-400 p-3 rounded-2xl flex-shrink-0">
                <Sparkles className="text-rose-950 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-sky-900">Magical Illustrations</h4>
                <p className="text-lg text-sky-700 mt-1">Cute and colorful pictures that bring your story to life on every page.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-sky-400 p-3 rounded-2xl flex-shrink-0">
                <Heart className="text-sky-950 h-6 w-6" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-sky-900">Family Reading Time</h4>
                <p className="text-lg text-sky-700 mt-1">Perfect for bedtime stories, afternoon adventures, or showing off to your friends!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <img 
            src="/src/assets/magical-forest.png" 
            alt="Magical Forest Illustration" 
            className="w-full rounded-storybook shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section className="bg-white py-24 px-8 overflow-hidden">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-sky-950 uppercase tracking-tight">Our Wall of Wonders</h2>
        <p className="text-2xl text-sky-700 font-medium italic">Check out some of the amazing adventures other Storymates have created!</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 w-full">
           <img 
            src="/src/assets/interface-mockup.png" 
            alt="Storymate App Interface" 
            className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="flex-1 flex flex-col gap-8 w-full">
          <div className="bg-sky-100 p-8 rounded-storybook border-4 border-dashed border-sky-300">
             <p className="text-2xl text-sky-900 font-bold italic">"My daughter created a story about a dragon who only eats ice cream. She hasn't stopped talking about it!"</p>
             <p className="text-lg text-sky-700 mt-4 font-bold">— Sarah, Mom to Maya (6)</p>
          </div>
          <div className="bg-amber-100 p-8 rounded-storybook border-4 border-dashed border-amber-300">
             <p className="text-2xl text-amber-900 font-bold italic">"I made a book about a super robot that builds treehouses! It looks so cool."</p>
             <p className="text-lg text-amber-700 mt-4 font-bold">— Leo (8)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-sky-950 py-16 px-8 text-white">
    <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">
      <div className="flex items-center space-x-2">
        <BookOpen className="text-sky-400 h-8 w-8" />
        <span className="text-3xl font-black tracking-tight">Storymate</span>
      </div>
      <p className="text-xl text-sky-200 font-medium">Crafted with love for little dreamers everywhere.</p>
      
      <div className="flex gap-8 text-lg font-bold text-sky-300">
        <a href="#" className="hover:text-white transition-colors">Home</a>
        <a href="#" className="hover:text-white transition-colors">About Us</a>
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
      </div>
      
      <p className="text-sm text-sky-500 pt-8 border-t border-sky-900 w-full text-center">
        &copy; 2026 Storymate AI. All rights reserved. Let your imagination run wild!
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-sky-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}