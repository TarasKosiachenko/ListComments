<template>
  <div class="comment-item">
    <p>Name: {{ comment.name }}</p>
    <p>Text: {{ comment.text }}</p>
  </div>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.comment-item {
  display: flex;
}
.comment-item p {
  padding-left: 40px;
}
</style>
