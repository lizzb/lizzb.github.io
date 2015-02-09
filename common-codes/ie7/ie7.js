/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'common-codes\'">' + entity + '</span>' + html;
	}
	var icons = {
		'i-pigpen-a': '&#x41;',
		'i-pigpen-b': '&#x42;',
		'i-pigpen-c': '&#x43;',
		'i-pigpen-d': '&#x44;',
		'i-pigpen-e': '&#x45;',
		'i-pigpen-f': '&#x46;',
		'i-pigpen-g': '&#x47;',
		'i-pigpen-h': '&#x48;',
		'i-pigpen-i': '&#x49;',
		'i-pigpen-j': '&#x4a;',
		'i-pigpen-k': '&#x4b;',
		'i-pigpen-l': '&#x4c;',
		'i-pigpen-m': '&#x4d;',
		'i-pigpen-n': '&#x4e;',
		'i-pigpen-o': '&#x4f;',
		'i-pigpen-p': '&#x50;',
		'i-pigpen-q': '&#x51;',
		'i-pigpen-r': '&#x52;',
		'i-pigpen-s': '&#x53;',
		'i-pigpen-t': '&#x54;',
		'i-pigpen-u': '&#x55;',
		'i-pigpen-v': '&#x56;',
		'i-pigpen-w': '&#x57;',
		'i-pigpen-x': '&#x58;',
		'i-pigpen-y': '&#x59;',
		'i-pigpen-z': '&#x5a;',
		'i-braille_a': '&#x61;',
		'i-braille_b': '&#x62;',
		'i-braille_c': '&#x63;',
		'i-braille_d': '&#x64;',
		'i-braille_e': '&#x65;',
		'i-braille_f': '&#x66;',
		'i-braille_g': '&#x67;',
		'i-braille_h': '&#x68;',
		'i-braille_i': '&#x69;',
		'i-braille_j': '&#x6a;',
		'i-braille_k': '&#x6b;',
		'i-braille_l': '&#x6c;',
		'i-braille_m': '&#x6d;',
		'i-braille_n': '&#x6e;',
		'i-braille_o': '&#x6f;',
		'i-braille_p': '&#x70;',
		'i-braille_q': '&#x71;',
		'i-braille_r': '&#x72;',
		'i-braille_s': '&#x73;',
		'i-braille_t': '&#x74;',
		'i-braille_u': '&#x75;',
		'i-braille_v': '&#x76;',
		'i-braille_w': '&#x77;',
		'i-braille_x': '&#x78;',
		'i-braille_y': '&#x79;',
		'i-braille_z': '&#x7a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/i-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
