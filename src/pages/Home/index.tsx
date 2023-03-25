import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

function Home() {
  return (
    <HomeContainer>
      <form action="" id="formCountDown">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </FormContainer>
      </form>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <button type="submit" form="formCountDown">
        <Play size={24} />
        Começar
      </button>
    </HomeContainer>
  )
}

export { Home }
