import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchFilter from "./SearchFilter";
import { Drawer } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
export default function SearchDrawer({ item }) {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {item &&
          item.expansion.map((sf) => (
            <ListItem disablePadding>
              <SearchFilter item={sf} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <div className="default  over-flw-hid">
      <div className="default flex-ali-str mar-lef-30px">
        {
          <React.Fragment key={"filter"}>
            <Button
              onClick={toggleDrawer(true)}
              style={{ textTransform: "none" }}
            >
              <div className="default gap-7-px flex-dir-row ali-ite-cnt">
                <TuneIcon fontSize="smaller" />
                <span>{"filter"}</span>
              </div>
            </Button>
            <Drawer
              anchor={"left"}
              open={state}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </Drawer>
          </React.Fragment>
        }
      </div>
    </div>
  );
}
