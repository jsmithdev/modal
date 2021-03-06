# modal

## An LWC modal with easy to use sizes, attributes and slots 🎰

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

`footer-center` --- `<span slot="footer-center"> { DOM to render } </span>`

## Consuming

Two example implementations are [here](force-app/main/default/lwc/exampleModal/exampleModal.html) -- works well with lwc local dev server

### Quickly setup a basic modal by setting `header`, `trigger` attributes and use `content` slot for content

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

<img src="https://i.imgur.com/irT1Rfm.png" width="500px" />

### Or highly customize by using pre made `slot`s for `trigger`, `header`, `content` and / or `footer`

📌 Can use any combo of slots and attributes (slots override if both are given)

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

<img src="https://i.imgur.com/BXiNM4H.png" width="500px" />

## Deploy

Covert with SFDX; This creates a folder called `deploy`

```bash
sfdx force:source:convert -r force-app -d deploy
```

Now you can deploy from the resulting `deploy` directory

📌  Below deploys to the default org set

- Add `-u user@domain.com` or `-u alias` to deploy else where

```bash
sfdx force:mdapi:deploy -d deploy -w -1 --verbose
```

Results should more or less mirror below

```bash
jamie@the-brain:~/repo/modal$ sfdx force:mdapi:deploy -d deploy -w -1  --verbose -u jamie-dev

Using specified username jamie.smith@jsmith.dev

Job ID | 0Af5C00000n5YLOSA2

MDAPI PROGRESS | ████████████████████████████████████████ | 1/1 Components

TYPE                      FILE                NAME         ID
────────────────────────  ──────────────────  ───────────  ──────────────────
                          deploy/package.xml  package.xml
LightningComponentBundle  deploy/lwc/modal    modal        0Rb5C0000004KGlSAM

```

---

written with 💙 by Jamie Smith
