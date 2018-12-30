<template>
  <div class="row">
    <div class="col-lg-4">
      <app-quote @click.native="deleteQuote" v-for="(quote, index) in quotes">
        <q>{{quote}}</q>
      </app-quote>
    </div>
  </div>
</template>
<script>
import quote from "./quote.vue";
export default {
  props: ["quotes"],
  components: {
    "app-quote": quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", this.index);
    }
  }
};
</script>

<style>
q {
  text-align: center;
  text-transform: capitalize;
}
</style>
