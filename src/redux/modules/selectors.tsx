export const authSelector = (state: any): string => { console.log('auth-selector', state); return state.pingPong.token; };

export const testSelector = (state: any): number => { console.log('test-selector', state); return state.pingPong.test; };
