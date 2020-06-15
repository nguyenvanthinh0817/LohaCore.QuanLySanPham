import axiosService from './../commons/axiosService';
import { API_ENDPOINT2 } from './../constants';


export const login = data => {
    const {email, password} = data;
    const body = 
    {
        "UserName": email,
        "Password": password,
        "Captcha": "" ,
        "UseCaptcha": true,
        "Remember": true,
        
    }
    
    return axiosService.post(`${API_ENDPOINT2}/_vt_api/Authentication/ValidateUser`, body);
  };
  