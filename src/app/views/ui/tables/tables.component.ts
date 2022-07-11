import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatDateFormats } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CdkDragStart, CdkDropList, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { ResizeEvent } from 'angular-resizable-element';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  cost: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', cost: 5 },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', cost: 15 },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', cost: 5 },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', cost: 25 },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', cost: 51 },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', cost: 56 },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', cost: 5 },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', cost: 25 },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', cost: 15 },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', cost: 95 },
];

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  @ViewChild(MatSort) sort1: MatSort;
  @ViewChild('paginator1') paginator1: MatPaginator;


  displayedColumns: string[] = ['position', 'name', 'weight', 'cost', 'symbol'];
  dataSource: any;
  dataSourceMat: MatTableDataSource<any>
  dragAndDropTable: MatTableDataSource<any>
  resizeTable: MatTableDataSource<any>
  previousIndex: number;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', cost: 5 },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', cost: 15 },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', cost: 5 },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', cost: 25 },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', cost: 51 },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', cost: 56 },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', cost: 5 },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', cost: 25 },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', cost: 15 },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', cost: 95 },
    ];
    this.dataSourceMat = new MatTableDataSource(this.dataSource);
    this.dragAndDropTable = new MatTableDataSource(this.dataSource);
    this.resizeTable = new MatTableDataSource(this.dataSource);
    
  }

  ngAfterViewInit() {
    this.dataSourceMat.sort = this.sort1;
    this.dataSourceMat.paginator = this.paginator1;
  }

  table1Totals(column) {
    if (this.dataSource != undefined) {
      return this.dataSourceMat.data.map(t => {
        if (t[column] != undefined) {
          return t[column];
        } else {
          return 0;
        }
      }).reduce((acc, value) => acc + value, 0);
    }
  }

  dragStarted(col) {
    
    this.previousIndex = this.displayedColumns.indexOf(col);
  }

   tableDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.displayedColumns, this.previousIndex, event.currentIndex);
  }

  onResizeEnd(event: ResizeEvent, columnName): void {
		if (event.edges.right) {
			const cssValue = event.rectangle.width + 'px';
			const columnElts = document.getElementsByClassName('mat-column-' + columnName);
			for (let i = 0; i < columnElts.length; i++) {
				const currentEl = columnElts[i] as HTMLDivElement;
				currentEl.style.width = cssValue;
			}
		}
	}

}
