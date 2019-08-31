import { fixture, assert } from '@open-wc/testing';
import '../error-message.js';

const style = document.createElement('style');
style.innerText = `.styled {
  --error-message-color: rgb(10, 10, 10);
  --error-message-icon-color: rgb(20, 20, 20);
}`;
document.head.appendChild(style);

describe('<error-message>', function() {
  async function basicFixture() {
    return (await fixture(`<error-message>
      <p id="message">Test message</p>
    </error-message>`));
  }

  async function styledFixture() {
    return (await fixture(`<error-message class="styled">
      <p id="message">Test message</p>
    </error-message>`));
  }

  describe('iconValue', () => {
    let element;
    beforeEach(async () => {
      element = await basicFixture();
    });

    it('Has default value', () => {
      const result = element.iconValue;
      assert.equal(result, 'arc:sentiment-very-dissatisfied');
    });

    it('Changes the prefix', () => {
      element.iconPrefix = 'other';
      const result = element.iconValue;
      assert.equal(result, 'other:sentiment-very-dissatisfied');
    });

    it('Ignores prefix when not set', () => {
      element.iconPrefix = '';
      const result = element.iconValue;
      assert.equal(result, 'sentiment-very-dissatisfied');
    });

    it('Changes the icon', () => {
      element.icon = 'other';
      const result = element.iconValue;
      assert.equal(result, 'arc:other');
    });
  });

  describe('Styling', () => {
    let element;
    beforeEach(async () => {
      element = await styledFixture();
    });

    it('Styles the message', () => {
      const color = getComputedStyle(element.children[0]).color;
      assert.equal(color, 'rgb(10, 10, 10)');
    });

    it('Styles the message', () => {
      const icon = element.shadowRoot.querySelector('.error-icon');
      const color = getComputedStyle(icon).color;
      assert.equal(color, 'rgb(20, 20, 20)');
    });
  });

  describe('a11y', () => {
    it('is accessible', async () => {
      const element = await basicFixture();
      await assert.isAccessible(element);
    });
  });
});
