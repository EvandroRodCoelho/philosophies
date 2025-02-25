import { Component } from '@angular/core';
import { ButtonThemeComponent } from '../../components/button-theme/button-theme.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
type FilterState = {
  all: boolean;
  ethics: boolean;
  metaPhysics: boolean;
  epistemology: boolean;
};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonThemeComponent, CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private themeService: ThemeService) {}
  filterActive: FilterState = {
    all: true,
    ethics: false,
    metaPhysics: false,
    epistemology: false,
  };
  toggleFilter(filtro: keyof FilterState) {
    Object.keys(this.filterActive).forEach((key) => {
      this.filterActive[key as keyof FilterState] = false;
    });

    if (filtro === 'all') {
      this.filterActive.all = true;
    } else {
      this.filterActive[filtro] = true;
    }
  }
  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
