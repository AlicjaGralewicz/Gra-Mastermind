import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    firstName: 'Handsome',
    isSubscribed: false,
    email: ''
  }

  steps = {
    showWelcome: false,
    askForFirstName:true,
    askForEmail:false,
    askToSubscribe:false,
    subscribedSuccess:false
  }

  constructor() { }

  updateName(firstName: string){
    this.user.firstName = firstName
    if(('Handsome'.startsWith(firstName) === false)){
      this.steps.showWelcome = true
      this.steps.askToSubscribe = true
    }
    if(this.steps.showWelcome && firstName.length >= 3){
      setTimeout(()=>{
        this.steps.showWelcome = true
      }, 1500)
     
    }
  }

  updateEmail(email: string){
    this.user.email = email
  }

  agreedToSubscribe(){
    this.steps.askForEmail =  true
    this.steps.askToSubscribe = false
  }

  subscribeUser(email:string){
    this.user.email = email
    this.user.isSubscribed = true
    this.steps.askForEmail = false
    this.steps.subscribedSuccess = true
  }

  skipSubscription(){}
}
