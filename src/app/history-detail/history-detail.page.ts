import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { historyItems } from '../historyItems';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.page.html',
  styleUrls: ['./history-detail.page.scss'],
})
export class HistoryDetailPage implements OnInit {
  specificItem: historyItems
  constructor(private activated_router: ActivatedRoute,
    private service: ItemsService) { }

  ngOnInit() {
    this.activated_router.paramMap.subscribe(paramMap => {
      if(paramMap.has('itemId')){
        this.specificItem = this.service.getHistoryItem(paramMap.get('itemId'))        
      }
    })
  }

}
