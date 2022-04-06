import {TID} from '../@types/np.types';

export function generateTID(): TID {
  let dt = new Date().getTime();
  // noinspection SpellCheckingInspection
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line:no-bitwise
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // tslint:disable-next-line:no-bitwise
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export function preventEvent($event?: MouseEvent, stopPropagation = true) {
  if (!$event) return;
  $event.preventDefault();
  if (stopPropagation) {
    $event.stopPropagation();
  }
}
/**
 * Returns an array with arrays of the given size.
 */
export function splitArray(arr: any[], chunk_size = Number.MAX_VALUE){
  const results = [];
  for (let i=0,j=arr.length; i<j; i+=chunk_size) {
    results.push(arr.slice(i,i+chunk_size));
  }
  return results;

}
