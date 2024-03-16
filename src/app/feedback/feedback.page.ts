import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  ngOnInit() {
  }

  name:any;
  number: any;
  gender: any;
  feedback: any;

  constructor(private alertController: AlertController) {}

  async submit() {

    const alert = await this.alertController.create({
      header: 'Museum Mobile App',
      message: 'Thank you for your feedback!',
      buttons: ['OK'],
    });

    await alert.present();
    this.name = '';
    this.number = '';
      this.gender = '';
      this.feedback = '';
  }
}
