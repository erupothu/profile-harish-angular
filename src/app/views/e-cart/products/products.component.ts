import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ECartService } from '../e-cart.service';
import { AnalyticsService } from '../../reports/analytics/analytics.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product_table_cols = ['select', 'name', 'category', 'price', 'total_quantity', 'quantity_left', 'active'];
   dataSource: any;
   selection = new SelectionModel(true, []);
   products = new MatTableDataSource();
  constructor(private router: Router, private eCartService: ECartService) { }

  ngOnInit(): void {
    this.dataSource = this.eCartService.dataSource;
    this.products = new MatTableDataSource(this.dataSource);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.products.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getProductDetails(element: any) {
    const data = element;
    this.router.navigate(['/e-cart/product-details'], { queryParams: { productId: element.id}});
  }

}
