import { Component } from '@angular/core';
import { ButtonThemeComponent } from '../../components/button-theme/button-theme.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonThemeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private themeService: ThemeService) {}

  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
