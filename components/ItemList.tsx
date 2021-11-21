import React, { VFC } from 'react';
import Link from 'next/link';
import {
  Container,
  Item,
  ItemImage,
  ItemName,
  ItemPrice,
} from '../styles/components/ItemList';

interface PropType {
  itemList: Array<any>;
}

const ItemList: VFC<PropType> = (props) => {
  const { itemList } = props;

  return (
    <Container>
      {itemList.map((item) => {
        return (
          <Link key={item.id} href={`/detail/${item.id}`}>
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
};

export default ItemList;
