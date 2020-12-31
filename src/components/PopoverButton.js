import React from 'react'
import { Button, Tooltip, Typography} from '@material-ui/core'


const PopoverButton = (props) => {
    return (
        <Tooltip  title={<Typography style={{color:'white',padding:8}} variant="body1" component="h1">Import your todos hassle free ...!</Typography>} arrow >
        <Button
            variant="contained"
            size="small"
            style={{marginRight:6}}
            onClick={() => props.handleOpen(true)}
            color="secondary"
          >
            Import image
          </Button>
        </Tooltip>
    )
}

export default PopoverButton