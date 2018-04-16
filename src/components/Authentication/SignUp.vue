<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <el-button type="primary" @click="modalVisible = true">{{ $t('sign_up') }}</el-button>
        <el-dialog
          :title="$t('sign_up')" :visible.sync="modalVisible"
          width="30%" :before-close="handleClose">
          <el-steps :active="step" finish-status="success" class="no_center">
            <el-step :title="$t('step_1')"></el-step>
            <el-step :title="$t('step_2')"></el-step>
          </el-steps>
          <br>
          <b-form name="signUp" @submit="onSubmit" @reset="onReset">
            <div v-if="step === 1">
              <b-form-group id="firstName"
                            :label="$t('firstName')" class="text-left"
                            label-for="firstNameLabel">
                <b-form-input id="inputFirstName"
                              type="text"
                              v-model="userInfo.firstName"
                              :placeholder="$t('firstName_input')"
                              @change="$v.userInfo.firstName.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.firstName.required && $v.userInfo.firstName.$dirty">
                {{ $t('firstName_required_msg') }}</pre>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.firstName.minLength">
                {{ $t('firstName_error_msg',
                {minLength: $v.userInfo.firstName.$params.minLength.min})}}
              </pre>
              </b-form-group>
              <b-form-group id="lastName"
                            :label="$t('lastName')" class="text-left"
                            label-for="lastNameLabel">
                <b-form-input id="inputLastName"
                              type="text"
                              v-model="userInfo.lastName"
                              :placeholder="$t('lastName_input')"
                              @change="$v.userInfo.lastName.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.lastName.required && $v.userInfo.lastName.$dirty">
                {{ $t('lastName_required_msg') }}</pre>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.lastName.minLength">
                {{ $t('lastName_error_msg',
                {minLength: $v.userInfo.lastName.$params.minLength.min})}}
              </pre>
              </b-form-group>
              <b-form-group id="username"
                            :label="$t('username')" class="text-left"
                            label-for="lastNameLabel">
                <b-form-input id="inputUsername"
                              type="text"
                              v-model="userInfo.username"
                              :placeholder="$t('username_input')"
                              @change="$v.userInfo.username.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.username.required && $v.userInfo.username.$dirty">
                {{ $t('username_required_msg') }}</pre>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.username.minLength">
                {{ $t('username_error_msg',
                {minLength: $v.userInfo.username.$params.minLength.min})}}
              </pre>
              </b-form-group>
              <b-button type="reset" variant="danger">{{ $t('reset_button') }}</b-button>
              <b-button @click="onNext" variant="info"
                        :disabled="$v.userInfo.firstName.$invalid
                      || $v.userInfo.lastName.$invalid
                      || $v.userInfo.username.$invalid">{{ $t('next_button') }}</b-button>
            </div>
            <div v-if="step === 2">
              <b-form-group id="email"
                            :label="$t('email')" class="text-left"
                            label-for="emailAddressLabel">
                <b-form-input id="inputEmailAddress"
                              type="email"
                              v-model="userInfo.email"
                              :placeholder="$t('email_input')"
                              @change="$v.userInfo.email.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.email.required && $v.userInfo.email.$dirty">
                {{ $t('email_required_msg') }}</pre>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.email.email">
                {{ $t('email_error_msg') }}
              </pre>
              </b-form-group>
              <b-form-group id="password"
                            :label="$t('password')" class="text-left"
                            label-for="passwordLabel">
                <b-form-input id="inputPassword"
                              type="password"
                              v-model="userInfo.password"
                              :placeholder="$t('password_input')"
                              @change="$v.userInfo.password.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.password.required && $v.userInfo.password.$dirty">
                {{ $t('password_required_msg') }}</pre>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.password.pwdLimit">
                {{ $t('password_error_msg') }}
              </pre>
              </b-form-group>
              <b-form-group id="ConfirmedPassword"
                            :label="$t('confirmedPwd')" class="text-left"
                            label-for="lastNameLabel">
                <b-form-input id="inputConfirmedPassword"
                              type="password"
                              v-model="userInfo.confirmPassword"
                              :placeholder="$t('confirmedPwd_input')"
                              @change="$v.userInfo.confirmPassword.$touch()">
                </b-form-input>
                <pre class="text-left text-danger"
                     v-if="!$v.userInfo.confirmPassword.sameAsPassword
                   && $v.userInfo.confirmPassword.$dirty">
                {{ $t('confirmedPwd_error_msg') }}
              </pre>
              </b-form-group>
              <b-button type="reset" variant="danger">{{ $t('reset_button') }}</b-button>
              <b-button @click="onPrevious" variant="info">{{ $t('previous_button') }}</b-button>
              <b-button type="submit" variant="primary" :disabled="$v.$invalid">
                {{ $t('submit_button') }}
              </b-button>
            </div>
          </b-form>
        </el-dialog>
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
      modalVisible: false,
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
    handleClose(done) {
      this.$confirm(this.$t('confirm_close'))
        .then((_) => {
          console.log(_);
          done();
        })
        .catch((_) => {
          console.log(_);
        });
      console.log(this.$confirm);
    },
  },
};
</script>

<style scoped>
pre {
  text-align: left;
  white-space: pre-line;
}
.no_center {
  text-align: justify;
}
</style>
