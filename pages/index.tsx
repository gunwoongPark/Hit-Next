import React, { useEffect, useState, VFC } from 'react';
import axios from 'axios';
import Head from 'next/head';
import ItemList from '../components/ItemList';

interface PropType {
  itemList: Array<any>;
}

const Home: VFC<PropType> = (props) => {
  const { itemList } = props;

  return (
    <>
      <Head>
        <meta name="description" content="It's a cosmetics shopping mall."></meta>
        <title>HOME</title>
      </Head>

      <ItemList itemList={itemList} />
    </>
  );
};

export const getStaticProps = async () => {
  const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);

  return {
    props: { itemList: res.data },
  };
};

export default Home;
