/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.enableDarkTheme();
    }
  }

  enableDarkTheme() {
    document.body.classList.add('dark-theme');
    this.darkMode = true;
    localStorage.setItem('theme', 'dark');
  }

  disableDarkTheme() {
    document.body.classList.remove('dark-theme');
    this.darkMode = false;
    localStorage.setItem('theme', 'light');
  }

  toggleTheme() {
    this.darkMode ? this.disableDarkTheme() : this.enableDarkTheme();
  }

  isDarkMode(): boolean {
    return this.darkMode;
  }
}
