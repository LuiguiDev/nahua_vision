import React from 'react';
import { useState } from 'react';
import HeroSection from './HeroSection';
import ProjectStatus from './ProjectStatus';
import PendingTasks from './PendingTasks';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#1d1d1b] text-white pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <HeroSection />
        <ProjectStatus />
        <PendingTasks />
      </div>
    </div>
  );
};

export default AboutPage;