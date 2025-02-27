import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const Main = ({movie, handleToDetail}) => {
  
  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        axis={'horizontal'}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        infiniteLoop={true}
      >
        {movie.map((item) => (
          <Box
            sx={{ width: "100%", height: 600, backgroundColor: "#141414" }}
            key={item.id} onClick={() => handleToDetail(item.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="main"
              style={{ objectFit: "cover", width: "100vw", height: "90vh" }}
            />
            <Typography
              position={"absolute"}
              top={150}
              width={"60%"}
              paddingLeft={8}
              variant={"h1"}
              fontSize={"2em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
            >
              {item.title}
            </Typography>
            <Typography
              position={"absolute"}
              top={200}
              width={"40%"}
              paddingLeft={8}
              variant={'h6'}
              fontSize={"1em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
            >
              Released : {item.release_date}
            </Typography>
            <Typography
              position={"absolute"}
              top={230}
              width={"40%"}
              paddingLeft={8}
              variant={'h6'}
              fontSize={"1em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
              display={'flex'}
              flexDirection={"column"}
            >
              {item.overview}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default Main;
