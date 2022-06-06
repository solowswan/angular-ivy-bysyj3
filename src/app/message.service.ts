import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  cleaningline: string;
  
  add(message: string) {
    this.messages.push(message);
  }

  add1(cleaningline: string) {
    this.cleaningline = cleaningline;
  }

  clear() {
    this.messages = [];
  }
}