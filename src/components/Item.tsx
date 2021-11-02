import React from 'react';

type ItemType = {
  image_link: String;
  name: String;
  description: String;
};

interface PropType {
  item: ItemType;
}

export default function Item(props: PropType) {
  const { item } = props;
  console.log(item);
  return <>Item</>;
}
