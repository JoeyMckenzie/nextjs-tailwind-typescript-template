'use client';

export default function Hero(): JSX.Element {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-apple text-5xl font-bold">Chow</h1>
          <h3 className="font-dancing text-4xl">Charcuterie and Boards</h3>
          <p className="py-6">Redding&apos;s best meat and cheese boards</p>
          <button className="btn-primary btn lowercase">Order now</button>
        </div>
      </div>
    </div>
  );
}
