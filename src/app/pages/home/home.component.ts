import { Component } from '@angular/core';
import { ButtonThemeComponent } from '../../components/button-theme/button-theme.component';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { philosophiesData } from '../../mock/philosophiesData';

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
  philosophiesFilter = [...philosophiesData];
  filterActive: FilterState = {
    all: true,
    ethics: false,
    metaPhysics: false,
    epistemology: false,
  };

  constructor(private themeService: ThemeService) {}

  toggleFilter(filterKey: keyof FilterState): void {
    const updatedFilters = this.resetFilters(filterKey);
    this.filterActive = updatedFilters;

    this.philosophiesFilter = this.applyFilter(filterKey);
  }

  private resetFilters(filterKey: keyof FilterState): FilterState {
    return Object.keys(this.filterActive).reduce(
      (acc, key) => ({ ...acc, [key]: key === filterKey }),
      {} as FilterState
    );
  }

  private applyFilter(filterKey: keyof FilterState) {
    if (filterKey === 'all') return [...philosophiesData];
    return philosophiesData.filter((item) => item.type === filterKey);
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
