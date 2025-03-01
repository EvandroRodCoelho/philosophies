import { Component } from '@angular/core';
import { ButtonThemeComponent } from '../button-theme/button-theme.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonThemeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private themeService: ThemeService) {}
  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
