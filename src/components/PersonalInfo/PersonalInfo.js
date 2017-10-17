/**
 * @file PersonalInfo Component.
 * @author Mahesh
 */
import React from 'react';
import './PersonalInfo.scss';

class PersonalInfo extends React.Component {
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
                        src="/assets/images/global/sample-avatar.jpg"
                        alt="Samruddhi Vairat"
                        title="Samruddhi Vairat"
                      />
                    </div>
                    <div className="person-data">
                      <h3 className="person-name">Samruddhi Vairat</h3>
                      <div className="person-position">Lorem ipsum dolor</div>
                    </div>
                  </div>
                  <div className="box-inner box-inner--no-pad">
                    <div className="toggler active" id="personalInfo">
                      <div
                        className="toggler-bar js-toggler-bar"
                        onClick={() => this.toggleElement('personalInfo')}
                      >
                        <h2 className="toggler-title">Personal Information</h2>
                        <span className="box-filter-arrow" />
                      </div>
                      <div className="toggler-content" id="personalInfo">
                        <table className="table table--stripes">
                          <tbody>
                            <tr>
                              <td className="table-align" width="50%">
                                <span className="table-label">First Name:</span>
                              </td>
                              <td width="50%">Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Last Name:</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Middle Name:
                                </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Sufix:</span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">Drop-down</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Display Name:
                                </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Formal Name:
                                </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Title:</span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">Drop-down</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Birth Name:</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Initials:</span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Prefix:</span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">Drop-down</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Gender:</span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">Drop-down</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Marital Status
                                </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">Drop-down</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Marital Status Since:
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Second Nationality:
                                </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">
                                    Drop-down for ISO Country Code
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Third Nationality:
                                </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">
                                    Drop-down for ISO Country Code
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Native Preferred Language:
                                </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">
                                    Drop-down for ISO Country Code
                                  </option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Challenge Status:
                                </span>
                              </td>
                              <td>Text</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Certificate Start Date:
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Certificate End Date:
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="toggler active" id="countrySpecificFields">
                      <div
                        className="toggler-bar js-toggler-bar"
                        onClick={() =>
                          this.toggleElement('countrySpecificFields')}
                      >
                        <h2 className="toggler-title">
                          Country Specific Fields
                        </h2>
                        <span className="box-filter-arrow" />
                      </div>
                      <div className="toggler-content">
                        <div className="toggler-content-inner">
                          <div className="table-additional-info">
                            <div className="table-additional-info-ico">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 29.79 20"
                              >
                                <image
                                  width="70"
                                  height="47"
                                  transform="scale(0.43)"
                                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAwCAYAAABDl2dmAAAACXBIWXMAABn9AAAZ/QEDysJxAAACfElEQVRoQ+2bzWsTQRTAe7T/WCwWixcRT16sZ71Uz4KIiIhoq0hFaMBWsYkfICgFEam0SimIF7FpG2q7MZ+lTROzm+zzzeDUJKbvjTZh2tl58AuEffN478fuzhySPgDoUxy7tjSAJBEPCRHoFYWTwweBEPGQJDLQ7EKgpBxBpriBuolG4yaYQvrb5cS5YbqNRqOmiO/KwUZj3CC9QKNJk8SUnGlukF6g0aBJEkpOjhukF2g0aBJPyWEH6cTZ+2n4lNph8w6pnMa+5Dx8lwcRQhKXewjlwL7kfFmrSjnx9wU2N1JyTt1ahkYo3cB60WfzIyXn5qsf0BwXH62za9rZqfoHmv+Sc248DfntoEVOZjOACxPf2bVWyXmxsAmzX8uwuFqRLGV+Ql09Tx2iUmvAdrUB2a0AvJIPn9MVe+U8nS/tKYILvx7ClaRnrxzBvZkcEDdLx9jCu2eEeQ9xzZkGdOQILic8COp6hnL4SIn3EleTa840oCtHMP42z3mRwd0xVso5M7bKeZEvY66OnXLu8nJqQQhD11NsLevkXH2e4dzIuDSp91hxJ1TTwL/IeYlnHhXFch3uvM7C+Yk1eVreKPm716Y/ltha1slZydbk8HPfynD69krLtRM3UjD5oSh3tGXM42pZJ0ds0aNvsjBI5Igt/AHualwt6+R0G6450zg5BE4OgZND4OQQODkEUg53jI4qTg6Bk0Pg5BA4OQRODoGTQ+DkEEg53GEoqjg5BE4OgZNDoOTkuMQIkldyEhrJUSOh5MQ0kqPGUSlHfOCXuMaCqPDnF+y/5fQjjzUW2s6TQvt/HxR44TjyDMloFLIFMauYeajZxV9yHK38Ah02myc3C1moAAAAAElFTkSuQmCC"
                                />
                              </svg>
                            </div>
                            United States
                          </div>

