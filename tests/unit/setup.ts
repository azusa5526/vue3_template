import { vi } from 'vitest';
import '@/plugins/install-vee-validate';

globalThis.CSS.supports = vi.fn(() => false);
globalThis.cancelIdleCallback = vi.fn();
