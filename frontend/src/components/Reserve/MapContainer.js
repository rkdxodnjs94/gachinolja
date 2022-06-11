// 지도API
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapData from '../../data/mapdata.json';

const { kakao } = window;

const MapContainer = () => {

    const { id } = useParams();
    const [mapData, setMapData] = useState(MapData);

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(mapData[id-1].wido, mapData[id-1].geongdo),
			level: 2
        }
        const map = new kakao.maps.Map(container, options);
    },[]);
        
    return (
        <div id='myMap' style={{width: '500px', height: '300px'}}></div>  
    );
}

export default MapContainer; 