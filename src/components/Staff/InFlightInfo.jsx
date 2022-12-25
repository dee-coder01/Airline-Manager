import {
  Button,
  Checkbox,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AccessibleIcon from "@material-ui/icons/Accessible";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";
import SaveIcon from "@material-ui/icons/Save";
import { passenger_actions } from "../../store/passengers-slice";
import updatePassengerData from "../../APIs/UpdatePassangerData";

const style = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "1rem",
    margin: "1rem",
    textAlign: "center",
    color: "gray",
  },
  button: {
    margin: "1rem",
    textAlign: "center",
  },
  corridor: {
    margin: "1rem",
  },
};
export default function CheckInInfo({ onClick, passengerInfo }) {
  const dispatch = useDispatch();
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // const [updating, setUpdating] = useState(false);
  passengerInfo = {
    ...passengerInfo,
    splMeals:
      passengerInfo.splMeals == undefined ? false : passengerInfo.splMeals,
    infants:
      passengerInfo.infants === undefined ? false : passengerInfo.infants,
    wheelChair:
      passengerInfo.wheelChair === undefined ? false : passengerInfo.wheelChair,
    checkedIn:
      passengerInfo.checkedIn === undefined ? false : passengerInfo.checkedIn,
  };
  // function objectComparator(obj1, obj2) {
  //   let data = true;
  //   Object.keys(obj1).forEach((key) => {
  //     if (obj1[key] !== obj2[key]) {
  //       data = false;
  //     }
  //   });
  //   return data;
  // }
  const state = { ...passengerInfo };
  return (
    <>
      <Grid item xs={12} sx={{ zIndex: 5 }}>
        <Paper sx={style.paper}>
          <List component="nav" sx={style.root}>
            <ListItem divider>
              <ListItemText primary="Passenger Details" />
              <Button
                variant="contained"
                color="primary"
                sx={style.button}
                startIcon={<SaveIcon />}
                onClick={async () => {
                  onClick();
                }}
              >
                Close
              </Button>
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Checked In" />
              <Checkbox
                checked={state.checkedIn}
                inputProps={{
                  "aria-label": "primary checkbox",
                }}
              />
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Seat Number" />

              {state.seat}
            </ListItem>
            <ListItem divider>
              <ListItemText primary="Name" /> {state ? state.name : ""}
            </ListItem>
            <Divider />
            <Checkbox
              checked={state.wheelChair}
              // onChange={() =>
              //   setState((prev) => {
              //     return { ...prev, wheelChair: !state.wheelChair };
              //   })
              // }
              inputProps={{
                "aria-label": "primary checkbox",
              }}
            />
            <AccessibleIcon
              color={!state.wheelChair ? "disabled" : "primary"}
            />
            <Checkbox
              checked={state.infants}
              // onChange={() =>
              //   setState((prev) => {
              //     return { ...prev, infants: !state.infants };
              //   })
              // }
              inputProps={{
                "aria-label": "primary checkbox",
              }}
            />
            <ChildFriendlyIcon
              color={!state.infants ? "disabled" : "primary"}
            />
            <Checkbox
              checked={state.splMeals}
              // onChange={() =>
              //   setState((prev) => {
              //     return { ...prev, splMeals: !state.splMeals };
              //   })
              // }
              inputProps={{
                "aria-label": "primary checkbox",
              }}
            />
            <RestaurantMenuIcon
              color={!state.splMeals ? "disabled" : "primary"}
            />
            <Divider light />
          </List>
        </Paper>
      </Grid>
    </>
  );
}
