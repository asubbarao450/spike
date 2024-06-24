import * as React from 'react';
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

export default function BasicCard() {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>        
         <Typography mt="10px" variant="body2">
          Body Text Goes Here, Body Text Goes Here! Body Text Goes Here, Body
          Text Goes Here! Body Text Goes Here, Body Text Goes Here!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link</Button>
      </CardActions>
    </Card>
  );
}
