[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/error-message.svg)](https://www.npmjs.com/package/@advanced-rest-client/error-message)

[![Build Status](https://travis-ci.org/advanced-rest-client/error-message.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/error-message)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@advanced-rest-client/error-message)

# error-message;

Renders standarized error message with icon.

```html
<error-message iconprefix="arc" icon="sentiment-neutral">
  <p>This is neutral information</p>
</error-message>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/error-message
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/error-message/error-message.js';
    </script>
  </head>
  <body>
    <error-message></error-message>
  </body>
</html>
```

### In a LitElement template

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/error-message/error-message.js';

class SampleElement extends LitElement {
  render() {
    return html`<error-message></error-message>`;
  }
}
customElements.define('sample-element', SampleElement);
```

### In a Polymer 3 template

```js
import { PolymerElement, html } from '@polymer/polymer';
import '@advanced-rest-client/error-message/error-message.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <error-message></error-message>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/error-message
cd error-message
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
