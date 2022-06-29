import React, { useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { setKakaoUser } from "../stores/KaKaoSlice";
import { useDispatch } from "react-redux";

function KakaoRedirectHandler(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=> {
      let params = new URL(document.location.toString()).searchParams;
      let code = params.get("code"); // 인가코드 받는 부분
      let grant_type = "authorization_code";
      let client_id = process.env.REACT_APP_KAKAO_API_KEY;
      let kakaoUrl = process.env.REACT_APP_KAKAO_REDIRECT_URL;  
    
      async function axiosdata(){
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${kakaoUrl}&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((res) => {
          console.log(res);
          window.Kakao.init(client_id);
          window.Kakao.Auth.setAccessToken(res.data.access_token);
          let data = window.Kakao.API.request({
            url: "/v2/user/me",
          });
          data.then(data => dispatch(setKakaoUser(data.properties)));
          navigate('/');
      }).catch((error) =>
      console.log(error));
      }
      axiosdata();
      }
      , []);
  return (
    <>로딩중입니다.</>
  )
}

export default KakaoRedirectHandler;