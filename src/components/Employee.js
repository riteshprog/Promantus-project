import React from 'react'

export default function Employee(props) {
  console.log(props.record)
  const {id, name, category, latestVersion, documentation} = props.record
  
return (
    <div>
        {props.record.filter((data, index) => {
          if (data.type === 'Front End') {

            return (
              <div className="frontend" key={index}>
                <ul id={data.id} className="front-border list-unstyled"> <li><span className="step-title">Name:</span><span className="step-info">{data.name}</span></li>
                  <li key="index"><span className="step-title">Category:</span><span className="step-info">{data.category}</span></li>
                  <li key="index"><span className="step-title">Latest Version:</span><span className="step-info">{data.latestVersion}</span></li>
                  <li key="index">
                    <span className="step-title">Documentation:</span><span className="step-info"><a href={data.documentation}>{data.documentation}</a></span></li>
                </ul>

                <p><button   className="btn-right" >{props.btntext === false ? 'Description' : 'Back'}</button></p>

              </div>
            )
          } else if (data.type === 'Back End') {
            return (
              <div className="frontend" key={index}>
                <ul id={data.id} className="front-border list-unstyled"> <li><span className="step-title">Name:</span><span className="step-info">{data.name}</span></li>
                  <li key="index"><span className="step-title">Category:</span><span className="step-info">{data.category}</span></li>
                  <li key="index"><span className="step-title">Latest Version:</span><span className="step-info">{data.latestVersion}</span></li>
                  <li key="index">

                    <span className="step-title">Documentation:</span><span className="step-info"><a href={data.documentation}>{data.documentation}</a></span></li>
                </ul>

                <p><button  className="btn-right" >{props.btntext === false ? 'Description' : 'Back'}</button></p>

              </div>
            )

          }


})}

    </div>
  )
}
