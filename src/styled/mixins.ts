

export const boxShadow = (
  size: number,
  inset = false
) => {
  return `
    ${inset ? 'inset' : ''} ${size}px ${size}px ${size * 2}px #223453,
    ${inset ? 'inset' : ''} -${size}px -${size}px ${size * 2}px #2e4671;
  `;
};
