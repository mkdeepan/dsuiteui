import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Customers, Customer } from 'src/app/interfaces/customer';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns = ['customerName', 'alias', 'route'];
  dataSource: MatTableDataSource<Customer>;

  customerList: Customer[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: CommonService) {
    this.customerList = [{address:"Chennai",alias:"ABC",city:"Chennai",contactNo:999999999,contactNo1:9999990999,createdAt:"23-01-2014",createdBy:"Deepan",customerName:"ABC and CO",customerType:"Retailer",firstName:"Apple",id:12,isActive:1,isDelete:0,lastName:"Co",pincode:600037,route:"PPN",updatedAt:"25-01-2014",updatedBy:"Deepan"},{address:"Chennai",alias:"ABC",city:"Chennai",contactNo:999999999,contactNo1:9999990999,createdAt:"23-01-2014",createdBy:"Deepan",customerName:"ABC and CO",customerType:"Retailer",firstName:"Apple",id:12,isActive:1,isDelete:0,lastName:"Co",pincode:600037,route:"PPN",updatedAt:"25-01-2014",updatedBy:"Deepan"}];
    this.dataSource = new MatTableDataSource(this.customerList);
  }

  ngOnInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      //mywork
      // this.service.httpGet().subscribe(data => {
      //   this.customerList = data;
      //   console.log(data);
      //   console.log(this.customerList);
      // });
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = filterValue;
      if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
      }
  }
}

