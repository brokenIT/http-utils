import { Observable } from "rxjs/Rx";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

export class NetworkUtility {

  public static getNoCache(): RequestOptions{
    return new RequestOptions({
      headers: new Headers({ 'Cache-Control': 'no-cache', 'Pragma':'no-cache', 'Expires':'-1' })
    });
  }

  public static getAuth(): RequestOptions {
    var headers: Headers = new Headers();
    return new RequestOptions({
      headers: new Headers({'jwt': localStorage.getItem('jwtToken') })
    });
  }

  public static getAuthNoCache(): RequestOptions {
    return new RequestOptions({
     headers: new Headers({ 'Cache-Control': 'no-cache', 'Pragma':'no-cache', 'Expires':'-1', 'jwt': localStorage.getItem('jwtToken') })
    });
  }
}
