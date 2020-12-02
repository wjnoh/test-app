import React, { FC, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ImageCard from './components/ImageCard';

interface IImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [Images, setImages] = useState<IImage[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      const io = ioGenerator(setCount);
      io.observe(footerRef.current);
    }
  }, [])

  useEffect(() => {
    const fetchImages = (async () => {
      const res = (await axios(`https://jsonplaceholder.typicode.com/photos?_start=${count * 5}&_limit=5`)).data as IImage[];
      setImages((prev) => prev.concat(res));
    })

    fetchImages();
  }, [count]);

  return (
    <div className="App">
      {Images && Images.map((d: IImage) => <ImageCard key={d.id} src={d.url} alt={d.title} />)}
      <div ref={footerRef}>Footer</div>
    </div>
  );
}

const ioGenerator = (setCount: React.Dispatch<React.SetStateAction<number>>) => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setCount((prev) => prev + 1);
      }
    });
  })

  return io;
}

export default App;
