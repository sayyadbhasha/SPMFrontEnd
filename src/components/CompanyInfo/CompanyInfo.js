/**
 * @file PersonalInfo Component.
 * @author Mahesh
 */
import React from 'react';
import './CompanyInfo.scss';

class CompanyInfo extends React.Component {
  constructor(props) {
    super(props);
    this.toggleElement = this.toggleElement.bind(this);
  }
  toggleElement(elementID) {
    const x = document.getElementById(elementID);
    x.classList.toggle('active');
  }
  render() {
    return (
      <div className="container">
        <div className="row row--panel">
          <div className="col-xs-12 col-md-12 col-lg-3">
            <div className="panel key">
              <div className="key-icon">
                <img src="/assets/images/icons/key-money.svg" alt="" />
              </div>
              <div className="key-data">
                <div className="key-title">Salary</div>
                <div className="key-value key-value--salary">15 000</div>
              </div>
              <div
                className="panel-edit"
                id="salary"
                onClick={() => this.toggleElement('salary')}
              >
                <div className="panel-edit-icon js-panel-edit" />
                <ul className="panel panel-edit-list">
                  <li
                    className="panel-edit-item js-panel-item active"
                    data-keytitle="Salary"
                    data-keyvalue="10 000"
                  >
                    Change to salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Base salary"
                    data-keyvalue="2500"
                  >
                    Change to base salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Hourly salary"
                    data-keyvalue="25"
                  >
                    Change to hourly salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP low"
                    data-keyvalue="1220"
                  >
                    Change to MRP low
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP"
                    data-keyvalue="1900"
                  >
                    Change to MRP
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP high"
                    data-keyvalue="2250"
                  >
                    Change to MRP high
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-3">
            <div className="panel key">
              <div className="key-icon">
                <img src="/assets/images/icons/key-goal.svg" alt="" />
              </div>
              <div className="key-data">
                <div className="key-title">Target Total</div>
                <div className="key-value key-value--bonus">10 000</div>
              </div>
              <div
                className="panel-edit"
                id="targetTotal"
                onClick={() => this.toggleElement('targetTotal')}
              >
                <div className="panel-edit-icon js-panel-edit" />
                <ul className="panel panel-edit-list">
                  <li
                    className="panel-edit-item js-panel-item active"
                    data-keytitle="Salary"
                    data-keyvalue="10 000"
                  >
                    Change to salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Base salary"
                    data-keyvalue="2500"
                  >
                    Change to base salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Hourly salary"
                    data-keyvalue="25"
                  >
                    Change to hourly salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP low"
                    data-keyvalue="1220"
                  >
                    Change to MRP low
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP"
                    data-keyvalue="1900"
                  >
                    Change to MRP
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP high"
                    data-keyvalue="2250"
                  >
                    Change to MRP high
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-3">
            <div className="panel key">
              <div className="key-icon">
                <img src="/assets/images/icons/key-docs.svg" alt="" />
              </div>
              <div className="key-data">
                <div className="key-title">Planwork Time</div>
                <div className="key-value key-value--docs">12</div>
              </div>
              <div
                className="panel-edit"
                id="planworkTime"
                onClick={() => this.toggleElement('planworkTime')}
              >
                <div className="panel-edit-icon js-panel-edit" />
                <ul className="panel panel-edit-list">
                  <li
                    className="panel-edit-item js-panel-item active"
                    data-keytitle="Salary"
                    data-keyvalue="10 000"
                  >
                    Change to salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Base salary"
                    data-keyvalue="2500"
                  >
                    Change to base salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Hourly salary"
                    data-keyvalue="25"
                  >
                    Change to hourly salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP low"
                    data-keyvalue="1220"
                  >
                    Change to MRP low
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP"
                    data-keyvalue="1900"
                  >
                    Change to MRP
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP high"
                    data-keyvalue="2250"
                  >
                    Change to MRP high
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-12 col-lg-3">
            <div className="panel key">
              <div className="key-icon">
                <img src="/assets/images/icons/key-docs.svg" alt="" />
              </div>
              <div className="key-data">
                <div className="key-title">Company Ratio</div>
                <div className="key-value key-value--docs">10</div>
              </div>
              <div
                className="panel-edit"
                id="companyRatio"
                onClick={() => this.toggleElement('companyRatio')}
              >
                <div className="panel-edit-icon js-panel-edit" />
                <ul className="panel panel-edit-list">
                  <li
                    className="panel-edit-item js-panel-item active"
                    data-keytitle="Salary"
                    data-keyvalue="10 000"
                  >
                    Change to salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Base salary"
                    data-keyvalue="2500"
                  >
                    Change to base salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="Hourly salary"
                    data-keyvalue="25"
                  >
                    Change to hourly salary
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP low"
                    data-keyvalue="1220"
                  >
                    Change to MRP low
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP"
                    data-keyvalue="1900"
                  >
                    Change to MRP
                  </li>
                  <li
                    className="panel-edit-item js-panel-item"
                    data-keytitle="MRP high"
                    data-keyvalue="2250"
                  >
                    Change to MRP high
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row--panel">
          <div className="col-xs-12 col-md-4">
            <div className="box">
              <ul className="box-headings">
                <li className="box-heading active">
                  <div className="box-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 47.78 43"
                    >
                      <title>Zasób 1</title>
                      <path
                        d="M35.08,5.12h11.2V41.5H1.5V5.12H12.7m.84-3.62h20.7V8.37H13.54ZM28.29,18H40.17M28.29,22.76H40.17M28.29,27.57H40.17M28.29,32.38h7.49M14.19,25.32A4.45,4.45,0,0,1,11,20.62a3.31,3.31,0,0,1,3.08-3.52h.14a3.31,3.31,0,0,1,3.23,3.39s0,.09,0,.14c0,2.08-.66,3.85-3.22,4.7Zm-3,.55h5.93a3.63,3.63,0,0,1,3.61,3.61v2.88H7.61V29.49a3.62,3.62,0,0,1,3.61-3.61Z"
                        fill="none"
                        stroke="#f4f7fa"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <h2 className="box-title">Personal Information</h2>
                  <ul className="box-actions">
                    <li>
                      <a>Edit</a>
                    </li>
                    <li>
                      <a>History</a>
                    </li>
                    <li>
                      <a title="Help">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                        >
                          <circle
                            cx="25"
                            cy="25"
                            r="24"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            strokeWidth="2"
                          />
                          <rect width="50" height="50" fill="none" />
                          <path
                            d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z"
                            fill="#fff"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="box-content">
                <div className="box-tab active">
                  <div className="person person--horizontal">
                    <div className="person-photo">
                      <img
                        src="/assets/images/global/sample-logo.png"
                        alt="Samruddhi Vairat"
                        title="Samruddhi Vairat"
                      />
                    </div>
                    <div className="person-data">
                      <h3 className="person-name">Company Name</h3>
                      <div className="person-position">Lorem ipsum dolor</div>
                    </div>
                  </div>
                  <div className="box-inner box-inner--no-pad">
                    <div className="toggler active" id="homeAddress">
                      <div
                        className="toggler-bar toggler-bar--no-top js-toggler-bar"
                        onClick={() => this.toggleElement('homeAddress')}
                      >
                        <h2 className="toggler-title">Company Address</h2>
                        <span className="box-filter-arrow" />
                      </div>
                      <div className="toggler-content">
                        <table className="table table--stripes">
                          <tbody>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                      Address Type:
                                    </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">
                                        Drop-Down (Home Address / Mailing Address)
                                      </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                      Country:
                                    </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">
                                        Drop-Down (Home Address / Mailing Address)
                                      </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                      Address Line 1
                                    </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                      Address Line 2
                                    </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">City</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Country</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">State</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">ZIP</span>
                              </td>
                              <td>Text</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CompanyInfo;
