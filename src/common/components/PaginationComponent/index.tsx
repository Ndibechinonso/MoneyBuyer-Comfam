import { Dispatch, SetStateAction, useState } from "react";

interface PaginationComponentProps {
  isDisabled?: boolean;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  currentPage: number;
  totalPages: number;
  setPage: Dispatch<SetStateAction<number>>;
  loading: boolean;
}

const limits = [1, 3, 5, 10, 20, 50, 100, 200];

const PaginationComponent = ({
  limit,
  setLimit,
  currentPage,
  loading,
  totalPages,
  setPage,
  isDisabled,
}: PaginationComponentProps) => {
  const [pageLimit, setPageLimit] = useState(currentPage + 8);
  
  const pageNumber = (value) => value >= currentPage && value < pageLimit;

  const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const pageNumberArray = () => { 
    var numberArray = [];

    for (var i = 1; i <= totalPages; i++) {
        numberArray.push(i);
    }
    return numberArray;
  };
  const pageArray = pageNumberArray()

  return (
    <div className="paginator_container">
      {/* <div className="d-flex align-items-center">
                <span className="d-none d-md-block me-2 font-12 text-uppercase">items Per Page</span>
                <select value={limit} onChange={(e) => {
                    setLimit(Number(e.target.value));
                    setPage(1)
                }}
                    className="filter-select font-12 p-2 x-small-radius"
                >
                    {limits.map((limit, i) => <option key={i} value={limit} className="font-12">{limit}</option>)}
                </select>
            </div> */}
      {/* <div className="d-flex align-items-center"> */}
      {/* {loading && <Pulse color="#00CCFF" />} */}
      {/* <span className="">{totalPages < 1 ? 0 : currentPage} of {totalPages}</span> */}
      {/* <div className=""> */}
      <button
        className="icoin-pagination-buttons"
        disabled={isDisabled || currentPage <= 1}
        onClick={() => setPage(currentPage - 1)}
      >
      
        <span>{"<"}</span> <span>Prev.</span>
      </button>
      {/* {pageArray.filter((item) => item <= (currentPage + 8)).map((item, index)=> {
              return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>  
      })} */}
      {totalPages > 0 &&
      <>
           {totalPages > 9 ? pageArray.filter((item) =>  (item <= (currentPage + 8) && item > (currentPage - 1))).map((item, index)=> {
              return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>  
      }) : pageArray.filter((item) => item).map((item, index)=> {
        return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>  
})}
</> }

      {/* {pageArray.map((item, index) =>{
        return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>
      })} */}
      {/* {new Array(10).fill(0).filter(isPrime).map((item, index) => {
                        return index
                            // p key={index} className={`page_number ${(index + 1 ) === currentPage ? "active_page" : ""}`} onClick={() => setPage(index + 1)}>{index + 1}</p>
                    })
                        // return  Array(10).fill(0).filter(pageNumber => item)
                        // <p key={index} className={`page_number ${(index + 1 ) === currentPage ? "active_page" : ""}`} onClick={() => setPage(index + 1)}>{index + 1}</p>
                    } */}
      <button
        className="icoin-pagination-buttons"
        disabled={isDisabled || currentPage === totalPages || totalPages === 0}
        onClick={() => setPage(currentPage + 1)}
      >
        <span>Next</span> <span>{">"}</span>
      </button>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default PaginationComponent;
