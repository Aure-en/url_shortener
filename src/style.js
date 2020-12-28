export const colors = {
  cyan: 'hsl(180, 66%, 49%)',
  lightCyan: 'hsl(179, 55%, 75%)',
  violet: 'hsl(257, 27%, 26%)',
  red: 'hsl(0, 87%, 67%)',
  gray: 'hsl(0, 0%, 75%)',
  grayViolet: 'hsl(257, 7%, 63%)',
  blue: 'hsl(255, 11%, 22%)',
  darkViolet: 'hsl(260, 8%, 14%)',
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
  background: 'hsl(225, 33%, 95%)',
}

export const button = `
  background: ${colors.cyan};
  padding: .5rem 1rem;
  color: ${colors.white};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: ${colors.lightCyan};
    color: ${colors.white};
  }
`