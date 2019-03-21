import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any enquires, conferences, work or technical workshops via my phone number and email adrresses below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <ul>
                <div className="widget">
                  <li>
                    <h4>Email: <br/>
                    {resumeData.email1} <br/>
                    {resumeData.email2}
                    </h4>
                  </li>
                </div>
                {/* <p>-------------</p> */}
                <li>
                  <div className="widget">
                    <h4>Phone: <br/>
                    {resumeData.phone} <br/>
                    </h4>
                  </div>
                </li>
                
              </ul>
             
            </aside>
          </div>
        </section>
        );
  }
}
