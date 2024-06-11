## How to startup new project Reactjs + Typescript + Vite + Tailwindcss
Install vite via npm
```
npm create vite@latest
```

Install vite via yarn
```
### yarn create vite
```

### Select react
```
yarn create v1.22.17
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Installed "create-vite@2.9.0" with binaries:
   - create-vite
   - cva
✔ Project name: … react-project
? Select a framework: › - Use arrow-keys. Return to submit.
  vanilla
  vue
❯  react
  preact
  lit
  svelte
```

### Select react js with typescript.
```
✔ Select a framework: › react
? Select a variant: › - Use arrow-keys. Return to submit.
  react
❯  react-ts
```

### Move to project directory and install dependencies.
```
cd react-project
npm install 
npm run dev
```

### Install Tailwind CSS 3 Vite React Project.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### add tailwind css @tailwind directives
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Test in App.tsx
```
export default function App() {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <h1 className="text-3xl font-bold text-blue-600">
                Install & Setup Vite + React + Typescript + Tailwind CSS 3
            </h1>
        </div>
    );
}
```

### How to run project
```
npm run dev
```