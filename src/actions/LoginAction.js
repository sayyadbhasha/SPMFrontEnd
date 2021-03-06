import axios from 'axios';
import { LoginType, ErrorType } from './ActionType';
import { LoginUrl } from './ActionURL';
import { Configs } from './ActionConfigs';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import AppConfig from '../config';

export function userLogin(userData) {
  return function (dispatch) {
    const accessToken = { access_token: AppConfig.MASTER_TOKEN };
    const LOGINCONFIG = Configs.LOGINCONFIG;
    LOGINCONFIG.auth = userData;
    axios
      .post(LoginUrl.AUTHENTICATE, JSON.stringify(accessToken), LOGINCONFIG)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('jwtToken', token);
        // setAuthorizationToken(token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        dispatch({
          type: LoginType.AUTHENTICATE,
          userInfo: response.data
        });
      })
      .catch(err => {
        dispatch({ type: ErrorType.ERROR_LOG, mesage: err.message });
      });
  };
}
