import { Component, Input } from '@angular/core';
import { ButtonThemeComponent } from '../button-theme/button-theme.component';
import { ThemeService } from '../../services/theme.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonThemeComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isHome = false;
  constructor(private themeService: ThemeService) {}
  isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }
}
