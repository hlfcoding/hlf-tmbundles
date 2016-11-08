# Checklist

> :white_check_mark: A modest syntax for quickly turning outlines into tasks.

```checklist
✔ completed item (v)
➜ next item (>)
✘ failed item (x)
- regular item
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
