import { Component, OnInit } from '@angular/core';
import { historyItems } from '../historyItems';
import { items } from '../home/items';
import { ItemsService } from '../items.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage implements OnInit {
  listOfItems: items[]
  specificItem: items
  selectedItem: any;
    constructor(private service: ItemsService) { }
    restockQty: boolean = false;
  ngOnInit() {
    this.listOfItems = this.service.getAllItems();
  }
  checkNumber(input){    
    if(!isNaN(input.value)){
      this.restockQty = true;
    }    
  }
  onSubmit(form: NgForm){
    if(this.specificItem){
      if(form.valid && this.restockQty){
        
        this.specificItem.quantity += Number(form.value.resQuantity)
      }
    }
    
  }
  itemChosen(item, i){
    this.specificItem = item;
    this.selectedItem = i;
    
  }

}
