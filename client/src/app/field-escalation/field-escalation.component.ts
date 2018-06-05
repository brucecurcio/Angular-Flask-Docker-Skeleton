import { Component, OnInit, Input } from '@angular/core';
import { EscalationService } from '../escalation.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-field-escalation',
  templateUrl: './field-escalation.component.html',
  styleUrls: ['./field-escalation.component.scss']
})
export class FieldEscalationComponent implements OnInit {

  constructor(private escalationService: EscalationService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

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
