import React, { useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import GpsOffIcon from '@mui/icons-material/GpsOff';

const GeoPosition = () => {
  const [userLocation, setUserLocation] = useState<GeolocationPosition>();
  const [geoLocationError, setGeoLocationError] = useState<string>();

  
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        setUserLocation,
        (error) => {
          const errorCodeMapping = {
            [error.PERMISSION_DENIED]: "User denied the request for Geolocation.",
            [error.POSITION_UNAVAILABLE]: "Location information is unavailable.",
            [error.TIMEOUT]: "The request to get user location timed out.",
          }
          const errorMessage = errorCodeMapping[error.code] || "An unknown error occurred.";
            // display an error if we cant get the users position
          console.error('Error getting user location:', error, errorMessage);
          setGeoLocationError(errorMessage);
        },
        {enableHighAccuracy : true}
      );
      return () => navigator.geolocation.clearWatch(watchId);
    }
    else {
        // display an error if not supported
        setGeoLocationError('Geolocation is not supported by this browser.');
    }
  }, []);



  return (<>
    {userLocation && (
      <GpsFixedIcon />
    )}
    {geoLocationError &&
      <Alert icon={<GpsOffIcon />} severity="error">{geoLocationError}</Alert>
    }
    </>
  );
}

export default GeoPosition;