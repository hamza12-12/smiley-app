import React, { useState } from 'react';
import './App.css';

// استيراد الصور
import coffeeGif from './assets/images/coffee.gif';
import gifImage from './assets/images/gif.gif';

function App() {
  const [selectedGif, setSelectedGif] = useState(null);

  // قائمة الصور
  const gifs = [
    { 
      id: 1,                          
      src: coffeeGif,                 
      name: '☕ قهوة',                 
      color: '#FFEAA7',                
      description: 'صورة قهوة متحركة'   
    },
    { 
      id: 2, 
      src: gifImage, 
      name: '🎨 صورة متحركة', 
      color: '#B5EAD7',
      description: 'صورة جميلة'
    },
  ];

  const handleSelectGif = (gif) => {
    setSelectedGif(gif);
  };

  const clearSelection = () => {
    setSelectedGif(null);
  };

  return (
    <div className="App" style={{ direction: 'rtl' }}>
      <header className="App-header" style={{ textAlign: 'right' }}>
        
        <h1>🎬 معرض الصور المتحركة</h1>
        
        <div style={{ 
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {gifs.map(gif => (
            <div
              key={gif.id}
              onClick={() => handleSelectGif(gif)}
              style={{
                background: gif.color,
                padding: '15px',
                borderRadius: '15px',
                cursor: 'pointer',
                textAlign: 'center',
                width: '160px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                border: selectedGif?.id === gif.id ? '3px solid white' : 'none'
              }}
            >
              <img 
                src={gif.src}
                alt={gif.name}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
              />
              
              {/* اسم الصورة - كل شيء في سطر واحد */}
              <p style={{ margin: '10px 0 0', fontWeight: 'bold', fontSize: '1.1rem', fontFamily: 'Tahoma, Arial, sans-serif' }}>
                {gif.name}
              </p>
              
              {/* وصف الصورة - كل شيء في سطر واحد */}
              <p style={{ margin: '5px 0 0', fontSize: '0.8rem', opacity: 0.8, fontFamily: 'Tahoma, Arial, sans-serif' }}>
                {gif.description}
              </p>
            </div>
          ))}
        </div>

        {selectedGif && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            maxWidth: '500px',
            width: '90%',
            textAlign: 'right'
          }}>
            <h2 style={{ marginBottom: '15px', fontFamily: 'Tahoma, Arial, sans-serif' }}>
              {selectedGif.name}
            </h2>
            
            <img 
              src={selectedGif.src}
              alt={selectedGif.name}
              style={{
                width: '100%',
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '15px',
                border: '4px solid white'
              }}
            />
            
            <p style={{ margin: '15px 0 0', fontSize: '1rem', opacity: 0.9, fontFamily: 'Tahoma, Arial, sans-serif' }}>
              {selectedGif.description}
            </p>
            
            <button 
              onClick={clearSelection}
              style={{
                padding: '10px 20px',
                marginTop: '15px',
                background: '#ff6b6b',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem',
                color: 'white',
                fontWeight: 'bold',
                fontFamily: 'Tahoma, Arial, sans-serif'
              }}
            >
              ✖️ إلغاء الاختيار
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;