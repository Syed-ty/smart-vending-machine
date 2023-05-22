import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }



  addproduct(data:any){
    return this.http.post<{
      error:boolean,
      message:string,
      response:any
    }>(`${environment.baseUrl}/products/addproduct`,data)
  }

  getproduct(){
    return this.http.get<{
      error:boolean,
      message:string,
      response:any
    }>(`${environment.baseUrl}/products/getalldata`)
  }
 sharedInformatrion = new Subject()
  sharedData(data:any){
    this.sharedInformatrion.next(data)
  }

  getResponseData(){
    return this.sharedInformatrion
  }

}
