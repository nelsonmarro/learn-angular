import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.css',
})
export class HeroListComponent {
  public heroNames = ['Spiderman', 'Batman', 'Superman', 'Ironman'];
  public deletedHero?: string = '';

  removeLastHero() {
    this.deletedHero = this.heroNames.pop();
  }
}
