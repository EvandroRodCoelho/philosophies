import { Injectable } from '@angular/core';
import { philosophiesData } from '../mock/philosophiesData';

@Injectable({
  providedIn: 'root',
})
export class PhilosophiesService {
  getPhilosophyByName(name: string): unknown {
    return philosophiesData.find((philosophy) => philosophy.name == name);
  }
}
