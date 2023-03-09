import { useState } from 'react';

import Button from './components/Button/Button';
import ImagesComponent from './components/ImagesComponent/ImagesComponent';

import { images } from './datas/images';

import './default.scss';

export default function App() {
  const [imageNumber, setImageNumber] = useState(1);
  return (
    <div className='App'>
      <div className='d-flex-column ai-center w-full h-full p-8 max-width-full'>
        <ImagesComponent imageNumber={imageNumber} />
        <Button
          onClick={() => {
            setImageNumber(Math.floor(Math.random() * images.length));
            console.log(Math.floor(Math.random() * images.length));
          }}
        />
      </div>
    </div>
  );
}
