import React from 'react';
import axios from 'axios';
import Item from '../../src/components/Item';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

interface PropType {
  image_link: string;
  name: string;
  description: string;
  price: string;
}

export default function Detail(props: PropType) {
  const { image_link, name, description, price } = props;
  const item = { image_link, name, description, price };

  return (
    <>
      <Head>
        <title>DETAIL | {item.name}</title>
      </Head>

      <Item item={item} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const { image_link, name, description, price } = res.data;

  return {
    props: { image_link, name, description, price },
  };
};
