import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // redenrizar componente
    const { container } = render(<Main />)
    // busca o elemento

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    // verifica a existencia dele

    //gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
