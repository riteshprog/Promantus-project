import React, { Component } from 'react';
import jsondata from './MockData.json';
//import Descriptiondata from './Description';
import Employee from './Employee';
export default class FrontEnd extends Component {
  constructor(props) {
    super();
    this.state = {
      record: jsondata,
      datadescription: '',
      btntext: false,


    }
    this.btnClick = this.btnClick.bind(this)
  }

  btnClick(data) {
    this.setState(id => {
      alert(data.description)

    })


  }

  render() {
    const { record, btntext } = this.state;
    return (
      <div>
        {record.data.map((data, index) => {
          if (data.type === 'Front End') {
            return (
              <div className="frontend" key={index}>
                {this.state.datadescription === '' ? <ul id={data.id} className="front-border list-unstyled"> <li><span className="step-title">Name:</span><span className="step-info">{data.name}</span></li>
                  <li key="index"><span className="step-title">Category:</span><span className="step-info">{data.category}</span></li>
                  <li key="index"><span className="step-title">Latest Version:</span><span className="step-info">{data.latestVersion}</span></li>
                  <li key="index">

                    <span className="step-title">Documentation:</span><span className="step-info"><a href={data.documentation}>{data.documentation}</a></span></li>
                </ul> : <p>{this.state.datadescription}</p>}

                <p><button  className="btn-right" onClick={this.btnClick.bind(this, data)}>{this.state.btntext === false ? 'Description' : 'Back'}</button></p>

              </div>
            )
          }
        })}
      </div>

    )
  }
}
