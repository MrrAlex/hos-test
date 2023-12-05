export class Constants {
  private static baseUrl = 'http://localhost:3000';

  public static containerApi = `${Constants.baseUrl}/containers`
  public static containerByIdApi = (id: string) => `${Constants.containerApi}/${id}`

  public static thingsApi = `${Constants.baseUrl}/things`
  public static thingByIdApi = (id: string) => `${Constants.thingsApi}/${id}`
}
