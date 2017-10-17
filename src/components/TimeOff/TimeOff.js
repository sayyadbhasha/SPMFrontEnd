/**
 * @file TimeOff Component.
 * @author Mahesh
 */
import React from 'react';
import './TimeOff.scss';

class TimeOff extends React.Component {
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

        <div className="row">

          <div className="col-xs-12">

            <div className="box">

              <ul className="box-headings js-tabs">

                <li className="box-heading active">
                  <div className="box-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.99 72"><defs /><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M70,28a10.58,10.58,0,0,0-9-4.3A17,17,0,0,0,54.79,25,43.21,43.21,0,0,0,52,18.43a2,2,0,0,0-1.77-1.06H7.05a2,2,0,0,0-1.77,1.06A47.5,47.5,0,0,0,0,40.65C0,52.9,4.2,64.11,11.53,71.42a2,2,0,0,0,1.41.58H44.34a2,2,0,0,0,1.41-.58,38.63,38.63,0,0,0,9.4-16.17C62,53.46,68.5,47.42,71,40.43,72.62,35.76,72.26,31.24,70,28ZM43.5,68H13.79C8.46,62.36,5,54,4.19,44.85H7.34a2,2,0,0,0,0-4H4a18.45,18.45,0,0,1,.16-4h8.17a2,2,0,0,0,0-4H4.65A41.7,41.7,0,0,1,8.28,21.37H49a43.86,43.86,0,0,1,4.28,19.28C53.29,51.35,49.64,61.5,43.5,68ZM67.2,39.1A20.83,20.83,0,0,1,56.31,50.63a51.32,51.32,0,0,0,1-10,50.46,50.46,0,0,0-1.37-11.78A13.23,13.23,0,0,1,61,27.73a6.61,6.61,0,0,1,5.69,2.62C68.24,32.48,68.41,35.67,67.2,39.1Z" /><path className="cls-1" d="M28.64,9.59a2,2,0,0,0,2-2V2a2,2,0,1,0-4,0V7.59A2,2,0,0,0,28.64,9.59Z" /><path className="cls-1" d="M17.56,13.59a2,2,0,0,0,2-2V6a2,2,0,1,0-4,0v5.59A2,2,0,0,0,17.56,13.59Z" /><path className="cls-1" d="M39.72,13.59a2,2,0,0,0,2-2V6a2,2,0,1,0-4,0v5.59A2,2,0,0,0,39.72,13.59Z" /></g></g></svg>
                  </div>
                  <h2 className="box-title">Time-Off Overview</h2>
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

                        <div className="toggler active" id="balanceSection">

                          <div className="toggler-bar toggler-bar--no-top js-toggler-bar" onClick={() => this.toggleElement('balanceSection')}>
                            <h2 className="toggler-title">Balance as of Section</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <div className="time-off-nav">

                              <div className="time-off-balance">
                                                                    Balance as of <br />
                                <div className="time-off-balance-date">Today</div>
                              </div>

                              <div className="time-off-types">

                                <div className="time-off-type type-vacation js-time-off-type" data-type="to-vacation" onClick={() => this.toggleElement('time-off-entry')}>
                                  <div className="type-name">Vacation</div>
                                  <div className="type-counter">16 days</div>
                                </div>

                                <div className="time-off-type type-sick js-time-off-type" data-type="to-sick">
                                  <div className="type-name">Sick Leave</div>
                                  <div className="type-counter">10 days</div>
                                </div>

                                <div className="time-off-type type-other">
                                  <div className="box-take-action js-box-dropdown">
                                    <strong>Other</strong>
                                    <span className="box-filter-arrow" onClick={() => this.toggleElement('take-action')} />

                                    <ul className="take-action box-dropdown-content js-box-dropdown-content" id="take-action">
                                      <li><a className="js-time-off-type" data-type="to-unpaid" >Unpaid ill</a></li>
                                    </ul>

                                  </div>
                                </div>

                              </div>

                            </div>

                          </div>

                        </div>

