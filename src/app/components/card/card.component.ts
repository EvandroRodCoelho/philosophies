import { Component, Input } from '@angular/core';
import { Philosophy } from '../../interface/philosophies';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardInfo: Philosophy = {} as Philosophy;

  constructor(private translatedService: TranslateService) {}

  getTranslatedType(): string {
    return this.translatedService.getTranslatedType(this.cardInfo.type);
  }
}
