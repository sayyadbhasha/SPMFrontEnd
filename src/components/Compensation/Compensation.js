/**
 * @file Compensation Component.
 * @author Mahesh
 */
import React from 'react';
import './Compensation.scss';

class Compensation extends React.Component {
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.5 38.5">
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <polygon
                            points="0 0 0 38.5 38.5 38.5 38.5 36 34.5 36 34.5 12 32 12 32 36 26.5 36 26.5 16 24 16 24 36 18.5 36 18.5 20 16 20 16 36 10.5 36 10.5 24 8 24 8 36 2.5 36 2.5 0 0 0"
                            fill="#f4f7fa"
                          />
                          <polygon points="24 4.27 24 8.5 26.5 8.5 26.5 0 18 0 18 2.5 22.23 2.5 10.29 14.44 12.06 16.2 24 4.27" fill="#f4f7fa" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">Compensation Information</h2>
                  <ul className="box-actions">
                    <li>
                      <a>Edit</a>
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

                        <div className="toggler active" id="compensationGroup">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('compensationGroup')}>
                            <h2 className="toggler-title">Compensation Group</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr className="table-middle">
                                  <td className="table-align">
                                    <span className="table-label">Pay Type</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Pay Group</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Is Eligible For Benefit</span>
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
                                    <span className="table-label">Is Eligible For Car</span>
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
                                    <span className="table-label">Benefit Rate</span>
                                  </td>
                                  <td>Text</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Compa Ratio</span>
                                  </td>
                                  <td>109.99%</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Range Penetration</span>
                                  </td>
                                  <td>66.67%</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">AnnualizedSalary (AnnualizedSalary)</span>
                                  </td>
                                  <td>185,000 USD</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Total Earning Opportunity (TEO)</span>
                                  </td>
                                  <td>222,000 USD</td>
                                </tr>
                              </tbody>
                            </table>

                          </div>

                          <div className="salary-block">
                            <img src="../../assets/sample.png" alt="" />
                          </div>

                        </div>

                        <div className="toggler active" id="compensation">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('compensation')}>
                            <h2 className="toggler-title">Compensation</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Pay Component</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Basic Pay</option>
                                      <option value="v-2">Additional Pay</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Amount</span>
                                  </td>
                                  <td>Amount</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Currency</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Frequency</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Annual</option>
                                      <option value="v-2">Monthly</option>
                                      <option value="v-3">Weekly</option>
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

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.99 37.97">
                      <g id="Warstwa_2" data-name="Warstwa 2">
                        <g id="dashboard">
                          <path
                            d="M24.39.85a3.08,3.08,0,0,0-4.24,0L7,14H3a3,3,0,0,0-3,3V35a3,3,0,0,0,3,3H31a3,3,0,0,0,3-3v-14l3.12-3.12a3,3,0,0,0,0-4.24h0ZM2,16H32V28H2ZM32,36H2V30H32Zm5.18-19.51L36.11,16l-1.78,1.79-.47-1.63a2.8,2.8,0,0,0-.13-.39l-.47-1.05-1-.47A3,3,0,0,0,31,14H9.85L22.26,1.56Z"
                            fill="#f4f7fa"
                          />
                          <rect x="6.98" y="20.97" width="6" height="4" fill="#f4f7fa" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <h2 className="box-title">One Time Payment</h2>
                  <ul className="box-actions">
                    <li>
                      <a>Edit</a>
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

                        <div className="toggler active" id="oneTimePayment">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('oneTimePayment')}>
                            <h2 className="toggler-title">One Time Payment</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Pay Component</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">One Time Bonus</option>
                                      <option value="v-2">Spot Bonus</option>
                                      <option value="v-3">Manager Appreciation Award</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Amount</span>
                                  </td>
                                  <td>Amount</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Currency</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Payment Date</span>
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

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.07 37.59"><g id="Warstwa_2" data-name="Warstwa 2"><g id="dashboard"><path d="M16,0A16,16,0,0,0,3.47,26L5,24.66A14,14,0,1,1,16,30.07H13.86l1.33-1.65,2.19-2.56-1.53-1.31-5.59,6.52,5.59,6.52,1.53-1.31-3.61-4.21H16A16,16,0,1,0,16,0Z" fill="#f4f7fa" /><polygon points="15.03 8.02 15.03 14.03 11.02 14.03 11.02 16.04 17.04 16.04 17.04 8.02 15.03 8.02" fill="#f4f7fa" /></g></g></svg>
                  </div>
                  <h2 className="box-title">Recurring Deduction / Payment</h2>
                  <ul className="box-actions">
                    <li>
                      <a>Edit</a>
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

                        <div className="toggler active" id="recuringDeductionPayment">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('recuringDeductionPayment')}>
                            <h2 className="toggler-title">Recurring Deduction / Payment</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <table className="table table--stripes">
                              <tbody>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Pay Component</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">One Time Bonus</option>
                                      <option value="v-2">Spot Bonus</option>
                                      <option value="v-3">Manager Appreciation Award</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Amount</span>
                                  </td>
                                  <td>Amount</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Currency</span>
                                  </td>
                                  <td>
                                    <select className="custom-select">
                                      <option value="v-1">Drop-down</option>
                                    </select>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">Start Date</span>
                                  </td>
                                  <td>Date</td>
                                </tr>
                                <tr>
                                  <td className="table-align">
                                    <span className="table-label">End Date</span>
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

        </div>

      </div>
    );
  }
}

export default Compensation;
