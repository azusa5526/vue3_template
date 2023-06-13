export function fakeArray<T extends (...args: any) => any>(generator: T, len: number = 3): ReturnType<T>[] {
	return new Array(len).fill(null).map(() => generator());
}
