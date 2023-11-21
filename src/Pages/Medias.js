import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import QuiletdImages from "../Components/QuiltedImages/QuiletdImages";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Medias() {
  const [value, setValue] = useState("1");
  const [getUp, setGetUp] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  window.onscroll = () => {
    setGetUp(document.documentElement.scrollTop);
  };

  const getUpstairs = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} centered>
            <Tab
              sx={{
                width: "50%",
              }}
              label="Photos"
              value="1"
            />
            <Tab sx={{ width: "50%" }} label="Vidéos" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "1rem 0 0 0" }}>
          <Stack spacing={2}>
            <QuiletdImages images={bessieres_images} />
            <QuiletdImages images={vnb_images} />
          </Stack>
        </TabPanel>
        <TabPanel value="2">Vidéos</TabPanel>
      </TabContext>

      {getUp > 250 && (
        <Tooltip title="Haut de page">
          <div className="get-upstairs" onClick={getUpstairs}>
            <IconButton onClick={getUpstairs}>
              <KeyboardArrowUpIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </div>
        </Tooltip>
      )}
    </>
  );
}

const vnb_images = [
  {
    img: "./assets/img/concerts/concert_acoustique/1.jpg",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/4.jpg",
    title: "Burger",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/3.jpg",
    title: "Camera",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/2.jpg",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/5.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/6.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/7.jpg",
    title: "Basketball",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/8.jpg",
    title: "Fern",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/20.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/10.jpg",
    title: "Tomato basil",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/11.jpg",
    title: "Sea star",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/12.jpg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/13.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/14.jpg",
    title: "Basketball",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/15.jpg",
    title: "Fern",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/16.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/17.jpg",
    title: "Tomato basil",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/18.jpg",
    title: "Sea star",
  },
  {
    img: "./assets/img/concerts/concert_acoustique/19.jpg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "./assets/img/concerts/concert_acoustique/9.jpg",
    title: "Bike",
    cols: 2,
  },
];
const bessieres_images = [
  {
    img: "./assets/img/concerts/concert_bessieres/3.jpg",
    title: "Breakfast",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/1.jpg",
    title: "Burger",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/2.jpg",
    title: "Camera",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/4.jpg",
    title: "Coffee",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/5.jpg",
    title: "Hats",
    rows: 2,
  },
  {
    img: "./assets/img/concerts/concert_bessieres/6.jpg",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/7.jpg",
    title: "Basketball",
    rows: 2,
  },
  {
    img: "./assets/img/concerts/concert_bessieres/8.jpg",
    title: "Fern",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/9.jpg",
    title: "Mushrooms",
    rows: 2,
  },
  {
    img: "./assets/img/concerts/concert_bessieres/10.jpg",
    title: "Tomato basil",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/11.jpg",
    title: "Sea star",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/13.jpg",
    title: "Bike",
  },
  {
    img: "./assets/img/concerts/concert_bessieres/12.jpg",
    title: "Honey",
  },
];
