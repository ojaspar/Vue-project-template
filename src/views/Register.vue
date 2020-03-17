<template>
  <div>
    <div></div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data: () => ({
    register: {
      name: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions([
      //   action name
    ]),
    ...mapState([
      //   state name
    ])
  },
  computed: {
    ...mapGetters([
      // getters name
    ])
  }
};
</script>

<style>
/* @import "base/_variables"; */
/*  
import the necessary style*/
</style>