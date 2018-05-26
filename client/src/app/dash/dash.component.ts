import { Component, OnInit, Input } from '@angular/core';
import { EscalationService } from '../escalation.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor(private escalationService: EscalationService) { }

  ngOnInit() {}

  cards = [
    { title: 'QM/SL/STBY Schedule', cols: 2, rows: 1 },
    { title: 'Drop QM, notify SL button', cols: 1, rows: 1 },
    { title: 'TBD', cols: 2, rows: 1 }
  ];

  triggerEscPol(casenum: string, summary: string): void {
    if (!casenum || !summary){return}
    this.escalationService.triggerEscPol(casenum, summary).subscribe(data => console.log(data));
  }
}
