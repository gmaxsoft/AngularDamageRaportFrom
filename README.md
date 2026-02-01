# Szkoda Pojazd – formularz zgłoszenia szkody

Aplikacja Angular 21 z reaktywnym formularzem zgłoszenia szkody na pojeździe. Stylizacja Tailwind CSS, standalone components, Reactive Forms, testy Vitest, CI w GitHub Actions.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Git – unikanie Co-authored-by

Aby commity nie zawierały traileru „Co-authored-by”, ustaw w repozytorium:

```bash
git config user.name "Twoje Imię"
git config user.email "twoj@email.com"
```

Dla pojedynczego commita możesz użyć:

```bash
GIT_AUTHOR_NAME="..." GIT_COMMITTER_NAME="..." GIT_AUTHOR_EMAIL="..." GIT_COMMITTER_EMAIL="..." git commit -m "..."
```

## Deploy (np. GitHub Pages)

1. Zbuduj projekt: `npm run build`
2. Wynik w `dist/szkoda-pojazd/browser/` (lub `dist/szkoda-pojazd/` w zależności od wersji Angular).
3. W repozytorium GitHub: **Settings → Pages → Source**: wybierz branch (np. `main`) i folder `/(root)` lub użyj GitHub Actions do deployu na Pages (np. `peaceiris/actions-gh-pages`).

Workflow CI (`.github/workflows/ci.yml`) uruchamia się przy push/pull_request do `main` i `master`: `npm ci`, `ng build`, `ng test --no-watch`.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
