import React from 'react';
import Slider from 'react-slick';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OfferPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '250px', // Adjust as needed
  };

  return (
    <Slider {...settings}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ width: '70%', marginTop: '80px' }}>
          <CardMedia
            component="img"
            height="400"
            image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/special-biryani-offer-design-template-65dc5004a103342995dce5028c9de8e1_screen.jpg?ts=1691724794"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Offer 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Limited time offer!.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card sx={{ width: '70%', marginTop: '80px' }}>
          <CardMedia
            component="img"
            height="300"
            image="https://content.jdmagicbox.com/comp/madurai/t2/0452px452.x452.220418234030.n3t2/catalogue/b-to-h-biryani-to-heaven-narimedu-madurai-biryani-restaurants-gq5nyno2ib.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Offer 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Offer closes soon
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card sx={{ width: '70%', marginTop: '80px' }}>
          <CardMedia
            component="img"
            height="300"
            image="https://i.pinimg.com/736x/fb/35/c5/fb35c5ada75f053b82007974513ceb19.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Offer 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Limited time offer!.
            </Typography>
          </CardContent>
          </Card>
          </div>   
            <div>
          <Card sx={{ width: '70%',marginTop:'80px' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/7768-UtsavRestaurant_640x320_Banner.jpg"
            />
          <CardContent>
              <Typography gutterBottom variant="h5">
                Offer 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Breakfast Specials
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card sx={{ width: '70%',marginTop:'80px' }}>
            <CardMedia
              component="img"
              height="300"
              image="https://img.freepik.com/free-psd/food-menu-restaurant-social-media-banner-template_120329-1372.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Offer 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Happy Hour Deals
              </Typography>
            </CardContent>
            </Card>
        </div>
      </Slider>
      
  );
}
