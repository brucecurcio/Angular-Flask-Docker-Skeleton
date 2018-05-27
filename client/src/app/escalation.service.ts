import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EscalationService {

  private apiUrl = 'http://104.236.235.98/api/'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET: get escalation policy information */
  getEscPol () {
    let url: string = this.apiUrl + "field_escalate/";
    return this.http.get(url)
    .pipe(
      tap(data => this.log('fetched escalation policy')),
      catchError(this.handleError('getEscPol', []))
    );
  }
  
  triggerEscPol (casenum: string, summary: string) {
    let url: string  = this.apiUrl + "esc_trigger/" + casenum + "/" + summary;
    return this.http.post(url, httpOptions)
    .pipe(
      tap(data => this.log('Escalation Successful')),
      catchError(this.handleError('[Escalation Failed, please try again]', []))
    );
  }
      
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a EscalationService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ERROR: ' + message);
  }
}
