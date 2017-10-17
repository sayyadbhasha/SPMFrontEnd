// import axios from 'axios';
import { EmployeeType } from './ActionType';
// import config from '../config';

/* const HEADER_CONFIG = {
 headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' }
 }; */

export function modifyHireDate(date) {
  console.log('modifyHireDate');
  return { type: EmployeeType.MODIFY_HIRE_DATE, date };
}
export function getCurrentEmployee() {
  return { type: EmployeeType.GET_CURRENT_EMPLOYEE };
}
export function updateCompany(id) {
  return { type: EmployeeType.UPDATE_COMPANY_DATA, id };
}
export function updateEventReason(id) {
  return { type: EmployeeType.UPDATE_EVENT_REASON_DATA, id };
}
export function modifyDOB(date) {
  return { type: EmployeeType.MODIFY_DOB, date };
}
export function updateCountryOfBirth(id) {
  return { type: EmployeeType.UPDATE_COUNTRY_OF_BIRTH, id };
}
export function modifyDateOfDeath(date) {
  return { type: EmployeeType.MODIFY_DATEOFDEATH, date };
}
export function modifyCertificateStartDate(date) {
  return { type: EmployeeType.MODIFY_CERTIFICATE_START_DATE, date };
}
export function modifyCertificateEndDate(date) {
  return { type: EmployeeType.MODIFY_CERTIFICATE_END_DATE, date };
}

export function updateEmployeeData(data) {
  return { type: EmployeeType.UPDATE_EMPLOYEE_DATA, data };
}

export function setNewEmployee(data) {
  return { type: EmployeeType.SET_NEW_EMPLOYEE, data };
}
