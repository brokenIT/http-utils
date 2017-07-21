import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response} from '@angular/http';
import { NetworkUtility } from "http-utils";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthHttp {

  constructor(private _http: Http) { }

  public get(url: string): Observable<Response> {
    return this._http.get(url, this.getAuth());
  }

  public post(url: string, body: any): Observable<Response> {
    return this._http.post(url, body, this.getAuth());
  }

  public put(url: string, body: any): Observable<Response> {
    return this._http.put(url, body, this.getAuth());
  }

  public delete(url: string): Observable<Response> {
    return this._http.delete(url, this.getAuth());
  }

  public patch(url: string, body: any): Observable<Response> {
    return this._http.patch(url, body, this.getAuth());
  }

  public head(url: string): Observable<Response> {
    return this._http.head(url, this.getAuth());
  }

  public getNoCache(url: string): Observable<Response> {
    return this._http.get(url, this.getAuthNoCached());
  }

  public postNoCache(url: string, body: any): Observable<Response> {
    return this._http.post(url, body, this.getAuthNoCached());
  }

  public putNoCache(url: string, body: any): Observable<Response> {
    return this._http.put(url, body, this.getAuthNoCached());
  }

  public deleteNoCache(url: string): Observable<Response> {
    return this._http.delete(url, this.getAuthNoCached());
  }

  public patchNoCache(url: string, body: any): Observable<Response> {
    return this._http.patch(url, body, this.getAuthNoCached());
  }

  public headNoCache(url: string): Observable<Response> {
    return this._http.head(url, this.getAuthNoCached());
  }

  private getAuth(): RequestOptions {
    return NetworkUtility.getAuth();
  }

  private getAuthNoCached(): RequestOptions {
    return NetworkUtility.getAuthNoCache();
  }

}
