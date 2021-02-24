<template>
  <div class="container">
    <Alert :dismissible="true" :variant="danger" v-if="registrationFailed" />
    <form @submit.prevent="register()" class="container">
      <div class="form-group">
        <label for="login">Login</label>
        <input v-model="login" id="login" name="login" class="form-control" />
        <div class="text-danger" v-if="errors.errors.login && dirty.login === false">The login is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" id="password" type="password" class="form-control" />
        <div class="text-danger" v-if="errors.errors.password && dirty.password === false">The password is required</div>
      </div>
      <div class="form-group">
        <label for="birthYear">Birth Date</label>
        <input v-model.number="birthYear" id="birthYear" type="number" class="form-control" />
        <div class="text-danger" v-if="errors.errors.birthYear && dirty.birthYear">The birth year is required</div>
      </div>
      <button type="submit" class="btn btn-primary">Let’s go!</button>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import { UserModel } from '@/models/UserModel';
import { RegisterUserModel } from '@/models/RegisterUserModel';
import { useUserService } from '@/composables/UserService';
import { useRouter } from 'vue-router';
import Alert from '@/components/Alert.vue';

const userCreadentials = ref<RegisterUserModel | null>(null);
const registrationFailed = ref<boolean>(false);
const userService = useUserService();
const router = useRouter();

export default defineComponent({
  name: 'Register',
  components: {
    Alert
  },

  setup() {
    const date = new Date();

    const userModel = reactive<UserModel>({
      login: '',
      password: '',
      birthYear: date.getFullYear() - 18
    });

    const errors = computed(() => {
      const errors: Partial<Record<keyof UserModel, boolean>> = {};

      if (!userModel.login) {
        errors.login = true;
      }
      if (!userModel.password) {
        errors.password = true;
      }
      if (!userModel.birthYear) {
        errors.birthYear = true;
      }
      return { errors };
    });

    const dirty = reactive<{ [K in keyof UserModel]: boolean }>({
      login: false,
      password: false,
      birthYear: false
    });

    const emitLogin = () => {
      dirty.login = true;
    };

    const emitPassword = () => {
      dirty.password = true;
    };

    const emitBirthYear = () => {
      dirty.birthYear = true;
    };

    async function register() {
      try {
        userCreadentials.value = await userService.register(userModel);
        if (userCreadentials.value) {
          router.push('home');
        }
      } catch (error) {
        registrationFailed.value = true;
      }
    }

    return { ...toRefs(userModel), register, errors, dirty, emitLogin, emitPassword, emitBirthYear };
  }
});
</script>
