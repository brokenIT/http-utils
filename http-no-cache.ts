import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { NetworkUtility } from "http-utils";
import { Observable } from "rxjs/Observable";

@Injectable()
export class NoCachedHttp {

  constructor(private _http: Http) { }

  public get(url: string): Observable<Response> {
    return this._http.get(url, this.noCached());
  }

  public post(url: string, body: any): Observable<Response> {
    return this._http.post(url, body, this.noCached());
  }

  public put(url: string, body: any): Observable<Response> {
    return this._http.put(url, body, this.noCached());
  }

  public delete(url: string): Observable<Response> {
    return this._http.delete(url, this.noCached());
  }

  public patch(url: string, body: any): Observable<Response> {
    return this._http.patch(url, body, this.noCached());
  }

  public head(url: string): Observable<Response> {
    return this._http.head(url, this.noCached());
  }

  private noCached(): RequestOptions {
    return NetworkUtility.getNoCache();
  }

}
