export const assignValueToBucket = (valueIndex, valueTitle, bucketKey) => {
	return {
		type: 'MOVE_VALUE',
		valueIndex,
		valueTitle,
		bucketKey
	};
};