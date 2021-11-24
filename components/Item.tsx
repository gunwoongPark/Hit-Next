import React, { VFC, useState } from 'react';
import {
  BtnContainer,
  Button,
  Container,
  ItemDesc,
  ItemName,
  ItemPrice,
  SubContainer,
} from '../styles/components/Item';
import Modal from './Modal';

type ItemType = {
  image_link: string;
  name: string;
  description: string;
  price: string;
};

interface PropType {
  item: ItemType;
}

const Item: VFC<PropType> = (props) => {
  const { item } = props;

  const [modal, setModal] = useState(false);

  const addToCart = () => {
    setModal(true);
  };

  return (
    <>
      <Container>
        <SubContainer>
          <img src={item.image_link} alt={item.name} />
        </SubContainer>
        <SubContainer style={{ marginRight: '5rem' }}>
          <ItemName>{item.name}</ItemName>
          <ItemDesc>{item.description}</ItemDesc>
          <ItemPrice>{item.price}</ItemPrice>
          <BtnContainer>
            <Button mode="cart" onClick={addToCart}>
              ADD TO CART
            </Button>
            <Button mode="buy">BUY</Button>
          </BtnContainer>
        </SubContainer>
      </Container>
      {modal && <Modal />}
    </>
  );
};

export default Item;
