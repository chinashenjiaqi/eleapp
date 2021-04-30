import { get, post } from './httpRequest'
import apiConfig from './apiConfig'

// 登录
export const login = params => post(apiConfig.login, params);
//获取用户信息
export const getVerifyCode = params => get(apiConfig.getVerifyCode, params);

export const getLiushui = params => get('liushui', params);

