

function Footer(){
  return (
    <div className="container-fluid p-3 bg-light text-center">
      <div className="row gx-5">
        <div className="col">
          <div className="p-3">
            <img src='/images/logo.png' style={{width:'200px', height:'200px'}}/>
          </div>
        </div>
        <div className="col">
          <div className="col">
            <div className="p-3">주소 서울시 중랑구 용마산로40길</div>
          </div>
          <div className="col">
            <div className="p-3">
              사업자번호 123-45-67890 대표자 강태원
              <br/>이메일주소 rkdxodnjs94@naver.com
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              COPYRIGHT
            </div>
          </div>
        </div>
        <div className="col">
          <div className="col">
            <div className="p-3">
              문의 : 1234-1234
            </div>
          </div>
          <div className="col">
            <div className="p-3">
              오전 9~6시(주말/공휴일 휴무)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;