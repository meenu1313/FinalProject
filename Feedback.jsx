
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Feedback = () => {
  const [value, setValue] = useState(null);
  const [hover, setHover] = useState(-1);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '700px' },
        height: '450px', 
        backgroundColor: 'white', 
        padding: '40px', 
        borderRadius: '8px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        sx={{ mb: 2 }}
      />
      <TextField
        id="filled-multiline-static"
        label="Feedback"
        multiline
        rows={10}
        defaultValue=""
        variant="filled"
        sx={{ width: '100%' }}
      />
      <Button variant="contained">SUBMIT</Button>
    </Box>
  );
};

export default Feedback;
