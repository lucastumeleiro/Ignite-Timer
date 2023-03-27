import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutosAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

import { Toast, ToastType } from '../../components/Toast'
import { useEffect, useRef } from 'react'

const InitialValues = {
  task: '',
  minutesAmount: 0,
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ser no mínimo 05 minutos')
    .max(60, 'O ciclo deve ser no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: { ...InitialValues },
    })

  const task = watch('task')
  const isSubmitDisabled = !task
  const hasErrorsInForm = useRef(false)

  useEffect(() => {
    if (hasErrorsInForm) {
      const errorForm = Object.values(formState.errors)
      let errorMessage = ''

      if (errorForm.length > 0) {
        errorMessage = String(errorForm[0]?.message)
        Toast(errorMessage, ToastType.ERROR)
      }
      hasErrorsInForm.current = false
    }
  }, [formState.errors, hasErrorsInForm])

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  function FormErrors() {
    hasErrorsInForm.current = true
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle, FormErrors)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="1" />
            <option value="2" />
            <option value="3" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutosAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

export { Home }
