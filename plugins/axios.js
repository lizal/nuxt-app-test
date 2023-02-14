import commonApi from '../api/manage'

export default function ({ app, $axios, store }, inject) {
  const API = {}

  $axios.defaults.timeout = 10000
  // $axios.defaults.headers.post['Content-type'] = 'application/json'
  // $axios.defaults.headers.put['Content-type'] = 'application/json'

  $axios.onRequest((config) => {
    if (app.$cookies.get('token')) {
      config.headers['X-Access-Token'] = app.$cookies.get('token') || ''
    }
  })

  // $axios.onResponse((res) => {

  // })

  $axios.onError((error) => {
    switch (error.response.status) {
      case 401:
        location.href = '/login'
        break
    }
  })

  API.commonApi = commonApi($axios)
  inject('api', API)
}
