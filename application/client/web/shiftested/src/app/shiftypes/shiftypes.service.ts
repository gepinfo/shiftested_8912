import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class ShiftypesService {
    constructor(
        private http: HttpClient,
    ) { }


  BaseURL = environment.baseUrlAPI;


  PostAllshiftypesValues(data:any){

    return this.http.post(`${this.BaseURL}/shiftypes`,data);
  }

  GetAllshiftypesValues(){
    return this.http.get(`${this.BaseURL}/shiftypes`);
  }

  Updateshiftypes(data:any){
    return this.http.put(`${this.BaseURL}/shiftypes/${data.id}`,data);
  }

  getSpecificshiftypes(id:number){
    return this.http.get(`${this.BaseURL}/shiftypes/${id}`);
  }

  getSpecificshiftypesHistory(id:number){
    return this.http.get(`${this.BaseURL}/shiftypes/${id}/history?days=30`);
  }

  DeleteshiftypesValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/shiftypes/${dataId}`);
  }

  GetEntityById(shiftypesId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/shiftypesid/` + shiftypesId);
  }

  Searchshiftypes(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/shiftypes/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }
}