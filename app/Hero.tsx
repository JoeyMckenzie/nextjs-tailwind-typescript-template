'use client';

import ThemeDropdown from './ThemeDropdown';

export default function Hero(): JSX.Element {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ThemeDropdown />
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
