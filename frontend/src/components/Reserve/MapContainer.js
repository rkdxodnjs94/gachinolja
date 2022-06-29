// 지도API
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MapData from '../../data/mapdata.json';
import Data from '../../data/marketdata.json'

const { kakao } = window;

const MapContainer = () => {

    const { id } = useParams();
    const [mapData, setMapData] = useState(MapData);
    const [data, setData] = useState(Data);

    useEffect(() => {

        const mapkey = process.env.REACT_APP_KAKAO_MAP_API_KEY;
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=27f2c1998abde12e546e1ac25ab07778&autoload=false`;
        document.head.appendChild(mapScript);
        let map;
        const onLoadKakaoMap = () => {
            kakao.maps.load(() => {
            const container = document.getElementById('myMap');
            const options = {
                center: new kakao.maps.LatLng(mapData[id-1].wido, mapData[id-1].geongdo),
                level: 2
            }
            map = new kakao.maps.Map(container, options);
        const marker = new kakao.maps.Marker({ 
            // 지도 중심좌표에 마커를 생성합니다 
            position: map?.getCenter() 
        }); 
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        const iwContent = `<div style="padding:5px; width:230px; text-align:center;">${data[id-1].name}</div>`, 
        // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        const infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker); 
            });
        }
        mapScript.addEventListener("load", onLoadKakaoMap);
    },[]);

    return (
        <div id='myMap' style={{width: '800px', height: '400px'}}></div>  
    );
}

export default MapContainer; 