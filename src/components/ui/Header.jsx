import styled from "styled-components";
import { Container } from "../../assets/styles/Container";
import { ShoppingBasket } from "@mui/icons-material";
import { Flex } from "../../assets/styles/Flex";
import { Badge } from "@mui/base";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorite } from "../../redux/actions";
import BasketWrapper from "./BasketWrapper";
const Header = () => {
  const [state, setState] = useState({ right: false });

  const list = useSelector((state) => state.appReducer.favorite);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorite());
  }, []);

  return (
    <header>
      <Container>
        <Flex
          align={"center"}
          justify="space-between"
          style={{ position: "relative" }}
        >
          <Title>React/Redux Basket</Title>
          <Badge  badgeContent={list.length || 0}>
            <ShoppingBasket
              onClick={() => setState({...state, right: true})}
              color="secondary"
              sx={{ fontSize: 35, cursor: "pointer" }}
            />
          </Badge>
          <BasketWrapper data={list} state={state} setState={setState}></BasketWrapper>
        </Flex>
      </Container>
    </header>
  );
};
const Title = styled.h2`
  margin: 20px 0;
  text-align: center;
  font-family: "Nunito", sans-serif;
`;

export default Header;

// let data = new FormData();

// data.append('file', input.files[0]);

// const options = {
//   method: 'POST',
//   body: data
// }

// const response = await fetch('url', options);
// const res = await response.json();
// console.log(res);
