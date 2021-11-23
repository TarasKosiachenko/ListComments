<template>
  <div class="comments-list">
    <CommentItem
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </div>
</template>

<script>
import CommentItem from "@/components/CommentItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CommentsList",
  data() {
    return {};
  },
  components: {
    CommentItem,
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
  mounted() {
    this.getComments();
  },
};
</script>

<style scoped></style>
