import { Component, Input } from '@angular/core';
import { Philosophy } from '../../interface/philosophies';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardInfo: Philosophy = {} as Philosophy;

  typeTranslatePT: Record<string, string> = {
      ethics: 'Ética',
      metaPhysics: 'Metafísica',
      epistemology: 'Epistemologia',
    };


  getTranslatedType(): string {
    return this.typeTranslatePT[this.cardInfo.type] || 'Desconhecido';
  }
}
