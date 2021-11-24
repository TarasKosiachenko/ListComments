<template>
  <div class="pagination">
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
  padding-top: 50px;
}
.page {
  display: flex;
  justify-content: center;
}
</style>
