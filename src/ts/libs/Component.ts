import {ElementHelper} from "./ElementHelper";

export default abstract class Component {

  protected container: Element;
  protected options: object = {};
  protected _ = ElementHelper;

  /**
   * @param {Element} container
   * @param {object} options
   */
  constructor(container: Element, options: object = {}, initComponent: boolean = true) {
    this.container = container;
    this.options = options;

    if (initComponent) {
      this.OnComponentInit();
    }
  }

  abstract OnComponentInit(): void;
}
