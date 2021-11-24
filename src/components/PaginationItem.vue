<template>
  <div class="pagination-item">
    <div class="link-item">{{ link.label }}</div>
  </div>
</template>

<script>
export default {
  name: "PaginationItem",
  data() {
    return {};
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.link-item {
  border: 1px solid #000;
  padding: 5px;
}
</style>
