# SublimeText Package Overrides

These changesets improve upon existing functionality. I use and improve them myself every
day. 

## CSS Bundle

- CSS3 syntax highlighting

## JavaScript Bundle

- More up to date support.

- Accounts for JS boilerplate language.

- Imputes for more highlighted, including better DOM coverage:
  - Assumes your code is 99% functions and that is mostly what you are working in and care about.
  - Assumes you are experienced with JS and are looking for a bundle that makes it less painful to write all day, in lieu of CoffeeScript.
  - Assumes you follow conventions with naming instances: `date` `my_date` `element` `elem` `el`
  - Assumes you care about at least viewing the DOM api with proper highlighting

## Development

### Sample ST2 Project File

```json
{
  "folders":
  [
    {
      "path": "hlf-tmbundles",
      "file_exclude_patterns": [
        "*.cache"
      ]
    }
  ]
}
```
