import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Rough-Notation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Rough-Notation @text="Highlight This" />`);

    assert.equal(this.element.textContent.trim(), 'Highlight This');

    // Template block usage:
    await render(hbs`
      <Rough-Notation>
        template block text
      </Rough-Notation>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
