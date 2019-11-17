import { LightningElement } from 'lwc'

export default class exampleModal extends LightningElement {
    
    data = {
        things: [
            {
                name: 'unicorn',
                avatar: '🦄',
            },
            {
                name: 'panda',
                avatar: '🐼',
            },
            {
                name: 'border collie',
                avatar: '🐶',
            },
            {
                name: 'mouse',
                avatar: '🐁',
            },
        ]
    }

    demo_click(){
        // eslint-disable-next-line no-alert
        alert('click ')
    }
}