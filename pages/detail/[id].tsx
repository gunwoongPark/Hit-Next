import React, { VFC } from 'react';
import axios from 'axios';
import Item from '../../components/Item';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Loading from '../../components/Loading';

interface PropType {
  image_link: string;
  name: string;
  description: string;
  price: string;
}

const Detail: VFC<PropType> = (props) => {
  const router = useRouter();
  const { image_link, name, description, price } = props;
  const item = { image_link, name, description, price };

  if (router.isFallback) {
    return <Loading />;
  }

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
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  const res = await axios.get(API_URL);

  return {
    paths: res.data.slice(0, 12).map((item: any) => ({
      params: {
        id: item.id.toString(),
      },
    })),
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
