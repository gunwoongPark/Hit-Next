import React, { VFC } from 'react';
import axios from 'axios';
import Item from '../../src/components/Item';
import { GetStaticProps } from 'next';
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

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '495' } }, { params: { id: '488' } }, { params: { id: '477' } }, { params: { id: '468' } }],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(API_URL);
  const { image_link, name, description, price } = res.data;

  return {
    props: { image_link, name, description, price },
  };
};

export default Detail;
