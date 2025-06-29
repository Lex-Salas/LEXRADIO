
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AudioPlayer from '../components/AudioPlayer';
import ProgramSchedule from '../components/ProgramSchedule';
import SongHistory from '../components/SongHistory';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      <Hero />
      <AudioPlayer />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProgramSchedule />
          <SongHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
