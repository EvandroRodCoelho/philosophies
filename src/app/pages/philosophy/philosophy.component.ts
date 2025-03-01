import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Philosophy } from '../../interface/philosophies';
import { philosophiesData } from '../../mock/philosophiesData';
import { HeaderComponent } from '../../components/header/header.component';
import { TranslateService } from '../../services/translate.service';

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

  constructor(
    private route: ActivatedRoute,
    private translateService: TranslateService
  ) {}

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

  getTranslatedType(): string {
    return this.translateService.getTranslatedType(this.philosophy?.type ?? '');
  }
}
