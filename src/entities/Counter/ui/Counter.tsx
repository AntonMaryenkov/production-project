import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);
	console.log(counterValue);

	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div>
			<h1 data-testid='value-title'>{counterValue}</h1>
			<Button
				data-testid='increment-btn'
				onClick={increment}
			>
				{t('увеличить')}
			</Button>
			<Button
				data-testid='decrement-btn'
				onClick={decrement}
			>
				{t('уменьшить')}
			</Button>
		</div>
	);
};