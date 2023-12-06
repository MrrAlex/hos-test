import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Constants } from '../Constant';
import { Thing } from '../things/model/things.model';

@Injectable({
  providedIn: 'root',
})
export class ThingsEndpointsService {
  constructor(private http: HttpService) {}

  public loadThings() {
    return this.http.get<Thing[]>(Constants.thingsApi);
  }

  public loadThing(id: string) {
    return this.http.get<Thing>(Constants.thingByIdApi(id));
  }

  public saveThing(thing: Thing) {
    return this.http.post<Thing>(Constants.thingsApi, thing);
  }

  public updateThing(thing: Thing) {
    return this.http.post<Thing>(Constants.thingByIdApi(thing._id), thing);
  }

  public deleteThing(thing: Thing) {
    return this.http.delete<Thing>(Constants.thingByIdApi(thing._id));
  }
}
