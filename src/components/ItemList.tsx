import React from 'react';
import Link from 'next/link';
import { Container, Item, ItemImage, ItemName, ItemPrice } from '../styles/ItemList';

interface PropType {
  itemList: Array<any>;
}

export default function ItemList(props: PropType) {
  const { itemList } = props;

  return (
    <Container>
      {itemList.map((item) => {
        return (
          <Link key={item.id} href={`/view/${item.id}`}>
            <a>
              <Item>
                <ItemImage src={item.image_link} alt={item.name} />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price}</ItemPrice>
              </Item>
            </a>
          </Link>
        );
      })}
    </Container>
  );
}
