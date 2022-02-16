import React from 'react';
import home1 from "./../image/tripplan1.png";
import home2 from "./../image/tripplan2.png";
import trip1 from "./../image/trip1.png";
import trip2 from "./../image/trip2.png";
import trip3 from "./../image/trip3.png";
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Sidebar from '../Sidebar/Sidebar';


const Homepage = () => {
    return (
        <div style={{display: 'flex'}}>
            <Grid>
            <Sidebar></Sidebar>
            </Grid>
            <Grid>
            <Container>
           <Grid sx={{ mt: 5 }}>
                <img style={{ width: '100%' }} src={home1} alt='home' />
            </Grid>

            <Grid
                container
                alignItems='center'
                justifyContent='center'
                sx={{ mb: 4, mt: -10 }}>
                <h1>TRIPPLAN</h1>
            </Grid>

            <Grid
                container
                alignItems='center'
                justifyContent='center'
            >
                <TextField
                    sx={{ width: '500px', borderRadius: '50%' }}
                    id="outlined-search"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    // label="Search field" 
                    placeholder='Search for flights, explore, and more'
                    type="search" />
            </Grid>

            <Box sx={{
                mt: 5, mx: "auto", width: '100%', bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2
            }}>
                <div style={{ display: 'flex', height: '100px' }}>
                    <Grid item xs={1} sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === 'warning' ? '#f57c00' : 'warning', p: 3, m: 2
                    }}>
                        <InfoOutlinedIcon />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography><h2>Active Travel advisory</h2></Typography>
                        <Typography sx={{ mt: -2 }}><p>There's a startup travel advisory related to coronavirus (COVID-19).</p></Typography>
                    </Grid>
                </div>
            </Box>

            <Box sx={{
                mt: 5, mx: "auto", width: '100%', bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.50',
                color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2
            }}>
                <div style={{ display: 'flex', height: '100px' }}>
                    <Grid item xs={1} sx={{
                        bgcolor: (theme) =>
                            theme.palette.mode === 'warning' ? '#f57c00' : 'warning', p: 3, m: 2
                    }}>
                        <LocationOnIcon />
                    </Grid>
                    <Grid item xs={11}>
                        <Typography><h1>Where to next?</h1></Typography>
                        <Typography sx={{ mt: -3 }}><p>Start planning your next trip with a little help from TripPlan.</p></Typography>
                    </Grid>
                </div>
            </Box>

            <Grid>
                <Typography><h1>Popular destinations</h1></Typography>
                <div style={{ display: 'flex', height: '100%' }}>
                    <Grid item xs={6}>

                        <Card sx={{mb: 3, borderRadius: 4}}>
                        <div style={{ display: 'flex', height: '150px' }}>
                            <Grid item xs={4}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={trip1}
                                        alt="green iguana"
                                    />
                            </Grid>
                            <Grid  item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Switzerland
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Feb 18 - Feb 22
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Montreux, Lucerne, Zurich, and Geneva.
                                    </Typography>
                                    <Typography align='right'>
                                    <FlightIcon sx={{height: '15px'}} />
                                    BDT 35,550
                                    </Typography>
                                    <Typography align='right'>
                                    <HotelIcon sx={{height: '15px'}} />
                                        BDT 5,550
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </div>
                        </Card>

                        <Card sx={{mb: 3, borderRadius: 4}}>
                        <div style={{ display: 'flex', height: '150px' }}>
                            <Grid item xs={4}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={trip2}
                                        alt="green iguana"
                                    />
                            </Grid>
                            <Grid  item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Paris
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Feb 22 - Feb 27
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Eiffel Tower, Palais Garnier, and Panthéon.
                                    </Typography>
                                    <Typography align='right'>
                                    <FlightIcon sx={{height: '15px'}} />
                                    BDT 41,550
                                    </Typography>
                                    <Typography align='right'>
                                    <HotelIcon sx={{height: '15px'}} />
                                        BDT 8,550
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </div>
                        </Card>

                        <Card sx={{mb: 3, borderRadius: 4}}>
                        <div style={{ display: 'flex', height: '150px' }}>
                            <Grid item xs={4}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={trip3}
                                        alt="green iguana"
                                    />
                            </Grid>
                            <Grid  item xs={8}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Dubai
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Feb 26 - Mar 02
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    The Burj Khalifa, The Dubai Mall, and Bur Dubai.
                                    </Typography>
                                    <Typography align='right'>
                                    <FlightIcon sx={{height: '15px'}} />
                                    BDT 31,550
                                    </Typography>
                                    <Typography align='right'>
                                    <HotelIcon sx={{height: '15px'}} />
                                        BDT 6,550
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </div>
                        </Card>

                    </Grid>
                    <Grid item xs={6}>
                        <img style={{ width: '100%' }} src={home2} alt='home' />
                    </Grid>
                </div>
            </Grid>

        </Container>
            </Grid>
        </div>
        
    );
};

export default Homepage;