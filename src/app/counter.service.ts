import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private value$: BehaviorSubject<number>;

  constructor() {
    this.value$ = new BehaviorSubject<number>(0);
  }

  public increment(): void {
    this.value$.next(this.value$.value + 1);
  }

  public decrement(): void {
    this.value$.next(this.value$.value - 1);
  }

  public getCurrentValue$(): Observable<number> {
    return this.value$.asObservable();
  }
}
