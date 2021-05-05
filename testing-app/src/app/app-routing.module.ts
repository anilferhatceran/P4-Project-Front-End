import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { NumberGenComponent } from './Components/number-gen/number-gen.component';
import { DiceRollComponent } from './Components/dice-roll/dice-roll.component';
import { CoinFlipComponent } from './Components/coin-flip/coin-flip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:  '', component: LandingPageComponent},
  {path:  'number-generator', component: NumberGenComponent},
  {path:  'coin-flip', component: CoinFlipComponent},
  {path:  'dice-roll', component: DiceRollComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
