import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Philosophy } from '../../interface/philosophies';
import { philosophiesData } from '../../mock/philosophiesData';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-philosophy-detail',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss'],
  imports: [HeaderComponent],
  standalone: true,
})
export class PhilosophyComponent implements OnInit {
  philosophy: Philosophy | undefined;
  typeTranslatePT: Record<string, string> = {
    ethics: 'Ética',
    metaPhysics: 'Metafísica',
    epistemology: 'Epistemologia',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameParam = params.get('name');
      if (nameParam) {
        this.philosophy = philosophiesData.find(
          (p) => p.name.toLowerCase() === nameParam.toLowerCase()
        );
      }
    });
  }
  /**
   * Retrieves the translated type of the current philosophy.
   *
   * @returns {string} The translated type in Portuguese, or 'Desconhecido' if the type is not found.
   */

  getTranslatedType(): string {
    return this.typeTranslatePT[this.philosophy?.type ?? ''] || 'Desconhecido';
  }
}
