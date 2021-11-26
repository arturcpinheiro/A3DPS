import { Injectable } from '@angular/core';
import { historyItems } from './historyItems';
import { items } from './home/items';


@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private idCounter = 1
  private items: items[] = [{
    title: 'Hat',
    quantity: 31,
    price: 12.5
  }, {
    title: 'Shirt',
    quantity: 40,
    price: 10.5
  }
  ]
  private itemsHist: historyItems[] = []

  constructor() { }
  getAllItems() {
    return [...this.items];
  }
  pushItems(product) {
    this.items.push(product)
    console.log(this.items)
  }
  productEdit(products) {
    //this.items.findIndex(prod => {return prod.title === products.title})
    // console.log(this.items[0].quantity)
  }
  addHistory(inTitle, inQuantity, inTotal) {
    this.idCounter += 1;
    const d = new Date()
    this.itemsHist.push({
      id: this.idCounter,
      title: inTitle,
      quantity: inQuantity,
      total: inTotal,
      date: d
    })
  }
  getHistoryList(){
    return [...this.itemsHist];
  }
  getHistoryItem(id){
    
    return this.itemsHist.find(prod => {return prod.id === Number(id)})
  }
}
