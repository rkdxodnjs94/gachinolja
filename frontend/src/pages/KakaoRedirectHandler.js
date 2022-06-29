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
      let client_id = "193e88e51b15b01cb8641cae6d2e2018";
    
      async function axiosdata(){
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3001/oauth/callback/kakao&code=${code}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then((res) => {
          console.log(res);
          window.Kakao.init('193e88e51b15b01cb8641cae6d2e2018');
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