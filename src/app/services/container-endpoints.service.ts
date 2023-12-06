import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AssignItemDto, Container } from '../containers/model/container.model';
import { Constants } from '../Constant';

@Injectable({
  providedIn: 'root',
})
export class ContainerEndpointsService {
  constructor(private http: HttpService) {}

  public loadContainers(includeChildContainers: boolean) {
    return this.http.get<Container[]>(Constants.containerApi, {
      includeChildContainers,
    });
  }

  public loadContainer(id: string) {
    return this.http.get<Container>(Constants.containerByIdApi(id));
  }

  public saveContainer(container: Container) {
    return this.http.post<Container>(Constants.containerApi, container);
  }

  public updateContainer(container: Container) {
    return this.http.post<Container>(
      Constants.containerByIdApi(container._id),
      container,
    );
  }

  public deleteContainer(container: Container) {
    return this.http.delete<Container>(
      Constants.containerByIdApi(container._id),
    );
  }

  public assignItemsToContainer(id: string, items: AssignItemDto[]) {
    return this.http.post<Container>(Constants.assignItemsApi(id), items);
  }
}
