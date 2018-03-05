<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <h2>Step 1</h2>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="firstName"
                        label="First Name:" class="text-left"
                        label-for="firstNameLabel"
                        description="Please Input Your First Name">
            <b-form-input id="inputFirstName"
                          type="text"
                          v-model="userInfo.firstName"
                          required
                          placeholder="Input FirstName">
            </b-form-input>
          </b-form-group>
          <b-form-group id="lastName"
                        label="Last Name:" class="text-left"
                        label-for="lastNameLabel"
                        description="Please Input Your Last Name">
            <b-form-input id="inputLastName"
                          type="text"
                          v-model="userInfo.lastName"
                          required
                          placeholder="Input LastName">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Next</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'sign-up',
  data() {
    return {
      show: true,
      step: 1,
      userInfo: {
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(JSON.stringify(this.userInfo));
    },
    onReset(evt) {
      evt.preventDefault();
      console.log(this);
      console.log(this.step);
      this.userInfo.firstName = '';
      this.userInfo.lastName = '';
    },
  },
};
</script>

<style scoped>

</style>
