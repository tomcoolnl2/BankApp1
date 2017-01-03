import { Component } from "@angular/core";
import { NavController, ModalController } from 'ionic-angular';
import { AddReviewPage } from '../pages';
import { Reviews } from '../../providers/providers';
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.page.html'
})
export class HomePage {
 
 public static readonly title: string = 'Home';

  reviews: any;
 
  constructor(public nav: NavController, public reviewService: Reviews, public modalCtrl: ModalController) {
 
  }
 
  ionViewDidLoad(){
 
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AddReviewPage);
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);        
      }
    });
 
    modal.present();
 
  }
 
  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }   
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
  }
 
}
