import { Component, h, State } from '@stencil/core';

@Component({
    tag: 'my-component',
    shadow: true,
})
export class MyComponent {

    @State()
    private value = 'init';

    public async connectedCallback() {
        console.log('connectedCallback');
        await new Promise((resolve) => setTimeout(resolve, 2000));
        this.value = 'connectedCallback';
    }

    public async componentWillLoad() {
        console.log('componentWillLoad');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        this.value = 'componentWillLoad';
    }

    render() {
        console.log('render', this.value);
        return <h1>{this.value}</h1>;
    }
}
