import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/link-about.svg';
import MainIcon from 'shared/assets/icons/link-main.svg';
import ProfileIcon from 'shared/assets/icons/link-profile.svg';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		Icon: MainIcon,
		text: 'Главная'
	},
	{
		path: RoutePath.about,
		Icon: AboutIcon,
		text: 'О сайте'
	},
	{
		path: RoutePath.profile,
		Icon: ProfileIcon,
		text: 'Профиль'
	},
];