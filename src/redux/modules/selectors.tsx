export const authSelector = (state: any): string => state.pingPong.token;
export const testSelector = (state: any): number => state.pingPong.test;
export const actionMapFirstSelector = (state: any): number => state.pingPong.actionMapFirst;
export const actionMapSecondSelector = (state: any): number => state.pingPong.actionMapSecond;
