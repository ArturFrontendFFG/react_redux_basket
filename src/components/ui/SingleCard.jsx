import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { Flex } from "../../assets/styles/Flex";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addToFavorite, getFavorite } from "../../redux/actions";

const SingleCard = ({ item }) => {
  const dispatch = useDispatch();

  const Block = styled.div``;

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(addToFavorite(item));
    dispatch(getFavorite());
  };
  
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>

        <Flex style={{ gap: "15px" }}>
          {" "}
          <CardMedia
            component="img"
            sx={{ height: 140, width: 140, borderRadius: 2 }}
            image={item.imageLink}
            title={item.title}
          ></CardMedia>
          <Block>
            <Typography
              variant="body1"
              component="p"
              color="text.secondary"
              sx={{ pr: 3, maxWidth: "500px" }}
            >
              {item.body}
            </Typography>

            <Button
              onClick={handleFavorite}
              sx={{ mt: 2, padding: "5px 25px" }}
              variant="outlined"
              data-id={item.id}
            >
              Add
            </Button>
          </Block>
        </Flex>
      </CardContent>
    </Card>
  );
};

export default SingleCard;
