# Checklist

> :white_check_mark: A modest syntax for quickly turning outlines into tasks.

```checklist
✔ completed item (v)
➜ next item (>)
✘ failed item (x)
- regular item
  | a comment with more details
```

![image](https://cloud.githubusercontent.com/assets/100884/21130584/6e045d96-c0be-11e6-8434-8e2c7e809fa2.png)

Also:

```checklist
✔ {
  a completed item
  taking up multiple lines
}
➜ {
  a next item
  taking up multiple lines
}
✘ {
  a failed item
  taking up multiple lines
}
```

Works well with Markdown Extended, just paste the below into `Markdown Extended.sublime-syntax`:

```yaml
- match: '(```|~~~|{%\s*highlight)\s*(checklist)\s*((?:linenos\s*)?%})?$'
      captures:
        1: punctuation.definition.fenced.markdown
        2: variable.language.fenced.markdown
        3: punctuation.definition.fenced.markdown
      push:
        - meta_scope: markup.raw.block.markdown markup.raw.block.fenced.markdown
        - meta_content_scope: text.checklist
        - match: '(```|~~~|{%\s*endhighlight\s*%})\n'
          captures:
            1: punctuation.definition.fenced.markdown
            2: variable.language.fenced.markdown
            3: punctuation.definition.fenced.markdown
          pop: true
        - include: scope:text.checklist
```
