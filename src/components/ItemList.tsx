import React from 'react';
import { Container, Item, ItemImage, ItemName, ItemPrice } from '../styles/ItemList';

interface PropType {
  itemList: Array<any>;
}

export default function ItemList(props: PropType) {
  const { itemList } = props;

  console.log(itemList);

  return (
    <Container>
      {itemList.map((item) => {
        return (
          <Item key={item.id}>
            <ItemImage src={item.image_link} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price}</ItemPrice>
          </Item>
        );
      })}
    </Container>
  );
}
