import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  const iconPhotos = [
    '/Images/mob.png',
    '/Images/inj.png',
    '/Images/glov.png',
    '/Images/stato.png',
  ];

  const photoDescriptions = [
    'Book any Test from your device',
    'We collect your sample',
    'Your sample is in process',
    'Test report is ready',
  ];

  const wellnessTestPhotos = [
    '/Images/diabe.png',
    '/Images/cancer.png',
    '/Images/therm.png',
    '/Images/liver.png',
    '/Images/preg.png',
  ];

  const wellnessTestDescriptions = [
    'Diabetes',
    'Cancer',
    'Fever',
    'Liver',
    'Pregnancy',
  ];

  const backgroundImage = '/Images/Pixabay-772297.png';

  const mainContainerStyle = {
    position: 'relative',
    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    marginTop: '-30px',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20px',
  };

  const iconStyle = {
    maxWidth: '100%',
    maxHeight: '200px',
    cursor: 'pointer',
    transition: 'opacity 0.5s ease-in-out',
    opacity: 0,
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInThreshold = 100; // Adjust this threshold as needed

  const opacity = Math.min(1, Math.max(0, (scrollY - fadeInThreshold) / (200 - fadeInThreshold)));

  const slidingContainerStyle = {
    transform: `translateY(${Math.max(0, Math.min(200 - scrollY, 200))}px)`,
    transition: 'transform 1s ease-in-out', // Added transition for sliding
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={mainContainerStyle}>
      <div>
        <h2>How we Work</h2>
        <div style={{ ...sectionStyle, ...slidingContainerStyle }}>
          {iconPhotos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Icon ${index + 1}`}
                style={{ ...iconStyle, opacity }}
              />
              <p>{photoDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Wellness Test</h2>
        <div style={{ ...sectionStyle, ...slidingContainerStyle }}>
          {wellnessTestPhotos.map((photo, index) => (
            <div key={index}>
              <img
                src={photo}
                alt={`Wellness Test ${index + 1}`}
                style={{
                  ...iconStyle,
                  ...(hoveredIndex === index ? { transform: 'scale(1.1)' } : {}),
                  opacity,
                  transition: 'transform 0.5s ease-in-out, opacity 2s ease-in-out', // Added transition for scaling
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
              <p>{wellnessTestDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
