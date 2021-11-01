import React, { useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import axios from 'axios';

export default function Detail() {
  const router: NextRouter = useRouter();
  const id: string | string[] | undefined = router.query.id;

  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const fetchData = () => {
    axios.get(API_URL).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    // id를 받아올 때 데이터 fetching
    if (id) fetchData();
  }, [id]);

  return <p>id : {id}</p>;
}
