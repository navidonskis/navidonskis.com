export class XElement {

  element: HTMLElement;

  /**
   * @param {HTMLElement} element
   */
  constructor(element: HTMLElement) {
    this.element = element;
  }

  /**
   * did element has class name?
   *
   * @param {string} className
   */
  hasClass (className: string): boolean {
    if (this.element.classList) {
      return this.element.classList.contains(className);
    }

    return new RegExp('\\b' + className + '\\b').test(this.element.className);
  }

  /**
   * add class name to the element.
   *
   * @param {string} className
   */
  addClass (className: string): void {
    const { element } = this;

    if (this.element.classList) {
      return this.element.classList.add(className);
    }

    if (false === this.hasClass(className)) {
      this.element.className += ' ' + className;
    }
  }

  /**
   * remove class name from the element.
   *
   * @param {string} className
   */
  removeClass (className: string): void {
    if (this.element.classList) {
      return this.element.classList.remove(className);
    }

    this.element.className = this.element.className.replace(
      new RegExp('\\b' + className + '\\b', 'g'),
      ''
    );
  }
}
