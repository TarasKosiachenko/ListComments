<template>
  <div class="comments-list">
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
    <Pagination />
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
import Pagination from "@/components/Pagination.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CommentsList",
  data() {
    return {};
  },
  components: {
    CommentItem,
    Pagination,
  },
  methods: {
    ...mapActions({
      getComments: "GET_COMMENTS",
    }),
  },
  computed: {
    ...mapGetters({
      comments: "getComments",
    }),
  },
  async mounted() {
    await this.getComments();
  },
};
</script>

<style scoped>
.comments-list {
  margin: 10px;
}
</style>
