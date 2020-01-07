import React, { FC, useState, useEffect, } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import ImageCard from './ImageCard';

interface IImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const InfiniteScroll: FC = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<IImage[]>([]);

  useEffect(() => {
    window.addEventListener('scroll', scrollListener(setCount));
    return () => {
      window.removeEventListener('scroll', scrollListener(setCount));
    }
  }, [])

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/photos?_start=${count * 30}&_limit=30`)
      .then(res => setData(data.concat(res.data)));
  }, [count])

  return (
    <div className="App">
      {data && data.map((d: IImage) => <ImageCard key={d.id} src={d.url} alt={d.title} />)}
    </div>
  );
}

const scrollListener = (setCount: React.Dispatch<React.SetStateAction<number>>) => debounce(() => {
  if (document.documentElement.scrollTop + document.documentElement.clientHeight + 500 >= document.documentElement.scrollHeight) {
    setCount((prev: number) => prev + 1);
  }
}, 200)

export default InfiniteScroll;
