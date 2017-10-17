/**
 * @file JobInfo Component.
 * @author Mahesh
 */
import React from 'react';
import './JobInfo.scss';

class JobInfo extends React.Component {
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

              <div className="panel-edit" id="salary" onClick={() => this.toggleElement('salary')}>

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

                <div className="key-title">Target total</div>
                <div className="key-value key-value--bonus">10 000</div>

              </div>

              <div className="panel-edit" id="targetTotal" onClick={() => this.toggleElement('targetTotal')}>

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

                <div className="key-title">Planwork time</div>
                <div className="key-value key-value--docs">12</div>

              </div>

              <div className="panel-edit" id="planworkTime" onClick={() => this.toggleElement('planworkTime')}>

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

                <div className="key-title">Company ratio</div>
                <div className="key-value key-value--docs">10</div>

              </div>

              <div className="panel-edit" id="companyRatio" onClick={() => this.toggleElement('companyRatio')}>

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

        <div className="row">

          <div className="col-xs-12 col-lg-12">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path
                            d="M38.91,9.93a3.74,3.74,0,0,0-5.28,0l-1,1V1.11A1.11,1.11,0,0,0,31.56,0H4.26A4.26,4.26,0,0,0,0,4.26V35.74A4.26,4.26,0,0,0,4.26,40h27.3a1.11,1.11,0,0,0,1.11-1.11V21.45l6.24-6.24a3.73,3.73,0,0,0,0-5.28ZM16.47,2.22h4.07V6.61l-1.37-1a1.11,1.11,0,0,0-1.34,0l-1.37,1ZM6,37.78H4.26a2,2,0,0,1-2-2V4.26a2,2,0,0,1,2-2H6Zm24.43,0H8.24V23.21H9.75a1.11,1.11,0,0,0,0-2.22H8.24V19h4.14a1.11,1.11,0,0,0,0-2.22H8.24V2.22h6V8.85A1.11,1.11,0,0,0,16,9.73l2.48-1.88L21,9.73a1.31,1.31,0,0,0,1.17.11,1.12,1.12,0,0,0,.62-1V2.22h7.68V13.11L18,25.56a1.11,1.11,0,0,0-.33.79v3.71a1.11,1.11,0,0,0,1.11,1.11H22.5a1.11,1.11,0,0,0,.79-.33l7.16-7.16ZM22,28.94H19.9V26.8L33.47,13.23l2.14,2.14Zm15.3-15.3-.16.16L35,11.66l.16-.16a1.55,1.55,0,0,1,2.14,0A1.57,1.57,0,0,1,37.34,13.64Z"
                            fill="#f4f7fa"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Employment Detail</h2>
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

                <div className="row-no-padding">
                  <div className="col-xs-6 col-lg-6 no-padding">

                    <div className="box-tab active">

                      <div className="box-inner box-inner--no-pad">

