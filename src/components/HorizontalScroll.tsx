import React from 'react';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

interface HorizontalScrollProps {
  data: any;
  bodyPart: any;
  setBodyPart: any;
}

const HorizontalScroll = ({
  data,
  bodyPart,
  setBodyPart,
}: HorizontalScrollProps) => {
  return (
    <div>
      {data.map((item: any) => (
        <Box key={item.id} m="0 40px">
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScroll;
