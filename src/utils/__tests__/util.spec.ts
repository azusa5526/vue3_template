import { it, expect, describe } from 'vitest';
import { transfromISO8601ShortToDate } from '..';

describe('Utils test', () => {
	it('transfromISO8601ShortToDate() positive', () => {
		const result1 = transfromISO8601ShortToDate('20230324T123456') as Date;
		expect(result1).toBeInstanceOf(Date);
		expect(result1.valueOf()).eq(new Date('2023-03-24 12:34:56').valueOf());

		const result2 = transfromISO8601ShortToDate('20230324T123456+0800') as Date;
		expect(result2).toBeInstanceOf(Date);
		expect(result2.valueOf()).eq(new Date('2023-03-24 12:34:56+0800').valueOf());
	});

	it('transfromISO8601ShortToDate() negative', () => {
		expect(transfromISO8601ShortToDate('')).toBeFalsy();
		expect(transfromISO8601ShortToDate('2023')).toBeFalsy();
		expect(transfromISO8601ShortToDate('20230324123456')).toBeFalsy();
		expect(transfromISO8601ShortToDate('20230324123456+0800')).toBeFalsy();
		expect(transfromISO8601ShortToDate('abc')).toBeFalsy();
	});
});
