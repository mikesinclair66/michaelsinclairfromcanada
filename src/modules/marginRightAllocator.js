import marginAllocator from './marginAllocator';

const marginRightAllocator = {
    process: quantity => { return { marginRight: `${quantity}pt` }; },
    defaultQuantity: undefined,
    tabQuantity: undefined
};

marginRightAllocator.defaultQuantity = marginRightAllocator.process(marginAllocator.DEFAULT_SIZE);
marginRightAllocator.tabQuantity = marginRightAllocator.process(marginAllocator.TAB_SIZE);

export default marginRightAllocator;