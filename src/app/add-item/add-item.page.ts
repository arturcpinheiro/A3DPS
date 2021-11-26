import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ItemsService } from '../items.service';
import { items } from '../home/items';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {

  constructor(private service: ItemsService,
    private alertCtrl: AlertController,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.form.valid)
    if (form.form.valid) {
      const s: items = {
        title: form.value.title,
        quantity: Number(form.value.qty),
        price: Number(form.value.price)
      }
      this.service.pushItems(s)
      form.reset()
      this.router.navigate(['/home']);
    } else {
      this.alertItem()
    }

  }

  async alertItem() {
    await this.alertCtrl.create({
      header: "Error",
      message: "All fields should be filled.",
      buttons: [{ text: "Ok" }]
    }).then(res => res.present());
  }

}
