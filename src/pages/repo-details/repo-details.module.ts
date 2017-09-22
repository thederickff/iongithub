import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepoDetailsPage } from './repo-details';

@NgModule({
  declarations: [
    RepoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RepoDetailsPage),
  ],
})
export class RepoDetailsPageModule {}
