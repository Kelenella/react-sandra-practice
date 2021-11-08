import './App.css';
import { Gallery } from './components/Gallery/Gallery';
import Title from './components/Title/Title';

const galleryImages = {
  title: 'Images',
  description: 'Best images in the World',
  images: [
    {
      id: '1',
      src: 'https://mfair.ua/user/cars/51859/51859-kupit-kupe-lotus-exige-s-kiev-2018-3.jpg',
    },
    {
      id: '2',
      src: 'https://cdn.motor1.com/images/mgl/Q1jNY/s3/lotusemirafront3qtrportrait.jpg',
    },
  ],
};

const { title, description, images } = galleryImages;

function App() {
  return (
    <div className="App">
      FE 35 Module 1 Lesson 1
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
