import Vue from "vue"
import Vuex from "vuex"
import accountant from "/data/data.json"



Vue.use(Vuex)

export default new Vuex.Store({
  // state คือ fields ใน oop
  state: {
    data: []
  },

  getters: {
    incomeExpense: (state) => state.data,
  },

  // mutations เหมือน private setter ใน oop,
  // เอาไว้เปลี่ยนแปลงค่าใน state
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },
    add(state, { payload }) {
      state.data.push(payload)
    },
    edit(state, { payload }) {
      state.data[payload.index].info = payload.info
      state.data[payload.index].accounts = payload.accounts
    },
  },

  // actions เหมือน public methods ใน oop,
  // ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอก
  actions: {
    // commit เป็น keyword ไว้เรียก mutation
    fetchIncomeExpense({ commit }) {
      let res = {
        data: accountant
      }
      commit("fetch", { res })
    },

    addIncomeAndExpense({ commit }, payload) {
      // todo: call api to add data
      commit("add", { payload })
    },

    editIncomeAndExpense({ commit }, payload) {
      // todo: call api to edit data
      commit("edit", { payload })
    },
    
  },
  modules: {},
})