# Reproduction: Saving KB's by excluding internal BaseUI Themes

## Background

A user of BaseUI wants to use a completely custom "theme", given to `ThemeProvider`. Or, they prefer to "own" all of their theme, even that means copying over BaseUI's Light/Dark theme...

Upon bundling this user's app, they find that a majority of `baseui/themes` is being added, even if they're no longer using it due to having their own custom theme.

The user doesn't want unused KB's in their bundle.

## Problem Hunt

1. [NextJS](https://nextjs.org/) was used for the bundling and serving the Frontend Repro.
2. Webpack's [Analyse](https://webpack.github.io/analyse) App was used for inspecting the module tree.
3. In the Frontend Repro, we explicitly _never_ import any of BaseUI's themes (`LightTheme`/`DarkTheme`)
4. Instead we use our own full theme, found in `theme.js` 

By analysing the `stats.json` of a normal bundle, we find that BaseUI's `ThemeProvider` module always imports the `LightTheme`, regardless of whether you are using it not.

## Solutions

A "solution at the source" would be BaseUI removing the "default" inclusion of `LightTheme`, and instead demanding that the user _always_ provide a theme.

To verify the effect of removing `LightTheme` (the "parent" module of several others from `baseui/themes`), we [null](https://github.com/webpack-contrib/null-loader) it.

_Before_  
```
Page            Size
┌ * /           1.12 kB
├   /_app       268 kB
├   /_document
└   /_error     7.33 kB
```

_After_  
```
Page            Size
┌ * /           1.12 kB
├   /_app       248 kB
├   /_document
└   /_error     7.33 kB
```

> **Total: 268kB - 248kB = 20kb**  
> _Yes, that's +7% reduction in bundle size!_
