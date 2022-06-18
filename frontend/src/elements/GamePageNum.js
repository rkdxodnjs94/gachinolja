import Pagination from "react-js-pagination";
import { Row, Col } from 'react-bootstrap';
import './PageNum.css';

function GamePageNum(props){

  const handlePageChange = (page) => {
    props.setPage(page);
  };

  return (
    <Row>
      <Col>
      <Pagination
        activePage={props.page}
        itemsCountPerPage={props.limit}
        totalItemsCount={props.data.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </Col>
  </Row>
  )
}

export default GamePageNum;