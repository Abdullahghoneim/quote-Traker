<template>
  <div class>
    <form>
      <div class="form-group col-lg-4 offset-md-4">
        <label for="quote">New Quote</label>
        <textarea name="quote" id="quote" col="90" rows="3" v-model="quote" class="form-control"></textarea>
      </div>
    </form>
    <div class="form-group col-sm-4 offset-md-4">
      <button @click.prevent="createNew" class="btn btn-info">Add</button>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew() {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style>
</style>
