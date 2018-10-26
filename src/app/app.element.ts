import { CustomElement } from 'custom-elements-ts';

@CustomElement({
  tag: 'app-root',
  templateUrl: `
    <h1>Hello World</h1>
  `,
  shadow: false
})
export class AppElement extends HTMLElement { }