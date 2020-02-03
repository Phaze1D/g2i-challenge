

export const boxShadow = (
  size: number,
  inset = false
) => {
  return `
    ${inset ? 'inset' : ''} ${size}px ${size}px ${size * 2}px #157072,
    ${inset ? 'inset' : ''} -${size}px -${size}px ${size * 2}px #1d989a;
  `;
};
