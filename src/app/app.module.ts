import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { EmergencyPage } from '../pages/emergency/emergency';
import { DriverDetailsPage } from '../pages/driver-details/driver-details';
import { UpdatdeDetailsPage } from '../pages/updatde-details/updatde-details';
import { PlanningPage } from '../pages/planning/planning';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { EmailUpdatePage } from '../pages/email-update/email-update';
import { PhoneUpdatePage } from '../pages/phone-update/phone-update';
import { PasswordUpdatePage } from '../pages/password-update/password-update';
import { HistoryPage } from '../pages/history/history';
import { HelpPage } from '../pages/help/help';
import { SettingsPage } from '../pages/settings/settings';
import { MatchingPage } from '../pages/matching/matching';
import { MessagePage } from '../pages/message/message';
import { StartTripPage } from '../pages/start-trip/start-trip';
import { EndTripPage } from '../pages/end-trip/end-trip';
import { EndTrip2Page } from '../pages/end-trip2/end-trip2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//add
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//added
import { AngularFireDatabaseModule } from 'angularfire2/database';
//addded 2
import { AngularFireAuthModule } from 'angularfire2/auth'
//import { FIREBASE_CREDENTIALS } from "./firebase.credentials";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    EmergencyPage,
    DriverDetailsPage,
    UpdatdeDetailsPage,
    PlanningPage,
    LoginPage,
    SignupPage,
    EmailUpdatePage,
    PhoneUpdatePage,
    PasswordUpdatePage,
    HistoryPage,
    HelpPage,
    SettingsPage,
    MatchingPage,
    MessagePage,
    StartTripPage,
    EndTripPage,
    EndTrip2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    EmergencyPage,
    DriverDetailsPage,
    UpdatdeDetailsPage,
    PlanningPage,
    LoginPage,
    SignupPage,
    EmailUpdatePage,
    PhoneUpdatePage,
    PasswordUpdatePage,
    HistoryPage,
    HelpPage,
    SettingsPage,
    MatchingPage,
    MessagePage,
    StartTripPage,
    EndTripPage,
    EndTrip2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
