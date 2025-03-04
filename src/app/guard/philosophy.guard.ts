import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PhilosophiesService } from '../services/philosophies.service';

export const philosophyGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const philosophiesService = inject(PhilosophiesService);

  const philosophyName = route.paramMap.get('name');

  if (!philosophyName) {
    return router.createUrlTree(['/home']);
  }

  const philosophyExists = philosophiesService.getPhilosophyByName(philosophyName);

  if (!philosophyExists) {
    return router.createUrlTree(['/home']);
  }
  
  return true;
};
