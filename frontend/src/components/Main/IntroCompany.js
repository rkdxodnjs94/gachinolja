import { useEffect } from 'react';
import { animations } from 'react-animation';

function IntroCompany() {
    useEffect(()=>{
      document.getElementById('popin').style.animation = `${animations.popIn}`;
    })
  
    return (
      <>
        <div className="container p-5 d-flex justify-content-around" id='popin'>
          <img src='/images/card/anicon1.gif' alt="이벤트1" style={{width: '100px', height: '100px'}}/>
          <img src='/images/card/anicon2.gif' alt="이벤트2" style={{width: '100px', height: '100px'}}/>
          <img src='/images/card/anicon3.gif' alt="이벤트3" style={{width: '100px', height: '100px'}}/>
          <img src='/images/card/anicon4.gif' alt="이벤트4" style={{width: '100px', height: '100px'}}/>
        </div>
        <div className="container py-3 px-5 d-flex justify-content-around text-center">
            <h5>같이놀자는<br/>간편합니다!</h5>
            <h5>같이놀자는<br/>누구나 가능합니다!</h5>
            <h5>같이놀자는<br/>재밌습니다!</h5> 
            <h5>같이놀자는<br/>빠릅니다!</h5>
        </div>
      </>
    )
  }
  
  export default IntroCompany;