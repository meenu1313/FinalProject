// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Button } from '@mui/material';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import { Link } from 'react-router-dom';
// import Bg from './Bg/white.jpeg';




// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   margin: 'left',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div>
//     <Card sx={{ maxWidth: 320 ,position:""  ,marginTop:"10px",marginLeft:"10px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500]}} aria-label="recipe">
            
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Meals Kerala"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/736x/a2/60/99/a260995638f3e959468bc331e9f05894.jpg"
//       />
// <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Meals <br/>
//          price: 100<br/>
//          Time:12:00 to 3:00 pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">
//       <Link to={'/Order'} style={{ textDecoration: 'none', color: 'white' }}>Order</Link>

//       </Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           A meal is different from a snack in that meals are generally larger, more varied, and more filling than snacks. The type of food that is served or consumed at any given time depends on regional customs. Three main meals are often eaten in the morning, early afternoon, and evening in most modern civilizations.
//           </Typography>
          
//         </CardContent>
//       </Collapse>
//     </Card>

// {/* 2 */}
    // <Card sx={{ maxWidth: 320,position:"",marginTop:"-435px", marginLeft:"350px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Chicken biriyani"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Chicken Biriyani <br/>
//          price: 150 <br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
    










// {/* 3 */}



//     <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"700px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Beef Biriyani"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small_2x/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg"
       
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Beef Biriyani <br/>
//          price: 180<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Beef Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>


// {/* 4 */}


// <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"1050px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Mutton biriyani"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://png.pngtree.com/png-clipart/20231020/original/pngtree-savory-mutton-biryani-plated-to-perfection-png-image_13388374.png"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Mutton Biriyani <br/>
//          price: 180<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>

// {/* 5 */}



// <Card sx={{ maxWidth: 320 ,position:"",marginTop:"30px",marginLeft:"10px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Kuzhimandhi"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/oky2o28b1rraeglmyjjy"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Kuzhimandhi <br/>
//          {/* price: 170 (quater)<br/>
//          price: 300 (half)<br/> */}
//          price: 600 (full)<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>



// {/* 6 */}
    

// <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"350px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Alfam"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYyLIB7Jn7qnQj7QteR2pudeSmAtPyZZDlJQ&usqp=CAU"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Alfam <br/>
//           Price: 392<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
    



//     {/* 7 */}

//     <Card sx={{ maxWidth: 320,position:"",marginTop:"-435px",marginLeft:"700px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Grill Chicken"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/originals/15/c3/2e/15c32e366ca69523afeb71805d42bddb.jpg"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Grill Chicken <br/>
//          Price: 300 <br/>
//          Time:   9:00 pm to 2:00 am
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           Chicken is known for its protein benefits, but there are other ways that this lean meat can keep you functioning well.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>

//     {/* 8 */} 


//     <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"1050px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title=" Veg Pulo"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIU_ddZTkpgGBcqnVXmpSYm6rjmCwQ8_5hwEGrN8nFCCNMlb6YS9FT0gVCoEjjNoWndP4&usqp=CAU"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Veg Pulao <br/>
//           Price: 100<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
    
//     {/* 9 */}



// <Card sx={{ maxWidth: 320 ,position:"",marginTop:"30px",marginLeft:"10px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Burger"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/564x/57/78/f4/5778f4a3c1554a60a9673c14be613c70.jpg"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Burger<br/>
//          {/* price: 170 (quater)<br/>
//          price: 300 (half)<br/> */}
//          price: 80(full)<br/>
//          Time:   9:00 Am to 11:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Chicken Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>


//     {/* 10 */}


//     <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"350px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Pizza"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/736x/83/88/46/838846b6cf5a2fea01fbf6f927c49223.jpg"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Pizza <br/>
//           Price: 199<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           ALFAM 400MG TABLET is prescribed for the management of pain and swelling. It is also used for treating inflammatory diseases and rheumatoid disorders including juvenile rheumatoid arthritis, mild to moderate pain, fever, dysmenorrhea, gout, ankylosing spondylitis and acute migraine headache.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
    

// {/* 11 */}

//  <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"700px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Paneer Masala"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/736x/ed/50/a0/ed50a0a4473187c2225b963515fb7f6b.jpg"
       
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Paneer Masala <br/>
//          price: 100<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   <AddShoppingCartIcon/>
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//           The traditional process of Beef Biryani starts by marinating meat in yogurt along with spices and herbs. The raw/uncooked marinated meat is layered at the bottom of a wide pot followed by another layer of par cooked basmati rice, herbs, saffron infused milk, fried onions and ghee or attar (edible essential oil).
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>

