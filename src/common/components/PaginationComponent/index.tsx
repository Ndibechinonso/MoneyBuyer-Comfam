import { Dispatch, SetStateAction } from "react";

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
      <button
        className="icoin-pagination-buttons"
        disabled={isDisabled || currentPage <= 1}
        onClick={() => setPage(currentPage - 1)}
      >
        <span>{"<"}</span> <span>Prev.</span>
      </button>
      {totalPages > 0 &&
      <div className="flexRowCenter gap-30">
           {((totalPages - currentPage)) > 8 ? pageArray.filter((item) =>  item <= (currentPage + 8) && item > currentPage - 1 ).map((item, index)=> {
              return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>  
      }) : pageArray.filter((item) => item > (totalPages - 9)).map((item, index)=> {
        return <p key={index} className={`page_number ${item === currentPage ? "active_page" : ""}`} onClick={() => {setPage(item); }}>{item}</p>  
})}
</div> }
      <button
        className="icoin-pagination-buttons"
        disabled={isDisabled || currentPage === totalPages || totalPages === 0}
        onClick={() => setPage(currentPage + 1)}
      >
        <span>Next</span> <span>{">"}</span>
      </button>
    </div>
  );
};

export default PaginationComponent;
