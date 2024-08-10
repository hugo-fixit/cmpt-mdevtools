# cmpt-mdevtools

Mobile devtools component powered by vConsole and eruda.

## Requirements

- FixIt v0.3.9 or later.

## Install Component

The installation method is the same as [installing a theme](https://fixit.lruihao.cn/documentation/installation/). There are several ways to install, choose one, for example, install through Hugo Modules:

```diff
[module]
  [[module.imports]]
    path = "github.com/hugo-fixit/FixIt"
+ [[module.imports]]
+   path = "github.com/hugo-fixit/cmpt-mdevtools"
```

## Configuration

```toml
# Mobile Devtools config
[params.mDevtools]
  enable = false
  # "vConsole", "eruda" supported
  type = "vConsole"
```

## Inject Partial

Inject the `cmpt-mdevtools.html` into the `custom-assets` through the custom block opened by the FixIt theme in the `layouts/partials/custom.html` file:

```go-html-template
{{- define "custom-assets" -}}
  {{- partial "inject/cmpt-mdevtools.html" . -}}
{{- end -}}
```

## References

- [Develop Theme Components | FixIt](https://fixit.lruihao.cn/contributing/components/)
- [How to Develop a Hugo Theme Component | FixIt](https://fixit.lruihao.cn/components/dev-component/)
