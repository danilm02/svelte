/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	detach,
	init,
	insert,
	noop,
	safe_not_equal,
	set_svg_attributes,
	svg_element
} from "svelte/internal";

function create_dynamic_element(ctx) {
	let svelte_element1;
	let svelte_element0;

	return {
		c() {
			svelte_element1 = svg_element(/*tag*/ ctx[0].svg);
			svelte_element0 = svg_element(/*tag*/ ctx[0].path);
			set_svg_attributes(svelte_element0, { xmlns: "http://www.w3.org/2000/svg" });
			set_svg_attributes(svelte_element1, { xmlns: "http://www.w3.org/2000/svg" });
		},
		m(target, anchor) {
			insert(target, svelte_element1, anchor);
			append(svelte_element1, svelte_element0);
		},
		p: noop,
		d(detaching) {
			if (detaching) detach(svelte_element1);
		}
	};
}

function create_fragment(ctx) {
	let svelte_element = /*tag*/ ctx[0].svg && create_dynamic_element(ctx);

	return {
		c() {
			if (svelte_element) svelte_element.c();
		},
		m(target, anchor) {
			if (svelte_element) svelte_element.m(target, anchor);
		},
		p(ctx, [dirty]) {
			if (/*tag*/ ctx[0].svg) {
				svelte_element.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (svelte_element) svelte_element.d(detaching);
		}
	};
}

function instance($$self) {
	const tag = { svg: 'svg', path: 'path' };
	return [tag];
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Component;