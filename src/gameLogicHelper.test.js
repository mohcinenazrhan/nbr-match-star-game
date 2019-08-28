import { utils } from './gameLogicHelper';

it('should calculate the sum of array numbers correctly', () => {
	expect(utils.sum([ 2, 3, 3, 5, 6, 6, 7 ])).toEqual(32);
});
