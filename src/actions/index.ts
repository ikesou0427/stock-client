export const ADD_TEXT = 'ADD_TEXT';

export function doTest(text: string): object {
    return {
        type: ADD_TEXT,
        text: text
    };
}