
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux'
import { BiUserCircle } from 'react-icons/bi'
import '../../style/ExpCard.css'
import { Link } from 'react-router-dom'

const ExpSection = (props) => {

    const experiences = useSelector((state) => state.experiences.experiences)

    return (
        <Card className="myCard">


            <CardContent>

                <div className="myIconsWrapper">
                    <Typography gutterBottom variant="h5" component="div">
                        Esperienza

                    </Typography>
                    <div className="myButtonsSect">
                        <div className="myBtnWrap">
                            <a className="myLink" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                    <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="myBtnWrap">
                            <Link to={"/experience"} className="myLink">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match iconExp" width="24" height="24" focusable="false">
                                    <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>

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

        </Card >
    );
}

export default ExpSection