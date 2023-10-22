import React from 'react';
import './Sub.css';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';

// import { RxCross2 } from "react-icons/rx";
// import { AiOutlineMenu } from "react-icons/ai";


const Subheader = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <RxCross2 fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    


    return (
        <div>
            <h1>he</h1>
            <Button onClick={handleClick}>
                <AiOutlineMenu /> 
            </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
             
            
        </div>
    );
};

export default Subheader;
