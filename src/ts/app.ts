import {RepositoriesComponent} from "./libs/RepositoriesComponent";
import Component from "./libs/Component";
import {FavoritesComponent} from "./libs/FavoritesComponent";
import {NavigationComponent} from "./libs/NavigationComponent";
// import {ActivitiesComponent} from "./libs/ActivitiesComponent";
// import {StatsComponent} from "./libs/StatsComponent";

class App {

  public componentsList: any = {
    'repositories': RepositoriesComponent,
    'favorites': FavoritesComponent,
    'navigation': NavigationComponent,
    // 'activities': ActivitiesComponent,
    // 'stats': StatsComponent,
  };
  public instancesList: Component[] = [];

  constructor() {
    this.InitComponents();
  }

  /**
   * Render component with options if defined in element.
   *
   * @param {Element} element
   * @return {Component}
   */
  private RenderComponentInElement(element: Element): Component | false {
    let component: any = this.componentsList[element.getAttribute('data-component')];
    const options: any = {};

    if (!component) {
      return false;
    }

    for (let attributeName of element.getAttributeNames()) {
      if (/^data-/.test(attributeName)) {
        const attributeValue: string = element.getAttribute(attributeName);
        const camelCaseName: string = attributeName.substr(5).replace(/-(.)/g, ($0, $1) => $1.toUpperCase());

        options[camelCaseName] = attributeValue;
      }
    }

    return new component(element, options);
  }

  /**
   * Find elements where class name contains '__app-root' selector,
   * and render to components elements. Rendered components push to
   * window.app.instances as ready components.
   *
   * @return void
   */
  private InitComponents(): void {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('__app-root');

    for (let i = 0; i < elements.length; i++) {
      const element: Element = elements[i];
      const component: Component | boolean = this.RenderComponentInElement(element);

      if (component) {
        this.instancesList.push(component);
      }
    }
  }
}

(<any>window).app = new App();
