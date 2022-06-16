import { InputGroup, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../stores/InputSlice';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search(){
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const input = useSelector((state) => {return state.input});
  const revdata = useSelector((state) => {return state.revdata});
  const handleInput = (e) => {
    dispatch(setInput(e.target.value));
  };
  const filtered = revdata.filter((itemlist) => {
      return itemlist.name.includes(input)
  });
  return (
  <>
    <InputGroup className="container searchbar" style={{height:'58px'}}>
      <img src='/images/reserve/search/search.png' height='35' />
      <FormControl
      placeholder="예약할 장소를 입력해보세요"
      aria-label="예약장소"
      aria-describedby="basic-addon2"
      onChange={handleInput}
      className='searchicon'
      />
    </InputGroup>
    <Row xs={1} md={3} className="g-4 p-5">
      { input === '' ? null
        : filtered.map((itemlist) => {
          return <Col key={itemlist.id}>
          <Card onClick={()=>{ navigate('/reserve2/' + itemlist.id)}} style={{cursor : 'pointer'}}>
          <Card.Img variant="top" src={revdata[itemlist.id-1].image} height='250' />
          <Card.Body>
            <Card.Title className='cardname'>{ itemlist.name }</Card.Title>
            <Card.Text className='cardaddress'>
              주소 : { itemlist.address }
            </Card.Text>
          </Card.Body>
          </Card>
        </Col>
        })
      }
    </Row>
  </>
  )
}

export default Search;