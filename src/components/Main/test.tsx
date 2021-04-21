import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render something...', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /Nextjs S2.../i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
