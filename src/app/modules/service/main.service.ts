import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  url = environment.apiurl
  constructor(public httpClient : HttpClient) { }

  getuserlist(page, limit, searchval):Observable<any>{
    return this.httpClient.post(`${this.url}api/getuserlist`,{
      page:page,
      limit:limit,
      searchval:searchval
    })
  }

  getuserdetails(userid):Observable<any>{
    return this.httpClient.post(`${this.url}api/getuserdetails`,{
        userid : userid
    })
  }

  saveuserdetails(data):Observable<any>{
    return this.httpClient.post(`${this.url}api/saveuserdetails`,{
      name : data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
      status: data.status,
    })
  }

  updateuserdetails(data,userid):Observable<any>{
    return this.httpClient.post(`${this.url}api/updateuserdetails`,{
      userid:userid,
      name : data.name,
      email: data.email,
      role_id: data.role_id,
      status: data.status,
    })
  }

  deleteuser(userid):Observable<any>{
    return this.httpClient.post(`${this.url}api/deleteuser`,{
      userid : userid
    })
  }

  //------------------- property_type -------------------//

  property_type():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/property_type`,{})
  }

  insertPropertyType(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertPropertyType`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdatePropertyType(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdatePropertyType`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdatePropertyStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdatePropertyType`, {
      id : id,
      status: data,
    })
  }

  getPropertyTypeById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getPropertyTypeById`, {
      id : id
    })
  }

  deletePropertyType(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deletePropertyType`, {
      id : id
    })
  }
  //------------------- Unit Type -------------------//
  unit_types():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/unit_types`,{})
  }

  insertUnitTypes(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertUnitTypes`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  updateUnitTypes(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/updateUnitTypes`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  updateUnitTypeStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/updateUnitTypes`, {
      id : id,
      status: data,
    })
  }

  getUnitTypesById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getUnitTypesById`, {
      id : id
    })
  }

  deleteUnitTypes(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deleteUnitTypes`, {
      id : id
    })
  }

  //------------------- floor_types -------------------//
  floor_types():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/floor_types`,{})
  }

  insertFloorTypes(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertFloorTypes`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  updateFloorTypes(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/updateFloorTypes`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  updateFloorTypeStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/updateFloorTypes`, {
      id : id,
      status: data,
    })
  }

  getFloorTypesById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getFloorTypesById`, {
      id : id
    })
  }

  deleteFloorTypes(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deleteFloorTypes`, {
      id : id
    })
  }

  //------------------- property_status -------------------//
  property_status():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/property_status`,{})
  }

  insertPropertyStatus(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertPropertyStatus`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdatePropertyStatus(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdatePropertyStatus`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdatePropertyTypeStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdatePropertyStatus`, {
      id : id,
      status: data,
    })
  }

  getPropertyStatusById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getPropertyStatusById`, {
      id : id
    })
  }

  deletePropertyStatus(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deletePropertyStatus`, {
      id : id
    })
  }

  //------------------- amenities -------------------//
  amenities():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/amenities`,{})
  }

  insertAmenity(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertAmenity`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdateAmenity(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdateAmenity`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdateAmenityStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdateAmenity`, {
      id : id,
      status: data,
    })
  }

  getAmenityById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getAmenityById`, {
      id : id
    })
  }

  deleteAmenity(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deleteAmenity`, {
      id : id
    })
  }

  //------------------- furnishing_status -------------------//
  furnishing_status():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/furnishing_status`,{})
  }

  insertFurnishingStatus(data): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/insertFurnishingStatus`, {
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdateFurnishingStatus(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdateFurnishingStatus`, {
      id : id,
      name: data.name,
      description: data.description,
      status: data.status,
    })
  }

  UpdateFurnishingStatusOnly(data,id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/UpdateFurnishingStatus`, {
      id : id,
      status: data,
    })
  }

  getFurnishingStatusById(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/getFurnishingStatusById`, {
      id : id
    })
  }

  deleteFurnishingStatus(id): Observable<any> {
    return this.httpClient.post(`${this.url}api/masters/deleteFurnishingStatus`, {
      id : id
    })
  }

  //------------------- location -------------------//
  location():Observable<any>{
    return this.httpClient.get(`${this.url}api/masters/location`,{})
  }

  getallproperties(page, limit, searchval):Observable<any>{
    return this.httpClient.post(`${this.url}api/property/getallproperties`,{
      page:page,
      limit:limit,
      searchval:searchval
    })
  }

  savepropertydetails(data,image,gallery):Observable<any>{
    return this.httpClient.post(`${this.url}api/property/savepropertydetails`,{
      title: data.name,
      price: data.price,
      address: data.address,
      city_id: data.city,
      property_type_id: data.propertyType,
      unit_type_id: data.unitType,
      furnishing_status_id: data.furnishingStatus,
      property_status_id: data.propertyStatus,
      description: data.description,
      amenities: data.amenities,
      floor_type_id: data.floorType,
      total_floors: data.totalFloors,
      image: image,
      gallery: gallery
    })
  }

  getpropertydetails(propertyid):Observable<any>{
    return this.httpClient.post(`${this.url}api/property/getpropertybyid`,{
      propertyid: propertyid
    })
  }

  deleteproperty(propertyid):Observable<any>{
    return this.httpClient.post(`${this.url}api/property/deleteproperty`,{
      propertyid: propertyid
    })
  }

  updatepropertydetails(data,propertyid,image,gallery):Observable<any>{
    return this.httpClient.post(`${this.url}api/property/updatepropertydetails`,{
      propertyid: propertyid,
      title: data.name,
      price: data.price,
      address: data.address,
      city_id: data.city,
      property_type_id: data.propertyType,
      unit_type_id: data.unitType,
      furnishing_status_id: data.furnishingStatus,
      property_status_id: data.propertyStatus,
      description: data.description,
      amenities: data.amenities,
      floor_type_id: data.floorType,
      total_floors: data.totalFloors,
      image: image,
      gallery: gallery
    })
  }

  uploadpropertyimage(formData): Observable<any> {
    return this.httpClient.post(`${this.url}api/property/uploadpropertyimage`, formData);
  }

  uploadpropertygallery(formData): Observable<any> {
    return this.httpClient.post(`${this.url}api/property/uploadpropertygallery`, formData);
  }
}


 
