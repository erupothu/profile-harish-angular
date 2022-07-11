import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AutocompleteService } from './autocomplete.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FilterPipe } from 'ngx-filter-pipe';
import { UniquePipe } from 'ngx-pipes';
import { ProgressBarMode } from '@angular/material/progress-bar';
// import indiaStates from '../../../../assets/data/indiaHier.json';

interface DialogData {
  usename: '';
  firstPassword: '';
  secondPassword: '';
  email: '';
  phone: ''
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('myInput', { static: false }) myInput: ElementRef;
  hide = true;
  username = '';
  password = '';
  toolTipCopy = 'copy';
  countries: string[];
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  indianStateHier: any;
  filterIndiaHier: any;
  states: any;
  districts: any;
  taluk: any;
  villages: any;
  indiaHierModel = {
    stateName: '',
    districtName: '',
    taluk: '',
    officeName: '',
    pincode: ''
  }
  mode: ProgressBarMode = 'determinate';
  constructor(private dialog: MatDialog, private autocompleteService: AutocompleteService,
    private filterPipe: FilterPipe) {
    this.countries = this.autocompleteService.countries.slice();
  }

  ngOnInit(): void {
    // this.autocompleteService.getIndiaHier().subscribe(data => {
    //   this.indianStateHier = data;
      
    //   // const states = this.filterPipe.transform(this.indianStateHier, this.indiaHierModel);
    //   // this.states = this.uniquePipe.transform(this.indianStateHier);
      
    //   this.filterIndiaHier = this.indianStateHier;
    // })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  filterIndiaHierData() {
    this.filterIndiaHier = this.filterPipe.transform(this.indianStateHier, this.indiaHierModel);
    const temData = this.filterIndiaHier;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.autocompleteService.countries.filter(option => option.toLowerCase().includes(filterValue));
  }

  forgotPassword() {
    const fgtpwd = 'works';
    const dialogRef = this.dialog.open(FrogotPasswordDialog, {
      width: '30%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const animal = result;
    });
  }
  register() {
    const register = 'works';
    const dialogRef = this.dialog.open(RegisterDialog, {
      width: '30%',
      height: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const animal = result;
    });
  }

  copyToClipBoard(inputElement) {
    // let copyText = this.myInput.nativeElement.copyText;
    let copyText = inputElement;
    copyText.select();
    this.toolTipCopy = 'copied: ' + copyText.value;
    document.execCommand('copy');
    // copyText.setSelectionRange(0, 99999);
  }
  tooltipOut() {
    this.toolTipCopy = 'copy';
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'forgot-password.html',
})
export class FrogotPasswordDialog {

  constructor(
    public dialogRef: MatDialogRef<FrogotPasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'register.html',
})
export class RegisterDialog {

  constructor(
    public dialogRef: MatDialogRef<FrogotPasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
