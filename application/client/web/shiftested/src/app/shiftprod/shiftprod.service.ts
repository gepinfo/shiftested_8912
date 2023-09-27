import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ShiftprodService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllshiftprodValues(data:any){

    return this.http.post(`${this.BaseURL}/shiftprod`,data);
  }

  GetAllshiftprodValues(){
    return this.http.get(`${this.BaseURL}/shiftprod`);
  }
  GetAllshiftypesValues(){
    return this.http.get(`${this.BaseURL}/shiftypes`);
  }

  Updateshiftprod(data:any){
    return this.http.put(`${this.BaseURL}/shiftprod/${data.id}`,data);
  }

  getSpecificshiftprod(id:number){
    return this.http.get(`${this.BaseURL}/shiftprod/${id}`);
  }

  getSpecificshiftprodHistory(id:number){
    return this.http.get(`${this.BaseURL}/shiftprod/${id}/history?days=30`);
  }

  DeleteshiftprodValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/shiftprod/${dataId}`);
  }

  GetEntityById(shiftprodId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/shiftprodid/` + shiftprodId);
  }

  Searchshiftprod(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/shiftprod/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}