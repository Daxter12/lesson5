<template>
  <div id="app">
    <header>
      <div class="title">My personal costs</div>
      <div class="goToDetailAbout" @click="goToDetailAbout"></div>
    </header>

    <main>
      TOTAL: {{ getFullPaymentValue }}
      <hr />
      <add-payment-form @addPayment="add" />
      <payments-display :items="paymentsListPage" />
      <!-- <pagination :length="paymentsList.length" :cur="curPage" :n="n" /> -->
      <my-Pages :pageNum="pageNum" @changePageNum="changePage" />
    </main>
  </div>
</template>

<script>
  import AddPaymentForm from "../components/AddPaymentForm.vue";
  import PaymentsDisplay from "../components/PaymentsDisplay.vue";
  import MyPages from "../components/MyPages.vue";
  import { mapActions, mapGetters } from "vuex";

  // import { mapMutations, mapActions, mapGetters } from "vuex";

  export default {
    name: "App",
    components: { PaymentsDisplay, AddPaymentForm, MyPages },
    data() {
      return {
        show: false,
        // curPage: 1,
        // n: 10,
        pageNum: 1,
        strMax: 5,
      };
    },
    computed: {
      ...mapGetters(["getFullPaymentValue"]),
      paymentsList() {
        return this.$store.getters.getPaymentsList;
      },
      paymentsListPage() {
        let start = (this.pageNum - 1) * this.strMax;
        let end = start + this.strMax;
        return this.$store.getters.getPaymentsList.slice(start, end);
      },
    },
    methods: {
      // ...mapMutations({
      //   myMutation: "setPaymentsListData",
      // }),
      ...mapActions(["presetData"]),
      add(data) {
        this.$store.commit("addDataToPaymentsList", data);
        // this.paymentsList = [...this.paymentsList, data];
      },

      changePage(num) {
        let newNum = this.pageNum + num;
        if (newNum > 0) {
          let start = (newNum - 1) * this.strMax;
          if (start <= this.paymentsList.length - 1) {
            this.pageNum = newNum;
          }
        }
      },
      goToDetailAbout() {
        console.log(2);
      },
    },
    created() {
      this.presetData();
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
