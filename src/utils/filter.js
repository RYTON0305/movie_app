import Vue from 'vue'

Vue.filter('SetImgSize', (url, width = 600, height = 800) => {
  if (!url) {
    return url
  }
  return url.replace(/w\.h/, `${width}.${height}`)
})
