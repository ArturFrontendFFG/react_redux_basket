import React from "react";
import { Flex } from "../../assets/styles/Flex";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Loader = () => {
  const loading = useSelector((state) => state.appReducer.loading);
  const LoaderBlock = styled(Flex)`
    width: 100%;
    height: 100vh;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    left: 0;
    top: 0;
    z-index: 9999;
  `;
  return (
    <>
      {loading ? (
        <LoaderBlock justify="center" align="center">
          <CircularProgress></CircularProgress>
        </LoaderBlock>
      ) : (
        ""
      )}
    </>
  );
};
export default Loader;
