import {API} from "./API";
import Component from "./Component";

export default abstract class ApiComponent extends Component {

  protected api: API;
  readonly storage: Storage;

  /**
   * @param {Element} container
   * @param {object} options
   */
  constructor(container: Element, options: object = {}) {
    super(container, options, false);

    this.storage = typeof window.sessionStorage ? window.sessionStorage : new Storage();
    this.api = new API(this.storage);

    this.OnComponentInit();
  }
}
