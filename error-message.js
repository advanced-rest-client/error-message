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
import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/iron-icon/iron-icon.js';
import '@advanced-rest-client/arc-icons/arc-icons.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
/**
`<error-message>` A standarized error information

### Example
```
<error-message icon="warning">
  <p>This is a warning!</p>
</error-message>
```

### Styling
`<error-message>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--error-message` | Mixin applied to the element | `{}`
`--error-message-icon-color` | Fill color of the icon. Only if an icon is a SVG icon. | `rgba(0, 0, 0, 0.56)`
`--error-message-icon` | Mixin applied to the icon | `{}`
`--error-message-text` | Mixin applied to the text message. | `{}`
`--error-message-color` | Color of the message text. | `--google-red-500`

@group UI Elements
@element error-message
@customElement
@polymer
@demo demo/index.html
*/
class ErrorMessage extends PolymerElement {
  static get template() {
    return html`
    <style>
    :host {
      @apply --layout-horizontal;
      @apply --layout-center;
      @apply --error-message;
    }

    .error-icon {
      width: 128px;
      height: 128px;
      color: var(--error-message-icon-color, rgba(0, 0, 0, 0.56));
      @apply --error-message-icon;
    }

    .error-desc ::slotted(*) {
      @apply --arc-font-subhead;
      color: var(--error-message-color, var(--google-red-500));
      @apply --error-message-text;
    }
    </style>
    <div>
      <iron-icon class="error-icon" icon="[[icon]]"></iron-icon>
    </div>
    <div class="error-desc">
      <slot></slot>
    </div>
`;
  }

  static get properties() {
    return {
      // An icon to render.
      icon: {
        type: String,
        value: 'arc:sentiment-very-dissatisfied'
      }
    };
  }
}
window.customElements.define('error-message', ErrorMessage);
