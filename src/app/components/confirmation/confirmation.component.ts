import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  fullName: string = ""
  totalCost: string = ""

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fullName = this.route.snapshot.queryParamMap.get("fullName") ?? ""
    this.totalCost = this.route.snapshot.queryParamMap.get("totalCost") ?? ""
  }

  onClick() {
    this.router.navigate([""]);
  }
}
