import request from './request';
import type { BasePromise } from './request';
import type { SetRequired } from 'type-fest';

export interface DashboardApp {
	id: number;
	name?: string;
	portalUrl?: string;
	description?: string;
	order: number;
	shouldOpenNewTab: boolean;
	isPublic: boolean;
	roleIds?: number[];
}

export function getDashboards(): BasePromise<{ totalCount: number; items: DashboardApp[] }> {
	return request({
		url: 'api/v1/service/DashboardApps',
		method: 'get',
	});
}

type DashboardAppData = SetRequired<Omit<DashboardApp, 'id'>, 'name' | 'portalUrl'>;

export function createDashboardApp(data: DashboardAppData) {
	return request({
		url: 'api/v1/service/DashboardApps',
		method: 'post',
		data,
	});
}

export function updateDashboardApp(id: number, data: DashboardAppData) {
	return request({
		url: `api/v1/service/DashboardApps/${id}`,
		method: 'put',
		data,
	});
}

export function deleteDashboardApp(id: number) {
	return request({
		url: `api/v1/service/DashboardApps/${id}`,
		method: 'delete',
	});
}
