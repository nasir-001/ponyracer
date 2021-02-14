import { PonyModel } from './PonyModel';

export interface RaceModel {
  id: number;
  name: string;
  startInstant: string;
  ponies: Array<PonyModel>;
}
