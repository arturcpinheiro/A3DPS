import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.page.html',
  styleUrls: ['./manager-page.page.scss'],
})
export class ManagerPagePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  toRestockPage(){
    this.router.navigate(['/restock']);
  }
  toHistoryPage(){
    this.router.navigate(['/history']);
  }
  toAddItemPage(){
    this.router.navigate(['/add-item']);
  }

}
