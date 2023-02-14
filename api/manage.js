export default ($axios) => ({
  getAction(url, data) {
    return $axios.$get(url, data)
  },
  postAction(url, data) {
    return $axios.$post(url, data)
  },
  putAction(url, data) {
    return $axios.$put(url, data)
  },
  deleteAction(url, data) {
    return $axios.$delete(url, data)
  },
})
