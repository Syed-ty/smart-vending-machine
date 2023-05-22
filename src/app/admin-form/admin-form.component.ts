import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  AddProductForm :FormGroup

  constructor(
    private fb :FormBuilder,
    private service :ProductService,
    public router :Router


  ) {
    this.AddProductForm = fb.group({
      productcost:['',Validators.required],
      productname:['',Validators.required],
      productinfo:['',Validators.required],
      productimage:['',Validators.required]

    })

   }
  ngOnInit(): void {
  }

  onsubmit(){
    const body = {
      "productcost":this.AddProductForm.get('productcost').value,
      "productname":this.AddProductForm.get('productname').value,
      "productinfo":this.AddProductForm.get('productinfo').value,
      "productimage":this.AddProductForm.get('productimage').value

    }

    this.service.addproduct(body).subscribe((res)=>{

      if(res.response.length > 0 ){
         this.router.navigateByUrl('catalogue')
      }
      else{
        this.router.navigateByUrl('form')
      }
    })
  }

}
