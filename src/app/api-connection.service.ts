import { Injectable } from '@angular/core';
import {DetailsDataService,editDataService} from './details-data.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient) { }
  
  url = 'https://5dc0aa7795f4b90014ddc888.mockapi.io/gamebox/users';


public httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}

signup(user: DetailsDataService): Observable<DetailsDataService> {
  console.log("Stuff sent to API");
  return this.http.post<DetailsDataService>(this.url, {'firstname': user['firstname'], 'surname': user['surname'], 'age': user['dob'],'weight':user['weight'],'height':user['height'],'haircolor':user['hairColor']}, this.httpOptions)
}

getUsers(): Observable<any[]> {
  return this.http.get<any[]>(this.url)
    .pipe(
      tap(users => console.log('fetched users', users)),
      catchError(this.handleError('getUsers', []))
    );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** DELETE: delete the hero from the server */
deleteUser (id: number): Observable<{}> {
  // const url = `${this.url}+${id}`; // DELETE api/heroes/42
  return this.http.delete(this.url+'/'+id)  
    .pipe(
      tap(id => console.log('Deleted user', id)),
      catchError(this.handleError('deleteHero')),
    );
}

/** PUT: update the hero on the server. Returns the updated hero upon success. */
patchUser (id, user: editDataService): Observable<editDataService> {
  console.log(this.url+'/'+id);
  return this.http.put<any>(this.url+'/'+id, {'firstname': user['firstname'], 'surname': user['surname'], 'age': user['age'],'weight':user['weight'],'height':user['height'],'haircolor':user['haircolor']}, this.httpOptions)
    .pipe(
      tap(user => console.log('User Updated', user)),
      catchError(this.handleError('updateUser', id))
    );
}

// Get details of a Particular User
getParticularUser(id): Observable<any[]> {
  return this.http.get<any[]>(this.url+'/'+id)
    .pipe(
      tap(users => console.log('fetched users', users)),
      catchError(this.handleError('getUsers', []))
    );
}
}