import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux'
import { BiUserCircle } from 'react-icons/bi'
import '../../style/ExpCard.css'

const ExpCard = (props) => {

  const experiences = useSelector((state) => state.experiences.experiences)

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Esperienza
          </Typography>
          {
            experiences.map((experience, i) =>
            (
              <div key={i} className="expWrap">

                <BiUserCircle className="userExp" />
                <div>
                  <Typography variant="body2" color="text.secondary">
                    {experience.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {experience.company} - {experience.area}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {experience.description}
                  </Typography>
                </div>
              </div>
            )
            )
          }

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ExpCard