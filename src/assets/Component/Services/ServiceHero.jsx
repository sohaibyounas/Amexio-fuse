import React from 'react';
import GeneralHero from '../Services/GeneralHero';

const ServiceHero = () => {
  return (
    <div>
      <GeneralHero />
      {/* Text */}
      <div className="text-white">
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non porro, expedita nemo quo fuga quaerat et distinctio atque harum officia esse doloremque accusamus repellat accusantium, voluptatibus minus aut asperiores tempora?</p>
      </div>
    </div>
  )
}

export default ServiceHero;
