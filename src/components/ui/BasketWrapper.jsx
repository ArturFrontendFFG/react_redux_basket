import { Delete } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Drawer,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteFromFavorite } from "../../redux/actions";

const BasketWrapper = ({ data, state, setState }) => {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const dispatch = useDispatch();

  const list = (anchor) => (
    <Box
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: 500 }}
    >
      <List>
        <Stack spacing={2}>
          {data.length ? data.map((item) => (
            <ListItem key={item.id}>
              <Card
                style={{ display: "flex", width: "100%", position: "relative" }}
              >
                <CardMedia
                  sx={{ width: 100, height: 100, borderRadius: 5, m: 2 }}
                  image={item.imageLink}
                  title={item.title}
                ></CardMedia>
                <CardContent>
                  <Typography variant="body1">{item.title}</Typography>
                  <Typography variant="body2">{item.body}</Typography>
                </CardContent>
                <DeleteIcon onClick={() => dispatch(deleteFromFavorite(item.id))}></DeleteIcon>
              </Card>
            </ListItem>
          )): <Typography variant='h4' component='div' style={{margin: '15px', fontFamily: '"Nunito", sans-serif'}}>Корзина пуста</Typography>}
        </Stack>
      </List>
    </Box>
  );
  return (
    <Drawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      {list("right")}
    </Drawer>
  );
};
const DeleteIcon = styled(Delete)`
  position: absolute;
  right: 15px;
  cursor: pointer;
  top: 15px;
`;

export default BasketWrapper;
