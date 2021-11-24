<template>
  <div class="comment-form">
    <div class="body-form">
      <input type="text" placeholder="Name:" />
      <input class="form-text" type="text" placeholder="Text:" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {};
  },
};
</script>

<style scoped>
.body-form {
  border: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  height: max-content;
}
.body-form input {
  font-size: 1em;
  padding: 0.5em;
  border-radius: 5px;
  margin: 5px;
  width: 90%;
  justify-content: space-around;
}
</style>
