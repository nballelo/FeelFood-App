import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DashboardPage } from "../dashboard/dashboard";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = DashboardPage;

  constructor() {

  }
}
