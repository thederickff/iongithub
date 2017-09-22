import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {

  profiles: any;
  repos: any;
  github_user = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: GithubServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  // On submit method
  onSubmit() {
    this.getProfile(this.github_user);
    this.github_user = '';
  }

  reset() {
    this.profiles = '';
    this.github_user = '';
  }

  showRepos(github_user) {
    this.getRepos(github_user);
  }
  getProfile(username) {
    this.githubService.getProfile(username).subscribe(response => {
      this.profiles = response;
    });
  }

  getRepos(username) {
    this.githubService.getRepos(username).subscribe(response => {
      this.repos = response;
      console.log(this.repos);
    });
  }
}
