import type { NextPage } from 'next';
import { useEffect } from 'react';

const Get: NextPage = () => {
  useEffect(() => {
    fetch('http://localhost:3000/main').then((response) => {
      console.log(response);
    });
  });

  return <div>get</div>;
};

export default Get;
