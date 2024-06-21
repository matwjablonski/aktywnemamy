import Container from '../Container'
import { Logo } from '../Logo'
import { Wrapper } from './ui'

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <div className="border border-white py-2 px-4 text-white bg-kgw-secondary-light hover:opacity-80 transition-all">
            <a href="mailto:kgw.aktywne.mamy.dopiewiec@gmail.com">
              <span className="hidden md:inline-block">kgw.aktywne.mamy.dopiewiec@gmail.com</span>
              <span className="inline-block md:hidden">Napisz do nas</span>
            </a>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}
