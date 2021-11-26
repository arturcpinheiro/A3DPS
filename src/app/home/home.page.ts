import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ItemsService } from '../items.service';
import { items } from './items';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listOfItems: items[]
  product: items
  totalQuantity = "0"
  totalPrice = "0";
  itemType = "Type";
  selectedItem: any;
  constructor(private service: ItemsService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.listOfItems = this.service.getAllItems();
  }
  ionViewWillEnter(){
    this.listOfItems = this.service.getAllItems();
  }

  resetBtn() {
    this.totalQuantity = "0"
    this.totalPrice = "0"
    this.itemType = "Type"
    this.product = null
    this.selectedItem = null;
  }
  buyBtn() {
    if (this.totalPrice != "0" && this.itemType != "Type") {
      if((this.product.quantity - Number(this.totalQuantity)) < 0){
        this.showAlertQty()
        this.totalQuantity = "0"
        this.totalPrice = "0";
      }
      else{
        this.product.quantity = this.product.quantity - Number(this.totalQuantity)
        this.service.addHistory(this.product.title, Number(this.totalQuantity), Number(this.totalPrice));
        this.resetBtn()        
      }

    }
    else {
      console.log("here")
      this.showAlert()
    }
  }

  toManagerPage() {
    this.router.navigate(['/manager-page']);
  }

  itemChosen(item, i) {
    this.product = item
    this.itemType = item.title;
    this.totalPrice = String(this.product.price * Number(this.totalQuantity))
    this.selectedItem = i;
  }

  async showAlert() {
    await this.alertCtrl.create({
      header: "Error",
      message: "We need quantity and item to proceed.",
      buttons: [{ text: "Ok" }]
    }).then(res => res.present());
  }
  async showAlertQty(){
    await this.alertCtrl.create({
      header: "Error",
      message: "Quantity entered exceeds products in stock.",
      buttons: [{ text: "Ok" }]
    }).then(res => res.present());
  }

  number1() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "1";
    }
    else
      this.totalQuantity = "1"
    if (this.product) {
      console.log(this.totalPrice)
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number2() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "2";
    }
    else
      this.totalQuantity = "2"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number3() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "3";
    }
    else
      this.totalQuantity = "3"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number4() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "4";
    }
    else
      this.totalQuantity = "4"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number5() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "5";
    }
    else
      this.totalQuantity = "5"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number6() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "6";
    }
    else
      this.totalQuantity = "6"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number7() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "7";
    }
    else
      this.totalQuantity = "7"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number8() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "8";
    }
    else
      this.totalQuantity = "8"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number9() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "9";
    }
    else
      this.totalQuantity = "9"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }
  number0() {
    if (this.totalQuantity != "0") {
      this.totalQuantity += "0";
    }
    else
      this.totalQuantity = "0"
    if (this.product) {
      this.totalPrice = String(Number(this.totalQuantity) * this.product.price)
    }
  }

}
