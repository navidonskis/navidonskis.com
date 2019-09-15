import {GithubRepositoryInterface} from "./Interfaces";

export class ElementHelper {

  /**
   * did element has class name?
   *
   * @param {Element} element
   * @param {string} className
   */
  public static HasClass(element: Element, className: string): boolean {
    if (element.classList) {
      return element.classList.contains(className);
    }

    return new RegExp('\\b' + className + '\\b').test(element.className);
  }

  /**
   * add class name to the element.
   *
   * @param {Element} element
   * @param {string} className
   */
  public static AddClass(element: Element, className: string): void {
    if (element.classList) {
      return element.classList.add(className);
    }

    if (false === this.HasClass(element, className)) {
      element.className += ' ' + className;
    }
  }

  /**
   * remove class name from the element.
   *
   * @param {Element} element
   * @param {string} className
   */
  public static RemoveClass(element: Element, className: string): void {
    if (element.classList) {
      return element.classList.remove(className);
    }

    element.className = element.className.replace(
      new RegExp('\\b' + className + '\\b', 'g'),
      ''
    );
  }

  /**
   * Create a new element and pass an object of options.
   *
   * @param {string} tagName
   * @param {object} options
   *
   * @return HTMLElement
   */
  static CreateElement(tagName: string, options: object): HTMLElement {
    const element = document.createElement(tagName);

    for (let key in options) {
      // @ts-ignore
      element[key] = options[key];
    }

    return element;
  }

  /**
   * Create List Projects HTMLElement.
   *
   * @param {GithubRepositoryInterface} item
   * @param {number} index
   *
   * @return HTMLElement
   */
  static CreateListItem(item: GithubRepositoryInterface, index: number) {
    const {html_url, description, name} = item;
    const listElement: HTMLElement = this.CreateElement('li', {
      className: 'list-projects__item',
      id: `list-projects__item-${index}`,
    });
    const linkElement: HTMLElement = this.CreateElement('a', {
      href: html_url,
      target: '_blank',
      text: name
    });

    listElement.appendChild(linkElement);

    if (description) {
      const descriptionElement = this.CreateElement('span', {
        className: 'list-projects__item--desc',
        textContent: ` - ${description}`
      });

      listElement.appendChild(descriptionElement);
    }

    return listElement;
  }
}
