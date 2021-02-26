<template>
  <h1>Log in</h1>
  <div class="container">
    <Alert v-if="authenticationFailed" class="mt-4" @dismissed="authenticationFailed = false" dismissible>Form is not valid</Alert>
    <Form @submit="authenticate($event)" v-slot="{ meta: formMeta }">
      <Field name="login" rules="required" v-slot="{ field, meta }" v-model="login">
        <div class="form-group">
          <label for="login-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Login</label>
          <input id="login-input" class="form-control" :class="{ 'is-invalid': meta.dirty && !meta.valid }" v-bind="field" />
          <ErrorMessage name="login" class="invalid-feedback" />
        </div>
      </Field>
      <Field name="password" rules="required" v-slot="{ field, meta }" v-model="password">
        <div class="form-group">
          <label for="password-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Password</label>
          <input
            id="password-input"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
          />
          <ErrorMessage name="password" class="invalid-feedback" />
        </div>
      </Field>
      <button class="btn btn-primary" :disabled="!formMeta.valid">Login</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import '@/forms';
import { useUserService } from '@/composables/UserService';
import { RegisterUserModel } from '@/models/RegisterUserModel';
import { AuthenticateModel } from '@/models/UserModel';
import Alert from '@/components/Alert.vue';
import router from '@/router';

export default defineComponent({
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage,
    Alert
  },

  setup() {
    const loginUser = useUserService();
    const loginCresentials = ref<RegisterUserModel | null>(null);
    const authenticationFailed = ref<boolean>(false);

    async function authenticate(credentials: AuthenticateModel) {
      try {
        loginCresentials.value = await loginUser.authenticate(credentials);
        if (loginCresentials.value) {
          router.push({ name: 'home' });
        }
      } catch (error) {
        authenticationFailed.value = true;
      }
    }

    return { authenticate, authenticationFailed };
  }
});
</script>