                        <div className="toggler active" id="keyJobAttribute">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('keyJobAttribute')}>
                            <h2 className="toggler-title">Key Job Attribute</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Job Code
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
                                      Position
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

                        <div className="toggler active" id="organizationalInfo">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('organizationalInfo')}>
                            <h2 className="toggler-title">
                              Organizational Information
                            </h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Company</span>
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
                                      Business Unit
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
                                      Division
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
                                      Department
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
                                      Location
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
                                      Timezone
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
                                      Cost Center
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
                  <div className="col-xs-6 col-lg-6 no-padding">

                    <div className="box-tab active">

                      <div className="box-inner box-inner--side box-inner--no-pad">

                        <div className="toggler active" id="JobInfo">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('JobInfo')}>
                            <h2 className="toggler-title">Job Information</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Employee Status
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
                                      Supervisor
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
                                      Job Classification
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
                                      Job Title
                                    </span>
                                  </td>
                                  <td>
                                    Text
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Local Job Title
                                    </span>
                                  </td>
                                  <td>
                                    Text
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Pay Grade
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
                                      Regular / Temporary
                                    </span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Regular</option>
                                      <option value="v-2">Temporary</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Standard Weekly Hours
                                    </span>
                                  </td>
                                  <td>
                                    Text
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">FTE</span>
                                  </td>
                                  <td>
                                    Text
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                        </div>

                        <div className="toggler active" id="TimeInfo">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('TimeInfo')}>
                            <h2 className="toggler-title">Time Information</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">
                                      Holiday Calendar
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
                                      Work Schedule
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
                                      Time Profile
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
                  <div className="col-xs-12 col-lg-12 no-padding">

                    <div className="box-tab active">
                      <div className="box-inner--top">

                        <div className="toggler active" id="countrySpecific">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('countrySpecific')}>
                            <h2 className="toggler-title">
                              Country Specific - USA
                            </h2>
                            <span className="box-filter-arrow" />
                          </div>
                          <div className="toggler-content">

                            <div className="row-no-padding">

                              <div className="col-xs-6 col-lg-6 no-padding">

                                <table className="table table--stripes">
                                  <tbody>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Is Fulltime Employee
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">Yes</option>
                                          <option value="v-2">No</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Notes
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Employee Class
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
                                          FLSA Status
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
                                          Is Shift Employee
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">Yes</option>
                                          <option value="v-2">No</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Shift Code
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
                                          Shift Ratew
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Shift Percent
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Is Cross Border Worker
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select">
                                          <option value="v-1">Yes</option>
                                          <option value="v-2">No</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          EEO Job Group
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
                                          Contract Type
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

                              <div className="col-xs-6 col-lg-6 no-padding">

                                <table className="table table--stripes table--side-left">
                                  <tbody>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Continued Sickness Pay Period
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Continued Sickness Pay Measure
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Notice Period
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Initial Entry
                                        </span>
                                      </td>
                                      <td>Date</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Entry into Group
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Corporation
                                        </span>
                                      </td>
                                      <td>Text</td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          EEO Category 1
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
                                          EEO Category 2
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
                                          EEO Category 3
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
                                          EEO Category 4
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
                                          EEO Category 5
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
                                          EEO Category 6
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
                          <td><span className="table-label">EName:</span></td>
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
                            <span className="table-label">Person Address:</span>
                          </td>
                          <td>satara</td>
                        </tr>
                        <tr>
                          <td><span className="table-label">Country:</span></td>
                          <td>India</td>
                        </tr>
                        <tr>
                          <td><span className="table-label">City:</span></td>
                          <td>pune</td>
                        </tr>
                        <tr>
                          <td><span className="table-label">Mobile:</span></td>
                          <td>1234567890</td>
                        </tr>
                      </tbody>
                    </table>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-xs-6 col-lg-6">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 43 31.89"
                    >
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path
                            d="M30.54,2.26A5.78,5.78,0,1,0,36.32,8,5.78,5.78,0,0,0,30.54,2.26Zm0,9A3.26,3.26,0,1,1,33.8,8,3.26,3.26,0,0,1,30.54,11.3Z"
                            fill="#f4f7fa"
                          />
                          <path
                            d="M14.77,0a5.78,5.78,0,1,0,5.78,5.78A5.79,5.79,0,0,0,14.77,0Zm0,9A3.26,3.26,0,1,1,18,5.78,3.26,3.26,0,0,1,14.77,9Z"
                            fill="#f4f7fa"
                          />
                          <path
                            d="M30.53,18.07A12.12,12.12,0,0,0,25.2,19.3l-.58.28-.5-.41A14.75,14.75,0,0,0,0,30.63v1.26H43V30.63A12.53,12.53,0,0,0,30.53,18.07Zm-28,11.31.24-1.2a12.25,12.25,0,0,1,24,0l.24,1.2Zm27,0-.12-.86a14.64,14.64,0,0,0-2.25-6l-.73-1.11L27.66,21a9.68,9.68,0,0,1,2.87-.44,10,10,0,0,1,9.63,7.53l.32,1.25Z"
                            fill="#f4f7fa"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Job Relationships</h2>
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

                    <div className="toggler active" id="globalFields">

                      <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('globalFields')}>
                        <h2 className="toggler-title">Global fields</h2>
                        <span className="box-filter-arrow" />
                      </div>

                      <div className="toggler-content">

                        <table className="table table--stripes">
                          <tbody>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Relationship Type
                                </span>
                              </td>
                              <td>
                                <select className="custom-select">
                                  <option value="v-1">HR Manager</option>
                                  <option value="v-2">Matrix Manager</option>
                                  <option value="v-3">
                                    Additional Manager
                                  </option>
                                  <option value="v-4">Second Manager</option>
                                </select>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Name</span>
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

          <div className="col-xs-6 col-lg-6">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 40 41.86"
                    >
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path
                            d="M14.81,0a5.8,5.8,0,1,0,5.8,5.8A5.8,5.8,0,0,0,14.81,0Zm0,9.07A3.27,3.27,0,1,1,18.08,5.8,3.27,3.27,0,0,1,14.81,9.07Z"
                            fill="#f4f7fa"
                          />
                          <path
                            d="M27.06,29.46H2.53l.24-1.2a12.36,12.36,0,0,1,12-9.87A12.17,12.17,0,0,1,22,20.78a11.67,11.67,0,0,1,1.79,1.59,12.18,12.18,0,0,1,3,5.89Z"
                            fill="none"
                          />
                          <path
                            d="M24.75,19.78l-.29-.28-.27-.27a15,15,0,0,0-3.62-2.18L20.46,17c-.38-.15-.76-.29-1.15-.42L19,16.49q-.53-.15-1.05-.27l-.34-.07c-.38-.08-.76-.13-1.13-.18l-.27,0a13.35,13.35,0,0,0-1.41-.08h0a13.36,13.36,0,0,0-1.41.08l-.27,0c-.38.05-.76.1-1.13.18l-.34.07c-.35.08-.71.17-1.05.27l-.29.09c-.38.13-.77.27-1.14.42L9,17.06a15,15,0,0,0-3.62,2.18l-.56.55A14.84,14.84,0,0,0,0,29.7L0,32H19.4a8.31,8.31,0,0,1-.16-1.66,8.21,8.21,0,0,1,0-.86H2.53l.24-1.2a12.36,12.36,0,0,1,12-9.87A12.17,12.17,0,0,1,22,20.78a11.67,11.67,0,0,1,1.79,1.59,8.8,8.8,0,0,1,2.46-1A15.91,15.91,0,0,0,24.75,19.78Z"
                            fill="#f4f7fa"
                          />
                          <path
                            d="M28.47,18.79a11.51,11.51,0,0,0-4,.71A11.18,11.18,0,0,0,22,20.78a11.52,11.52,0,0,0-5,8.69c0,.28,0,.57,0,.86A11.4,11.4,0,0,0,17.05,32a11.53,11.53,0,1,0,11.41-13.2Zm0,20.76A9.21,9.21,0,0,1,19.4,32a8.31,8.31,0,0,1-.16-1.66,8.21,8.21,0,0,1,0-.86,9.24,9.24,0,0,1,4.51-7.09,8.8,8.8,0,0,1,2.46-1,9,9,0,0,1,2.22-.27,9.23,9.23,0,1,1,0,18.46Z"
                            fill="#f4f7fa"
                          />
                          <path
                            d="M32.24,24.91l-4.6,4.6a1.13,1.13,0,0,0,0,1.63,1.17,1.17,0,0,0,1.63,0l4.6-4.6a1.15,1.15,0,0,0-1.63-1.63Z"
                            fill="#f4f7fa"
                          />
                          <circle
                            cx="28.46"
                            cy="23.41"
                            r="1.15"
                            fill="#f4f7fa"
                          />
                          <ellipse
                            cx="27.62"
                            cy="32.56"
                            rx="1.23"
                            ry="1.6"
                            fill="#f4f7fa"
                          />
                          <circle
                            cx="35.38"
                            cy="30.33"
                            r="1.15"
                            fill="#f4f7fa"
                          />
                          <circle
                            cx="21.54"
                            cy="30.33"
                            r="1.15"
                            fill="#f4f7fa"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Employment Details</h2>
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

                    <div className="toggler active" id="globalFields2">

                      <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('globalFields2')}>
                        <h2 className="toggler-title">Global fields</h2>
                        <span className="box-filter-arrow" />
                      </div>

                      <div className="toggler-content">

                        <table className="table table--stripes">
                          <tbody>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">Hire Date</span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Original Start Date
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Seniority Start Date
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Service Date
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Professional Service Date
                                </span>
                              </td>
                              <td>Date</td>
                            </tr>
                            <tr>
                              <td className="table-align">
                                <span className="table-label">
                                  Rehire Date
                                </span>
                              </td>
                              <td>Date</td>
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

export default JobInfo;
