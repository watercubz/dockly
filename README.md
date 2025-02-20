<div align="center">
  <a href="https://dockly-docs.netlify.app/">
    <img
      src="./library/src/assets/dockly.png"
      alt="@watercubz/dockly"
      height="60"
    />
  </a>
  <p />
  <p>
    <b>
     Minimalist Dock Library for your React Website
    </b>
  </p>



<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="https://dockly-docs.netlify.app/">Documentation</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
<a href="#-license">License</a>
<span>&nbsp;&nbsp;✦&nbsp;&nbsp;</span>

</div>

<div align="center">

![React Badge](https://img.shields.io/badge/Library-61DAFB?logo=react&logoColor=000&style=flat)
[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fpheralb%2Ftoast%2Fbadge%3Fref%3Dmain&style=flat)](https://actions-badge.atrox.dev/pheralb/toast/goto?ref=main)
![GitHub stars](https://img.shields.io/github/stars/watercubz/dockly)
![GitHub issues](https://img.shields.io/github/issues/watercubz/dockly)

</div>


## 🚀 Getting Started

> [!IMPORTANT]
> This library requires **React v18** or higher.

1. Install the library:

```bash
# Using npm:
npm install @watercubz/dockly

# Using pnpm:
pnpm add @watercubz/dockly

# Using yarn:
yarn install @watercubz/dockly
```

2. Usage:

```jsx
// 📃 index.jsx
import { Dock } from "@watercubz/dockly";
 
import { DockOption, DockItems } from "./utils/options";
 
export default function Index() {
  return (
    <>
      <section className="bg-gray-700">
        <Dock
          DockItems={DockItems}
          DockOption={DockOption}
          icon1={<CodeXml size={18} />}
          icon2={<AppWindowMac size={18} />}
          icon3={<Paperclip size={18} />}
        />
      </section>
    </>
  );
}
```

> [!TIP]
> 📚 Visit the [**Documentation**](https://dockly-docs.netlify.app/) for more information.

## 🔭 Roadmap

- [x] 🚗 Add `./options` options file for more configuration.
- [x] 📚 Add support for React.

## 🤝 Contributing

[`watercubz/dockly`](https://github.com/watercubz/dockly)

- [**Website**](https://github.com/watercubz/dockly/tree/master/website): Nextra + Next.js
- [**Library**](https://github.com/watercubz/dockly/tree/master/library): React 18

1. [Click here to fork](https://github.com/watercubz/dockly/fork) the repository.

2. Install dependencies:

```bash
# Install pnpm globally if you don't have it:
npm install -g pnpm

# and install dependencies:
pnpm install
```

3. Commands:

```bash
# Run only documentation website:
pnpm dev: //website
pnpm dev // library (on the main route)

# Build the docs & library:
pnpm build

```

🧑‍🚀 Open [`http://localhost:3000`](http://localhost:3000) to view the **Nextra.js** documentation website.



## 📃 License

[MIT License](https://github.com/watercubz/dockly/blob/master/LICENCE) - [**watercubz**](https://watercubz.vercel.app) 2025.
