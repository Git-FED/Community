# FED-Shell configuration contract

The planned configuration should describe a target URL, app identity, version, icon, and explicitly requested platforms. The exact schema is not finalized in this foundation commit.

```yaml
url: https://example.com
name: Example App
identifier: com.example.app
version: 0.1.0
icon: assets/icon.png
platforms: [android, ios, windows, macos]
```

Treat this as illustrative only until the implementation and platform matrix are tested. Never commit signing credentials.
