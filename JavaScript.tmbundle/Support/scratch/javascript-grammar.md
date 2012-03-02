# Documentation

## Intro

- More up to date support.
- Accounts for JS boilerplate language.
- Imputes for more highlighted, including better DOM coverage:
  - Assumes your code is 99% functions and that is mostly what you are working in
    and care about.
  - Assumes you are experienced with JS and are looking for a bundle that makes
    it less painful to write all day, in lieu of CoffeeScript.
  - Assumes you follow conventions with naming instances: 
    `date` `my_date` `element` `elem` `el`
  - Assumes you care about at least viewing the DOM api with proper highlighting
- Uses more of TextMate, including updated doc views, symbol list, autocomplete.

## Rules

Most keywords are using bounds. Patterns can nest. As long as patterns cover the
whole match, special ordering seems unneeded unless there are conflicts. Use
repositories! For support functions, the matches are not optimized for greater clarity.

### Patterns

- Use meta.convention.
- Ternaries are tricky.

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

- Grammar
  - webkit stuff
  - node/commonjs
  - final trailing space include
  - update autocomplete
  - match a full func call, with params
- Command
  - integrate with DocHub (have to separate dom and js)
- Symbol list
  - log statements
- Wontfix
  - fold toggle with first val decl assigned a function, followed by other decls.