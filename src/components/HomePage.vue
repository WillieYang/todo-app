<template>
  <div>
    <div>
      <b-jumbotron header="Vue Demonstration" lead="MIRROR LAND TO THE DEEP">
        <p class="text-dark">{{ msg }}</p>
        <b-btn variant="info" href="#" v-b-modal.modal1>More Info</b-btn>
      </b-jumbotron>
      <b-modal id="modal1" title="Bootstrap-vue">
        <p>Hello from modal!</p>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
    return {
      msg: 'Right here, right now, Seeking for Fantasy',
    };
  },
};
</script>

<style>

</style>
