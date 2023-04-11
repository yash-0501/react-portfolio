import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import "./About.css";
import Hello from "./Hello";

const About = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        scrollSnapAlign: "center",
        display: "flex",
        justifyContent: "center",

        '@media screen and (max-width: 768px)': {
          scrollSnapAlign: "none",
        },
      }}
    >
      <Container id="About"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          scrollSnapAlign: "center",
          '@media screen and (max-width: 768px)': {
            scrollSnapAlign: "none",
          },
        }}
      >
        {/* Left */}
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",

              '@media screen and (max-width: 768px)': {
                display: 'none',
              },
          }}
        >
          <Hello />
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",

            '@media screen and (max-width: 768px)': {
              alignItems: 'center',
              textAlign:'center'
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "74px",
            }}
          >
            Think outside the Square Space.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
              gap: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#da4ea2",
                verticalAlign: "middle",
              }}
            >
              <Box
                component="img"
                src="./img/line.png"
                sx={{
                  height: "5px",
                  verticalAlign: "middle",
                }}
              ></Box>
              Who we Are?
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: "24px",
              color: "lightgrey",
            }}
          >
            A creative group of designers and developers with a passion for art.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            disableRipple
            sx={{
              backgroundColor: "#da4ea2",
              fontWeight: "500",
              width: "120px",
              padding: "10px",
              color: "white",
              "&:hover": { backgroundColor: "#da4ea2" },
              borderRadius: "5px",
            }}
          >
            See our Works!
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
