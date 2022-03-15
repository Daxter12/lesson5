import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
    },
    addDataToPaymentsList(state, data) {
      state.paymentsList.push(data);
    },
    setCategories(state, payload) {
      state.categoryList = payload;
    },
  },
  getters: {
    getPaymentsList: (state) => state.paymentsList,
    getFullPaymentValue: (state) => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
    },
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    async presetData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          let items = [
            { id: 1, date: "20.03.2020", category: "Food", value: 169 },
            { id: 2, date: "21.03.2020", category: "Navigation", value: 50 },
            { id: 3, date: "22.03.2020", category: "Sport", value: 450 },
            {
              id: 4,
              date: "23.03.2020",
              category: "Entertaiment",
              value: 969,
            },
            { id: 5, date: "24.03.2020", category: "Education", value: 1500 },
            { id: 6, date: "25.03.2020", category: "Food", value: 200 },
          ];
          resolve(items);
        }, 1500);
      }).then((res) => {
        commit("setPaymentsListData", res);
      });
    },
    loadCategories({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(["Food", "Transport", "Education", "Entertainment", "Sport"]);
        }, 1000);
      }).then((res) => {
        commit("setCategories", res);
      });
    },
  },
});
