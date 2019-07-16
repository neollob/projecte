import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from 'src/app/shared/classes/customer.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  public loginForm: FormGroup;
  public customer: Customer = this.api.initCustomer();
  public customerData: Customer = this.api.initCustomer();

  constructor(private api: ApiService, private router: Router) {}

  public customers: any = {};

  public addCustomer(arg) {
    this.customer = arg;
    this.api.addCustomer$(this.customer).subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Good job!',
          'You added a new customer!',
          'success'
        );
        this.gotoCustomerDetails('customers/customer_detail', this.customer.id);
      },
      err => {
        console.log(`Error occured`);
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

  ngOnInit() {}
}
