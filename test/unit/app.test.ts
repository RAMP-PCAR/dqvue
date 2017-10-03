import Vue from 'vue';
import app from '../../src/components/app.vue';
import assert from 'assert';

import { DVSection } from '../../src/classes/section';

it('ok', () => {
    const vm = new app().$mount();
    assert(vm.msg === 'Hello world!!');

    //console.log('--', vm.msg, vm.$el.textContent);
});

it('ok', () => {
    const data: object = { a: 'test'};
    const dv3 = new DVSection({ data });

    console.log(dv3);
    console.log(dv3.data);

    // assert(dv3.data.a === 'test');
});