import React, { useEffect } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { setKakaoUser } from "../stores/KaKaoSlice";
import { useDispatch } from "react-redux";

function KakaoRedirectHandler(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=> {
      let params = new URL(document.location.toString()).searchParams;
      let code = params.get("code"); // 인가코드 받는 부분
      let grant_type = "authorization_code";
      let client_id = process.env.REACT_APP_KAKAO_API_KEY;
      let kakaoUrl = process.env.REACT_APP_KAKAO_REDIRECT_URL;  
    
      const axiosdata = async () => {
        try {
          await axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=http://localhost:3001/oauth/callback/kakao&code=${code}`,
          {
            headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
          }).then((res) => {
            console.log(res);
            const token = res.data.access_token;
            axios.post('http://localhost:4001/api/oauth',
            {access_token : token});
          })
          .catch((error)=>console.log(error))
          // {window.Kakao.init(client_id);
          // window.Kakao.Auth.setAccessToken(res.data.access_token);
          // let data = window.Kakao.API.request({
          //   url: "https://kapi.kakao.com/v2/user/me",
          // });
          // data.then(data => dispatch(setKakaoUser(data.properties)));
          // navigate('/');}
        }
          // {window.Kakao.init(client_id);
          // window.Kakao.Auth.setAccessToken(res.data.access_token);
          // let data = window.Kakao.API.request({
          //   url: "https://kapi.kakao.com/v2/user/me",
          // });
          // data.then(data => dispatch(setKakaoUser(data.properties)));
          // navigate('/');}
        catch (error) {
        console.log(error);
        }
      }
      axiosdata();
      }
      , []);
  return (
    <>로딩중입니다.</>
  )
}

export default KakaoRedirectHandler;