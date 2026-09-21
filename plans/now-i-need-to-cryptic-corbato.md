# Plan: Add Employer Benefits Section

## Context

The user wants to build a new "Employer benefits" form section with the same visual language as the existing "Existing protection" form. The question is whether to start a new prototype or extend the current one.

**Recommendation: extend the current project — do not create a new prototype.**

### Why stay in the same project

The existing `App.tsx` already contains a complete shared component library:
- `KalosFieldset`, `FieldLabel`, `FieldWrapper`, `ConditionalBlock`
- `TextInput`, `CurrencyInput`, `Textarea`, `SelectInput`
- `RadioCircle`, `YesNo`, `KalosCheckbox`, `CheckboxList`
- `KalosDateField`, `NumberStepper`, `SearchableProviderDropdown`
- All brand tokens (colours, fonts, radii) wired via `src/index.css` and Tailwind v4

A new project would require copying all of these manually and keeping two codebases in sync. Staying in one project means zero duplication — the new form just imports and uses the same components.

---

## Approach

### 1. Add top-level section navigation

Add a simple state-driven tab bar at the top of the page that switches between:
- **Existing protection** (current form — unchanged)
- **Employer benefits** (new form)

No React Router needed. A single `activeSection: 'protection' | 'employer'` state variable controls which page renders. The tab bar uses the existing brand colours (`#00154d` navy active state, `#67686b` inactive).

### 2. Extract the existing form into its own component

Move the "Existing protection" content out of `App` into a new component (`ExistingProtectionForm`) in the same file or a new `src/ExistingProtectionForm.tsx`. This keeps `App` clean and the two sections parallel in structure.

### 3. Build the Employer Benefits form as a new component

Create `src/EmployerBenefitsForm.tsx` (or co-locate in App.tsx if small). It reuses every shared UI component above and follows the same `KalosFieldset` section pattern.

**What content goes in Employer Benefits needs to be defined by the user** — the plan will scaffold the structure and I'll need the field list before implementation.

---

## Files to modify

- `src/App.tsx` — add section-switcher state + tab nav, refactor existing content into `ExistingProtectionForm` sub-component
- `src/EmployerBenefitsForm.tsx` (new) — new form using shared components from App.tsx (or re-export them)

## Verification

1. Tab bar renders; clicking switches between sections
2. Existing protection form is fully unchanged and functional
3. Employer benefits form renders with correct Kalos styling (fieldsets, fonts, colours)
4. No regressions on save/edit/read-only cycle in the existing form

---

## Open question

**What fields and sections does the Employer Benefits form need?**  
The visual structure and components are clear, but the content (field names, options, validation rules) needs to be specified before implementation can begin.
