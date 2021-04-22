import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main/>', () => {
  it('should render Boilerplate Nextjs Title...', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: 'Boilerplate Nextjs' })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
