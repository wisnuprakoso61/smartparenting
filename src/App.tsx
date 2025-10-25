import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationPillars from './components/EducationPillars';
import ReminderFeature from './components/ReminderFeature';
import DailyLog from './components/DailyLog';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'education':
        return <EducationPillars />;
      case 'reminder':
        return <ReminderFeature />;
      case 'daily-log':
        return <DailyLog />;
      case 'articles':
        return <Articles />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
