import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {ProductService} from 'src/app/product.service'

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor(
    public router :Router,
    public  service: ProductService
  ) { }

  ngOnInit(): void {
    this.getproductlist()
  }

  checkoutPageClicked:Boolean = false




cataloguescreen :Boolean = true
checkoutpagefunction(){
  this.checkoutPageClicked =true
  this.cataloguescreen = false
}

BacktoCatalogue(){
  this.checkoutPageClicked =false
  this.cataloguescreen = true
  this.getproductlist()
}

addform(){
  this.router.navigateByUrl('form')
}

items:any[] = []
getproductlist(){
  this.service.getproduct().subscribe((res)=>{
    this.items = res.response

  })
}

cartitem:any[] = []
quantity:number = 0
cartitemsfilter:any[] = []

additemtoCart(item:any ,index:any){
  this.cartitem.push(item)
 this.cartitemsfilter =   this.cartitem.filter((item,index) => this.cartitem.indexOf(item) === index)
  console.log(this.cartitemsfilter);

  // this.service.sharedData(this.cartitemsfilter)
  alert("Do you Want this item to be added to cart")
}

checkoutFunction(){
  this.cartitemsfilter = []
  this.cartitem = []
  this.checkoutPageClicked =false
  this.cataloguescreen = true
  this.getproductlist()
}


}
