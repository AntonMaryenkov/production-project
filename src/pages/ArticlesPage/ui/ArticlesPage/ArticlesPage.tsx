import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import { memo } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';

interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
	return (
		<div className={classNames(cls.ArticlesPage, {}, [className])}>
			<ArticleList
				isLoading
				view={ArticleView.BIG}
				articles={[]}
			/>
		</div>
	);
};

export default memo(ArticlesPage);