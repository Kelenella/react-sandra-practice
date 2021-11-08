import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';

import { Gallery } from './components/Gallery/Gallery';
import { Hero } from './components/Hero/Hero';
import Title from './components/Title/Title';
import array from './db/gallery.json';

const galleryImages = {
  title: 'Images',
  description: 'Best images in the World',
  images: array,
};
// const newStyleBtn = {
//   color: 'white',
//   background: 'black',
// };
const { title, description, images } = galleryImages;

function App() {
  return (
    <div className={'App'}>
      <h1>FE 35 Module 1 Lesson 1 Lesson 2</h1>
      <Hero />
      <Button variant="outline-success">Success</Button>
      <Gallery description={description} images={images}>
        {/* IF */}
        {title === 'Images' && <Title value={title} />}
        {/* IF */}
        {/* Ternary */}
        {/* {title === 'Images' ? (
          <h2>Условие выполнено</h2>
        ) : (
          <h2>Условие НЕ выполнено</h2>
        )} */}
        {/* Ternary */}
        <p>Just text</p>
      </Gallery>
    </div>
  );
}

export default App;
