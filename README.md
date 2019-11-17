# modal

## LWC modal with variant sizes, misc APIs

Use easily control modal size and content using attributes or slots

## Consuming

Example implementation [here](force-app/main/default/lwc/exampleModal/exampleModal.html); works well with lwc local dev server

Quickly and cleanly setup a modal by setting header, trigger attributes and use content slot for content

```html

<c-modal
    header="This is a header"
    trigger="Text to trigger modal"
    variant="medium">

    <span slot="content">

        <template for:item="thing" for:each={data.things} >
            {thing.avatar} {thing.name} <br key={thing.name} />
        </template>

    </span>

</c-modal>
```

Or highly customize by using pre made slots for trigger, header, content and footer (or any combo of slots and attributes)

```html

<c-modal
    header="This is a header"
    value={data}
    variant="medium">

    <span slot="trigger">
        <lightning-pill
            label="Open modal using the trigger slot instead of the trigger attribute to pass in DOM instead of text"
        ></lightning-pill>
    </span>

    <span slot="header">
        <a href="lwc.land" target="_blank">
          This is a custom header using the header slot instead of the header attribute to pass in DOM instead of text
        </a>
    </span>

    <span slot="content">

        <template for:item="thing" for:each={data.things} >
            {thing.avatar} {thing.name} <br key={thing.name} />
        </template>

    </span>

    <span slot="footer">

        <lightning-button 
            label="Can pass in DOM like buttons to add the the modal's footer"
            variant="brand"
            onclick={demo_click}>
        </lightning-button>

    </span>

</c-modal>
```

<img src="https://i.imgur.com/oJFko9O.png" />

## API

### 
```header``` --- {String} header / title for modal

```text``` --- {String} text that triggers / opens modal

```variant``` --- {String} size of modal, defaults to medium
  -large
  -medium
  -small

```value``` --- {Object} data to be consumed

---

written with 💙 by Jamie Smith