<template>
  <div class="page">
    <button @click="onPrev">Назад</button>
    {{ pageNum }}
    <button @click="onNext">Вперед</button>
  </div>

  <!-- <div class="wrp">
    <div @click="onClick(car - 1)">-</div>
    <div
      v-for="i in amount"
      :key="i"
      :class="{ active: cur === i }"
      @click="onClick(i)"
    >
      {{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div> -->
</template>

<script>
  // export default {
  //   name: "Pagination",
  //   props: {
  //     length: Number,
  //     cur: Number,
  //     n: Number,
  //   },
  //   computed: {
  //     amount() {
  //       return Math.ceil(this.length / this.n);
  //     },
  //   },
  //   methods: {
  //     onclick(page) {
  //       if (page < 1 || page > this.amount || page === this.cur) {
  //         return;
  //       }
  //       this.$emit("paginate", page);
  //     },
  //   },
  // };

  export default {
    name: "MyPages",
    props: {
      pageNum: Number,
    },
    methods: {
      onNext() {
        this.$emit("changePageNum", 1);
      },
      onPrev() {
        this.$emit("changePageNum", -1);
      },
    },
  };
</script>

<style scoped lang="scss">
  //   .wrp {
  //     display: flex;
  //     & div {
  //       padding: 100px;
  //       &.active {
  //         background: #ccc;
  //       }
  //     }
  //   }
  //
</style>
