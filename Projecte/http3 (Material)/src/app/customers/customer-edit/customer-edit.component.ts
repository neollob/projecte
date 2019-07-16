import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { Customer } from 'src/app/shared/classes/customer.model';
import Swal from 'sweetalert2';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  identifier: any;
  public customer: Customer = this.api.initCustomer();
  public customerData: Customer = this.api.initCustomer();

  constructor(
    public api: ApiService,
    public route: ActivatedRoute,
    private router: Router,
    public currentLocation: Location
  ) {}

  getCustomer() {
    this.identifier = this.route.snapshot.params.id;
    this.api.getCustomer$(this.identifier).subscribe(us => {
      this.customer = us;
      this.customerData = us;
    });
  }
  editCustomer(data) {
    this.customer = data;
    this.api.editCustomer$(this.customer).subscribe(
      res => {
        console.log(res);
        Swal.fire('Good job!', 'You edited the customer data!', 'success');
        this.gotoCustomerDetails('customers/customer_detail', this.customer.id);
      },
      err => {
        console.log('Error occurred');
      }
    );
  }
  public gotoCustomerDetails(url: string, id: string) {
    const myurl = `${url}/${id}`;
    this.router.navigateByUrl(myurl).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
  goBack() {
    this.currentLocation.back();
  }

  ngOnInit() {
    this.getCustomer();
  }
}
