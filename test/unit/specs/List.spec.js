import UnitTest from '@/components/unitTest/UnitTest';
import Vue from 'vue';

describe('UnitTest.vue', () => {
  it('displays items from the list', () => {
    const Constructor = Vue.extend(UnitTest);
    const ListConponent = new Constructor().$mount();
    expect(ListConponent.$el.textContent).to.contain('Mocha');
  });
});
