# Storymate Landing Page — Task Breakdown & Plan

## Project Stream: Test & Deployment
Project ID: Onboarding
Feature: Storymate Landing Page (CARA-13)

## Task Breakdown

### Phase 1: Assets & Content
- **Task ID:** storymate-design-001
- **Title:** Generate storybook-style hero images
- **Description:** Generate 3 high-quality, cartoony, storybook-themed images for the Storymate landing page. 1 Hero image (Child + Robot reading), 1 Magical Forest scene, 1 interface illustration.
- **Assigned to:** DesignerBot
- **Priority:** High
- **Deliverable Path:** `/shared-workspaces/projects/storymate/assets/`
- **Depends on:** None

- **Task ID:** storymate-content-001
- **Title:** Draft landing page copy
- **Description:** Draft playful, child-friendly copy for the Storymate landing page. Focus on imagination and creation.
- **Assigned to:** ContentBot
- **Priority:** Medium
- **Deliverable Path:** `/shared-workspaces/projects/storymate/src/content.md`
- **Depends on:** None

### Phase 2: Development
- **Task ID:** storymate-dev-001
- **Title:** Build React/Vite landing page
- **Description:** Build the landing page using React, Vite, and Tailwind CSS. Use the design spec and images provided by DesignerBot. Ensure it is responsive and has a "storybook" feel.
- **Assigned to:** CodeBot
- **Priority:** High
- **Deliverable Path:** `/shared-workspaces/projects/storymate/src/`
- **Depends on:** storymate-design-001, storymate-content-001

### Phase 3: Deployment
- **Task ID:** storymate-ops-001
- **Title:** Deploy to Coolify
- **Description:** Create a new application on Coolify named "storymate-test" and deploy the built landing page. Use path prefix `/storymate-test` or subdomain `storymate.agntc.io`.
- **Assigned to:** DevOpsBot
- **Priority:** High
- **Deliverable Path:** `/shared-workspaces/projects/storymate/infra/deployment-logs.md`
- **Depends on:** storymate-dev-001

---
*Plan created: 2026-03-31 18:40 PT*
