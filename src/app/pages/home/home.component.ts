import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { philosophiesData } from '../../mock/philosophiesData';
import { HeaderComponent } from '../../components/header/header.component';

type FilterState = {
  all: boolean;
  ethics: boolean;
  metaPhysics: boolean;
  epistemology: boolean;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  philosophiesFilter = [...philosophiesData];
  searchTerm: string = '';
  isGridView = false;
  filterActive: FilterState = {
    all: true,
    ethics: false,
    metaPhysics: false,
    epistemology: false,
  };

  constructor(private themeService: ThemeService) {}
    getGridToggleIcon(): string {
      if (this.isGridView) {
        return this.isDarkMode() ? 'icon-list-dark.png' : 'icon-list-ligth.png';
      } else {
        return this.isDarkMode() ? 'icon-grid-dark.png' : 'icon-grid-ligth.png';
      }
    }

  onGridToggle() {
    this.isGridView = !this.isGridView;
  }
  toggleFilter(filterKey: keyof FilterState): void {
    this.filterActive = this.resetFilters(filterKey);
    this.applyFilters();
  }

  updateSearchTerm(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value.toLowerCase();
    this.applyFilters();
  }

  private applyFilters(): void {
    let filteredData = [...philosophiesData];

    const activeFilter = Object.keys(this.filterActive).find(
      (key) => this.filterActive[key as keyof FilterState]
    );

    if (activeFilter && activeFilter !== 'all') {
      filteredData = filteredData.filter((item) => item.type === activeFilter);
    }
    if (this.searchTerm) {
      filteredData = filteredData.filter((item) =>
        item.name.toLowerCase().includes(this.searchTerm)
      );
    }

    this.philosophiesFilter = filteredData;
  }

  private resetFilters(filterKey: keyof FilterState): FilterState {
    return Object.keys(this.filterActive).reduce(
      (acc, key) => ({ ...acc, [key]: key === filterKey }),
      {} as FilterState
    );
  }

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
