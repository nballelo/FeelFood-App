import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authentication/auth.service';
import { User } from '../../providers/models/user';
import { TabsPage } from "../tabs/tabs";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
    this.user = new User;
  }

  presentToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  // Attempt to login in through our User service
  doLogin(user) {
    this.authService.login(user).subscribe((data) => {
        console.log(JSON.stringify(data));
        if (!data['success']) {
          this.presentToast(data['message'])
          // Unable to log in
        } else {
          this.authService.storeUserData(data['token'], data['user']);
          this.authService.createAuthHeaders();
          this.navCtrl.push(TabsPage);
        }
      });
  }
}
