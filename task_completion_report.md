# Task Completion Report

## Task

- Implement dark mode and light mode functionality.
- Deploy the changes to the production environment.
- Change the background image to a picture of mountains and the sea.

## Changes Made

- **`index.html`**:
    - Added a button to switch between dark and light modes.
    - Introduced a `div` with the class `background-container` to wrap the main content for better background image handling.
- **`style.css`**:
    - Implemented CSS variables for colors to support themes.
    - Added styles for the new theme switcher button.
    - Defined a dark theme with a dark background and light text.
    - Moved background image properties to `.background-container` with `position: absolute`, `z-index: -1`, and `background-size: cover`, `background-attachment: fixed` to ensure correct display.
    - Adjusted `body` background colors to have transparency to allow the background image to show through.
- **`main.js`**:
    - Added a click event listener to the theme switcher button.
    - The script toggles a `data-theme` attribute on the `<html>` element to switch between `light` and `dark` themes.

## Deployment

- All changes were committed and pushed to the `main` branch.
