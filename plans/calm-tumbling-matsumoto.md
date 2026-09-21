# Context

The fieldset currently titled "Insured" contains the "Who is insured?" question with Client 1 / Client 2 / Joint options. The title "Insured" is functional but flat — it reads like a data label rather than a section heading. The goal is a title that reads naturally in context and aligns with insurance industry language.

**Recommended title: "Lives covered"**

This is standard UK protection insurance terminology, matches the adviser-facing register of the rest of the form, and is more descriptive than "Insured" without being verbose.

# Change

**File:** `src/App.tsx`

Find:
```tsx
<KalosFieldset title="Insured">
```

Replace with:
```tsx
<KalosFieldset title="Lives covered">
```

# Verification

- Check the fieldset heading renders as "Lives covered" in the preview.
- No logic, validation, or state changes required.
