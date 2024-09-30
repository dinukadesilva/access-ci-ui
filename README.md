# ACCESS CI User Interface Components

This library provides user interface components for [ACCESS CI](https://access-ci.org/)
websites. The components are rendered using the shadow DOM so that their styles are
isolated from the rest of the site.

## Prerequisites

Sites using ACCESS user interface components should include the Archivo font family:

```html
<link
  rel="stylesheet"
  id="google-font-archivo-css"
  href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,70,400;0,100,400;0,100,500;0,100,600;0,100,700;0,100,800;1,100,400&amp;display=swap"
  media="all"
/>
```

## Components

The library includes functions for rendering common ACCESS user interface components:

- `universalMenus`: Universal navigation menus
- `header`: Logo header
- `siteMenus`: Site-specific navigation menus
- `tableOfContents`: Page table of contents
- `footerMenus`: Site-specific navigation menus above the footer
- `footer`: Universal footer

## Example

```html
    <script>
        winodw.ACCESS_CI_UI_CONFIG = {
          universalMenus: {
            siteName: "Allocations"
          },
          header: {
            siteName: "Allocations"
          },
          siteMenus: {
            items: siteItems,
            siteName: "Allocations"
          },
          tableOfContents: {},
          footerMenus: {
            items: siteItems
          },
          footer: {}
        }
    </script>

    <script defer="defer" src="https://cdn.jsdelivr.net/gh/dinukadesilva/access-ci-ui@0.3.0/dist/access-ci-ui.js"></script>

    <noscript>You need to enable JavaScript to run this app.</noscript>
    
    <div id="universal-menus"></div>
    <div id="header"></div>
    <div id="site-menus"></div>
    <div id="main" class="container">
      <div id="body">
        <h1>Page Title</h1>
        <h2>First Section</h2>
        <h2>Second Section</h2>
        <h2>Third Section</h2>
      </div>
      <div id="table-of-contents"></div>
    </div>
    <div id="footer-menus"></div>
    <div id="footer"></div>
```
