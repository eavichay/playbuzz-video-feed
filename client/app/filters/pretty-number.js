export default () => {
  return (num) => {
    const sign = [
      {
        value: 1E6,
        symbol: 'M'
      },
      {
        value: 1E3,
        symbol: 'k'
      }
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    for (let i = 0; i < sign.length; i++) {
      if (num >= sign[i].value) {
        return (num / sign[i].value).toFixed(2).replace(rx, '$1') + sign[i].symbol;
      }
    }
    return num.toFixed(digits).replace(rx, '$1');
  }
}
