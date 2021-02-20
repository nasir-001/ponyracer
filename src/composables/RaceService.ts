import { RaceModel } from '@/models/RaceModel';
import axios from 'axios';
// store the host in the baseUrl variable
// should be inside env file in real application😊.
const baseUrl = 'https://ponyracer.ninja-squad.com';

export function useRaceService() {
  return {
    // asynchronous list function that store the Array of RaceModel.
    async list(): Promise<Array<RaceModel>> {
      // get all the PENDING RACES from this endpoint and assign it to the response variable
      const response = await axios.get<Array<RaceModel>>(`${baseUrl}/api/races`, {
        params: { status: 'PENDING' }
      });

      return Promise.resolve(response.data);
    }
  };
}
