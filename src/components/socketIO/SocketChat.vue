<template>
    <div class="card mt-3">
      <div class="card-body">
        <div class="card-title">
          <h3>Chat Group</h3>
          <hr>
        </div>
        <div class="card-body">
          <div class="messages" v-for="(msg, index) in messages" :key="index">
            <p><span class="font-weight-bold">{{ msg.user }}: </span>{{ msg.message }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <b-form @submit.prevent="sendMessage">
          <b-form-group class="form-group"
                        label-for="user"
                        label="User:">
            <b-form-input type="text" v-model="user" class="form-control"></b-form-input>
          </b-form-group>
          <b-form-group class="form-group"
                        label-for="message"
                        label="Message:">
            <b-form-input type="text" v-model="message" class="form-control"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="success">Send</b-button>
        </b-form>
      </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'socket-chat',
  data() {
    return {
      user: '',
      message: '',
      messages: [],
      socket: io('localhost:3001'),
    };
  },
  mounted() {
    this.socket.on('MESSAGE', (data) => {
      this.messages = [...this.messages, data];
    });
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        user: this.user,
        message: this.message,
      });
      this.message = '';
    },
  },
};
</script>

<style scoped>

</style>
