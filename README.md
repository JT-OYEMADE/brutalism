# Welcome to the ✨ Email Dashboard ✨

A modern email management application built with React Vite featuring search, filtering, pagination, and performance optimizations.

## ✨ Features

- **Authentication**: Mock token-based authentication with sign-in/sign-out
- **Email List**: Display emails with sender, subject, and timestamp
- **Search**: Debounced search across sender and subject fields (300ms delay)
- **Filtering**: Filter by folder and starred emails
- **Pagination**: Client-side pagination with 10 emails per page
- **Performance Optimizations**:
  - Response caching with TanStack Query
  - Debounced search input to reduce re-renders
  - Memoized email components
  - Memoized filtered/paginated lists with useMemo
  - Background data refetching for stale-while-revalidate pattern
- **Responsive Design**: Mobile-friendly layout with accessible UI
- **Accessibility**: Proper ARIA labels, semantic HTML, and keyboard navigation support

## Architecture

### Structure
- **AuthPage**: Manages user authentication (mocked)
- **Layout**: Dashboard layout container
- **Component**: Divided into common, dashboard and layouts
- **Hooks**: Brain of the application, encapsulating all business logic, state management, and side effects in reusable, testable units.
- **Sidebar**: For folder navigation
- **SearchBar**: Debounced search input
- **EmailList**: Displays emails with pagination and memoization

### Data Fetching Strategy
- **Caching**: Stores results using TanStack Query
- **Background Refetching**: Updates data in background while using cache
- **API**: https://email-list-api-3.onrender.com

## Performance Decisions

1. **Client-side Pagination**: Chosen for simplicity and instant page transitions without network requests
2. **Debounced Search**: 300ms debounce reduces re-renders while maintaining responsive feel
3. **Component Memoization**: EmailRow and filtered/paginated lists memoized to prevent unnecessary re-renders
4. **LocalStorage Caching**: Provides instant load and offline capability with background sync
5. **Lazy Component Rendering**: Pagination ensures only 10 items render at once


## Future Improvements

- Add email detail view
- Implement backend pagination
- Add real authentication
- Add email composition and sending


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
