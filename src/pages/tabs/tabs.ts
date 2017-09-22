import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { ProfilesPage } from '../profiles/profiles';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilesPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
