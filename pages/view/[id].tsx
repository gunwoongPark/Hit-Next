import React, { useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import axios from 'axios';
import Item from '../../src/components/Item';

export default function Detail() {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const [item, setItem] = useState<Object>({});

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      const { image_link, name, description } = res.data;
      setItem({ image_link, name, description });
    });
  };

  useEffect(() => {
    // id를 받아올 때 데이터 fetching
    if (id) fetchData();
  }, [id]);

  console.log(item);

  return <>{/* <Item item={item} /> */}</>;
}
