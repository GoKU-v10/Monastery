import React, { useEffect, useRef, useState } from 'react';

const GoogleMap = ({ monasteries, onMonasterySelect, selectedMonastery }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [streetView, setStreetView] = useState(null);
  const markersRef = useRef([]);

  const monasteryData = monasteries || [
    {
      id: 'rumtek-monastery',
      name: 'Rumtek Monastery',
      position: { lat: 27.2777, lng: 88.5577 },
      description: 'The largest monastery in Sikkim and seat of the Karmapa'
    },
    {
      id: 'pemayangtse-monastery',
      name: 'Pemayangtse Monastery',
      position: { lat: 27.2898, lng: 88.2147 },
      description: 'One of the oldest and most important monasteries in Sikkim'
    },
    {
      id: 'tashiding-monastery',
      name: 'Tashiding Monastery',
      position: { lat: 27.3419, lng: 88.2736 },
      description: 'Sacred monastery on a hilltop with panoramic Himalayan views'
    },
    {
      id: 'enchey-monastery',
      name: 'Enchey Monastery',
      position: { lat: 27.3389, lng: 88.6065 },
      description: 'Historic monastery in Gangtok with traditional Sikkimese architecture'
    },
    {
      id: 'dubdi-monastery',
      name: 'Dubdi Monastery',
      position: { lat: 27.3667, lng: 88.2167 },
      description: 'The oldest monastery in Sikkim, founded by Lhatsun Chempo'
    },
    {
      id: 'phensang-monastery',
      name: 'Phensang Monastery',
      position: { lat: 27.1833, lng: 88.3167 },
      description: 'Peaceful monastery known for its meditation retreats'
    }
  ];

  useEffect(() => {
    const initMap = () => {
      const google = window.google;
      if (!google || !mapRef.current) return;

      const mapInstance = new google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: 27.3389, lng: 88.6065 },
        mapTypeId: 'hybrid'
      });

      const streetViewInstance = new google.maps.StreetViewPanorama(
        document.getElementById('street-view'),
        {
          position: { lat: 27.2777, lng: 88.5577 },
          pov: { heading: 34, pitch: 10 },
          zoom: 1
        }
      );

      mapInstance.setStreetView(streetViewInstance);
      setMap(mapInstance);
      setStreetView(streetViewInstance);

      // Add markers
      const dataToUse = monasteryData.map(m => ({
        id: m.id,
        name: m.name,
        position: m.coordinates || m.position,
        description: m.description
      }));
      
      dataToUse.forEach(monastery => {
        const marker = new google.maps.Marker({
          position: monastery.position,
          map: mapInstance,
          title: monastery.name,
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="12" fill="#8B7355" stroke="white" stroke-width="2"/>
                <path d="M16 8l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" fill="white"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(32, 32)
          }
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 4px 0; color: #8B7355;">${monastery.name}</h3>
              <p style="margin: 0; font-size: 14px;">${monastery.description}</p>
              <button onclick="window.selectMonastery('${monastery.id}')" 
                      style="margin-top: 8px; padding: 4px 8px; background: #8B7355; color: white; border: none; border-radius: 4px; cursor: pointer;">
                View Street View
              </button>
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
        });

        markersRef.current.push({ marker, monastery, infoWindow });
      });
    };

    // Global function for info window button
    window.selectMonastery = (monasteryId) => {
      const dataToUse = monasteryData.map(m => ({
        id: m.id,
        name: m.name,
        position: m.coordinates || m.position,
        description: m.description
      }));
      const monasteryItem = dataToUse.find(m => m.id === monasteryId);
      if (monasteryItem && streetView) {
        streetView.setPosition(monasteryItem.position);
        streetView.setPov({ heading: 34, pitch: 10 });
        onMonasterySelect?.(monasteryItem);
      }
    };

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.onload = initMap;
      document.head.appendChild(script);
    }

    return () => {
      markersRef.current.forEach(({ marker }) => marker.setMap(null));
      markersRef.current = [];
    };
  }, [onMonasterySelect]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-96">
      <div ref={mapRef} className="w-full h-full rounded-lg" />
      <div id="street-view" className="w-full h-full rounded-lg" />
    </div>
  );
};

export default GoogleMap;