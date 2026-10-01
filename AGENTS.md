# Frontend Development Rules

## 1. Core Principles

- Implement UI as accurately as possible from the provided screenshot or Figma design.
- When a Figma MCP link is provided, inspect its design properties instead of estimating values from the screenshot.
- Follow the project's existing architecture, styling conventions, design tokens, and component patterns.
- Reuse existing components before creating new ones.
- Make minimal, focused changes. Do not refactor unrelated code.

## 2. Typography — Mandatory

- Always use the project's existing Typography component for text instead of native `<p>` tags.
- Inspect the Typography component's API and supported variants before using it.
- Match font family, size, weight, line height, letter spacing, color and alignment to Figma.
- Use semantic headings through Typography when supported.
- Do not create duplicate typography styles or introduce arbitrary font sizes when existing tokens match.
- Preserve accessibility and correct semantic HTML.

## 3. Layout and Spacing — Mandatory

- Use Flexbox and the CSS `gap`, `row-gap`, and `column-gap` properties to manage spacing between elements.
- Do not use margins to create layout gaps or spacing between components and sections.
- Use padding for internal container spacing.
- Set explicit flex direction, alignment, justification and wrapping when needed.
- Match the design's exact gaps, padding, container widths, heights and section alignment.
- Avoid absolute positioning unless required by the design, such as decorative overlays.
- Avoid unnecessary fixed heights that cause content overflow.
- Maintain consistent spacing using existing design tokens where available.

## 4. Pixel-Accurate Implementation

- Match the reference's layout, typography, colors, gradients, borders, shadows, radii and image dimensions.
- Inspect Figma properties directly when available. Do not invent values that can be retrieved.
- Compare existing components and styles before writing replacements.
- Respect the existing page's responsive behavior and implement available Figma breakpoint designs.
- When only one screenshot is provided, use sensible responsive behavior without inventing unsupported design details.
- Do not add decorative elements, animations or UI not present in the reference.
- Preserve aspect ratios and use appropriate image fitting.
- Check alignment, text wrapping, overflow and section spacing.

## 5. Component Reuse and Code Quality

- Search for existing components, icons, design tokens and utilities before creating anything new.
- Reuse the project's Typography, Button, Input, Container and other shared components where suitable.
- Prefer existing CSS and Tailwind conventions. Do not introduce another styling approach.
- Keep components readable and focused, with correct TypeScript types.
- Avoid inline styles, magic numbers, duplicate CSS and unnecessary dependencies when existing conventions cover the requirement.
- Do not replace semantic elements required for accessibility; use shared components with the correct rendered HTML element.
- Preserve keyboard navigation, visible focus states and accessible labels.

## 6. Scope and Existing Behavior

- Modify only the relevant page, components and styles.
- Do not change business logic, API integrations, state management or unrelated layouts.
- Do not remove existing functionality to achieve a visual match.
- Do not modify shared component behavior in ways that could unexpectedly affect other screens.
- If a necessary design detail is unavailable, make the smallest reasonable assumption and mention it in the final response.

## 7. Verification and Tests

- Review modified files for incorrect spacing, unused imports, invalid component props and TypeScript errors.
- Update relevant unit or E2E tests when implementation changes require it.
- Do not automatically run full test suites, lint or production builds unless necessary to validate a substantial change.
- When necessary, run only targeted checks.
- Never claim pixel-perfect accuracy without an actual visual comparison.

## 8. Completion

- Do not commit or push changes automatically.
- Briefly summarize the files changed and important implementation details.
- Identify any differences from Figma or assumptions made.
- Suggest one concise conventional commit message.
- Avoid unnecessary explanations, unrelated analysis and changes outside the requested scope.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
