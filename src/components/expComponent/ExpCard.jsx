import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ExpCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Esperienza
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.role}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.company} - {props.startDate} - {props.endDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ExpCard