import React, { FC, useState, useEffect, useRef, RefObject } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
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
  // const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener(setCount));
    return () => {
      window.removeEventListener('scroll', scrollListener(setCount));
    }

    // if (!footerRef.current) return;
    // io.observe(footerRef.current);
  }, [])

  useEffect(() => {
    const fetchImages = (async () => {
      const res = (await axios(`https://jsonplaceholder.typicode.com/photos?_start=${count * 20}&_limit=20`)).data as IImage[];
      setImages((prev) => prev.concat(res));
    })
    fetchImages();
  }, [count])

  // const io = new IntersectionObserver((entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       setCount((prev) => prev + 1);
  //     }
  //   });
  // })

  return (
    <div className="App">
      {Images && Images.map((d: IImage) => <ImageCard key={d.id} src={d.url} alt={d.title} />)}
      {/* <div ref={footerRef}>Footer</div> */}
    </div>
  );
}

const scrollListener = (setCount: React.Dispatch<React.SetStateAction<number>>) => debounce(() => {
  if (document.documentElement.scrollTop + document.documentElement.clientHeight + 500 >= document.documentElement.scrollHeight) {
    setCount((prev) => prev + 1);
  }
}, 200)

export default App;
