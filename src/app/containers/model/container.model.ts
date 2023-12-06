import { Thing } from '../../things/model/things.model';

export interface Container {
  name: string;
  icon: string;
  _id: string;
  volume: number;
  takenSpace: number;
  description: number;
  things: Thing[];
  containers: Container[];
  container: string;
}

export interface AssignItemDto {
  _id: string;
  type: string;
}
