//统一接口
import { get, post } from './request'

export const apiGoods = p => get('/', p);

export const apiLogin = p => post('/',p)