In order to improve the project we could implemennt the folowing:

- Refactor CSS Modules
- Refactor const to functions
- Use context API

# Refactor CSS Modules

Keep the CSS modules as is a great styling option but only use it at the top level. Example

## Current

```
// React
<article className={Style.movie}>
    <h2 className={Style.title}>Batman</h2>
    <p className={Style.description}>A movie directed by Tim Burton</p>
</article>

// SCSS
.movie {
    background-color: black;
}
.title {
    color: red;
}
.description {
    color: blue;
}
```

## Suggestion

```
// React
<article className={Style.movie}>
    <h2>Batman</h2>
    <p>A movie directed by Tim Burton</p>
</article>

// SCSS
.movie {
    background-color: black;
}
.movie .title {
    color: red;
}
.movie .description {
    color: blue;
}
```
