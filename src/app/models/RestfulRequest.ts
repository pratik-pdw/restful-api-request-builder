export interface RestfulRequest {
  authorizationScheme?: {
    basic: { username: string; password: string };
    bearer: { token: string };
  };
  headers?: { key: string; value: string }[];
  queryParameters?: { key: string; value: string }[];
  reqBody?: any;
  selectedAuthMethod?: string;
  url: string;
  method: string;
  reqBodyType: string;
}
