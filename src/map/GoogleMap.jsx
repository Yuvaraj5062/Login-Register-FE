import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import 'mapbox-gl/dist/mapbox-gl.css';
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken = '';

const GoogleMap = () => {
    const mapContainerRef = useRef(null);
    const [lng, setLng] = useState(72.8311);
    const [lat, setLat] = useState(21.1702);
    const [zoom, setZoom] = useState(9);

    let map
    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: "metric",
            profile: "mapbox/driving",
        });
        map.addControl(directions, "top-left");

        map.addControl(new mapboxgl.NavigationControl())

        return () => map.remove();

    }, []);

    return <div className="map-container" ref={mapContainerRef} />
}

export default GoogleMap