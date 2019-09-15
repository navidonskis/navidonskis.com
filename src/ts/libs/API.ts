import {ResponseJson} from "./Interfaces";

export class API {

  private url: string = 'https://api.navidonskis.com';
  private storage: Storage;

  /**
   * @param {Storage} storage
   */
  constructor(storage: Storage) {
    this.storage = storage;
  }

  /**
   * Request an API for third-party services
   *
   * @param {string} endpoint
   * @return {object}
   */
  public async fetch(endpoint: string): Promise<any> {
    const cachedEndpoint = this.storage.getItem(endpoint);

    if (cachedEndpoint) {
      return JSON.parse(cachedEndpoint);
    }

    const response: Response = await fetch(`${this.url}/${endpoint}`);
    const data: ResponseJson = await response.json();
    const {status, body} = data;

    if (200 === status) {
      this.storage.setItem(endpoint, JSON.stringify(body));

      return body;
    }

    return {};
  }
}
