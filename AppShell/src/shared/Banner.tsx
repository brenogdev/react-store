import React from "react";
import { Box, Button } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import * as Styled from "./styles";
import { banner } from "../constants/banner";

export const Banner = () => {
  return (
    <Box>
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {banner.map((item) => (
          <div key={item.id}>
            <Styled.Image alt={item.alt} src={item.image} />
            <p className="legend">{item.legend}</p>
          </div>
        ))}
      </Carousel>
      <Box sx={{
        margin: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Button variant="outlined" color="secondary">
          Go to Shop
        </Button>
      </Box>
    </Box>
  );
};
