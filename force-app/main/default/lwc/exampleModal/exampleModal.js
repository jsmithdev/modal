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

    demo_click( event ){

        const { name } = event.target
        // eslint-disable-next-line no-alert
        alert( `Hello from ${name} button clicked` )
    }


	apiFunctions(){
		this.template.querySelector('c-modal').isOpen() 
		? this.template.querySelector('c-modal').close()
		: this.template.querySelector('c-modal').open()
	}
}