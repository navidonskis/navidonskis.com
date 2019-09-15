import ApiComponent from "./ApiComponent";

export class ActivitiesComponent extends ApiComponent {
  OnComponentInit(): void {
    this.api.fetch('strava/activities').then((activities: object[]) => {
      console.log(activities);
    });
  }
}
