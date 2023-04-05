import React, { Component } from "react";
import axios from "axios";
import LinkData from "./LinkData";
import PageNav from "./PageNav";

class UxContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonData: [],
      total: 0,
      targetPage: 1,
    };

    this.handelPageNav = this.handelPageNav.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      this.setState({
        jsonData: res.data,
        total: res.data.length,
      });
      this.handelPageNav = this.handelPageNav.bind(this);
    });
  }

  handelPageNav(data) {
    console.log(
      `targetPage:${data.targetPage}, start:${data.start}, end:${data.end}`
    );
    this.setState({ targetPage: data.targetPage });
  }

  render() {
    const jsonData = this.state.jsonData;
    const totalRow = this.state.total;
    let targetPage = this.state.targetPage;

    return (
      <>
        <p className="tit">React JSON Data Test</p>
        <p className="tot">Total. {totalRow}</p>
        <table className="tb-mg">
          <thead>
            <tr>
              <th>no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            <LinkData jsonData={jsonData} onPageChange={this.handelPageNav} />
          </tbody>
        </table>
        <PageNav
          onPageChange={this.handelPageNav}
          totalRow={totalRow}
          targetPage={targetPage}
        />
      </>
    );
  }
}

export default UxContent;
