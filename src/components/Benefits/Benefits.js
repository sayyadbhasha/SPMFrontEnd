/**
 * @file Benefits Component.
 * @author Mahesh
 */
import React from 'react';

class Benefits extends React.Component {
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
                  <li className="panel-edit-item js-panel-item active" data-keytitle="Salary" data-keyvalue="10 000">Change to salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Base salary" data-keyvalue="2500">Change to base salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Hourly salary" data-keyvalue="25">Change to hourly salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP low" data-keyvalue="1220">Change to MRP low</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP" data-keyvalue="1900">Change to MRP</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP high" data-keyvalue="2250">Change to MRP high</li>
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
                  <li className="panel-edit-item js-panel-item active" data-keytitle="Salary" data-keyvalue="10 000">Change to salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Base salary" data-keyvalue="2500">Change to base salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Hourly salary" data-keyvalue="25">Change to hourly salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP low" data-keyvalue="1220">Change to MRP low</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP" data-keyvalue="1900">Change to MRP</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP high" data-keyvalue="2250">Change to MRP high</li>
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
                  <li className="panel-edit-item js-panel-item active" data-keytitle="Salary" data-keyvalue="10 000">Change to salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Base salary" data-keyvalue="2500">Change to base salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Hourly salary" data-keyvalue="25">Change to hourly salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP low" data-keyvalue="1220">Change to MRP low</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP" data-keyvalue="1900">Change to MRP</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP high" data-keyvalue="2250">Change to MRP high</li>
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
                  <li className="panel-edit-item js-panel-item active" data-keytitle="Salary" data-keyvalue="10 000">Change to salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Base salary" data-keyvalue="2500">Change to base salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="Hourly salary" data-keyvalue="25">Change to hourly salary</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP low" data-keyvalue="1220">Change to MRP low</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP" data-keyvalue="1900">Change to MRP</li>
                  <li className="panel-edit-item js-panel-item" data-keytitle="MRP high" data-keyvalue="2250">Change to MRP high</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

        <div className="row">

          <div className="col-xs-12">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.21 38">
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path d="M15,8a5,5,0,1,0,5,5A5,5,0,0,0,15,8Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,15,16Z" fill="#f4f7fa" />
                          <path
                            d="M22.18,38a1,1,0,0,0,.85-.69l1.44-4.43,4.43,1.44a1,1,0,0,0,1.2-1.41l-5.62-11,.43-.51a13,13,0,1,0-19.7.14l.44.51L.11,32.91A1,1,0,0,0,.24,34a1,1,0,0,0,1.06.3l4.44-1.44,1.44,4.43a1,1,0,0,0,.87.69h.09A1,1,0,0,0,9,37.45l6.08-11.94,6.09,11.94a1,1,0,0,0,.89.55ZM8.33,34.4l-1-3.09a1,1,0,0,0-.5-.58,1,1,0,0,0-.77-.06L3,31.67l4.2-8.24.93.58a13,13,0,0,0,3.4,1.51l1.18.33ZM15,24A11,11,0,1,1,26,13,11,11,0,0,1,15,24Zm2.5,1.81,1.16-.34A13,13,0,0,0,22,23.92l.93-.6,4.26,8.36-3.08-1a1,1,0,0,0-.77.06,1,1,0,0,0-.5.58l-1,3.08Z"
                            fill="#f4f7fa"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Current Benefits</h2>
                  <ul className="box-actions">
                    <li>
                      <a >Edit</a>
                    </li>
                    <li>
                      <a title="Help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="24" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><rect width="50" height="50" fill="none" /><path d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z" fill="#fff" /></svg>
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>

              <div className="box-content">

                <div className="row-no-padding">
                  <div className="col-xs-12 col-lg-12 no-padding">

                    <div className="box-tab active">

                      <div className="box-inner box-inner--no-pad">

