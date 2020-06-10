import { Injectable } from '@angular/core';
import {
  Observable,
  Subject
}                     from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  private copiedSubject = new Subject<boolean>();

  get copied$(): Observable<boolean> {
    return this.copiedSubject.asObservable();
  }

  copyToClipboard(data: any): void {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (data));
      e.preventDefault();
    };

    try {
      document.addEventListener('copy', listener);
      document.execCommand('copy');
      document.removeEventListener('copy', listener);

      this.copiedSubject.next(true);
    } catch (err) {
      this.copiedSubject.next(false);
      console.error(err);
    }
  }
}
