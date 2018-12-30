<template>
  <div class="container text-center mt-4" id="app">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote" class="mb-4 mt-3"></app-header>
    <new-quote @quoteAdded="newQuote"></new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <div class="info">
      <p class="text-center alert alert-info mt-5">
        info:
        <span>Click</span> on quote to delete it !!
      </p>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import newQuote from "./components/newQuote.vue";
import quoteGrid from "./components/quoteGrid.vue";
export default {
  name: "app",
  data: function() {
    return {
      quotes: ["this is frist quote"],
      maxQuote: 10
    };
  },
  components: {
    "app-quote-grid": quoteGrid,
    "new-quote": newQuote,
    "app-header": Header
  },
  methods: {
    newQuote(quote) {
      if (quotes.length >= this.maxQuote) {
        return alert("plaseas delete quote");
      }
      this.quotes.push(quote);
      this.$toaster.success("Quote Added Successfuly", { timeout: 2000 });
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
      this.$toaster.warning("Quote Deleteed Successfuly", { timeout: 3000 });
    }
  }
};
</script>

<style lang="scss">
.info p {
  text-transform: capitalize;
  span {
    text-transform: uppercase;
  }
}
</style>
