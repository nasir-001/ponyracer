import { RegisterUserModel } from '@/models/RegisterUserModel';
import { UserModel } from '@/models/UserModel';
import axios from 'axios';
const baseUrl = 'https://ponyracer.ninja-squad.com';

export function useUserService() {
  return {
    async register(userModel: UserModel): Promise<RegisterUserModel> {
      const response = await axios.post<RegisterUserModel>(`${baseUrl}/api/users`, userModel);

      return Promise.resolve(response.data);
    }
  };
}
