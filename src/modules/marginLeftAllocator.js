import marginAllocator from './marginAllocator';

const marginLeftAllocator = {
    process: quantity => { return { marginLeft: `${quantity}pt` }; },
    defaultQuantity: undefined,
    tabQuantity: undefined
};

marginLeftAllocator.defaultQuantity = marginLeftAllocator.process(marginAllocator.DEFAULT_SIZE);
marginLeftAllocator.tabQuantity = marginLeftAllocator.process(marginAllocator.TAB_SIZE);

export default marginLeftAllocator;