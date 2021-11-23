<template>
  <div class="task">
    <TestTask />
  </div>
</template>

<script>
import TestTask from "@/components/TestTask.vue";

export default {
  name: "Task",
  components: {
    TestTask,
  },
};
</script>
