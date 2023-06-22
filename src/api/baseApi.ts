import HTTPTransport from "../utils/httpTransport";

export type Options = {
  method: string;
  timeout?: number;
  credentials?: boolean;
  mode?: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
  data?: Record<string, any>;
};

abstract class BaseApi {
  http: typeof HTTPTransport;
  baseUrl: string;

  public constructor() {
    this.http = HTTPTransport;
    this.baseUrl = "https://ya-praktikum.tech/api/v2";
  }
}

export default BaseApi;
