<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["quote"]
};
</script>

<style lang='scss'>
.card:hover {
  background-color: #ffe2e2;
  cursor: pointer;
}
</style>
