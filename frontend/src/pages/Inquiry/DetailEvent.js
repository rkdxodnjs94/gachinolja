import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useParams } from 'react-router-dom';

function DetailEvent(){

  const { id } = useParams();
  return (
    <>
      <Header />
      <div className="container px-5">
        <img src={`/images/event${id}_detail.jpeg`} style={{width : '100%'}}/>
      </div>
      <Footer />
    </>
  )
}

export default DetailEvent;