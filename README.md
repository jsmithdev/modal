# modal

## LWC modal with variant sizes, misc APIs

Use attributes to control small, medium or large modals, header / trigger text and data

## Consuming

Example implementation [here](force-app/main/default/lwc/example/example.html); works well w/ lwc local dev server

```html
<c-modal
    header="This is a header"
    text="Text to trigger modal"
    value={data}
    variant="medium"
></c-modal>
```

<img src="https://i.imgur.com/oJFko9O.png" />

### API

```header``` --- {String} header / title for modal

```text``` --- {String} text that triggers / opens modal

```variant``` --- {String} size of modal, defaults to medium
  -large
  -medium
  -small

```value``` --- {Object} data to be consumed

---

written with 💙 by Jamie Smith