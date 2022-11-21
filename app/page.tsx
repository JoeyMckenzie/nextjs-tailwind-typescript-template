import Carousel from './Carousel';
import Hero from './Hero';
import OrderForm from './OrderForm';

export default function Home(): JSX.Element {
  return (
    <>
      <Hero />
      <Carousel />
      <OrderForm />
    </>
  );
}
