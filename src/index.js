import _ from 'lodash';

export default () => {
  console.log(_.last(['one', 'two']));

  const func = (a) => a * 2;
  console.log(func(2));
};
