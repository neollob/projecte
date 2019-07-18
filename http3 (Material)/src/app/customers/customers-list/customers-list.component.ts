import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Customer } from 'src/app/shared/interfaces/customer-interface';
import Swal from 'sweetalert2';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CustomersListComponent implements OnInit {
  // public alertOption: SweetAlertOptions = {};
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public customers: any = [];
  public data: any;
  dataSource = new MatTableDataSource(this.customers);
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  displayedColumns: string[] = ['picture', 'name.last', 'email', 'age', 'edit', 'delete'];

  constructor(public api: ApiService) {
  }

  getCustomers() {
    this.isLoading$.next(true);
    this.api.getCustomers$().subscribe({
      next: arg => {
       // setTimeout(() => {
        this.customers = arg;
        this.matTable();
          // Spinner off

        this.isLoading$.next(false);
       // }, 30000);
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
         console.log('Observer got a complete notification');}
    });
  }
  deleteCustomer(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary customer!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.api.deleteCustomer$(id).subscribe(res => {
          this.data = res;
          this.getCustomers();
        });

        Swal.fire(
          'Deleted!',
          'Your imaginary customer has been deleted.',
          'success'
        );
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary customer is safe :)',
          'error'
        );
      }
    });

  }
  matTable() {
    this.dataSource = new MatTableDataSource(this.customers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (item: Customer, property) => {
      switch (property) {
        case 'picture': return item.id;
        case 'name.first': return item.name.first;
        case 'name.last': return item.name.last;
        default: return item[property];
      }
    };
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.getCustomers();
  }

}
