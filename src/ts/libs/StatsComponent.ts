import ApiComponent from "./ApiComponent";

export class StatsComponent extends ApiComponent {
  OnComponentInit(): void {
    this.api.fetch('strava/stats').then((stats: object[]) => {
      console.log(stats);
    });
  }
}
