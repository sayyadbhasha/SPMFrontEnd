/**
 * @file Add Employee Component.
 * @author Sunny
 */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { Link } from 'react-router';
// import { getTranslate, getActiveLanguage } from 'react-localize-redux';
import ReactSuperSelect from 'react-super-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './AddEmployee.scss';
import './AddEmployeeExtra.scss';
import {
    //modifyHireDate,
    getCurrentEmployee,
    updateCompany,
    updateEventReason,
    //modifyDOB,
    //updateCountryOfBirth,
    //modifyDateOfDeath,
    //modifyCertificateStartDate,
    //modifyCertificateEndDate,
    updateEmployeeData } from '../../actions/EmployeeActions';

import { updateNewEmployee, findNewEmployee } from '../../services/Employee.service';
import DatePickerCustom from './DatePickerCustom';

class AddEmployee extends React.Component {
  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.toggleElement = this.toggleElement.bind(this);
    // this.tabChange = this.tabChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.state = {
      syncedWithServer: true,
      breadcrumbPosition: 1,
      modifyHireDateErrorText: '',
      modifyCompanyErrorText: '',
      modifyEventReasonErrorText: '',
      modifyDOBErrorText: '',
      modifyCountryOfBirthText: '',
      modifyDateOfDeathErrorText: '',
      modifyCertificateStartDateErrorText: '',
      modifyMaritalStatusSinceDateErrorText: '',
      modifyCertificateEndDateErrorText: '',
      currentEmployee: [{ identify: { hireDate: new Date(), company: '', eventReason: '' }, personalInformation: { biographicalInformation: { DOB: new Date(), CountryOfBirth: '', DateOfDeath: new Date() }, personalInformation: { DOB: new Date(), CountryOfBirth: '', DateOfDeath: new Date() } } }]
    };
  }
  componentWillMount() {
    this.props.dispatch(getCurrentEmployee());
    /*if (this.props.newEmployee) {
      updateNewEmployee({ employee: this.props.newEmployee }, true, this.props.dispatch);
    }*/
  }

  componentDidMount() {
    if (this.props.newEmployee) {
      findNewEmployee({ employee: this.props.newEmployee }, true, this.props.dispatch);
    }
  }

  setCompany = (value) => {
    console.log(value, 'value');
    if (typeof value !== 'undefined') {
      this.props.dispatch(
          updateCompany(
              value.companyId
          )
      );
      this.setState({ modifyCompanyErrorText: '' });
    }
  }

  setEventReason = (value) => {
    if (typeof value !== 'undefined') {
      this.props.dispatch(
          updateEventReason(
              value.eventReasonId
          )
      );
      this.setState({ modifyEventReasonErrorText: '' });
    }
  }

  /*setCountryOfBirth = (value) => {
    console.log(value, 'value');
    if (typeof value !== 'undefined') {
      this.props.dispatch(
          updateCountryOfBirth(
              value.CountryOfBirthId
          )
      );
      this.setState({ modifyCountryOfBirthText: '' });
    }
  }*/
  /*modifyDOB = (date) => {
    this.props.dispatch(
        modifyDOB(
            date
        )
    );
    this.setState({ modifyDOBErrorText: '' });
  }
  modifyHireDate = (date) => {
    this.props.dispatch(
        modifyHireDate(
            date
        )
    );
  }*/
  setSyncedWithServer = (value) => {
    console.log(value, 'setSyncedWithServer');
    this.state.syncedWithServer = value;
  }
  toggleElement(elementID) {
    const x = document.getElementById(elementID);
    x.classList.toggle('active');
  }
  /*modifyDateOfDeath = (date) => {
    this.props.dispatch(
        modifyDateOfDeath(
            date
        )
    );
  }
  modifyCertificateStartDate = (date) => {
    this.props.dispatch(
        modifyCertificateStartDate(
            date
        )
    );
  }
  modifyCertificateEndDate = (date) => {
    this.props.dispatch(
        modifyCertificateEndDate(
            date
        )
    );
  }*/
  updateEmployeeData = (data) => {
    this.setSyncedWithServer(false);
    this.props.dispatch(
        updateEmployeeData(
            { value: data.target.value, field: data.target.name }
        )
    );
  }
  save() {
    if (!this.state.syncedWithServer) {
      console.log('saving the employee data');
      console.log({ employee: this.props.newEmployee });
      updateNewEmployee({ employee: this.props.newEmployee }, false, this.props.dispatch, this.setSyncedWithServer);
    }
  }
  nextStep() {
    switch (this.state.breadcrumbPosition) {
      case 1: {
        console.log(this.props, 'PROPS');
        if (this.props.newEmployee) {
          /* if (this.props.newEmployee.identify.hireDate !== '') {
           this.setState({ modifyHireDateErrorText: 'Hire Date cannot be Empty' });
           }
           if (this.props.newEmployee.identify.company !== '') {
           this.setState({ modifyCompanyErrorText: 'Company cannot be Empty' });
           }
           if (this.props.newEmployee.identify.eventReason !== '') {
           this.setState({ modifyEventReasonErrorText: 'Event Reason cannot be Empty' });
           } */
          setTimeout(() => {
            if (this.state.modifyHireDateErrorText === '' && this.state.modifyEventReasonErrorText === '' && this.state.modifyCompanyErrorText === '') {
              const p = document.getElementById('identify');
              const n = document.getElementById('personalInfo');
              document.getElementById('step2').style.display = 'block';
              document.getElementById('prevButton').style.display = 'block';
              document.getElementById('step1').style.display = 'none';
              if (p.classList.contains('active')) {
                p.classList.remove('active');
                p.classList.add('done');
              }
              if (n.classList.contains('active')) {
                n.classList.remove('active');
              } else {
                n.classList.add('active');
              }
              this.setState({ breadcrumbPosition: 2 });
            }
          }, 50);
        }
        break;
      }

      case 2: {
        if (this.props.newEmployee) {
          if (this.props.newEmployee.personalInformation.biographicalInformation.DOB === '') {
            this.setState({ modifyDOBErrorText: 'Date Of Birth cannot be Empty' });
          }
          if (this.props.newEmployee.personalInformation.biographicalInformation.CountryOfBirth === '') {
            this.setState({ modifyCountryOfBirthText: 'Country Of Birth cannot be Empty' });
          }
          if (this.props.newEmployee.personalInformation.biographicalInformation.DateOfDeath === '') {
            this.setState({ modifyDateOfDeathErrorText: 'Date Of Death cannot be Empty' });
          }
          setTimeout(() => {
            if (this.state.modifyDOBErrorText === '' && this.state.modifyCountryOfBirthText === '' && this.state.modifyDateOfDeathErrorText === '') {
              const pi = document.getElementById('personalInfo');
              const ji = document.getElementById('jobInfo');
              document.getElementById('step3').style.display = 'block';
              document.getElementById('prevButton').style.display = 'block';
              document.getElementById('step1').style.display = 'none';
              document.getElementById('step2').style.display = 'none';
              if (pi.classList.contains('active')) {
                pi.classList.remove('active');
                pi.classList.add('done');
              }
              if (ji.classList.contains('active')) {
                ji.classList.remove('active');
              } else {
                ji.classList.add('active');
              }
              this.setState({ breadcrumbPosition: 3 });
            }
          }, 50);
        }
        break;
      }

      case 3: {
        const jin = document.getElementById('jobInfo');
        const c = document.getElementById('compensationInfo');
        document.getElementById('step4').style.display = 'block';
        document.getElementById('prevButton').style.display = 'block';
        document.getElementById('nextButton').style.display = 'none';
        document.getElementById('saveButton').style.display = 'block';
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        if (jin.classList.contains('active')) {
          jin.classList.remove('active');
          jin.classList.add('done');
        }
        if (c.classList.contains('active')) {
          c.classList.remove('active');
        } else {
          c.classList.add('active');
        }
        this.setState({ breadcrumbPosition: 4 });
        break;
      }

      default: {
        const i = document.getElementById('identify');
        document.getElementById('step1').style.display = 'block';
        document.getElementById('prevButton').style.display = 'block';
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
        i.classList.remove('done');
        // this.setState({ breadcrumbPosition: 1 });
        break;
      }
    }
  }
  prevStep() {
    switch (this.state.breadcrumbPosition) {
      case 4: {
        const jin = document.getElementById('jobInfo');
        const c = document.getElementById('compensationInfo');
        document.getElementById('step3').style.display = 'block';
        document.getElementById('prevButton').style.display = 'block';
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
        if (jin.classList.contains('done')) {
          jin.classList.remove('done');
          jin.classList.add('active');
        }
        if (c.classList.contains('active')) {
          c.classList.remove('active');
        }
        this.setState({ breadcrumbPosition: 3 });
        break;
      }
      case 3: {
        const p = document.getElementById('personalInfo');
        const ji = document.getElementById('jobInfo');
        document.getElementById('step2').style.display = 'block';
        document.getElementById('prevButton').style.display = 'block';
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
        if (p.classList.contains('done')) {
          p.classList.remove('done');
          p.classList.add('active');
        }
        if (ji.classList.contains('active')) {
          ji.classList.remove('active');
        }
        this.setState({ breadcrumbPosition: 2 });
        break;
      }
      case 2: {
        const i = document.getElementById('identify');
        const pi = document.getElementById('personalInfo');
        document.getElementById('step1').style.display = 'block';
        document.getElementById('prevButton').style.display = 'none';
        document.getElementById('nextButton').style.display = 'block';
        document.getElementById('saveButton').style.display = 'none';
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
        if (i.classList.contains('done')) {
          i.classList.remove('done');
          i.classList.add('active');
        }
        if (pi.classList.contains('active')) {
          pi.classList.remove('active');
        }
        this.setState({ breadcrumbPosition: 1 });
        break;
      }
      default: {
        break;
      }
    }
  }
  render() {
    console.log('rendering');
    console.log(this.props.newEmployee);
    /*const hireDateDay = (this.props.newEmployee.identify.identify.identify.hireDate)
     ? this.props.newEmployee.identify.identify.identify.hireDate
     : new Date();*/
    const hireDateDay = (this.props.newEmployee.identify.identify.identify.hireDate);
    const formattedHireDateDay = (hireDateDay)
        ? moment(hireDateDay).format('DD-MMM-YYYY')
        : '';
    /* const DOBDay = (this.props.newEmployee.personalInformation.biographicalInformation.DOB)
     ? this.props.newEmployee.personalInformation.biographicalInformation.DOB
     : new Date(); */
    /*const DOBDay = (this.props.newEmployee.personalInformation.biographicalInformation.dob);
    const formattedDOB = (DOBDay)
        ? moment(DOBDay).format('DD-MMM-YYYY')
        : '';*/
    /* const DateOfDeathDay = (this.props.newEmployee.personalInformation.biographicalInformation.DateOfDeath)
     ? this.props.newEmployee.personalInformation.biographicalInformation.DateOfDeath
     : new Date(); */
    /*const DateOfDeathDay = (this.props.newEmployee.personalInformation.biographicalInformation.dateOfDeath);
    const formattedDateOfDeath = (DateOfDeathDay)
        ? moment(DateOfDeathDay).format('DD-MMM-YYYY')
        : '';*/
    /* const CertificateStartDateDay = (this.props.newEmployee.personalInformation.biographicalInformation.CertificateStartDate)
     ? this.props.newEmployee.personalInformation.biographicalInformation.CertificateStartDate
     : new Date(); */
    const CertificateStartDateDay = new Date();
    const formattedCertificateStartDate = (CertificateStartDateDay)
        ? moment(CertificateStartDateDay).format('DD-MMM-YYYY')
        : '';
    /* const CertificateEndDateDay = (this.props.newEmployee.personalInformation.biographicalInformation.CertificateEndDate)
     ? this.props.newEmployee.personalInformation.biographicalInformation.CertificateEndDate
     : new Date(); */
    const CertificateEndDateDay = new Date();
    const formattedCertificateEndDate = (CertificateEndDateDay)
        ? moment(CertificateEndDateDay).format('DD-MMM-YYYY')
        : '';

    const maritalStatusSinceDate = (this.props.newEmployee.personalInformation.personalInformation.personalInformation.maritalStatusSinceDate);
    const formattedMaritalStatusSinceDate = (maritalStatusSinceDate)
        ? moment(maritalStatusSinceDate).format('DD-MMM-YYYY')
        : '';

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div id="steps-add-employee" className="steps-wrapper">
              <div >
                <button
                  id="saveButtonTop"
                  onClick={() => this.save()}
                >
                  Save
                </button>
                <button
                  id="resetButtonTop"
                  onClick={() => this.save()}
                >
                  Reset
                </button>
              </div>
              <div className="steps">
                <div className="step-app">
                  <div className="steps-placeholder">
                    <div className="steps-nav panel">
                      <ul className="step-steps cd-multi-steps text-top">
                        <li className="active" id="identify">
                          {' '}
                          <a href="#step1">
                            {' '}
                            <span className="step-text">Identify</span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li className="" id="personalInfo">
                          {' '}
                          <a href="#step2">
                            {' '}
                            <span className="step-text">
                            Personal Information
                          </span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li className="" id="jobInfo">
                          {' '}
                          <a href="#step3">
                            {' '}
                            <span className="step-text">Job Information</span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                        <li className="" id="compensationInfo">
                          {' '}
                          <a href="#step4">
                            {' '}
                            <span className="step-text">
                            Compensation Information
                          </span>
                            {' '}
                          </a>
                          {' '}
                        </li>
                      </ul>
                      <div className="step-footer">
                        <button
                          className="step-prev"
                          data-direction="prev"
                          id="prevButton"
                          onClick={() => this.prevStep()}
                        >
                          Previous
                        </button>
                        <button
                          className="step-next"
                          data-direction="next"
                          id="nextButton"
                          onClick={() => this.nextStep()}
                        >
                          Next
                        </button>
                        <button
                          className="step-save"
                          id="saveButton"
                          data-direction="finish"
                          onClick={() => this.save()}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="step-content">
                    <div className="step-tab-panel" id="step1">
                      <div className="fields-inline panel">
                        <div className="form-field">
                          <label htmlFor="addemp-hire-date">* Hire Date</label>
                          <DayPickerInput
                            placeholder="MM/DD/YYYY"
                            onDayChange={this.modifyHireDate}
                            value={formattedHireDateDay}
                          />
                          <DatePickerCustom
                            targetName="identify.identify.identify.hireDate"
                            onDayChange={this.updateEmployeeData}
                            value={formattedHireDateDay}
                          />
                          <p className="danger">
                            {this.state.modifyHireDateErrorText !== '' ? this.state.modifyHireDateErrorText : ''}
                          </p>
                        </div>
                        <div className="form-field">
                          <label htmlFor="addemp-company">* Company</label>
                          <ReactSuperSelect
                            className="custom-select"
                            placeholder="Select Company"
                            // dataSource={this.props.newEmployee.companyList}
                            optionValueKey="companyId"
                            optionLabelKey="companyName"
                            clearable={false}
                            onChange={this.setCompany}
                          />
                          <p className="danger">
                            {this.state.modifyCompanyErrorText !== '' ? this.state.modifyCompanyErrorText : ''}
                          </p>
                        </div>
                        <div className="form-field">
                          <label htmlFor="addemp-reason">* Event Reason</label>
                          <ReactSuperSelect
                            className="custom-select"
                            placeholder="Select Event Reason"
                            // dataSource={this.props.newEmployee.eventReasonList}
                            optionValueKey="eventReasonId"
                            optionLabelKey="eventReasonName"
                            clearable={false}
                            onChange={this.setEventReason}
                          />
                          <p className="danger">
                            {this.state.modifyEventReasonErrorText !== '' ? this.state.modifyEventReasonErrorText : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="step-tab-panel" id="step2">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.49 43">
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Biographical Information
                            </h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div
                                className="toggler active"
                                id="biographicalInfo"
                              >
                                <div
                                  className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                  onClick={() =>
                                      this.toggleElement('biographicalInfo')}
                                >
                                  <h2 className="toggler-title">
                                    Biographical Information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                        <td>
                                          {/*<DayPickerInput
                                            className="js-datepicker entry-input"
                                            placeholder="MM/DD/YYYY"
                                            onDayChange={this.modifyDOB}
                                            value={formattedDOB}
                                          />*/}
                                          <DatePickerCustom
                                            targetName="personalInformation.biographicalInformation.biographicalInformation.dob"
                                            onDayChange={this.updateEmployeeData}
                                            value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.dob}
                                          />
                                          <p className="danger">
                                            {this.state.modifyDOBErrorText !== '' ? this.state.modifyDOBErrorText : ''}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country of Birth
                                          </span>
                                        </td>
                                        <td>
                                          {/*<ReactSuperSelect
                                            className="custom-select"
                                            placeholder="Select Country of Birth"
                                            // dataSource={this.props.newEmployee.personalInformation.biographicalInformation.countryList}
                                            optionValueKey="CountryOfBirthId"
                                            optionLabelKey="CountryOfBirthName"
                                            clearable={false}
                                            onChange={this.setCountryOfBirth}
                                          />*/}
                                          <select className="custom-select" name="personalInformation.biographicalInformation.biographicalInformation.countryList" value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.countryList} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">Drop-down</option>
                                            <option value="v-2">Drop-down2</option>
                                          </select>
                                          <p className="danger">
                                            {this.state.modifyCountryOfBirthText !== '' ? this.state.modifyCountryOfBirthErrorText : ''}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Region of Birth
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.biographicalInformation.biographicalInformation.regionOfBirth" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.regionOfBirth} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Date of Death
                                          </span>
                                        </td>
                                        <td>
                                          {/*<DayPickerInput
                                            className="js-datepicker entry-input"
                                            placeholder="MM/DD/YYYY"
                                            onDayChange={this.modifyDateOfDeath}
                                            value={formattedDateOfDeath}
                                          />*/}
                                          <DatePickerCustom
                                            targetName="personalInformation.biographicalInformation.biographicalInformation.dateOfDeath"
                                            onDayChange={this.updateEmployeeData}
                                            value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.dateOfDeath}
                                          />
                                          <p className="danger">
                                            {this.state.modifyDateOfDeathErrorText !== '' ? this.state.modifyDateOfDeathErrorText : ''}
                                          </p>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Employee Id
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.biographicalInformation.biographicalInformation.employeeId" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.employeeId} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Employee Global Id
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.biographicalInformation.biographicalInformation.employeeGlobalId" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.biographicalInformation.biographicalInformation.employeeGlobalId} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
                      <div className="box">
                        <ul className="box-headings">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Personal Information</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-inner box-inner--no-pad">
                          <div className="toggler active" id="personalInfo">
                            <div
                              className="toggler-bar toggler-bar--no-top js-toggler-bar"
                              onClick={() => this.toggleElement('personalInfo')}
                            >
                              <h2 className="toggler-title">
                                Personal Information
                              </h2>
                              <span className="box-filter-arrow" />{' '}
                            </div>
                            <div className="toggler-content">
                              <table className="table table--stripes">
                                <tbody>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        First Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.firstName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.firstName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Last Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.lastName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.lastName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Middle Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.middleName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.middleName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Suffix:
                                      </span>
                                    </td>
                                    <td>
                                      <select name="personalInformation.personalInformation.personalInformation.suffix" className="custom-select" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.suffix} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="">none</option>
                                        <option value="jr">Jr</option>
                                        <option value="sr">Sr</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Display Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.displayName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.displayName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Formal Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.formalName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.formalName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Title:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.title" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.title} onChange={this.updateEmployeeData} onBlur={() => this.save()}>
                                        <option value="v-1">Drop-down1</option>
                                        <option value="v-2">Drop-down2</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Birth Name:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.birthName" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.birthName} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Initials:
                                      </span>
                                    </td>
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.initials" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.initials} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Prefix:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.prefix" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.prefix} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">Drop-down</option>
                                        <option value="v-2">Drop-down2</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Gender:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.gender" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.gender} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
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
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.maritalStatus" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.maritalStatus} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="1">Drop-down</option>
                                        <option value="2">Drop-down2</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Marital Status Since:
                                      </span>
                                    </td>
                                    <td>
                                      {/*<DayPickerInput
                                        className="js-datepicker entry-input"
                                        placeholder="MM/DD/YYYY"
                                        onDayChange={this.updateEmployeeData}
                                        value={formattedMaritalStatusSinceDate}
                                      />*/}
                                      <DatePickerCustom
                                        targetName="personalInformation.personalInformation.personalInformation.maritalStatusSinceDate"
                                        onDayChange={this.updateEmployeeData}
                                        value={formattedMaritalStatusSinceDate}
                                      />
                                      <p className="danger">
                                        {this.state.modifyMaritalStatusSinceDateErrorText !== '' ? this.state.modifyMaritalStatusSinceDateErrorText : ''}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Second Nationality:
                                      </span>
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.secondNationality" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.secondNationality} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                        <option value="v-2">
                                          Drop-down for ISO Country Code2
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
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.thirdNationality" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.thirdNationality} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                        <option value="v-2">
                                          Drop-down for ISO Country Code2
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
                                      <select className="custom-select" name="personalInformation.personalInformation.personalInformation.preferredLanguage" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.preferredLanguage} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">
                                          Drop-down for ISO Country Code
                                        </option>
                                        <option value="v-2">
                                          Drop-down for ISO Country Code2
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
                                    <td>
                                      <input name="personalInformation.personalInformation.personalInformation.challengeStatus" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.personalInformation.personalInformation.challengeStatus} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Certificate Start Date:
                                      </span>
                                    </td>
                                    <td>
                                      <DayPickerInput
                                        className="js-datepicker entry-input"
                                        placeholder="MM/DD/YYYY"
                                        onDayChange={this.modifyCertificateStartDate}
                                        value={formattedCertificateStartDate}
                                      />
                                      <p className="danger">
                                        {this.state.modifyCertificateStartDateErrorText !== '' ? this.state.modifyCertificateStartDateErrorText : ''}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="table-align">
                                      <span className="table-label">
                                        Certificate End Date:
                                      </span>
                                    </td>
                                    <td>
                                      <DayPickerInput
                                        className="js-datepicker entry-input"
                                        placeholder="MM/DD/YYYY"
                                        onDayChange={this.modifyCertificateEndDate}
                                        value={formattedCertificateEndDate}
                                      />
                                      <p className="danger">
                                        {this.state.modifyCertificateEndDateErrorText !== '' ? this.state.modifyCertificateEndDateErrorText : ''}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="toggler active"
                            id="countrySpecificFields"
                          >
                            <div
                              className="toggler-bar js-toggler-bar"
                              onClick={() =>
                                  this.toggleElement('countrySpecificFields')}
                            >
                              <h2 className="toggler-title">
                                Country Specific Fields
                              </h2>
                              <span className="box-filter-arrow" />{' '}
                            </div>
                            <div className="toggler-content">
                              <div className="toggler-content-inner">
                                <div className="table-additional-info">
                                  <div className="table-additional-info-ico">
                                    {' '}<svg
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
                                    </svg>{' '}
                                  </div>
                                  United States{' '}
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
                                        <select className="custom-select" name="personalInformation.personalInformation.countrySpecificFields.us.ethnicGroup" value={this.props.newEmployee.personalInformation.personalInformation.countrySpecificFields.us.ethnicGroup} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                          <option value="v-1">Drop-down</option>
                                          <option value="v-2">Drop-down2</option>
                                        </select>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td className="table-align">
                                        <span className="table-label">
                                          Veteran:
                                        </span>
                                      </td>
                                      <td>
                                        <select className="custom-select" name="personalInformation.personalInformation.countrySpecificFields.us.veteran" value={this.props.newEmployee.personalInformation.personalInformation.countrySpecificFields.us.veteran} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                          <option value="yes">
                                            Yes
                                          </option>
                                          <option value="no">
                                            No
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
                                        <select className="custom-select" name="personalInformation.personalInformation.countrySpecificFields.us.challengedVeteran" value={this.props.newEmployee.personalInformation.personalInformation.countrySpecificFields.us.challengedVeteran} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                          <option value="v-1">Drop-down</option>
                                          <option value="v-2">Drop-down2</option>
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
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              National ID Information
                            </h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <table className="table table--stripes table--typeb">
                                <thead>
                                  <tr>
                                    <th>Country</th>
                                    <th>National ID Card Type</th>
                                    <th>National ID </th>
                                    <th>Is Primary </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <select className="custom-select" name="personalInformation.nationalIdInformation.country1.country" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country1.country*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">Drop-down</option>
                                        <option value="v-2">Drop-down2</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input name="personalInformation.nationalIdInformation.country1.nationalIdCardType" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country1.nationalIdCardType*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.nationalIdInformation.country1.nationalId" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country1.nationalId*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.nationalIdInformation.country1.isPrimary" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country1.isPrimary*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                      </select>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <select className="custom-select" name="personalInformation.nationalIdInformation.country2.country" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country1.country*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">Drop-down</option>
                                        <option value="v-2">Drop-down2</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input name="personalInformation.nationalIdInformation.country2.nationalIdCardType" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country2.nationalIdCardType*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.nationalIdInformation.country2.nationalId" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country2.nationalId*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.nationalIdInformation.country2.isPrimary" value={{/*this.props.newEmployee.personalInformation.nationalIdInformation.country2.isPrimary*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                      </select>
                                    </td>
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
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Address</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
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
                                  onClick={() =>
                                      this.toggleElement('homeAddress')}
                                >
                                  <h2 className="toggler-title">
                                    Home Address
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                          <select className="custom-select" name="personalInformation.addressInformation.homeAddress.addressType" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.addressType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                            <option value="v-2">
                                              Drop-Down (Home Address / Mailing Address)2
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
                                          <select className="custom-select" name="personalInformation.addressInformation.homeAddress.country" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.country} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                            <option value="v-2">
                                              Drop-Down (Home Address / Mailing Address)2
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
                                        <td>
                                          <input name="personalInformation.addressInformation.homeAddress.line1" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.line1} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 2
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.homeAddress.line2" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.line2} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            City
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.homeAddress.city" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.city} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            State
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.homeAddress.state" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.state} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            ZIP
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.homeAddress.zip" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.homeAddress.zip} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div
                                className="toggler active"
                                id="MailingAddress"
                              >
                                <div
                                  className="toggler-bar js-toggler-bar"
                                  onClick={() =>
                                      this.toggleElement('MailingAddress')}
                                >
                                  <h2 className="toggler-title">
                                    Mailing Address
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                          <select className="custom-select" name="personalInformation.addressInformation.mailingAddress.addressType" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.addressType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                            <option value="v-2">
                                              Drop-Down (Home Address / Mailing Address)2
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
                                          <select className="custom-select" name="personalInformation.addressInformation.mailingAddress.country" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.country} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">
                                              Drop-Down (Home Address / Mailing Address)
                                            </option>
                                            <option value="v-2">
                                              Drop-Down (Home Address / Mailing Address)2
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
                                        <td>
                                          <input name="personalInformation.addressInformation.mailingAddress.line1" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.line1} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Address Line 2
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.mailingAddress.line2" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.line2} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            City
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.mailingAddress.city" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.city} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Country
                                          </span>
                                        </td>
                                        <td>
                                          <input
                                            type="text"
                                            className="entry-input"
                                          />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            State
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.mailingAddress.state" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.state} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            ZIP
                                          </span>
                                        </td>
                                        <td>
                                          <input name="personalInformation.addressInformation.mailingAddress.zip" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.addressInformation.mailingAddress.zip} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Work Permit Info</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
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
                                    <td>
                                      <select className="custom-select" name="personalInformation.workPermitInformation.permit1.country" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.country*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                        <option value="v-1">Drop-down</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.documentType" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.documentType*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.documentTitle" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.documentTitle*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.documentNumber" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.documentNumber*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td className="text-center">
                                      <input name="personalInformation.workPermitInformation.permit1.issueDate" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.issueDate*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.issuePlace" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.issuePlace*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.issuingAuthority" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.issuingAuthority*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.expirationDate" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.expirationDate*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
                                    <td>
                                      <select className="custom-select" name="personalInformation.workPermitInformation.permit1.validated" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.validated*/}} onChange={this.updateEmployeeData}>
                                        <option value="v-1">Drop-down</option>
                                        <option value="v-2">Drop-down2</option>
                                      </select>
                                    </td>
                                    <td>
                                      <input name="personalInformation.workPermitInformation.permit1.attachments" className="textBoxStyle entry-input" value={{/*this.props.newEmployee.personalInformation.workPermitInformation.permit1.attachments*/}} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                    </td>
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
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Contact Information</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
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
                                  onClick={() =>
                                      this.toggleElement('emailInfo')}
                                >
                                  <h2 className="toggler-title">
                                    Email information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                          <td>
                                            <input name="personalInformation.contactInformation.emailInformation.emailType" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.contactInformation.emailInformation.emailType} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                          </td>
                                          <td>
                                            <input name="personalInformation.contactInformation.emailInformation.emailAddress" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.contactInformation.emailInformation.emailAddress} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                          </td>
                                          <td>
                                            <select className="custom-select" name="personalInformation.contactInformation.emailInformation.isPrimary" value={this.props.newEmployee.personalInformation.contactInformation.emailInformation.isPrimary} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                              <option value="v-2">
                                                Drop-down2
                                              </option>
                                            </select>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div className="toggler active" id="phoneInfo">
                                <div
                                  className="toggler-bar js-toggler-bar"
                                  onClick={() =>
                                      this.toggleElement('phoneInfo')}
                                >
                                  <h2 className="toggler-title">
                                    Phone information
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                          <td>
                                            <select className="custom-select" name="personalInformation.contactInformation.phoneInformation.phoneType" value={this.props.newEmployee.personalInformation.contactInformation.phoneInformation.phoneType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                              <option value="v-2">
                                                Drop-down2
                                              </option>
                                            </select>
                                          </td>
                                          <td>
                                            <input name="personalInformation.contactInformation.phoneInformation.number" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.contactInformation.phoneInformation.number} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                          </td>
                                          <td>
                                            <input name="personalInformation.contactInformation.phoneInformation.extension" className="textBoxStyle entry-input" value={this.props.newEmployee.personalInformation.contactInformation.phoneInformation.extension} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                          </td>
                                          <td>
                                            <select className="custom-select" name="personalInformation.contactInformation.phoneInformation.isPrimary" value={this.props.newEmployee.personalInformation.contactInformation.phoneInformation.isPrimary} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                              <option value="v-1">
                                                Drop-down
                                              </option>
                                              <option value="v-2">
                                                Drop-down2
                                              </option>
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
                    <div className="step-tab-panel" id="step3">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 40 40"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M38.91,9.93a3.74,3.74,0,0,0-5.28,0l-1,1V1.11A1.11,1.11,0,0,0,31.56,0H4.26A4.26,4.26,0,0,0,0,4.26V35.74A4.26,4.26,0,0,0,4.26,40h27.3a1.11,1.11,0,0,0,1.11-1.11V21.45l6.24-6.24a3.73,3.73,0,0,0,0-5.28ZM16.47,2.22h4.07V6.61l-1.37-1a1.11,1.11,0,0,0-1.34,0l-1.37,1ZM6,37.78H4.26a2,2,0,0,1-2-2V4.26a2,2,0,0,1,2-2H6Zm24.43,0H8.24V23.21H9.75a1.11,1.11,0,0,0,0-2.22H8.24V19h4.14a1.11,1.11,0,0,0,0-2.22H8.24V2.22h6V8.85A1.11,1.11,0,0,0,16,9.73l2.48-1.88L21,9.73a1.31,1.31,0,0,0,1.17.11,1.12,1.12,0,0,0,.62-1V2.22h7.68V13.11L18,25.56a1.11,1.11,0,0,0-.33.79v3.71a1.11,1.11,0,0,0,1.11,1.11H22.5a1.11,1.11,0,0,0,.79-.33l7.16-7.16ZM22,28.94H19.9V26.8L33.47,13.23l2.14,2.14Zm15.3-15.3-.16.16L35,11.66l.16-.16a1.55,1.55,0,0,1,2.14,0A1.57,1.57,0,0,1,37.34,13.64Z"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Employment Detail</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row">
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div
                                    className="toggler active"
                                    id="keyJobAttribute"
                                  >
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('keyJobAttribute')}
                                    >
                                      <h2 className="toggler-title">
                                        Key Job Attribute
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.keyJobAttribute.jobCode" value={this.props.newEmployee.jobInformation.employmentDetail.keyJobAttribute.jobCode} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.keyJobAttribute.position" value={this.props.newEmployee.jobInformation.employmentDetail.keyJobAttribute.position} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div
                                    className="toggler active"
                                    id="orgnlInfo"
                                  >
                                    <div
                                      className="toggler-bar js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('orgnlInfo')}
                                    >
                                      <h2 className="toggler-title">
                                        Organizational Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>

                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Company
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.company" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.company} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.businessUnit" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.businessUnit} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.division" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.division} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.department" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.department} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.location" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.location} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.timeZone" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.timeZone} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.organizationalInformation.costCenter" value={this.props.newEmployee.jobInformation.employmentDetail.organizationalInformation.costCenter} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div className="toggler active" id="jobInfo">
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('jobInfo')}
                                    >
                                      <h2 className="toggler-title">
                                        Job Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.jobInformation.employmentStatus" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.employmentStatus} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.jobInformation.supervisor" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.supervisor} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.jobInformation.jobClassification" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.jobClassification} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <input name="jobInformation.employmentDetail.jobInformation.jobTitle" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.jobTitle} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Local Job Title
                                              </span>
                                            </td>
                                            <td>
                                              <input name="jobInformation.employmentDetail.jobInformation.localJobTitle" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.localJobTitle} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Grade
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="jobInformation.employmentDetail.jobInformation.payGrade" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.payGrade} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.jobInformation.regularOrTemporary" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.regularOrTemporary} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Regular
                                                </option>
                                                <option value="v-2">
                                                  Temporary
                                                </option>
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
                                              <input name="jobInformation.employmentDetail.jobInformation.standardWeeklyHours" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.standardWeeklyHours} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                FTE
                                              </span>
                                            </td>
                                            <td>
                                              <input name="jobInformation.employmentDetail.jobInformation.fte" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.jobInformation.fte} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div className="toggler active" id="timeInfo">
                                    <div
                                      className="toggler-bar js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('timeInfo')}
                                    >
                                      <h2 className="toggler-title">
                                        Time Information
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.timeInformation.holidayCalendar" value={this.props.newEmployee.jobInformation.employmentDetail.timeInformation.holidayCalendar} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.timeInformation.workSchedule" value={this.props.newEmployee.jobInformation.employmentDetail.timeInformation.workSchedule} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                                              <select className="custom-select" name="jobInformation.employmentDetail.timeInformation.timeProfile" value={this.props.newEmployee.jobInformation.employmentDetail.timeInformation.timeProfile} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
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
                            <div className="col-xs-12">
                              <div className="box-tab active">
                                <div className="box-inner--top">
                                  <div
                                    className="toggler active"
                                    id="countrySpecific"
                                  >
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('countrySpecific')}
                                    >
                                      <h2 className="toggler-title">
                                        Country Specific - USA
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <div className="row">
                                        <div className="col-xs-12">
                                          <table className="table table--stripes">
                                            <tbody>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Is Fulltime Employee
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.isFullTime" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.isFullTime} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Notes
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.notes" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.notes} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Employee Class
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.employeeClass" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.employeeClass} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.flsaStatus" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.flsaStatus} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.isShiftEmployee" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.isShiftEmployee} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.shiftCode" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.shiftCode} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Shift Rate
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.shiftRate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.shiftRate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Shift Percent
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.shiftPercent" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.shiftPercent} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Is Cross Border Worker
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.isCrossBorderWorker" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.isCrossBorderWorker} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Yes
                                                    </option>
                                                    <option value="v-2">
                                                      No
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoJobGroup" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoJobGroup} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.contractType" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.contractType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
                                                  </select>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                        <div className="col-xs-12">
                                          <table className="table table--stripes table--side-left">
                                            <tbody>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Continued Sickness Pay Period
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.continuedSicknessPayPeriod" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.continuedSicknessPayPeriod} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Continued Sickness Pay Measure
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.continuedSicknessPayMeasure" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.continuedSicknessPayMeasure} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Notice Period
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.noticePeriod" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.noticePeriod} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Initial Entry
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.initialEntry" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.initialEntry} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Entry into Group
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.entryIntoGroup" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.entryIntoGroup} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    Corporation
                                                  </span>
                                                </td>
                                                <td>
                                                  <input name="jobInformation.employmentDetail.countrySpecificFields.us.corporation" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.corporation} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                                </td>
                                              </tr>
                                              <tr>
                                                <td className="table-align">
                                                  <span className="table-label">
                                                    EEO Category 1
                                                  </span>
                                                </td>
                                                <td>
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory1" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory1} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory2" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory2} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory3" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory3} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory4" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory4} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory5" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory5} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                                                  <select className="custom-select" name="jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory6" value={this.props.newEmployee.jobInformation.employmentDetail.countrySpecificFields.us.eeoCategory6} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                    <option value="v-1">
                                                      Drop-down
                                                    </option>
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
                        </div>
                      </div>
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
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
                              </svg>{' '}s
                            </div>
                            <h2 className="box-title">Job Relationships</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div className="toggler active" id="globalFields">
                                <div
                                  className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                  onClick={() =>
                                      this.toggleElement('globalFields')}
                                >
                                  <h2 className="toggler-title">
                                    Global fields
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
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
                                          <select className="custom-select" name="jobInformation.jobRelationships.globalFields.relationshipType" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.relationshipType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                            <option value="v-1">
                                              HR Manager
                                            </option>
                                            <option value="v-2">
                                              Matrix Manager
                                            </option>
                                            <option value="v-3">
                                              Additional Manager
                                            </option>
                                            <option value="v-4">
                                              Second Manager
                                            </option>
                                          </select>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Name
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.jobRelationships.globalFields.name" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.name} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
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
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">Employment Details</h2>
                            <ul className="box-actions">
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="box-tab active">
                            <div className="box-inner box-inner--no-pad">
                              <div
                                className="toggler active"
                                id="globalFields2"
                              >
                                <div
                                  className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                  onClick={() =>
                                      this.toggleElement('globalFields2')}
                                >
                                  <h2 className="toggler-title">
                                    Global fields
                                  </h2>
                                  <span className="box-filter-arrow" />{' '}
                                </div>
                                <div className="toggler-content">
                                  <table className="table table--stripes">
                                    <tbody>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Hire Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.hireDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.hireDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Original Start Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.originalStartDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.originalStartDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Seniority Start Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.seniorityStartDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.seniorityStartDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Service Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.serviceDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.serviceDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Professional Service Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.professionalServiceDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.professionalServiceDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-align">
                                          <span className="table-label">
                                            Retire Date
                                          </span>
                                        </td>
                                        <td>
                                          <input name="jobInformation.employmentDetails.globalFields.retireDate" className="textBoxStyle entry-input" value={this.props.newEmployee.jobInformation.jobRelationships.globalFields.retireDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
                    <div className="step-tab-panel" id="step4">
                      <div className="box">
                        <ul className="box-headings js-tabs">
                          <li className="box-heading active">
                            <div className="box-icon">
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 38.5 38.5"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <polygon
                                      points="0 0 0 38.5 38.5 38.5 38.5 36 34.5 36 34.5 12 32 12 32 36 26.5 36 26.5 16 24 16 24 36 18.5 36 18.5 20 16 20 16 36 10.5 36 10.5 24 8 24 8 36 2.5 36 2.5 0 0 0"
                                      fill="#f4f7fa"
                                    />
                                    <polygon
                                      points="24 4.27 24 8.5 26.5 8.5 26.5 0 18 0 18 2.5 22.23 2.5 10.29 14.44 12.06 16.2 24 4.27"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Compensation Information
                            </h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12 col-lg-12 no-padding">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div
                                    className="toggler active"
                                    id="compensationGroup"
                                  >
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('compensationGroup')}
                                    >
                                      <h2 className="toggler-title">
                                        Compensation Group
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Type
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensationGroup.payType" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.payType} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Group
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensationGroup.payGroup" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.payGroup} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Is Eligible For Benefit
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensationGroup.isEligibleForBenefit" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.isEligibleForBenefit} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">Yes</option>
                                                <option value="v-2">No</option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Is Eligible For Car
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensationGroup.isEligibleForCar" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.isEligibleForCar} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">Yes</option>
                                                <option value="v-2">No</option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Benefit Rate
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensationGroup.benefitRate" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.benefitRate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Compa Ratio
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensationGroup.compaRatio" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.compaRatio} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Range Penetration
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensationGroup.rangePenetration" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.rangePenetration} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                AnnualizedSalary (AnnualizedSalary)
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensationGroup.annualizedSalary" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.annualizedSalary} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Total Earning Opportunity (TEO)
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensationGroup.teo" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensationGroup.teo} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                  <div
                                    className="toggler active"
                                    id="compensation"
                                  >
                                    <div
                                      className="toggler-bar js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('compensation')}
                                    >
                                      <h2 className="toggler-title">
                                        Compensation
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensation.payComponent" value={this.props.newEmployee.compensationInformation.compensationInformation.compensation.payComponent} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Basic Pay
                                                </option>
                                                <option value="v-2">
                                                  Additional Pay
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.compensationInformation.compensation.amount" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.compensationInformation.compensation.amount} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensation.currency" value={this.props.newEmployee.compensationInformation.compensationInformation.compensation.currency} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Frequency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.compensationInformation.compensation.frequency" value={this.props.newEmployee.compensationInformation.compensationInformation.compensation.frequency} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Annual
                                                </option>
                                                <option value="v-2">
                                                  Monthly
                                                </option>
                                                <option value="v-3">
                                                  Weekly
                                                </option>
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
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 37.99 37.97"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M24.39.85a3.08,3.08,0,0,0-4.24,0L7,14H3a3,3,0,0,0-3,3V35a3,3,0,0,0,3,3H31a3,3,0,0,0,3-3v-14l3.12-3.12a3,3,0,0,0,0-4.24h0ZM2,16H32V28H2ZM32,36H2V30H32Zm5.18-19.51L36.11,16l-1.78,1.79-.47-1.63a2.8,2.8,0,0,0-.13-.39l-.47-1.05-1-.47A3,3,0,0,0,31,14H9.85L22.26,1.56Z"
                                      fill="#f4f7fa"
                                    />
                                    <rect
                                      x="6.98"
                                      y="20.97"
                                      width="6"
                                      height="4"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">One Time Payment</h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12 col-lg-12 no-padding">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div
                                    className="toggler active"
                                    id="timePayment"
                                  >
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement('timePayment')}
                                    >
                                      <h2 className="toggler-title">
                                        One Time Payment
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.oneTimePayment.oneTimePayment.payComponent" value={this.props.newEmployee.compensationInformation.oneTimePayment.oneTimePayment.payComponent} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  One Time Bonus
                                                </option>
                                                <option value="v-2">
                                                  Spot Bonus
                                                </option>
                                                <option value="v-3">
                                                  Manager Appreciation Award
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.oneTimePayment.oneTimePayment.amount" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.oneTimePayment.oneTimePayment.amount} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.oneTimePayment.oneTimePayment.currency" value={this.props.newEmployee.compensationInformation.oneTimePayment.oneTimePayment.currency} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Payment Date
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.oneTimePayment.oneTimePayment.paymentDate" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.oneTimePayment.oneTimePayment.paymentDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
                              {' '}<svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32.07 37.59"
                              >
                                <g id="Warstwa_2" data-name="Warstwa 2">
                                  <g id="dashboard">
                                    <path
                                      d="M16,0A16,16,0,0,0,3.47,26L5,24.66A14,14,0,1,1,16,30.07H13.86l1.33-1.65,2.19-2.56-1.53-1.31-5.59,6.52,5.59,6.52,1.53-1.31-3.61-4.21H16A16,16,0,1,0,16,0Z"
                                      fill="#f4f7fa"
                                    />
                                    <polygon
                                      points="15.03 8.02 15.03 14.03 11.02 14.03 11.02 16.04 17.04 16.04 17.04 8.02 15.03 8.02"
                                      fill="#f4f7fa"
                                    />
                                  </g>
                                </g>
                              </svg>{' '}
                            </div>
                            <h2 className="box-title">
                              Recurring Deduction / Payment
                            </h2>
                            <ul className="box-actions">
                              <li> <a href="">Edit</a> </li>
                              <li>
                                {' '}<a href="" title="Help">
                                  {' '}<svg
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
                                  </svg>{' '}
                                </a>{' '}
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div className="box-content">
                          <div className="row-no-padding">
                            <div className="col-xs-12 col-lg-12 no-padding">
                              <div className="box-tab active">
                                <div className="box-inner box-inner--no-pad">
                                  <div
                                    className="toggler active"
                                    id="recurringDeduction"
                                  >
                                    <div
                                      className="toggler-bar toggler-bar--no-top js-toggler-bar"
                                      onClick={() =>
                                          this.toggleElement(
                                              'recurringDeduction'
                                          )}
                                    >
                                      <h2 className="toggler-title">
                                        Recurring Deduction / Payment
                                      </h2>
                                      <span className="box-filter-arrow" />{' '}
                                    </div>
                                    <div className="toggler-content">
                                      <table className="table table--stripes">
                                        <tbody>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Pay Component
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.recurringPayment.recurringPayment.payComponent" value={this.props.newEmployee.compensationInformation.recurringPayment.recurringPayment.payComponent} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  One Time Bonus
                                                </option>
                                                <option value="v-2">
                                                  Spot Bonus
                                                </option>
                                                <option value="v-3">
                                                  Manager Appreciation Award
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Amount
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.recurringPayment.recurringPayment.amount" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.recurringPayment.recurringPayment.amount} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Currency
                                              </span>
                                            </td>
                                            <td>
                                              <select className="custom-select" name="compensationInformation.recurringPayment.recurringPayment.currency" value={this.props.newEmployee.compensationInformation.recurringPayment.recurringPayment.currency} onChange={this.updateEmployeeData} onBlur={() => this.save()} >
                                                <option value="v-1">
                                                  Drop-down
                                                </option>
                                              </select>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                Start Date
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.recurringPayment.recurringPayment.startDate" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.recurringPayment.recurringPayment.startDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
                                            </td>
                                          </tr>
                                          <tr>
                                            <td className="table-align">
                                              <span className="table-label">
                                                End Date
                                              </span>
                                            </td>
                                            <td>
                                              <input name="compensationInformation.recurringPayment.recurringPayment.endDate" className="textBoxStyle entry-input" value={this.props.newEmployee.compensationInformation.recurringPayment.recurringPayment.endDate} onChange={this.updateEmployeeData} onBlur={() => this.save()} />
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
// export default AddEmployee;
function mapStateToProps(state) {
  return { newEmployee: state.employee.newEmployee };
}

export default connect(mapStateToProps)(AddEmployee);
