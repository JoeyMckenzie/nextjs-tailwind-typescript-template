'use client';

import Carousel from './Carousel';
import ThemeDropdown from './ThemeDropdown';

export default function Hero(): JSX.Element {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold font-apple">Chow</h1>
          <h3 className="text-4xl font-dancing">Charcuterie and Boards</h3>
          <p className="py-6">Redding&apos;s.</p>
          <button className="btn btn-primary lowercase">Get Started</button>
        </div>
      </div>
    </div>
  );
}
