export class Constants {
  private static baseUrl = 'https://fc-cvw.xyz/hos-be';

  public static containerApi = `${Constants.baseUrl}/containers`
  public static containerByIdApi = (id: string) => `${Constants.containerApi}/${id}`
  public static assignItemsApi = (id: string) => `${Constants.containerApi}/${id}/assign`

  public static thingsApi = `${Constants.baseUrl}/things`
  public static thingByIdApi = (id: string) => `${Constants.thingsApi}/${id}`
}
