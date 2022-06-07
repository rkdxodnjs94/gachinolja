import { InputGroup, FormControl, Button, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setInput } from '../stores/InputSlice';
import { useNavigate } from 'react-router-dom';

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
    {console.log(input)}
    <InputGroup className="container mb-3 w-50" style={{height:'50px'}}>
      <FormControl
      placeholder="예약할 장소를 입력해보세요"
      aria-label="예약장소"
      aria-describedby="basic-addon2"
      onChange={handleInput}
      />
      <Button variant="outline-success" id="button-addon2">
        검색
      </Button>
    </InputGroup>
    <Row xs={1} md={3} className="g-4 p-5">
      {
        filtered.map((itemlist) => {
          return <Col key={itemlist.id}>
          <Card onClick={()=>{ navigate('/reserve2/' + itemlist.id)}} style={{cursor : 'pointer'}}>
          <Card.Img variant="top" src="holder.js/100px160" />
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