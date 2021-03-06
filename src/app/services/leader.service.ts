import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
      // for reference of set basic promise and timeout
      /*
       *   getLeaders(): Promise<Leader[]> {
       *     return new Promise(resolve => {
       *       //simulate server latency with 2 second delay
       *       setTimeout(() => resolve(LEADERS), 2000);
       *   })
      }*/

getLeaders(): Observable<Leader[]> {
  return of(LEADERS).pipe(delay(2000));
}

  getLeader(id: number): Observable<Leader> {
    return of(LEADERS.filter((Leader) => (Leader.id === id))[0]).pipe(delay(2000));
   /* return new Promise(resolve => {
      //simulate server latency with 2 second delay
     setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]), 2000);
  }) */
}

  getFeaturedLeader(): Observable<Leader> {
    return of(LEADERS.filter((Leader) => Leader.featured)[0]).pipe(delay(2000));
}
}
