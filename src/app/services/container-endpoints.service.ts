import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {Container} from "../containers/model/container.model";
import {Constants} from "../Constant";

@Injectable({
  providedIn: 'root'
})
export class ContainerEndpointsService {

  constructor(private http: HttpService) { }

  public loadContainers() {
    return this.http.get<Container[]>(Constants.containerApi)
  }

  public loadContainer(id: string) {
    return this.http.get<Container>(Constants.containerByIdApi(id))
  }

  public saveContainer(container: Container) {
    return this.http.post<Container>(Constants.containerApi, container)
  }

  public updateContainer(container: Container) {
    return this.http.post<Container>(Constants.containerByIdApi(container.id), container)
  }
}
