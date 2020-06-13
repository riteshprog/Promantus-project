import React, { Component } from "react";
import jsondata from "./MockData.json";
//import Descriptiondata from './Description';
import Employee from "./Employee";
export default class FrontEnd extends Component {
  constructor(props) {
    super();
    this.state = {
      record: jsondata,
      datadescription: "",
      btntext: false,
      currentIndexData: null
    };
  }

  btnClick = (data, index) => {
    let {currentIndexData} = this.state;
    if(currentIndexData != index) this.setState({btntext: !this.state.btntext, currentIndexData: index})
    else this.setState({btntext: !this.state.btntext, currentIndexData: null})
  };

  render() {
    const { record, btntext } = this.state;
    return (
      <div>
        {record.data.map((data, index) => {
          if (data.type === "Front End") {
            return (
              <div className="frontend" key={index}>
                {this.state.currentIndexData === index?(<p className="description">{data.description}</p>):(
                <ul id={data.id} className="front-border list-unstyled">
                  <li>
                    <span className="step-title">Name:</span>
                    <span className="step-info">{data.name}</span>
                  </li>
                  <li key="index">
                    <span className="step-title">Category:</span>
                    <span className="step-info">{data.category}</span>
                  </li>
                  <li key="index">
                    <span className="step-title">Latest Version:</span>
                    <span className="step-info">{data.latestVersion}</span>
                  </li>
                  <li key="index">
                    <span className="step-title">Documentation:</span>
                    <span className="step-info">
                      <a href={data.documentation}>{data.documentation}</a>
                    </span>
                  </li>
                </ul>)}
                <p>
                  <button
                    className="btn-right"
                    onClick={() => this.btnClick(data, index)}
                  >
                    {this.state.btntext === false ? "Description" : "Back"}
                  </button>
                </p>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
