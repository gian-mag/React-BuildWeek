import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useSelector } from "react-redux"
import { useState } from 'react'
import DelPost from './DelPost'
import { parseISO, format } from 'date-fns'

/* const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
})); */



export default function RecipeReviewCard(props) {


    const account = useSelector((state) => state.account.user)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const [openDel, setOpenDel] = useState(false);

    const handleOpen = (prop) => setOpenDel(true)

    const openPostModal = () => {
        props.handlePutOpen()
        props.getPost(props.post)
    }

    const handleClosed = () => setOpenDel(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <div>
            <Card className="postCard">
                <CardHeader
                    avatar={
                        <Avatar>
                            <img src={props.post.user?.image} alt="user logo" className="userLogoh" />
                        </Avatar>
                    }
                    action={
                        account._id === props.post.user?._id &&
                        (<DropdownButton title={
                            <IconButton aria-label="settings" className="dropDownButton">
                                <MoreVertIcon className="burgerIcon" />
                            </IconButton>} onClick={handleMenu}>
                            <Dropdown.Item href="#/action-1" onClick={openPostModal}>Modifica</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={handleOpen}>Cancella</Dropdown.Item>
                        </DropdownButton>)
                    }
                    title={props.post.user ? (`${props.post.user.name} ${props.post.user.surname}`) : ('Anonymous')}
                    subheader = {format(
                        parseISO(props.post.createdAt), // 1)
                        'd MMMM yyyy - HH:mm'
                      )}
                />
                {
                   props.post.image && <CardMedia

                    component="img"
                    height="194"
                    image={props.post.image}
                    onError= {({currentTarget}) =>{
                        currentTarget.onerror = null; 
                        currentTarget.src="../placehold.webp"
                    }}
                    alt="img"
                />
                }
                
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {props.post.text}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    {/* <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                    
                </CardActions>
                
            </Card>
            <DelPost show={openDel} handleClosed={handleClosed} post={props.post}/>
        </div>
    );
}