                        <div className="toggler active" id="allowance">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('allowance')}>
                            <h2 className="toggler-title">Allowance</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Car Lease Plan</td>
                                  <td>7,000.00 INR Monthly</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Company Car Lease Plan</td>
                                  <td>20,000.00 INR Monthly</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                        </div>

                        <div className="toggler active" id="pensionSavingsRetirement">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('pensionSavingsRetirement')}>
                            <h2 className="toggler-title">Pensions / Savings / Retirement Plans</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Voluntary Pension Contribution</td>
                                  <td>Employee contributes 10,000.00 INR Monthly and
                                                                            Employer contributes 120,00 INR Montly</td>
                                  <td><a className="table-link">Details</a></td>
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

        <div className="row">

          <div className="col-xs-6 col-lg-6">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.36 37.8">
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path
                            d="M26.36,16.32V0H0V16.32H4.43l-4,7L13.19,37.8,25.91,23.37l-4-7ZM2.27,14.06V2.27H24.09V14.06Zm20.88,9-10,11.3-10-11.3L7,16.32h12.3Z"
                            fill="#f4f7fa"
                          />
                          <circle cx="13.17" cy="23.22" r="1.51" fill="#f4f7fa" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Enrollments</h2>
                  <ul className="box-actions">
                    <li>
                      <a >Edit</a>
                    </li>
                    <li>
                      <a title="Help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="24" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><rect width="50" height="50" fill="none" /><path d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z" fill="#fff" /></svg>
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>

              <div className="box-content">

                <div className="row-no-padding">
                  <div className="col-xs-12 col-lg-12 no-padding">

                    <div className="box-tab active">

                      <div className="box-inner box-inner--no-pad">

                        <div className="toggler active" id="toDo">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('toDo')}>
                            <h2 className="toggler-title">To-Do</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Health and Child Plan enrollment due on December
                                                                            31, 2017</td>
                                  <td><a className="table-link">Enroll</a></td>
                                </tr>
                                <tr>
                                  <td>Children Hostel Fee Reimbursement enrollment
                                                                            due on December 31, 2017</td>
                                  <td><a className="table-link">Enroll for Program</a></td>
                                </tr>
                                <tr>
                                  <td>Medical Reimbursement enrollment due on December
                                                                            31, 2017</td>
                                  <td><a className="table-link">Enroll for Program</a></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                        </div>

                        <div className="toggler active" id="activeBenefitEnrollment">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('activeBenefitEnrollment')}>
                            <h2 className="toggler-title">Active Benefit Enrollments</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Voluntary Pension Contribution is effective from
                                                                            July 8, 2017</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Car Lease Plan is effective from July 8, 2017</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Company Car Lease Plan is effective from March
                                                                            31, 2015</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Fuel Expense Reimbursement is effective from
                                                                            April 1, 2015</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Leave Travel Allowance is effectivy from April
                                                                            1, 2015</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                        </div>

                        <div className="toggler active" id="activeProgramEnroll">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('activeProgramEnroll')}>
                            <h2 className="toggler-title">Active Program Enrollments</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Fuel Expense Reimbursement is effective from
                                                                            April 1, 2015</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Leave Travel Allowance is effective from April
                                                                            1, 2015</td>
                                  <td><a className="table-link">Details</a></td>
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

          <div className="col-xs-6 col-lg-6">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.49 38.5"><g id="Warstwa_2" data-name="Warstwa 2"><g id="dashboard"><path d="M37.74,29,24.49,3.31a5.82,5.82,0,0,0-10.5,0L.75,29A6.81,6.81,0,0,0,1,35.59,5.88,5.88,0,0,0,6,38.5H32.49a5.88,5.88,0,0,0,5-2.91A6.82,6.82,0,0,0,37.74,29Zm-2.36,5.32A3.41,3.41,0,0,1,32.49,36H6a3.4,3.4,0,0,1-2.88-1.71A4.28,4.28,0,0,1,3,30.12L16.22,4.46a3.32,3.32,0,0,1,6.05,0L35.52,30.12A4.29,4.29,0,0,1,35.38,34.29Z" fill="#f4f7fa" /><rect x="17.75" y="9.75" width="3" height="13" fill="#f4f7fa" /><rect x="17.75" y="27.75" width="3" height="3" fill="#f4f7fa" /></g></g></svg>
                  </div>
                  <h2 className="box-title">Claims</h2>
                  <ul className="box-actions">
                    <li>
                      <a >Edit</a>
                    </li>
                    <li>
                      <a title="Help">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="24" fill="none" stroke="#fff" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" /><rect width="50" height="50" fill="none" /><path d="M23.53,30.41V28.94a4.75,4.75,0,0,1,1.08-3.23l2.4-3.3c1.25-1.72,1.68-2.55,1.68-3.77a3.22,3.22,0,0,0-3.48-3.34c-2,0-3.3,1.22-3.73,3.41a.32.32,0,0,1-.4.29l-2.26-.4a.32.32,0,0,1-.29-.4,6.42,6.42,0,0,1,6.74-5.7c3.87,0,6.49,2.55,6.49,6.1A7.47,7.47,0,0,1,30,23.27l-2.4,3.3a3.7,3.7,0,0,0-.93,2.69V30.4a.34.34,0,0,1-.36.36H23.89A.33.33,0,0,1,23.53,30.41Zm-.18,3.44a.34.34,0,0,1,.36-.36h2.73a.34.34,0,0,1,.36.36v3.08a.34.34,0,0,1-.36.36H23.71a.34.34,0,0,1-.36-.36Z" fill="#fff" /></svg>
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>

              <div className="box-content">

                <div className="row-no-padding">
                  <div className="col-xs-12 col-lg-12 no-padding">

                    <div className="box-tab active">

                      <div className="box-inner box-inner--no-pad">

                        <div className="toggler active" id="claims">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('claims')}>
                            <h2 className="toggler-title">In-process Claims</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Fuel Expense Reimbursement</td>
                                  <td>7,000.00 INR claim approval pending</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                                <tr>
                                  <td>Company Mobile Reimbursement</td>
                                  <td>3,000.00 INR claim approval pending</td>
                                  <td><a className="table-link">Details</a></td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                        </div>

                        <div className="toggler active" id="processedClaims">

                          <div className="toggler-dropdown">
                            <label htmlFor="benefits-processed-claims">Processed Claims of year</label>
                            <select id="benefits-processed-claims" name="benefits-processed-claims" className="custom-select">
                              <option value="v-1">2015</option>
                              <option value="v-2">2016</option>
                            </select>
                          </div>

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('processedClaims')}>
                            <h2 className="toggler-title">Processed Claims</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes table--typeb">
                              <tbody>
                                <tr>
                                  <td>Leave Travel Allowance</td>
                                  <td>32,000.00 INR claim approved on April 1, 2015</td>
                                  <td><a className="table-link">Details</a></td>
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
    );
  }
}

export default Benefits;
