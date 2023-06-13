import { onBeforeUnmount } from 'vue';

export function useTimeout(callback: Function, ms: number, ...args: any[]) {
	const id = window.setTimeout(callback, ms, ...args);
	onBeforeUnmount(() => {
		window.clearTimeout(id);
	});
}

function parseISO8601Short(str: string) {
	const r = /(\d\d\d\d)(\d\d)(\d\d)T(\d\d)(\d\d)(\d\d)(?:([+-])(\d\d\d\d))?/.exec(str);
	if (r) {
		const o = {
			YY: r[1],
			MM: r[2],
			DD: r[3],
			hh: r[4],
			mm: r[5],
			ss: r[6],
			tz: r[7] as string | undefined,
			zz: r[8] as string | undefined,
		};
		return o;
	}
	return null;
}

export function transfromISO8601ShortToDate(str: string) {
	const r = parseISO8601Short(str);
	if (!r) {
		return false;
	}
	const timezone = r.tz && r.zz ? `${r.tz}${r.zz}` : '';
	return new Date(`${r.YY}-${r.MM}-${r.DD}T${r.hh}:${r.mm}:${r.ss}${timezone}`);
}

export function haveIllegalWord(str: string): boolean {
	return /[\\\/\:\*\?\"\<\>\|]/.test(str);
}

export function waitForTimeout(ms: number) {
	return new Promise((resolve) => {
		window.setTimeout(resolve, ms);
	});
}