                          <table className="table table--stripes">
                            <tbody>
                              <tr>
                                <td className="table-align">
                                  <span className="table-label">
                                    Ethnic Group:
                                  </span>
                                </td>
                                <td>
                                  <select className="custom-select">
                                    <option value="v-1">Drop-down</option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-align">
                                  <span className="table-label">Veteran:</span>
                                </td>
                                <td>
                                  <select className="custom-select">
                                    <option value="v-1">
                                      Drop-down (Yes/No)
                                    </option>
                                  </select>
                                </td>
                              </tr>
                              <tr>
                                <td className="table-align">
                                  <span className="table-label">
                                    Challenged Veteran:
                                  </span>
                                </td>
                                <td>
                                  <select className="custom-select">
                                    <option value="v-1">Drop-down</option>
                                  </select>
                                </td>
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
          <div className="col-xs-12 col-md-8">
            <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-6">
                <div className="box">
                  <ul className="box-headings js-tabs">
                    <li className="box-heading active">
                      <div className="box-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 41.49 43"
                        >
                          <title>Zasób 3</title>
                          <polygon
                            points="39.99 5.24 36.25 1.5 16.84 20.91 15.1 26.39 20.58 24.65 39.99 5.24 39.99 5.24"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="33.22"
                            y1="4.58"
                            x2="36.96"
                            y2="8.32"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <polyline
                            points="32.1 14.08 32.1 41.5 1.5 41.5 1.5 6.62 31.07 6.62"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="6.75"
                            y1="14.75"
                            x2="21.98"
                            y2="14.75"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="6.75"
                            y1="20.65"
                            x2="16.84"
                            y2="20.65"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="6.75"
                            y1="26.55"
                            x2="14.73"
                            y2="26.55"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <h2 className="box-title">Biographical Information</h2>
                      <ul className="box-actions">
                        <li>
                          <a>Edit</a>
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
                      <div className="box-inner box-inner--no-pad">
                        <div className="toggler active" id="biographicalInfo">
                          <div
                            className="toggler-bar toggler-bar--no-top js-toggler-bar"
                            onClick={() =>
                              this.toggleElement('biographicalInfo')}
                          >
                            <h2 className="toggler-title">
                              Biographical Information
                            </h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">
                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Date of Birth
                                    </span>
                                  </td>
                                  <td>Date</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Country of Birth
                                    </span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Region of Birth
                                    </span>
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Date of Death
                                    </span>
                                  </td>
                                  <td>Date</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Employee Id
                                    </span>
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Employee Global Id
                                    </span>
                                  </td>
                                  <td>Text</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <div className="js-scrollbar">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Company Manager:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Cmp Mgr Of Cmp Mgr:
                                  </span>
                                </td>
                                <td>comManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Operational:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Op Mgr Of Op Mgr:
                                  </span>
                                </td>
                                <td>opManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Functional:
                                  </span>
                                </td>
                                <td>FunManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">Mgr Hr:</span>
                                </td>
                                <td>hrManager</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <span className="table-label">EName:</span>
                              </td>
                              <td>Samruddhi Vairat.</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Contact Person Name:
                                </span>
                              </td>
                              <td>madhu</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Person Address:
                                </span>
                              </td>
                              <td>satara</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Country:</span>
                              </td>
                              <td>India</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">City:</span>
                              </td>
                              <td>pune</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Mobile:</span>
                              </td>
                              <td>1234567890</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <ul className="box-headings js-tabs">
                    <li className="box-heading active">
                      <div className="box-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 43 43"
                        >
                          <title>Zasób 4</title>
                          <path
                            d="M21.5,1.5a20,20,0,1,1-20,20,20,20,0,0,1,20-20Z"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="21.5"
                            y1="1.5"
                            x2="21.5"
                            y2="41.48"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="1.51"
                            y1="21.5"
                            x2="41.49"
                            y2="21.5"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M35.63,7.57c-3.05,2.76-8.25,4.57-14.14,4.57S10.42,10.34,7.37,7.59"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M35.63,35.43c-3.05-2.76-8.25-4.57-14.14-4.57S10.42,32.66,7.37,35.41"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M21.32,41.27a24.07,24.07,0,0,1-10-19.73,24.08,24.08,0,0,1,10-19.71"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M22,41.27A24.07,24.07,0,0,0,32,21.54,24.08,24.08,0,0,0,22,1.83"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <h2 className="box-title">National ID Information</h2>
                      <ul className="box-actions">
                        <li>
                          <a>Edit</a>
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
                      <div className="box-inner box-inner--no-pad gridScroll">
                        <table className="table table--stripes table--typeb">
                          <thead>
                            <tr>
                              <th>Country</th>
                              <th>National ID Card Type</th>
                              <th>National ID</th>
                              <th>Is Primary</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>United States</td>
                              <td>Social Security Number</td>
                              <td>456-30-3092</td>
                              <td>Yes</td>
                            </tr>
                            <tr>
                              <td>India</td>
                              <td>Permament Account Number</td>
                              <td>ABCDE9991C</td>
                              <td>No</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <div className="js-scrollbar">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Company Manager:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Cmp Mgr Of Cmp Mgr:
                                  </span>
                                </td>
                                <td>comManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Operational:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Op Mgr Of Op Mgr:
                                  </span>
                                </td>
                                <td>opManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Functional:
                                  </span>
                                </td>
                                <td>FunManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">Mgr Hr:</span>
                                </td>
                                <td>hrManager</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <span className="table-label">EName:</span>
                              </td>
                              <td>Samruddhi Vairat.</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Contact Person Name:
                                </span>
                              </td>
                              <td>madhu</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Person Address:
                                </span>
                              </td>
                              <td>satara</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Country:</span>
                              </td>
                              <td>India</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">City:</span>
                              </td>
                              <td>pune</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Mobile:</span>
                              </td>
                              <td>1234567890</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-6">
                <div className="box">
                  <ul className="box-headings js-tabs">
                    <li className="box-heading active">
                      <div className="box-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 42.52 43"
                        >
                          <title>Zasób 5</title>
                          <path
                            d="M5.71,1.5H36.82A4.22,4.22,0,0,1,41,5.71V27a4.22,4.22,0,0,1-4.21,4.21H26.51L21.26,41.5,16,31.26H5.71A4.22,4.22,0,0,1,1.5,27V5.71A4.22,4.22,0,0,1,5.71,1.5Z"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <polyline
                            points="15.76 12.89 15.76 24.41 26.91 24.41 26.91 13.71"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <polyline
                            points="12.84 15.69 12.91 15.63 12.84 15.54 21.19 8.09 21.26 8.16 21.34 8.09 29.68 15.54 29.61 15.63 29.68 15.69"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <h2 className="box-title">Address</h2>
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
                      <div className="box-inner box-inner--no-pad">
                        <div className="toggler active" id="homeAddress">
                          <div
                            className="toggler-bar toggler-bar--no-top js-toggler-bar"
                            onClick={() => this.toggleElement('homeAddress')}
                          >
                            <h2 className="toggler-title">Home Address</h2>
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
                        <div className="toggler active" id="mailingAddress">
                          <div
                            className="toggler-bar js-toggler-bar"
                            onClick={() => this.toggleElement('mailingAddress')}
                          >
                            <h2 className="toggler-title">Mailing Address</h2>
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
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <div className="js-scrollbar">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="table-label">Org Unit:</span>
                                </td>
                                <td>unit</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Org Op Level3:
                                  </span>
                                </td>
                                <td>level3</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Org Op Level2:
                                  </span>
                                </td>
                                <td>level2</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Org Op Level1:
                                  </span>
                                </td>
                                <td>level1</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="box">
                  <ul className="box-headings js-tabs">
                    <li className="box-heading active">
                      <div className="box-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 41.46 43"
                        >
                          <title>Zasób 6</title>
                          <path
                            d="M4,1.5H31.46A2.49,2.49,0,0,1,33.94,4V39a2.49,2.49,0,0,1-2.48,2.48H4A2.49,2.49,0,0,1,1.5,39V4A2.49,2.49,0,0,1,4,1.5Z"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M34.94,4.83h4.31a.74.74,0,0,1,.71.75V31.46a.74.74,0,0,1-.71.75H34.94"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="39.25"
                            y1="11.68"
                            x2="34.94"
                            y2="11.68"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="39.25"
                            y1="18.52"
                            x2="34.94"
                            y2="18.52"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="39.25"
                            y1="25.37"
                            x2="34.94"
                            y2="25.37"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M20.17,20.62a14.12,14.12,0,0,1-.6,3.29A14.79,14.79,0,0,0,19,26.8q0,.67.26.67a3.61,3.61,0,0,0,1-.24l.22-.1.43,1.2a8.45,8.45,0,0,1-2,1.1,6,6,0,0,1-2.2.48,1.94,1.94,0,0,1-2.11-2.15,13.5,13.5,0,0,1,.59-3.19,14.6,14.6,0,0,0,.59-2.72,2.67,2.67,0,0,0-.62-1.68l-.19-.26.07-.41a19.69,19.69,0,0,1,4.85-.38,2.27,2.27,0,0,1,.38,1.5Zm-1.79-3.37a2.39,2.39,0,0,1-1.7-.58,1.94,1.94,0,0,1-.61-1.48,1.87,1.87,0,0,1,.76-1.51,2.82,2.82,0,0,1,1.84-.61,2.54,2.54,0,0,1,1.68.5,1.75,1.75,0,0,1,.6,1.42,2.08,2.08,0,0,1-.73,1.58,2.59,2.59,0,0,1-1.82.67Z"
                            fill="#f4f7fa"
                          />
                        </svg>
                      </div>
                      <h2 className="box-title">Work Permit Info</h2>
                      <ul className="box-actions">
                        <li>
                          <a>Edit</a>
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
                      <div className="box-inner box-inner--no-pad gridScroll">
                        <table className="table table--stripes table--typeb">
                          <thead>
                            <tr>
                              <th>Country</th>
                              <th>Document Type</th>
                              <th>Document Title</th>
                              <th>Document Number</th>
                              <th>Issue Date</th>
                              <th>Issue Place</th>
                              <th>Issuing Authority</th>
                              <th>Expiration Date</th>
                              <th>Validated</th>
                              <th>Attachments</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>United States</td>
                              <td>ARE - Labor Card</td>
                              <td>Test</td>
                              <td>&nbsp;</td>
                              <td className="text-center">07/04/2017</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td>&nbsp;</td>
                              <td className="text-center">No</td>
                              <td>&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <div className="js-scrollbar">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Company Manager:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Cmp Mgr Of Cmp Mgr:
                                  </span>
                                </td>
                                <td>comManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Operational:
                                  </span>
                                </td>
                                <td>manager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Op Mgr Of Op Mgr:
                                  </span>
                                </td>
                                <td>opManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">
                                    Mgr Functional:
                                  </span>
                                </td>
                                <td>FunManager</td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="table-label">Mgr Hr:</span>
                                </td>
                                <td>hrManager</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="box-tab">
                      <div className="box-inner box-inner--no-pad">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <span className="table-label">EName:</span>
                              </td>
                              <td>Samruddhi Vairat.</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Contact Person Name:
                                </span>
                              </td>
                              <td>madhu</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">
                                  Person Address:
                                </span>
                              </td>
                              <td>satara</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Country:</span>
                              </td>
                              <td>India</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">City:</span>
                              </td>
                              <td>pune</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="table-label">Mobile:</span>
                              </td>
                              <td>1234567890</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12">
                <div className="box">
                  <ul className="box-headings js-tabs">
                    <li className="box-heading active">
                      <div className="box-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 43.93 43"
                        >
                          <title>Zasób 7</title>
                          <polygon
                            points="1.5 41.5 42.43 41.5 42.43 16.5 21.96 1.5 1.5 16.5 1.5 41.5 1.5 41.5"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <polyline
                            points="42.43 41.5 21.96 24.74 1.5 41.5"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="1.93"
                            y1="17.1"
                            x2="16.82"
                            y2="28.38"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                          <line
                            x1="42"
                            y1="17.1"
                            x2="27.11"
                            y2="28.38"
                            fill="none"
                            stroke="#f4f7fa"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                      <h2 className="box-title">Contact Information</h2>
                      <ul className="box-actions">
                        <li>
                          <a>Edit</a>
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
                      <div className="box-inner box-inner--no-pad">
                        <div className="toggler active" id="emailInfo">
                          <div
                            className="toggler-bar toggler-bar--no-top js-toggler-bar"
                            onClick={() => this.toggleElement('emailInfo')}
                          >
                            <h2 className="toggler-title">Email information</h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">
                            <div className="toggler-content-inner toggler-content-inner--nopad">
                              <table className="table table--stripes table--typeb">
                                <thead>
                                  <tr>
                                    <th>Email type</th>
                                    <th>Email address</th>
                                    <th>Is primary</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Text</td>
                                    <td>cgrant@ACECompany.com</td>
                                    <td>Yes</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="toggler active" id="phoneInfo">
                          <div
                            className="toggler-bar js-toggler-bar"
                            onClick={() => this.toggleElement('phoneInfo')}
                          >
                            <h2 className="toggler-title">Phone information</h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">
                            <div className="toggler-content-inner toggler-content-inner--nopad">
                              <table className="table table--stripes table--typeb">
                                <thead>
                                  <tr>
                                    <th>Phone type</th>
                                    <th>Phone number</th>
                                    <th>Extension</th>
                                    <th>Is primary</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Business</td>
                                    <td>665 - 3421</td>
                                    <td>&nbsp;</td>
                                    <td>Yes</td>
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
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalInfo;
