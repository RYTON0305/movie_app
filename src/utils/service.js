import axios from 'axios'
const http = (url, params) => {
  axios.get(url, { params: params }).then(res => {
    console.log(res.data.data)
    return res.data.data
  })
}
const getNowPlaying = (cityId = 10) => {
  return http('/api/movieOnInfoList', { cityId })
}
const getComingSoon = (cityId = 10) => {
  return http('/api/movieComingList', { cityId })
}
const getCityList = () => {
  return http('/api/cityList')
}
const getSearch = ({ cityId = 10, kw = '' }) => {
  return http('/api/searchList', { cityId, kw })
}
const getDetail = (movieId = 345808) => {
  return http('/api/detailmovie', { movieId })
}
const getLocation = () => {
  return http('/api/getLocation')
}
const getCinema = (cityId = 10) => {
  return http('/api/cinemaList', { cityId })
}

export {
  getNowPlaying,
  getComingSoon,
  getLocation,
  getSearch,
  getCityList,
  getDetail,
  getCinema
}
// 正在热映

// http://39.97.33.178/api/movieOnInfoList?cityId=10

// 即将上映

// http://39.97.33.178/api/movieComingList?cityId=10

// 搜索

// http://39.97.33.178/api/searchList?cityId=10&kw=a

// 城市

// http://39.97.33.178/api/cityList

// 电影详情

// http://39.97.33.178/api/detailmovie?movieId=345808

// 影院

// http://39.97.33.178/api/cinemaList?cityId=10

// 城市定位

// http://39.97.33.178/api/getLocation
