<template>
  <div class="pagination">
    <div class="pagination-btn"><button>Show More</button></div>
    <div class="page">
      <PaginationItem
        v-for="(link, index) in links"
        :key="index"
        :link="link"
      />
    </div>
  </div>
</template>

<script>
import PaginationItem from "@/components/PaginationItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {};
  },
  components: {
    PaginationItem,
  },
  computed: {
    ...mapGetters({
      links: "getLinks",
    }),
  },
};
</script>

<style scoped>
.pagination {
  padding: 20px;
  margin: auto;
}
.pagination-btn {
  width: max-content;
  margin: auto;
  margin-bottom: 10px;
}
.pagination-btn button {
  padding: 5px;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
