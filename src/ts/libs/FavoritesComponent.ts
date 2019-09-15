import {GithubRepositoryInterface} from "./Interfaces";
import ApiComponent from "./ApiComponent";

export class FavoritesComponent extends ApiComponent {
  OnComponentInit(): void {
    const {_} = this;
    this.api.fetch('github/favorites').then((repos: object[]) => {
      repos.map((repo: GithubRepositoryInterface, index: number) => {
        const ListItem = _.CreateListItem(repo, index);

        this.container.appendChild(ListItem);
      });
    });
  }
}
