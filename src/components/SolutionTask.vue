<template>
  <div class="soluion">
    <CommentForm @reload="setLastPageAndFetch" />
    <CommentsList />
  </div>
</template>

<script>
import CommentForm from "@/components/CommentForm.vue";
import CommentsList from "@/components/CommentsList.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "SolutionTask",
  data() {
    return {};
  },
  components: {
    CommentsList,
    CommentForm,
  },
  computed: {
    ...mapGetters({
      getLastPage: "getLastPage",
    }),
  },
  methods: {
    ...mapMutations({
      setCurentPage: "setCurentPage",
      setUrlWithCurentPage: "setUrlWithCurentPage",
    }),
    ...mapActions({
      getComments: "GET_COMMENTS",
    }),
    async setLastPageAndFetch() {
      console.log("getLastPage");
      console.log(this.getLastPage);
      this.setCurentPage(this.getLastPage);
      this.setUrlWithCurentPage();
      await this.getComments();
    },
  },
};
</script>

<style scoped></style>
