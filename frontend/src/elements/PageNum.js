import Pagination from "react-js-pagination";
import { Row, Col } from 'react-bootstrap';
import './PageNum.css';

function PageNum(props){

  const handlePageChange = (page) => {
    props.setPage(page);
  };

  return (
    <Row>
      <Col>
      {/* <Pagination>
        <Pagination.First onClick={()=>{setPage(page-5)}} disabled={page === 1} />
        <Pagination.Prev onClick={()=>{setPage(page-1)}} disabled={page === 1}/>
        {Array(numPages).fill().map((_, i) => {
        return <Pagination.Item
          key={i+1} 
          onClick={()=>{setPage(i+1)}}
          aria-current={ page === (i+1) ? "page" : null}
        >
          {i+1}
        </Pagination.Item>
        })}
        <Pagination.Next onClick={()=>{setPage(page+1)}} disabled={page === numPages}/>
        <Pagination.Last onClick={()=>{setPage(page+5)}} disabled={page === numPages}/>
      </Pagination> */}
      <Pagination
        activePage={props.page}
        itemsCountPerPage={10}
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

export default PageNum;