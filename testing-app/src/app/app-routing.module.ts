import { TypewriterStatisticsComponent } from './Components/typewriter/typewriter-statistics/typewriter-statistics.component';
import { FooterComponent } from './Components/footer/footer.component';
import { WebReviewCheckComponent } from './Components/WebReviewCheck/WebReviewCheck.component';
import { TypewriterComponent } from './Components/typewriter/typewriter.component';
import { NameGenComponent } from './Components/name-gen/name-gen.component';
import { PasswordGenComponent } from './Components/Password-gen/Password-gen.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { NumberGenComponent } from './Components/number-gen/number-gen.component';
import { DiceRollComponent } from './Components/dice-roll/dice-roll.component';
import { CoinFlipComponent } from './Components/coin-flip/coin-flip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';

const routes: Routes = [
  {path:  '', component: LandingPageComponent},
  {path:  'number-generator', component: NumberGenComponent},
  {path:  'coin-flip', component: CoinFlipComponent},
  {path:  'dice-roll', component: DiceRollComponent},
  {path: 'password-generator', component: PasswordGenComponent},
  {path: 'name-generator', component : NameGenComponent},
  {path: 'typewriter', component : TypewriterComponent},
  {path: 'webreviewcheck', component:WebReviewCheckComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [LandingPageComponent, NumberGenComponent, CoinFlipComponent, DiceRollComponent,
  PasswordGenComponent, HeaderComponent, NameGenComponent,TypewriterComponent, WebReviewCheckComponent, FooterComponent, TypewriterStatisticsComponent]
