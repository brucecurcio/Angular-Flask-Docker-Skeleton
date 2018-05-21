import { Component, OnInit } from '@angular/core';
import { EscalationService } from '../escalation.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Casenum } from '../casenum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private escalationService: EscalationService){}
  
  ngOnInit() {
  }

  getEscPol(): void {
    this.escalationService.getEscPol().subscribe(data => console.log(data));
  }
  
  triggerEscPol(casenum: string): void {
    if (!casenum){return}
    this.escalationService.triggerEscPol(casenum).subscribe(data => console.log(data));
  }

  model = new Casenum("");

  submitted = false;

  onSubmit(casenumObj: Casenum) { 
    console.log(casenumObj.casenum);

    this.submitted = true; 
  }

  // TODO: Remove this when done
  get diagnostic() { return JSON.stringify(this.model); }

}

