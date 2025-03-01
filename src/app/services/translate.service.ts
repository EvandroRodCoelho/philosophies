import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor() {}

  private typeTranslatePT: Record<string, string> = {
    ethics: 'Ética',
    metaPhysics: 'Metafísica',
    epistemology: 'Epistemologia',
  };

  getTranslatedType(type: string): string {
    return this.typeTranslatePT[type] || 'Desconhecido';
  }
}
