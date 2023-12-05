import {add,subtract} from './Jest';
test('adds two numbers',()=>{
    expect(add(1,2)).toBe(3);
    expect(add(-1,1)).toBe(0);
});
test('subtracts two numbers',()=>{
    expect(subtract(3,2)).toBe(1);
    expect(subtract(-1,1)).toBe(-2);
});
