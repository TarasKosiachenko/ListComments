<template>
  <div class="comment-item">
    <p class="item-name">Name: {{ comment.name }}</p>
    <p class="item-text">Text: {{ comment.text }}</p>
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
  border: 1px solid #000;
  word-break: break-all;
}
.comment-item p {
  padding-left: 30px;
}
.item-name {
  width: 20%;
}
.item-text {
  width: 80%;
  text-align: left;
}
</style>
