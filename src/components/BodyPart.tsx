import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';

interface BodyPartProps {
  item: any;
  bodyPart: any;
  setBodyPart: any;
}

const BodyPart = ({ item, bodyPart, setBodyPart }: BodyPartProps) => {
  return (
    <Stack
      alignContent="center"
      justifyContent="center"
      sx={
        bodyPart === item
          ? {
              borderTop: '4px solid #FF2625',
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
          : {
              background: '#fff',
              borderBottomLeftRadius: '20px',
              width: '270px',
              height: '282px',
              cursor: 'pointer',
              gap: '47px',
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt="icon"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
