import React, { Component } from "react";

function getPage(targetPage, pageScale, blockSacle, totalRow) {
  totalPage = parseInt(
    totalRow % pageScale === 0 ? totalRow / pageScale : totalRow / pageScale + 1
  );
  if (totalPage === 0) totalPage = 1;

  if (typeof page === "string") {
    currentPage = parseInt(targetPage);
    if (isNaN(currentPage)) currentPage = 1;
  } else {
    currentPage = targetPage;
  }

  start = parseInt(1 + (currentPage - 1) * pageScale);
  end = parseInt(pageScale + (currentPage - 1) * pageScale);

  currentBlock = parseInt(
    currentPage % blockSacle === 0
      ? currentPage / blockSacle
      : currentPage / blockSacle + 1
  );
  startPage = parseInt(1 + (currentBlock - 1) * blockSacle);
  endPage = parseInt(blockSacle + (currentBlock - 1) * blockSacle);

  if (totalPage <= endPage) {
    endPage = totalPage;
  }
}

class PageNav extends Component {
  constructor(props) {
    super(props);
    this.handelPageMove = this.handelPageMove.bind(this);
  }

  handelPageMove(e) {
    console.log(`move..${e.target.value}`);
    console.log(e.target);
    console.log(e.target.st);

    this.props.onPageChange({
      targetPage: e.target.value,
      start: start,
      end: end,
    });
  }

  render() {
    const pageScale = 15;
    const blockSacle = 10;
    const totalRow = this.props.totalRow;
    let targetPage = this.props.targetPage;
    console.log(`targetPage...${targetPage}`);
    getPage(targetPage, pageScale, blockSacle, totalRow);

    console.log(
      `totalPage: ${totalPage}, currentPage: ${currentPage}, currentBlock: ${currentBlock}, start: ${start}, end: ${end}, startPage: ${startPage}, endPage: ${endPage}`
    );

    const prevClassNm = currentBlock > 1 ? "cursor-pt" : "";
    const nextClassNm = totalPage > endPage ? "cursor-pt" : "";

    const pageNum = () => {
      const result = [];
      for (let i = startPage; i <= endPage; i++) {
        if (currentPage === i) {
          result.push(<li key={i}>{i}</li>);
        } else {
          result.push(
            <li
              className="cursor-pt"
              key={i}
              value={i}
              onClick={this.handelPageMove}
            >
              {i}
            </li>
          );
        }
      }
      return result;
    };

    return (
      <div className="tx-ce">
        <ul className="page">
          <li
            className={prevClassNm}
            value={startPage - blockSacle}
            onClick={this.handelPageMove}
          >
            &laquo;
          </li>
          {pageNum()}
          <li
            className={nextClassNm}
            value={endPage + 1}
            st={start}
            onClick={this.handelPageMove}
          >
            &raquo;
          </li>
        </ul>
      </div>
    );
  }
}

let totalPage,
  currentPage,
  currentBlock = 0,
  start,
  end,
  startPage,
  endPage;

export default PageNav;
