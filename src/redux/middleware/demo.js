// import { hashHistory } from 'react-router'
// import Cookies from 'universal-cookie'
// import * as actions from '$pages/auth/redux'

// const cookies = new Cookies()

// const authorizationMiddleware = store => next => (action) => {  // eslint-disable-line

//   const type = action.type
//   // 请求后端的action都是以REQUEST_开头
//   const reg = /^REQUEST_+/
//   // 验证是否请求后端的action
//   if (reg.test(type)) {
//     const currentToken = cookies.get('token')
//     if (!currentToken) {
//       hashHistory.push('/login')
//       return undefined
//     }
//     // 校验离过期时间是否小于30分钟
//     const arrOfToken = currentToken.split('.')
//     const parsedToken = JSON.parse(window.atob(arrOfToken[1]))
//     const now = Date.now()
//     const THIRTY_MINUTES = 30 * 60 * 1000

//     // 当前时间大于过期时间时则重新登录
//     if (now > parsedToken.expireAt) {
//       hashHistory.push('/login')
//       return undefined
//     }

//     // 离过期时间小于30分钟更新manager_key
//     if (now > (parsedToken.expireAt - THIRTY_MINUTES)) {
//       return store.dispatch({
//         type: actions.UPDATE_AUTH,
//       })
//     }
//   } else {
//     return next(action)
//   }
// }

// export default authorizationMiddleware
