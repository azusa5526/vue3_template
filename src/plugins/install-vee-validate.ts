import { required, confirmed, max_value, min_value } from '@vee-validate/rules';
import { defineRule, configure } from 'vee-validate';
import { setLocale, localize } from '@vee-validate/i18n';
import tw from '@vee-validate/i18n/dist/locale/zh_TW.json';

defineRule('required', required);
defineRule('confirmed', confirmed);
defineRule('max_value', max_value);
defineRule('min_value', min_value);

localize({ tw });

configure({
	generateMessage: localize('tw', {
		names: {
			surname: '姓',
			firstname: '名',
			email: '信箱',
			password: '密碼',
			confirmedPassword: '驗證密碼',
			deviceId: '序號',
			displayName: '名稱',
			latitude: '緯度',
			longitude: '經度',
		},
	}),
});
setLocale('tw');
