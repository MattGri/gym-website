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
    <Stack alignContent="center" justifyContent="center">
      <img
        src={Icon}
        alt="icon"
        style={{
          width: '40px',
          height: '40px',
        }}
      />
    </Stack>
  );
};

export default BodyPart;
