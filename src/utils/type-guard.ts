/// <reference types="google.maps" />
import type { AxiosError } from 'axios';
import { isAxiosError as _isAxiosError } from 'axios';
import { BaseError } from '@/api/request';

function isObject(val: unknown): val is object {
	if (val && typeof val === 'object') {
		return true;
	}
	return false;
}

export function isAxiosError<T = { error: BaseError }, D = any>(payload: any): payload is AxiosError<T, D> {
	return _isAxiosError<T, D>(payload);
}

export const guard = { isObject };
