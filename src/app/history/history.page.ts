import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { historyItems } from '../historyItems';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  
  constructor(private service: ItemsService,
    private router: Router) { }

  listOfItems: historyItems[]
  ngOnInit() {
    this.listOfItems = this.service.getHistoryList();
  }
  
}
