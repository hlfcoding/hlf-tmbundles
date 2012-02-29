# Documentation

## Intro

- More up to date support.
- Accounts for JS boilerplate language.
- Imputes for more highlighted, including better DOM coverage:
  - Assumes your code is 99% functions and that's mostly what you're working in
    and care about.
  - Assumes you are experienced with JS and are looking for a bundle that makes
    it less painful to write all day, in lieu of CoffeeScript.
  - Assumes you follow conventions with naming instances: 
    `date` `my_date` `element` `elem` `el`
  - Assumes you care about at least viewing the DOM api with proper highlighting
- Uses more of TextMate, including updated doc views, linting, symbol list, autocomplete.

## Rules

Most keywords are using bounds. Patterns can nest. As long as patterns cover the
whole match, special ordering seems unneeded unless there are conflicts. Use
repositories! For support functions, the matches are not optimized for greater clarity.

### Patterns

- matches `window.foo` or `foo` but doesn't allow placeholders `(|bar)` in child
  captures

    (?<=window\.|^|[^.])
    
- matches `bar(`

    bar(?=\()
    
- foldingStart: `/** Foo` or `{[space][eol]` or `{ [not]/*...*/...`
- foldingStop: `**/` or `[space]}`
- decreaseIndentPattern: TODO
- increaseIndentPattern: TODO

### Testing

- For support, change `window` to `window2` and it should break.

## Highlighting

### JS

A lot of storage and braces are boilerplate. Some delimiters are really
important and missing them cause errors, that's why they're highlighted like
keywords.

# TODO

- Fix support methods, constants.
- Ternaries are tricky.
- Use meta.convention
- Application Child Grammar
  - common libraries.
  - support markdown comments
- Grammar
  - webkit stuff
  - node/commonjs
- Reset and deactivate jQuery grammar
- Command
  - integrate with DocHub
- Symbol list
  - log statements