// {/* 12 */}

//     <Card sx={{ maxWidth: 320 ,position:"",marginTop:"-435px",marginLeft:"1050px"}}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title=" Butter Naan"
        
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="https://i.pinimg.com/736x/8f/b3/e8/8fb3e807ee214fec5625f130bda03cb5.jpg"
        
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          Butter Naan <br/>
//           Price: 40<br/>
//          Time:   11:00 Am to 3:00 Pm
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//       <IconButton aria-label="ADD TO CART">
//   {/* <AddShoppingCartIcon/> */}
// </IconButton>&nbsp;&nbsp;

//       <Button variant="contained">CART</Button>&nbsp;&nbsp;
//       <Button variant="contained">ORDER</Button>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
        
      
//       </Collapse>
//     </Card>
    
//     </div>
    
//   );
// }











import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Avatar, Button, FormControl, Select, MenuItem } from '@mui/material';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const ExpandMore = ({ expand, ...other }) => (
  <IconButton {...other} />
);

const ProductCard = ({ title, avatarText, imageUrl, description, price, time }) => {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const handleExpandClick = () => setExpanded(!expanded);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  return (
    <Card sx={{ maxWidth: 320, position: "", marginTop: "10px", marginLeft: "10px" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">{avatarText}</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={title}
      />
      <CardMedia component="img" height="194" image={imageUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description} <br />
          Price: {price} <br />
          Time: {time}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <FormControl>
          <Select value={quantity} onChange={handleQuantityChange}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            {/* Add more options if needed */}
          </Select>
        </FormControl>
      
        <Button variant="contained">ADD TO CART</Button>&nbsp;&nbsp;
        <Link to="/Placed">
          <Button variant="contained">Order</Button>
        </Link>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Menubar = () => {
  return (
    <div>

      {/* 1 */}


       <Card sx={{ maxWidth: 320,position:"",marginTop:"20px", marginLeft:"100px"}}>
      <ProductCard
        title="Meals Kerala"
        avatarText="M"
        imageUrl="https://i.pinimg.com/736x/a2/60/99/a260995638f3e959468bc331e9f05894.jpg"
        description="Meals"
        price={100}
        time="12:00 to 3:00 pm"
        
      />
      </Card>

{/* 2 */}

<Card sx={{ maxWidth: 320,position:"",marginTop:"-440px", marginLeft:"510px"}}>
      <ProductCard
        title="Chicken Biriyani"
        avatarText="C"
        imageUrl="https://c.ndtvimg.com/2022-04/fq5cs53_biryani-doubletree-by-hilton_625x300_12_April_22.jpg"
        description="Chicken Biriyani"
        price={150}
        time="11:00 Am to 3:00 Pm"
      />
      </Card>

 {/* 3 */}

 <Card sx={{ maxWidth: 320,position:"",marginTop:"-440px", marginLeft:"930px"}}>
      <ProductCard
        title="Beef Biriyani"
        imageUrl="https://static.vecteezy.com/system/resources/thumbnails/030/496/701/small_2x/aromatic-basmati-biryani-crafted-with-generative-ai-free-photo.jpg"
        description="Beef Biriyani"
        price={180}
        time="11:00 Am to 3:00 Pm"
      />
      </Card>

{/* 4 */}

<Card sx={{ maxWidth: 320,position:"",marginTop:"40px", marginLeft:"510px"}}>
     <ProductCard
  title="Mutton Biriyani"
  imageUrl="https://t3.ftcdn.net/jpg/04/51/16/64/360_F_451166450_ptaMRfy9nop3rq82IBYnAozMrdn1BeTA.jpg"
  description="Mutton Biriyani"
  price={190}
  time="11:00 am to 3:00 pm"
/>
</Card>

{/* 5 */}


<Card sx={{ maxWidth: 320,position:"",marginTop:"-440px", marginLeft:"100px"}}>
<ProductCard
  title="Kuzhimandhi"
  imageUrl="https://whitehouserestaurants.com/assets/images/menu/lunch/chicken-mandhi.png"
description="Kuzhimandhi"
  price={700}
  time="11:00 am to 3:00 pm"
/>
</Card>

{/* 6 */}

<Card sx={{ maxWidth: 320,position:"",marginTop:"-440px", marginLeft:"930px"}}>
      <ProductCard
        title="Alfam"
        imageUrl="data:image/jpeg;base64,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"
        description="Alfam"
        price={450}
        time="11:00 Am to 3:00 Pm"
      />
      </Card>
      
{/* Add more FoodCard components for other food items */}

    </div>
  );
};

export default Menubar;


