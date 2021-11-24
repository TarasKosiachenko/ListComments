<template>
  <div class="pagination-item">
    <div class="link-item" @click="handlePageClick">{{ link.label }}</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

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
  methods: {
    async handlePageClick() {
      this.setUrl(this.link.url);
      await this.getComments();
    },
    ...mapMutations({
      setUrl: "setUrl",
    }),
    ...mapActions({
      getComments: "GET_COMMENTS",
    }),
  },
};
</script>

<style scoped>
.link-item {
  border: 1px solid #000;
  padding: 5px;
}
</style>
