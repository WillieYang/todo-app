<template>
  <div class="ui basic content center aligned segment">
    <button class="ui basic button icon" v-on:click="openForm" v-show="!isCreating">
      <i class="plus icon"></i>
    </button>
    <transition name="fade">
      <div class="ui centered card" v-show="isCreating">
        <div class="content">
          <div class="ui form">
            <div class="field">
              <label>Title</label>
              <input v-model="titleText" type="text" ref="title" defaultValue=""/>
            </div>
            <div class="field">
              <label>Project</label>
              <input v-model="projectText" type="text" ref="project" defaultValue=""/>
            </div>
            <div class="ui two button attached buttons">
              <button class="ui basic blue button" v-on:click="sendForm()">
                Create
              </button>
              <button class="ui basic red button" v-on:click="closeForm()">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'create-todo',
  data() {
    return {
      titleText: '',
      projectText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit('add-todo', {
          title,
          project,
          done: false,
        });
        this.newTodoText = '';
      }
      this.isCreating = false;
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  animation: fade-in .5s;
}
.fade-leave-active {
  animation: fade-in .5s reverse;
}
@keyframes fade-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
