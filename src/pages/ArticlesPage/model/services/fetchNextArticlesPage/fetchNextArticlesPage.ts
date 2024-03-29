import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/fetchNextArticlesPage',
	async (props, thunkAPI) => {
		const {
			dispatch,
			getState,
		} = thunkAPI;
		const hasMore = getArticlesPageHasMore(getState());
		const isLoading = getArticlesPageIsLoading(getState());
		const page = getArticlesPageNum(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1));
			dispatch(fetchArticlesList({}));
		}
	},
);