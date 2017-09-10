/**
 * 封装 api
 * 
 * 在使用swagger-codegen生成前端代码时，请设置 usePromise=true 以使其支持Promise
 */
// import {
//   ApiClient,
//   AuthorizationApi,
//   ServerApi,
//   ClientApi,
//   RecordApi,
// } from 'lookup_api'
// import Cookies from 'universal-cookie'  读取cookie
// import config from '../configuration'  

// const cookies = new Cookies()

// const apiClient = new ApiClient()
// 设置swagger链接地址
// apiClient.basePath = `http://${config.swagger.host}:${config.swagger.port}/api/v1`.replace(/\/+$/, '')


/**
 * 更新token
 */
// const updateToken = () => { apiClient.authentications.manager_key.apiKey = cookies.get('token') }

/**
 *  用户授权
 */
// export const authorizationApi = () => {
//   updateToken()
//   return new AuthorizationApi(apiClient)
// }

