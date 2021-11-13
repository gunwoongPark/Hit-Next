import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../src/components/ItemList';

export default function Home() {
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';

  const [itemList, setItemList] = useState<Array<any>>([]);

  const fetchData = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setItemList(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="It's a cosmetics shopping mall."></meta>
        <title>HOME</title>
      </Head>

      <ItemList itemList={itemList} />
    </>
  );
}
