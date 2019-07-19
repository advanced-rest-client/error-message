/**
@license
Copyright 2016 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icon/iron-icon.js';
import '@advanced-rest-client/arc-icons/arc-icons.js';
/**
`<error-message>` A standarized error information

### Example
```
<error-message icon="warning" iconprefix="myset">
  <p>This is a warning!</p>
</error-message>
```

### Styling
`<error-message>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--error-message-icon-color` | Fill color of the icon. Only if an icon is a SVG icon. | `rgba(0, 0, 0, 0.56)`
`--error-message-color` | Color of the message text. | `--google-red-500`
`--error-message-background-color` | Background color of the component | ``
`--arc-font-subhead-font-size` | Font size of the message (theme item) | ``
`--arc-font-subhead-font-weight` | Font weigth of the message (theme item) | ``
`--arc-font-subhead-line-height` | Font line height of the message (theme item) | ``

@memberof UiElements
@element error-message
@customElement
@demo demo/index.html
*/
class ErrorMessage extends LitElement {
  static get styles() {
    return css`:host {
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: var(--error-message-background-color);
    }

    .error-icon {
      width: 128px;
      height: 128px;
      color: var(--error-message-icon-color, rgba(0, 0, 0, 0.56));
    }

    .error-desc ::slotted(*) {
      font-size: var(--arc-font-subhead-font-size);
      font-weight: var(--arc-font-subhead-font-weight);
      line-height: var(--arc-font-subhead-line-height);

      color: var(--error-message-color, var(--google-red-500));
    }`;
  }
  render() {
    const icon = this.iconValue;
    return html`<div>
      <iron-icon class="error-icon" .icon="${icon}"></iron-icon>
    </div>
    <div class="error-desc">
      <slot></slot>
    </div>`;
  }

  static get properties() {
    return {
      /**
       * An icon to render. Do not use prefix here. Instead use the `iconPrefix`
       * property.
       *
       * Detaults to `sentiment-very-dissatisfied` from ARC icons set.
       */
      icon: { type: String },
      /**
       * Icon prefix from the svg icon set. This can be used to replace the set
       * without changing the icon.
       *
       * Defaults to `arc`.
       */
      iconPrefix: { type: String }
    };
  }
  /**
   * @return {String} Computed value if the icon to be passed to `iron-icon`.
   * By default it is `arc:sentiment-very-dissatisfied`
   */
  get iconValue() {
    let icon = '';
    if (this.iconPrefix) {
      icon = this.iconPrefix + ':';
    }
    return icon + this.icon;
  }

  constructor() {
    super();
    this.icon = 'sentiment-very-dissatisfied';
    this.iconPrefix = 'arc';
  }
}
window.customElements.define('error-message', ErrorMessage);
