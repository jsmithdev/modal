# modal

## LWC modal with variant sizes, misc APIs

Use easily control modal size and content using attributes or slots

## Consuming

Two example implementations are [here](force-app/main/default/lwc/exampleModal/exampleModal.html) -- works well with lwc local dev server

### Quickly setup a basic modal by setting `header`, `trigger` attributes and use `content` slot for content

<img src="https://i.imgur.com/irT1Rfm.png" width="500px" />

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

### Or highly customize by using pre made `slot`s for `trigger`, `header`, `content` and / or `footer` 

📌 Can use any combo of slots and attributes (slots override if both are given)

<img src="https://i.imgur.com/BXiNM4H.png" width="500px" />

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

### Example of the 2 modals w/ 2 different triggers - trigger attribute for text or trigger slot from DOM

📌 Can use any DOM for trigger - the second one is showing using the lesser used `lightning-pill` just to demo that idea

<img src="https://i.imgur.com/1VYFw56.png" width="500px" />

## API

### Attributes

```header``` --- {String} header / title for modal

```trigger``` --- {String} text that triggers / opens modal

```variant``` --- {String} size of modal, defaults to medium
  -large
  -medium
  -small

### Slots

`header` --- `<span slot="content"> { DOM to render } </span>`

`trigger` --- `<span slot="trigger"> { DOM to render } </span>`

`content` --- `<span slot="content"> { DOM to render } </span>`

`footer` --- `<span slot="footer"> { DOM to render } </span>`

---

written with 💙 by Jamie Smith