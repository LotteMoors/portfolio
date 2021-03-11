import React from "react";

import { Card, Layer, Box, Text } from "./styles";

const Interest = () => {
  const info = [
    {
      background: `url('https://i.ibb.co/JCHVkYV/tech.jpg)`,
      label: "Technology",
    },
    {
      background: `url('https://images.unsplash.com/photo-1569184874950-82d38842d1e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')`,
      label: "Nature",
    },
    {
      background: `url('https://i.ibb.co/zx5PX1h/geo.png')`,
      label: "Patterns",
    },
    {
      background: `url('https://wallpapercave.com/wp/wp2022621.jpg')`,
      label: "Neuroscience",
    },
    {
      background: `url('https://i.ibb.co/84NW3sH/Music.jpg)`,
      label: "Music",
    },
  ];

  return (
    <Box>
      {info.map((inf, index) => (
          <Layer key={index} style={{ backgroundImage: `${inf.background}` }}>
        <Card  >
          <Text>{inf.label}</Text>
        </Card>
        </Layer>
      ))}
    </Box>
  );
};

export default Interest;
