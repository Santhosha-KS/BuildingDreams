# API Layer

This folder is the integration point between the app and a real backend.

## Current state (Phase 1–5)
All data is loaded from static JSON files in `src/data/` via service functions in `src/services/`.

## Future state (Phase 6+)
When backend APIs are ready, update each service file to call the API instead:

```ts
// Before (JSON import):
import awardsData from '@/data/awards.json';
export function getAwards(): Award[] {
  return awardsData as Award[];
}

// After (API call — no component changes needed):
export async function getAwards(): Promise<Award[]> {
  const response = await fetch('/api/awards');
  return response.json();
}
```

## Planned API endpoints
| Endpoint                | Method | Service file              |
|-------------------------|--------|---------------------------|
| `/api/company`          | GET    | companyService.ts         |
| `/api/navigation`       | GET    | navigationService.ts      |
| `/api/hero`             | GET    | heroService.ts            |
| `/api/awards`           | GET    | awardsService.ts          |
| `/api/achievements`     | GET    | achievementsService.ts    |
| `/api/project-stats`    | GET    | projectStatsService.ts    |
| `/api/gallery`          | GET    | galleryService.ts         |
| `/api/about-us`         | GET    | aboutUsService.ts         |
| `/api/homes`            | GET    | homesService.ts           |
| `/api/packages`         | GET    | packagesService.ts        |
| `/api/how-it-works`     | GET    | howItWorksService.ts      |
| `/api/consultation`     | POST   | consultationService.ts    |
| `/api/footer`           | GET    | footerService.ts          |