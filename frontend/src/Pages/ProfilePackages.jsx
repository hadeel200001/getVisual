import React, { useState } from 'react';

// images
import img from '../assets/logoimg1.png';
import img1 from '../assets/logoimg1-1.png';
import img2 from '../assets/logoimg1-2.png';
import img3 from '../assets/logoimg1-3.png';

import ButtonIcon from '../Components/ButtonIcon';
import ButtonCTA from '../Components/ButtonCTA'

export default function ProfilePackages() {
    const images = [ img1, img2, img3];
    const [scrollIndex, setScroll] = useState(0);
  
    const nextSlide = () => {
        if (scrollIndex !== images.length - 1) {
            setScroll(scrollIndex + 1);
        } else {
            setScroll(0);
        }
    };
    
    const previousSlide = () => {
        if (scrollIndex !== 0) {
            setScroll(scrollIndex - 1);
        } else {
            setScroll(images.length - 1);
        }
    };

    
    const handleOrder = () => {
        console.log('order done')
    }

  return (
    <div className='profilePackages'>
      <div className="profilePackages__container">
        <div className='profilePackages__container--slider'>
          <img 
            className='shadow'
            src={images[scrollIndex]}
            alt="" 
          />
        </div>
        <div className='packageSlide__container--images'>
            {images.map((image, index) => (
              <img 
                onClick={() => setScroll(index)}
                key={index}
                className={`shadow ${index === scrollIndex ? 'active' : ''}`}
                src={image}
                alt="" 
              />
            ))}
          </div>
      </div>
      
      <div className='profilePackages__info'>
        <h3>Service name</h3>
        <h4>username</h4>
        <p>Qorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim</p>

        <div className='profilePackages__info--buttons'>
          <h6>30 LYD</h6>
          <ButtonCTA 
            class="pri-cta cta order"
            type="submit"
            name="حذف"
            //onClick={}
          />
        </div>
      </div>
    </div>
  );
}
