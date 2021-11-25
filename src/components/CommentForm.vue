<template>
  <div class="comment-form">
    <div class="body-form">
      <input type="text" placeholder="Name:" required="" v-model="searchName" />
      <textarea
        name="text"
        placeholder="Text:"
        wrap="soft"
        required=""
        v-model="searchText"
      >
      </textarea>
      <button class="form-btn" @click="sendReview()">CKICK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  data() {
    return {
      searchName: "",
      searchText: "",
    };
  },
  methods: {
    async sendReview() {
      let data = {
        name: this.searchName,
        text: this.searchText,
      };
      this.searchName = "";
      this.searchText = "";
      await fetch("https://jordan.ashton.fashion/api/goods/30/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(() => {
        this.$emit("reload");
      });
    },
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
