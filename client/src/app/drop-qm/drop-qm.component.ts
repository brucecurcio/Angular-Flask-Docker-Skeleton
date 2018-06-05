import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-drop-qm',
  templateUrl: './drop-qm.component.html',
  styleUrls: ['./drop-qm.component.scss']
})
export class DropQMComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  private log(message: string) {
    this.messageService.add('ERROR: ' + message);
  }
}
