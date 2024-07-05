import { NgModule } from '@angular/core';

import { HeroComponent } from './hero/hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';

@NgModule({
  imports: [],
  exports: [HeroComponent, HeroListComponent],
  declarations: [HeroComponent, HeroListComponent],
  providers: [],
})
export class HerosModule {}
