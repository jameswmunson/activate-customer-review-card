# Project36 HubSpot card template

Reusable deal card starter based on the ABM layout, with a local client logo placeholder and the existing Project36 footer image. No ABM logo, approval fields, approval logic, tokens or account identifiers are included.

## First use

1. Extract the folder and create a private GitHub repository named `project36-hubspot-card-template`.
2. Upload this folder's contents to the repository root, including `.gitignore`.
3. In GitHub, open Settings > General and enable Template repository.
4. Use **Use this template** to create a separate repository for each customer.

## Configure each customer copy

- `hsproject.json`: give the project a customer-specific name before uploading.
- `src/app/app-hsmeta.json`: change the app name and UID for the new customer app.
- `src/app/cards/project36-card-hsmeta.json`: change the visible card name and card UID.
- `src/app/cards/card-config.ts`: set the customer name, heading, description, property groups and logo width.
- Replace `src/app/cards/client-logo.svg` with the customer's logo. If using PNG, update the import in `card-config.ts`.
- Each section supports up to 24 property internal names. Custom properties must already exist in that account. The template does not create properties.
- Property values use HubSpot's native property component so owner names, stage labels, dates and currencies use HubSpot rendering.
- The optional additional section is off by default. Extend `project36-card.tsx` for custom controls or behaviour.
- Keep UIDs stable after the first deployment to a customer. Changing them can create new components.

## Install and validate locally

From the extracted project folder:

```sh
cd src/app/cards
npm ci
npm run typecheck
npm run lint
```

## Upload to HubSpot

Install or update the HubSpot CLI if needed, then authenticate the target customer account:

```sh
npm install -g @hubspot/cli@latest
hs account auth
```

From the project root, explicitly select the correct target account:

```sh
hs project upload --account YOUR_CUSTOMER_ACCOUNT_ALIAS
```

Follow the CLI's project creation/build/deployment prompts. If automatic deployment is disabled, deploy the successful build in the HubSpot developer project screen. Install/authorise the private app if prompted, then add the card to the required deal record view. Review the account's available developer platform and record customisation features before deployment.

## Checks in each customer account

Open a populated deal and one with empty values. Confirm the logo, associated company, amount, close date, owner and stage render correctly. Check a narrow window and the record views used by the customer's teams. Adding write actions later requires appropriate scopes and permission checks.

## Maintenance

Keep this repository generic. Put customer changes in customer repositories. Copies made with GitHub's template feature do not automatically receive updates from this starter.

## Validation status

Local TypeScript and lint checks are recorded in the delivery message. A HubSpot build and live record check are still required in the intended customer account. Nothing has been uploaded or deployed by preparing these files.
