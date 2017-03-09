
export default function needed(first, second) {
    console.log('needed'); return first + second;
};

export function unneeded1(third, fourth) {
    console.log('unneeded1'); return third * fourth;
};
export function unneeded2(fifth, sixth) {
    console.log('unneeded2'); return fifth / sixth;
};
