import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = environment.apiurl
  userData: any = [];
  constructor(public httpClient : HttpClient) { }

  function():Observable<any>{
    return this.httpClient.post(`url`,{
      
    })
  }

   getLocalStorageData() {
    if (localStorage.getItem("accessToken") != null) {
      let retrievedData = localStorage.getItem("currentUser");
      this.userData = JSON.parse(retrievedData);
      //   this.changeUserInfo.next(this.userData)
      return this.userData;
    }
  }
  
   checkValidInputData(event: any, type) {
    var pattern: any;
    if (type == '1') {
      pattern = /[0-9\+\-\ ]/;//validae only number
    }
    if (type == '2') {
      pattern = /^[0-9]*\.?[0-9]*$/;//validae decimal with number
    }
    if (type == '3') {
      pattern = /^[A-Za-z0-9]+$/;//validae alphanumeric
    }
    if (type == '4') {
      pattern = /^[A-Za-z0-9 ]+$/;//validae alphanumeric with space

    }
    if (type == '5') {
      pattern = /^[(\d{3}\)\s?\d{3}-\d{4}]+$/; // pattern = /[0-9\+\/\ ]/;//validae only number with \
    }
    if (type == '6') {
      pattern = /^['A-Za-z0-9\-\\.\\/\']+$/;
    }
    if (type == '7') {
      pattern = /^[A-Za-z ]+$/;//validae alphabets with space 
      // pattern= /^['A-Za-z0-9 \-\ \.\ \:\ \;\ \_\ \%\ \#\ \@\ \%\']+$/;
    }
    if (type == '8') {
      pattern = /^[a-zA-Z \-\']+/; //Only alphabets
    }
    if (type == '10') {
      // pattern =  /^[A-Za-z0-9 #&()]+$/; //for location table
      pattern = /^[A-Za-z0-9#&()_., -]+$/;
    }
    if (type == '11') {
      pattern = /^[0-9 \,\']+$/;
    }
    if (type == '12') {
      pattern = /^['A-Za-z0-9 \-\ \.\ \(\ \)\ \\\\ \#\ \/\ \,\ \&\']+$/;//validae alphanumeric with space ^[a-zA-Z \-\ \.\']+ ............ADDRESS
    }

    if (type == '13') {
      pattern = /^['A-Za-z0-9 \-\ \.\ \&\ \/\']+$/;
    }

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  
}
