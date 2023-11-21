import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import QuiletdImages from "../Components/QuiltedImages/QuiletdImages";

export default function Medias() {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
      <TabPanel value="1">
        <Stack spacing={2}>
          <QuiletdImages images={bessieres_images} />
          <QuiletdImages images={vnb_images} />
        </Stack>
      </TabPanel>
      <TabPanel value="2">Vidéos</TabPanel>
    </TabContext>
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
