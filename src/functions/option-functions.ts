import { Option } from '../instances/Option';
import { ValidOptionValue } from '../types/ValidOptionValue';

export const prepareOptions = (options: any) => {
  if (!Array.isArray(options)) options = [];
  return [...options];
}

export const filterOptions = (options: Option[], query: string) => {
  if (query === '') return options;

  const q = query.toLowerCase();

  return options.filter((z: Option) => {
    return z.label.toLowerCase().indexOf(q) !== -1;
  });
}

export const findOptionByValue = (options: Option[], query: ValidOptionValue) => {
  if (!query) return undefined;

  return options.find((z: Option) => {
    return z.value === query;
  });
}

export const receiveOptions = (currentOptions: Option[], receivedOptions: Option[]) => {
  const set = new Set();
  const temp: Option[] = [...currentOptions, ...receivedOptions];
  const r: Option[] = [];
  temp.forEach(z => {
    let k = [z.value, z.label].join('-');
    if (!set.has(k)) {
      r.push(z);
      set.add(k);
    }
  })

  this.value = r;
}