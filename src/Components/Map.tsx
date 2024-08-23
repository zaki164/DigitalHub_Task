import React, { useCallback, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

interface MapProps {
  locations: { lat: number, lng: number, info1?: string, info2?: string }[],
  StylesMap?: any
}

const MapComponent: React.FC<MapProps> = ({ locations, StylesMap }) => {
  const [mapCenter, setMapCenter] = useState({ lat: 24.7136, lng: 46.6753 });
  const [selectedMarker, setSelectedMarker] = useState<{ lat: number, lng: number, info1?: string, info2?: string } | null>(null);

  const handleMarkerClick = useCallback((marker: { lat: number, lng: number, info1?: string, info2?: string }) => {
    setMapCenter(marker);
    setSelectedMarker(marker);
  }, []);

  const handleCloseInfoWindow = useCallback(() => {
    setSelectedMarker(null);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDynQC-VN1hLnAWd8gfIsFST9bc1dy8QMk',
  });

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={StylesMap || mapStyles}
      center={mapCenter}
      zoom={10}
    >
      {locations.map((location, index) => (
        <Marker key={index} position={location} title={location.info1 || ''} onClick={() => handleMarkerClick(location)} />
      ))}
      {selectedMarker && (
        <InfoWindow
          position={selectedMarker}
          onCloseClick={handleCloseInfoWindow}
        >
          <div>
            {selectedMarker?.info1 && <p className='text-mainColor text-sm-base font-medium'>{selectedMarker?.info1}</p>}
            {selectedMarker?.info2 && <p className='text-mainColor text-sm-base font-medium'>{selectedMarker?.info2}</p>}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : <></>;
};

export default MapComponent;
