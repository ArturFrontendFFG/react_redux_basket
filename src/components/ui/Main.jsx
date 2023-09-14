import styled from "@emotion/styled";
import { Container } from "../../assets/styles/Container";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { dataLoad } from "../../redux/actions";
import { Stack } from "@mui/material";

const Main = () => {
  const data = useSelector((state) => state.appReducer.data);

  const dispatch = useDispatch();
  const id = 
  useEffect(() => {
    dispatch(dataLoad());
  }, []);

  return (
    <Container>
      <Stack spacing={2}>
        {data.length ? data.map((item) => <SingleCard key={item.id} item={item} />) : <></>}
      </Stack>
    </Container>
  );
};

export default Main;
