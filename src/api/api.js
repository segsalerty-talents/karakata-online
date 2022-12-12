import axios from 'axios'
// import Nprogress from 'nprogress'
// import router from '../router'
import { GET_ITEM } from '../helpers/localstorage'
// import { auth } from '../store'

const baseURL = 'https://api.karakata.co/api' // process.env.VUE_APP_API

const httpClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

httpClient.interceptors.request.use(
  async (config) => {
    const local = await GET_ITEM('karakata_data')
    // const token = await GET_ITEM('t40_bo_token')
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    // console.log(config.url)
    if (config.method === 'get') {
      config.params.business_id = local.business_id
    }
    return config
  },
  (error) => Promise.reject(error)
)

// httpClient.interceptors.response.use(
//   async (response) => {
//     Nprogress.done()
//     // console.log(response)
//     return response
//   },
//   (error) => {
//     Nprogress.done()
//     if (error.response.status === 401) {
//       auth.logout()
//       router.push('/login')
//     }
//     return Promise.reject(error)
//   }
// )

// // set max timeout for API calls
// // httpClient.defaults.timeout = 60000

export default httpClient
