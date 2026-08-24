# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mobile-first QR code scanner for tracking member attendance at cycling events. Members are identified by NISS (Belgian ID number) via QR scan or manual input, and scan events are stored with GPS coordinates, team, and timestamp.

Stack: **Laravel 11 (PHP 8.2+)** backend + **React 18 + TypeScript + MUI** frontend, bundled by **Vite**.

---

## Commands

### Frontend

```bash
npm run dev          # Vite dev server (watches resources/js/)
npm run build        # Production build
```

### Backend

```bash
php artisan serve                  # Laravel dev server
php artisan migrate                # Run migrations
php artisan migrate:fresh --seed   # Reset DB and seed
```

### Backend dev server (alternative to artisan serve)

```bash
npm run dev-backend  # Starts PHP built-in server
```

### Testing

```bash
./vendor/bin/phpunit                         # All tests
./vendor/bin/phpunit --filter TestClassName  # Single test class
./vendor/bin/phpunit tests/Feature/          # Feature tests only
```

### Linting

```bash
./vendor/bin/pint   # Laravel Pint (PHP code style fixer)
```

---

## Architecture

### Backend (`app/`)

- **Controllers** (`app/Http/Controllers/`): `ScanningController` (create/retrieve scans), `MemberController` (lookup by NISS)
- **Models** (`app/Models/`): `Scanning` (scan events), `Member` (reads from `ledenlijst` table), `User`
- **API Resources** (`app/Http/Resources/`): `MemberResource` transforms Member model for API responses
- **Routes** (`routes/api.php`): RESTful JSON API
  - `GET /api/members/{niss}` — fetch member by NISS
  - `POST /api/scannings` — record a scan (latitude, longitude, NISS, timestamp, IP)
  - `GET /api/scannings/{id}` — retrieve scan

### Frontend (`resources/js/`)

- **`app.js`** — entry point, mounts React app
- **`bootstrap.js`** — configures Axios (base URL, CSRF token)
- **`components/`**:
  - `App.tsx` — root component; manages state: NISS input, geolocation, team selection, QR vs manual mode
  - `QrReader.tsx` — real-time QR scanning via `qr-scanner` library; uses back/environment camera
  - `GeoPosition.tsx` — browser Geolocation API wrapper, high-accuracy GPS tracking

### Database

Default driver is SQLite (configured in `.env`). Key tables:
- `ledenlijst` — member records (read-only, externally populated)
- `scannings` — scan events written by the app
- `users` — standard Laravel auth table

### Frontend–Backend integration

- Vite is configured with the Laravel Vite plugin (`vite.config.js`)
- Blade template (`resources/views/`) loads the compiled JS/CSS bundle
- Axios sends API requests to the same origin; CSRF token is set in `bootstrap.js`
