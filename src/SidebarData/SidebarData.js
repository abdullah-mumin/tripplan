import React from 'react';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlightIcon from '@mui/icons-material/Flight';
import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export const SidebarData = [

  { title: "TRIPPLAN", 
    icon: <ListAltIcon/>, 
    link: "/tripplan" 
  },
  { title: "Flight", 
    icon: <FlightIcon/>, 
    link: "/flight" 
  },
  { title: "Explore", 
    icon: <SearchIcon/>, 
    link: "/explore" 
  },
  { title: "Attractions", 
  icon: <PhotoCameraIcon/>, 
  link: "/attractions" 
},
  { title: "Stay", 
    icon: <HotelIcon/>, 
    link: "/stay" 
  },
  { title: "Food", 
    icon: <RestaurantIcon/>, 
    link: "/food" 
  },

];

