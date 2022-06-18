import Pagination from "react-js-pagination";
import { Row, Col } from 'react-bootstrap';
import './PageNum.css';

function RevPageNum(props){

  const handlePageChange = (page) => {
    props.setPage(page);
  };

  return (
    <Row>
      <Col>
      <Pagination
        activePage={props.page}
        itemsCountPerPage={props.limit}
        totalItemsCount={props.revdata.length}
        pageRangeDisplayed={5}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </Col>
  </Row>
  )
}

export default RevPageNum;