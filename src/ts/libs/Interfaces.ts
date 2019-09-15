export interface GithubRepositoryInterface {
  html_url: string,
  description: string,
  name: string
}

export interface ResponseJson {
  status: number;
  body: object;
}
