import { Component, OnInit } from '@angular/core';
import { EscalationService } from '../escalation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

 
  constructor(private escalationService: EscalationService) { }

  ngOnInit() {
  }

  getEscPol(): void {
    this.escalationService.getEscPol().subscribe(data => console.log(data));
  }
  
  triggerEscPol(casenum: string): void {
    if (!casenum){return}
    this.escalationService.triggerEscPol(casenum).subscribe(data => console.log(data));
  }
}

