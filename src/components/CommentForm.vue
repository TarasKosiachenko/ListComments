<template>
  <div class="comment-form">
    <div class="body-form">
      <input type="text" placeholder="Name:" />
      <textarea name="text" placeholder="Text:" wrap="soft"> </textarea>
      <button class="form-btn">CKICK</button>
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
  width: 65%;
  margin: auto;
}
.body-el {
  width: 90%;
  margin: auto;
}
.body-form input {
  font-size: 1em;
  padding: 5px;
  display: block;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
}
textarea {
  font-family: Helvetica;
  font-size: 1em;
  width: 90%;
  margin: auto;
  margin-bottom: 10px;
  height: 100px;
  resize: none;
  padding: 5px;
  display: block;
}
.form-btn {
  padding: 5px;
  width: 70px;
  display: block;
  margin: auto;
  margin-bottom: 10px;
}
</style>
