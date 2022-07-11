import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ECartService } from '../e-cart.service';
import { filter } from 'minimatch';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']  
})
export class ProductDetailsComponent implements OnInit {

  productParam: any;
  productData: any;
  imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";

  constructor(private route: ActivatedRoute, private eCartService: ECartService) { }

  ngOnInit(): void {
    this.productData = null;
     this.route.queryParamMap.subscribe(data => {
        this.productParam =  data['params']['productId'];
        if(this.productParam > 0){
          this.productData = this.eCartService.dataSource.filter(data => data.id == this.productParam)[0];
          const data = this.productData[0];
        }
        });
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
      }      
    }
  }

}
