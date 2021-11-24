<template>
  <div class="pagination-item">
    <div class="link-item" @click="handlePageClick">
      {{ link.label }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters({
      currentPage: "getCurrentPage",
    }),
  },
  methods: {
    async handlePageClick() {
      if (isNaN(this.link.label) && this.link.label.includes("Next")) {
        this.setCurrentPage(this.currentPage + 1);
        this.setUrlWithCurentPage();
        await this.getComments();
      } else if (
        isNaN(this.link.label) &&
        this.link.label.includes("Previous")
      ) {
        this.setCurrentPage(this.currentPage - 1);
        this.setUrlWithCurentPage();
        await this.getComments();
      } else {
        this.setUrl(this.link.url);
        await this.getComments();
      }
    },
    ...mapMutations({
      setUrl: "setUrl",
      setCurrentPage: "setCurentPage",
      setUrlWithCurentPage: "setUrlWithCurentPage",
    }),
    ...mapActions({
      getComments: "GET_COMMENTS",
    }),
  },
};
</script>

<style scoped>
.link-item {
  border: 1px solid rgb(58, 58, 58);
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
.link-item:hover {
  background: rgb(180, 180, 180);
}
.link-item .active {
  background-color: #000;
  color: #fff;
}
</style>
