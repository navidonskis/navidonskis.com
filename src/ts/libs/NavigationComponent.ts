import Component from "./Component";

export class NavigationComponent extends Component {

  /**
   * @return Element
   */
  Handler() {
    return this.container.querySelector('.navigation--button');
  }

  OnComponentInit(): void {
    const {_} = this;
    const Handler: Element = this.Handler();
    const ActiveClass: string = 'navigation--open';

    Handler.addEventListener('click', () => {
      if (_.HasClass(this.container, ActiveClass)) {
        return _.RemoveClass(this.container, ActiveClass);
      }

      _.AddClass(this.container, ActiveClass);
    });
  }
}
