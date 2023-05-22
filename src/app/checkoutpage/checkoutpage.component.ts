import { Component, OnInit,AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import  {ProductService} from 'src/app/product.service'
import { CatalogueComponent } from '../catalogue/catalogue.component';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})
export class CheckoutpageComponent implements OnInit,AfterViewInit {

  @ViewChild('CatalogueComponent') shareddata : CatalogueComponent

  constructor(
    public router :Router,
    public  service: ProductService
  ) { }

  ngOnInit(): void {
    // this.getproductlist()
    this.service.getResponseData().subscribe((res)=>{
      console.log(res,'res');
    })

  }

  ngAfterViewInit(){

  }





getshareddata(){
  console.log(this.shareddata.cartitem);

}

BacktoCatalogue(){
  this.router.navigateByUrl('catalogue')
}

items:any[] = []
getproductlist(){
  this.service.getproduct().subscribe((res)=>{
    console.log(res,'res');
    this.items = res.response
  })
}

cartitem:any[] = []
quantity:number = 0

additemtoCart(item:any){
//   console.log(item,'item');

//  const adddatas = this.items.find(i => i._id === item._id)

//  if(adddatas){

  // adddatas.quantity++
  // console.log(adddatas.quantity++);

//  }
//  else{

  this.cartitem.push(item)
  console.log(this.cartitem ,'else-condition');
//  }
}


}
