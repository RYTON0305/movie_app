import Vue from 'vue'
export const state = Vue.observable({
  nm: localStorage.getItem('locNm') || '北京',
  id: Number(localStorage.getItem('locId')) || 10
})
