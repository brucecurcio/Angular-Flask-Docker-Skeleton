import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor(){}

  add(message: string) {
    this.messages.push(message);
    this.messages.push(" ");
    this.messages.push(" ");
  }

  clear() {
    this.messages = [];
  }
}