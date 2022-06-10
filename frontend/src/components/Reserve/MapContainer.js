// 지도API
import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(37.54258590134978, 127.07111157303885),
			level: 2
        }
        const map = new kakao.maps.Map(container, options);
        // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'center_changed', function() {

        // 지도의  레벨을 얻어옵니다
        const level = map.getLevel();

        // 지도의 중심좌표를 얻어옵니다 
        const latlng = map.getCenter(); 

        console.log('지도 레벨은 ' + level + ' 이고');
        console.log('중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다');
        }, []);
    })    
    return (
        <div id='myMap' style={{width: '500px', height: '300px'}}></div>  
    );
}

export default MapContainer; 