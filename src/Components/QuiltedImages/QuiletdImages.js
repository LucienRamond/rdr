import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiletdImages(props) {
  const images = props.images;

  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      sx={{
        width: "95%",
        marginInline: "auto",
      }}
      elevation={12}
    >
      <Container
        sx={{ paddingTop: "16px", fontSize: "1.5rem", fontWeight: "bold" }}
      >
        Concert acoustique au V & B de Labège
      </Container>
      <ImageList
        sx={{ height: 450, marginInline: "auto" }}
        variant="quilted"
        cols={4}
        rowHeight={180}
      >
        {images.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              onClick={(e) => {
                setLink(e.target.src);
                handleOpen();
              }}
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            width: "max-content",
            maxWidth: "90vw",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 1,
          }}
        >
          <img src={link} onClick={handleClose} />
        </Box>
      </Modal>
    </Paper>
  );
}
