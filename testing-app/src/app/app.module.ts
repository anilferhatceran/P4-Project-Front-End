import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { DiceRollComponent } from './Components/dice-roll/dice-roll.component';
import { NumberGenComponent } from './Components/number-gen/number-gen.component';
import { CoinFlipComponent } from './Components/coin-flip/coin-flip.component';
import { NameGenComponent } from './Components/name-gen/name-gen.component';
import { PasswordGenComponent } from './Components/Password-gen/Password-gen.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent, NumberGenComponent,CoinFlipComponent, DiceRollComponent, HeaderComponent,LandingPageComponent, PasswordGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
