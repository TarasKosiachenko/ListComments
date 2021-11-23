<template>
  <div class="soluion">
    <CommentsList />
  </div>
</template>

<script>
import CommentsList from "@/components/CommentsList.vue";

export default {
  name: "SolutionTask",
  data() {
    return {};
  },
  components: {
    CommentsList,
  },
};
</script>

<style scoped></style>
