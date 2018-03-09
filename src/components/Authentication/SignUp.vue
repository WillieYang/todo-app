<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <b-form name="signUp" @submit="onSubmit" @reset="onReset">
          <div v-if="step === 1">
            <h2>Step 1</h2>
            <b-form-group id="firstName"
                          label="First Name:" class="text-left"
                          label-for="firstNameLabel">
              <b-form-input id="inputFirstName"
                            type="text"
                            v-model="userInfo.firstName"
                            placeholder="Please Input Your First Name"
                            @change="$v.userInfo.firstName.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.firstName.required && $v.userInfo.firstName.$dirty">
                First Name is required</pre>
              <pre class="text-left text-danger"
                    v-if="!$v.userInfo.firstName.minLength">
                First Name must have at least
                {{$v.userInfo.firstName.$params.minLength.min}} letters.
              </pre>
            </b-form-group>
            <b-form-group id="lastName"
                          label="Last Name:" class="text-left"
                          label-for="lastNameLabel">
              <b-form-input id="inputLastName"
                            type="text"
                            v-model="userInfo.lastName"
                            placeholder="Please Input Your Last Name"
                            @change="$v.userInfo.lastName.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.lastName.required && $v.userInfo.lastName.$dirty">
                Last Name is required</pre>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.lastName.minLength">
                Surname must have at least {{$v.userInfo.lastName.$params.minLength.min}} letters.
              </pre>
            </b-form-group>
            <b-form-group id="username"
                          label="Username:" class="text-left"
                          label-for="lastNameLabel">
              <b-form-input id="inputUsername"
                            type="text"
                            v-model="userInfo.username"
                            placeholder="Please Input Your Username"
                            @change="$v.userInfo.username.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.username.required && $v.userInfo.username.$dirty">
                Username is required</pre>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.username.minLength">
                Username must have at least {{$v.userInfo.username.$params.minLength.min}} letters.
              </pre>
            </b-form-group>
            <b-button type="reset" variant="danger">Reset</b-button>
            <b-button @click="onNext" variant="info"
                      :disabled="$v.userInfo.firstName.$invalid
                      || $v.userInfo.lastName.$invalid
                      || $v.userInfo.username.$invalid">Next</b-button>
          </div>
          <div v-if="step === 2">
            <h2>Step 2</h2>
            <b-form-group id="email"
                          label="Email Address:" class="text-left"
                          label-for="emailAddressLabel">
              <b-form-input id="inputEmailAddress"
                            type="email"
                            v-model="userInfo.email"
                            placeholder="Please Input Your Email Address"
                            @change="$v.userInfo.email.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.email.required && $v.userInfo.email.$dirty">
                Email address is required</pre>
              <pre class="text-left text-danger"
                    v-if="!$v.userInfo.email.email">
                Invalid email address, please try again!
              </pre>
            </b-form-group>
            <b-form-group id="password"
                          label="Password:" class="text-left"
                          label-for="passwordLabel">
              <b-form-input id="inputPassword"
                            type="password"
                            v-model="userInfo.password"
                            placeholder="Please Input Your Password"
                            @change="$v.userInfo.password.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.password.required && $v.userInfo.password.$dirty">
                Password is required</pre>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.password.pwdLimit">
                At least 8-16 letters and numbers, and the underscore combination @
              </pre>
            </b-form-group>
            <b-form-group id="ConfirmedPassword"
                          label="Confirm Password:" class="text-left"
                          label-for="lastNameLabel">
              <b-form-input id="inputConfirmedPassword"
                            type="password"
                            v-model="userInfo.confirmPassword"
                            placeholder="Please Confirm Your Password"
                            @change="$v.userInfo.confirmPassword.$touch()">
              </b-form-input>
              <pre class="text-left text-danger"
                   v-if="!$v.userInfo.confirmPassword.sameAsPassword
                   && $v.userInfo.confirmPassword.$dirty">
                Password does not match the confirm password
              </pre>
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
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators';
// import maxMin from '@/Validators/test-validators';
import pwdLimit from '@/Validators/pwd-validators';

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
  validations: {
    userInfo: {
      firstName: {
        required,
        minLength: minLength(4),
      },
      lastName: {
        required,
        minLength: minLength(4),
      },
      username: {
        required,
        minLength: minLength(6),
      },
      email: {
        required,
        email,
      },
      password: {
        required,
        pwdLimit,
      },
      confirmPassword: {
        sameAsPassword: sameAs('password'),
      },
    },
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
  pre {
text-align: left;
white-space: pre-line;
}
<style scoped>
pre {
  text-align: left;
  white-space: pre-line;
}
</style>
