import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/shared/classes/customer.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  identifier: any;
  public customer: Customer = this.api.initCustomer();
  constructor(public api: ApiService, public route: ActivatedRoute) { }

  getCustomer() {
    this.identifier = this.route.snapshot.params.id;
    this.api.getCustomer$(this.identifier).subscribe(us => this.customer = us);
  }
  ngOnInit() {
    this.getCustomer();
  }

}
