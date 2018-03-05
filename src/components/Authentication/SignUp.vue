<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form name="signUp" @submit="onSubmit" @reset="onReset">
          <div v-show="step === 1">
            <h2>Step 1</h2>
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
            <b-form-group id="username"
                          label="Username:" class="text-left"
                          label-for="lastNameLabel"
                          description="Please Input Your Username">
              <b-form-input id="inputUsername"
                            type="text"
                            v-model="userInfo.username"
                            required
                            placeholder="Input Username">
              </b-form-input>
            </b-form-group>
            <b-button type="reset" variant="danger">Reset</b-button>
            <b-button @click="onNext" variant="primary">Next</b-button>
          </div>
          <div v-show="step === 2">
            <h2>Step 2</h2>
            <b-form-group id="email"
                          label="Email Address:" class="text-left"
                          label-for="emailAddressLabel"
                          description="Please Input Your Email Address">
              <b-form-input id="inputEmailAddress"
                            type="email"
                            v-model="userInfo.email"
                            required
                            placeholder="Input EmailAddress">
              </b-form-input>
            </b-form-group>
            <b-form-group id="password"
                          label="Password:" class="text-left"
                          label-for="passwordLabel"
                          description="Please Input Your Password">
              <b-form-input id="inputPassword"
                            type="password"
                            v-model="userInfo.password"
                            required
                            placeholder="Input Password">
              </b-form-input>
            </b-form-group>
            <b-form-group id="ConfirmedPassword"
                          label="Confirm Password:" class="text-left"
                          label-for="lastNameLabel"
                          description="Please Confirm Your Password">
              <b-form-input id="inputConfirmedPassword"
                            type="password"
                            v-model="userInfo.confirmPassword"
                            required
                            placeholder="Input Confirmed Password">
              </b-form-input>
            </b-form-group>
            <b-button type="reset" variant="danger">Reset</b-button>
            <b-button @click="onPrevious" variant="info">Previous</b-button>
            <b-button type="submit" variant="primary">Submit</b-button>
          </div>
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
      step: 1,
      userInfo: {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
      if (this.step === 1) {
        this.userInfo.firstName = '';
        this.userInfo.lastName = '';
        this.userInfo.username = '';
      } else if (this.step === 2) {
        this.userInfo.email = '';
        this.userInfo.password = '';
        this.userInfo.confirmPassword = '';
      }
    },
    onNext(evt) {
      evt.preventDefault();
      this.step = this.step + 1;
    },
    onPrevious(evt) {
      evt.preventDefault();
      this.step = this.step - 1;
    },
  },
};
</script>

<style scoped>

</style>
