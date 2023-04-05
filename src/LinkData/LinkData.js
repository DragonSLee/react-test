import React, { Component } from "react";

class LinkData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const jsonData = this.props.jsonData;
    return (
      <>
        {jsonData.map((data) => {
          return (
            <tr key={data.id}>
              <td className="tx-ce">{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.body}</td>
            </tr>
          );
        })}
      </>
    );
  }
}
export default LinkData;
