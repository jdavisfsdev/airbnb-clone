import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  //   Munge data to fit the shape getCenter requires
  //    {latitude: 21.254685, longitude: 14.55484}
  const coords = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  console.log(selectedLocation);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jdpdx1/ckw1qk7koa19s15qp011muxdy"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              🔥
            </p>
          </Marker>

          {/* The popup above a marker */}
          {selectedLocation.long === item.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setSelectedLocation({})}
              latitude={item.lat}
              longitude={item.long}
            >
              <div className="p-1 mr-1 z-50">{item.title}</div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
