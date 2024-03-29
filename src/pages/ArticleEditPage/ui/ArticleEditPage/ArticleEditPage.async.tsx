import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
