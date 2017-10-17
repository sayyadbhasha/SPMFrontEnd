import { combineReducers } from 'redux';
import { localeReducer as locale } from 'react-localize-redux';
import dashboard from './DashboardReducer';
import login from './LoginReducer';
import chatbot from './ChatBotReducer';
import employee from './EmployeeReducer';

export default combineReducers({
  locale,
  dashboard,
  login,
  chatbot,
  employee
});
