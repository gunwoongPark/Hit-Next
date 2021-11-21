import React, { VFC } from 'react';
import axios from 'axios';
import Item from '../../components/Item';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface PropType {
  image_link: string;
  name: string;
  description: string;
  price: string;
}

const Detail: VFC<PropType> = (props) => {
  const { image_link, name, description, price } = props;
  const item = { image_link, name, description, price };

  return (
    <>
      <Head>
        <title>DETAIL | {item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {item && <Item item={item} />}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const { image_link, name, description, price } = res.data;

  return {
    props: { image_link, name, description, price },
  };
};

export default Detail;
