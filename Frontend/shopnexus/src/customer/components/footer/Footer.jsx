import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          About
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Blog
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Media
        </Typography>
      
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Need Help
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Track Order
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Returns & Refunds
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          FAQs
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Support
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          More Info
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Privacy Policy
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Location
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          India
        </Typography>
        
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
        Copyright &copy; 2025  shopNexus. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Icons made by{' '}
          <Link href="https://www.freepik.com" color="inherit" underline="always">
            Freepik
          </Link>{' '}
          from{' '}
          <Link href="https://www.flaticon.com/" color="inherit" underline="always">
            www.flaticon.com
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
