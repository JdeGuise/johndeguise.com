// Theme helpers shared by the inline boot script (index.html) and ThemeToggle.
// The boot script applies the theme before React renders to avoid a flash;
// these helpers keep the toggle in sync and persist the user's choice.

export const THEME_KEY = 'theme'

export function getStoredTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Stored preference wins; otherwise fall back to the browser/OS setting.
export function getInitialTheme() {
  return getStoredTheme() || getSystemTheme()
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

export function storeTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme)
  } catch {
    /* localStorage unavailable (private mode, etc.); choice just won't persist. */
  }
}
