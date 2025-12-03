# Button Component

Button component with loading state functionality.

## Usage

### Basic Button

```html
<button class="btn btn-primary">Click Me</button>
```

### Variants

- `btn-primary` - Primary action button
- `btn-outline-primary` - Outlined primary button
- `btn-ghost` - Minimal ghost button

### States

- `disabled` - Disabled state
- `data-loading="true"` - Loading state (requires button.mjs)
- `data-loading-text="Custom text"` - Custom loading text

### Loading State Example

```html
<button
  class="btn btn-primary"
  data-loading="false"
  data-loading-text="Processing"
>
  Submit
</button>
```

## JavaScript API

The button component includes optional JavaScript for loading states:

```javascript
// Set loading state programmatically
ButtonComponent.setLoading(buttonElement, true);
ButtonComponent.setLoading(buttonElement, false);
```

Buttons with `data-loading` attribute will automatically toggle loading state on click.

## Customization

Override CSS custom properties to customize:

```css
:root {
  --primary-color: #007bff;
  --border-radius: 4px;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
}
```

