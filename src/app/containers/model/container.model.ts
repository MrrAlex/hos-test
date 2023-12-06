import { Thing } from '../../things/model/things.model';

export interface Container {
  name: string;
  icon: string;
  _id: string;
  volume: number;
  freeSpace: number;
  description: number;
  things: Thing[];
  containers: Container[];
}
