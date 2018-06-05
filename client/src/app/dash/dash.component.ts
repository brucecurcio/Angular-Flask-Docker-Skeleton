import { Component, OnInit, Input } from '@angular/core';
import { EscalationService } from '../escalation.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private escalationService: EscalationService,
    private messageService: MessageService) { }

  ngOnInit() {}

  cards = [
    { title: 'TBD', cols: 2, rows: 1 }
  ];

  triggerEscPol(casenum: string, summary: string): void {
    if (!casenum || !summary) {
     return this.log('Please enter a valid case number AND a brief description')
    }
    this.escalationService.triggerEscPol(casenum, summary).subscribe(data => console.log(data));
  }
  private log(message: string) {
    this.messageService.add('ERROR: ' + message);
  }
}
