import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const api_url = environment.apiUrl + '/api/payments/';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  routeParams: any;

  constructor(private http: HttpClient) { }

  private authorizationHeader() {
    const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return headers;
  }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;
    console.log("resolve with params : " + JSON.stringify(this.routeParams));
    if (this.routeParams.id) {
      this.getBillData(this.routeParams.id);
    } else {
      return this.getBillDataList();
    }
    return;
  }

  getBillData(id: any) {
    return this.http.get(api_url + id, {
      headers: this.authorizationHeader()
    });
  }

  getBillDataList(){
    return this.http.get(api_url, 
      {
      headers: this.authorizationHeader()
    });
  }

}
