<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="firstName"
                        label="First Name:" class="text-left"
                        label-for="firstNameLabel"
                        description="Please Input Your First Name">
            <b-form-input id="inputFirstName"
                          type="text"
                          v-model="form.firstName"
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
                          v-model="form.lastName"
                          required
                          placeholder="Input LastName">
            </b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
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
      form: {
        firstName: '',
        lastName: '',
      },
    };
  },
  methods: {
    onSubmit: (evt) => {
      evt.preventDefault();
      console.log(JSON.stringify(this.form));
    },
    onReset: (evt) => {
      evt.preventDefault();
      console.log(this.show);
      this.form.firstName = '';
      this.form.lastName = '';
    },
  },
};
</script>

<style scoped>

</style>
