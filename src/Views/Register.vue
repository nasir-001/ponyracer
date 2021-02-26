<template>
  <div class="container">
    <Alert v-if="registrationFailed" class="mt-4" @dismissed="registrationFailed = false" dismissible>Try again with another login</Alert>
    <Form @submit="register($event)" v-slot="{ meta: formMeta }">
      <Field name="login" rules="required|min:3" v-slot="{ field, meta }" v-model="login">
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
      <Field
        name="confirmPassword"
        :label="'password confirmation'"
        rules="required|confirmed:password"
        v-slot="{ field, meta }"
        v-model="confirmPassword"
      >
        <div class="form-group">
          <label for="confirmPassword-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">Password confirmation</label>
          <input
            id="confirmPassword-input"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
          />
          <ErrorMessage name="confirmPassword" class="invalid-feedback" />
        </div>
      </Field>
      <Field
        name="birthYear"
        :label="'birth year'"
        rules="required|min_value:1900|isOldEnough"
        v-slot="{ field, meta }"
        v-model.number="birthYear"
      >
        <div class="form-group">
          <label for="birthYear-input" :class="{ 'text-danger': meta.dirty && !meta.valid }">BirthYear</label>
          <input
            id="birthYear-input"
            type="number"
            class="form-control"
            :class="{ 'is-invalid': meta.dirty && !meta.valid }"
            v-bind="field"
          />
          <ErrorMessage name="birthYear" class="invalid-feedback" />
        </div>
      </Field>
      <button class="btn btn-primary" type="submit" :disabled="!formMeta.valid">Let's go!</button>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RegisterUserModel } from '@/models/RegisterUserModel';
import { UserModel } from '@/models/UserModel';
import { useUserService } from '@/composables/UserService';
import Alert from '@/components/Alert.vue';
import '@/forms';
import router from '@/router';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineComponent({
  name: 'Register',
  components: {
    Alert,
    Form,
    Field,
    ErrorMessage
  },

  setup() {
    const userCreadentials = ref<RegisterUserModel | null>(null);
    const registrationFailed = ref<boolean>(false);
    const userService = useUserService();

    async function register(credentials: UserModel) {
      try {
        userCreadentials.value = await userService.register(credentials);
        if (userCreadentials.value) {
          router.push({ name: 'home' });
        }
      } catch (error) {
        registrationFailed.value = true;
      }
    }

    return { register, registrationFailed };
  }
});
</script>
