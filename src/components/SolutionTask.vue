<template>
  <div class="soluion">
    <CommentForm />
    <CommentsList />
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm.vue";
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "SolutionTask",
  data() {
    return {};
  },
  components: {
    CommentsList,
    CommentForm,
  },
};
</script>

<style scoped></style>
