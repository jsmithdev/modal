import { track, LightningElement } from 'lwc'

export default class example extends LightningElement {
    
    @track
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
}