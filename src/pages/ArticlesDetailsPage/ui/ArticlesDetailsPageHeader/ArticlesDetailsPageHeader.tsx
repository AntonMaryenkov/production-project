import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesDetailsPageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { getArticleDetailsData } from 'entities/Article';
import { useSelector } from 'react-redux';
import { getCanEditArticle } from 'pages/ArticlesDetailsPage/model/selectors/article';

interface ArticlesDetailsPageHeaderProps {
	className?: string;
}

export const ArticlesDetailsPageHeader = memo((props: ArticlesDetailsPageHeaderProps) => {
	const {
		className,
	} = props;
	const { t } = useTranslation();
	const navigate = useNavigate();
	const article = useSelector(getArticleDetailsData);
	const canEdit = useSelector(getCanEditArticle);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.article_details}${article?.id}/edit`);
	}, [navigate, article]);

	return (
		<div className={classNames(cls.ArticlesDetailsPageHeader, {}, [className])}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
				{t('Назад к списку')}
			</Button>
			{canEdit && (
				<Button
					className={cls.editBtn}
					theme={ButtonTheme.OUTLINE}
					onClick={onEditArticle}
				>
					{t('Редактировать')}
				</Button>
			)}
		</div>
	);
});
