import { utils } from './gameLogicHelper';

it('should calculate the sum of array numbers correctly', () => {
	expect(utils.sum([ 2, 3, 3, 5, 6, 6, 7 ])).toEqual(32);
});

it('should create an array of numbers between 1 and 9', () => {
	expect(utils.range(1, 9)).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]);
});

it('should pick a random number between 1 and 9', () => {
	const randomNumber = utils.random(1, 9);
	expect(randomNumber).toBeGreaterThan(0);
	expect(randomNumber).toBeLessThan(10);
});

it('should pick a random sum (< max) from the set of all available sums given', () => {
	const sums = [ 10, 12, 15, 2, 5 ],
		max = 9;
	const randomSum = utils.randomSumIn(sums, max);
	expect(randomSum === 2 || randomSum === 5).toBeTruthy();
});