                        <div className="toggler active" id="timeoffCalendar">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('timeoffCalendar')}>
                            <h2 className="toggler-title">Time-Off Calendar</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <div className="time-off-calendar" id="time-off-calendar" />

                            <div className="time-off-entry" id="time-off-entry">

                              <h2 className="entry-title">Vacation Entry</h2>

                              <form action="#">

                                <div className="time-off-entry-row">

                                  <div className="form-field">
                                    <label htmlFor="entry-vacation-type">* Time Type</label>
                                    <select id="entry-vacation-type" name="entry-vacation-type" className="custom-select">
                                      <option value="to-vacation">Vacation</option>
                                      <option value="to-sick">Sick Leave</option>
                                      <option value="to-unpaid">Unpaid ill</option>
                                    </select>
                                  </div>

                                  <div className="form-field">
                                    <label htmlFor="entry-vacation-start">* Start Date</label>
                                    <input type="text" className="entry-input js-datepicker" name="entry-vacation-start" id="entry-vacation-start" />
                                  </div>

                                  <div className="form-field">
                                    <label htmlFor="entry-vacation-end">* End Date</label>
                                    <input type="text" className="entry-input js-datepicker" name="entry-vacation-end" id="entry-vacation-end" />
                                  </div>

                                </div>

                                <div className="time-off-entry-row">

                                  <div className="form-field">
                                    <label htmlFor="entry-vacation-comment">Comment</label>
                                    <textarea className="entry-textarea" name="entry-vacation-comment" id="entry-vacation-comment" />
                                  </div>

                                </div>

                                <div className="time-off-entry-row">

                                  <div className="form-field">
                                    <input className="entry-submit" type="submit" value="Submit" />
                                  </div>

                                </div>

                              </form>

                            </div>

                          </div>

                        </div>

                        <div className="toggler active" id="viewTeamCalndar">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('viewTeamCalndar')}>
                            <h2 className="toggler-title">View Team Calendar</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <div className="team-absence">
                              <a className="team-absence-link">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M29.33,3H25V1a1,1,0,0,0-2,0V3H17V1a1,1,0,0,0-2,0V3H9V1A1,1,0,0,0,7,1V3H2.67A2.67,2.67,0,0,0,0,5.67V29.33A2.67,2.67,0,0,0,2.67,32H29.33A2.67,2.67,0,0,0,32,29.33V5.67A2.67,2.67,0,0,0,29.33,3ZM30,29.33a.67.67,0,0,1-.67.67H2.67A.67.67,0,0,1,2,29.33V5.67A.67.67,0,0,1,2.67,5H7V7A1,1,0,0,0,9,7V5h6V7a1,1,0,0,0,2,0V5h6V7a1,1,0,0,0,2,0V5h4.33a.67.67,0,0,1,.67.67Z" fill="#4f81bd" /><rect x="7" y="12" width="4" height="3" fill="#4f81bd" /><rect x="7" y="17" width="4" height="3" fill="#4f81bd" /><rect x="7" y="22" width="4" height="3" fill="#4f81bd" /><rect x="14" y="22" width="4" height="3" fill="#4f81bd" /><rect x="14" y="17" width="4" height="3" fill="#4f81bd" /><rect x="14" y="12" width="4" height="3" fill="#4f81bd" /><rect x="21" y="22" width="4" height="3" fill="#4f81bd" /><rect x="21" y="17" width="4" height="3" fill="#4f81bd" /><rect x="21" y="12" width="4" height="3" fill="#4f81bd" /></svg>
                                                                    View Team Absence Calendar
                                                                </a>
                            </div>

                          </div>

                        </div>

                        <div className="toggler active" id="myRequest">

                          <div className="toggler-bar js-toggler-bar" onClick={() => this.toggleElement('myRequest')}>
                            <h2 className="toggler-title">My Request</h2>
                            <span className="box-filter-arrow" />
                          </div>

                          <div className="toggler-content">

                            <div className="time-requests">

                              <div className="single-request">

                                <div className="single-request-details">
                                  <div className="single-request-data">
                                    <strong>3 days Vacation</strong> planned from <strong>Wednesday, July 19</strong> to <strong>Friday, July 21, 2017</strong>
                                  </div>
                                  <div className="single-request-meta">
                                    <a className="single-request-comments">0 Comments</a>
                                    <a className="single-request-cancel">Cancel</a>
                                    <a className="single-request-edit">Edit</a>
                                  </div>
                                </div>

                                <div className="single-request-status">
                                  <div className="request-status">Pending</div>
                                  <div className="request-approver">Approver: Alexander Thompson</div>
                                </div>

                              </div>

                              <div className="single-request">

                                <div className="single-request-details">
                                  <div className="single-request-data">
                                    <strong>3 days Vacation</strong> planned from <strong>Wednesday, July 19</strong> to <strong>Friday, July 21, 2017</strong>
                                  </div>
                                  <div className="single-request-meta">
                                    <a className="single-request-comments">0 Comments</a>
                                    <a className="single-request-cancel">Cancel</a>
                                    <a className="single-request-edit">Edit</a>
                                  </div>
                                </div>

                                <div className="single-request-status">
                                  <div className="request-status">Pending</div>
                                  <div className="request-approver">Approver: Alexander Thompson</div>
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

        </div>

      </div>
    );
  }
}

export default TimeOff;
