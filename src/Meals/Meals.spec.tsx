import { describe, expect, vi, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import Meals from './Meals.tsx'
import {
  Action,
  AppActions,
  AppState,
  PersonalInfo,
} from '../shared/reducter.ts'
import { Dispatch } from 'react'

const initialState: AppState = {
  info: {} as PersonalInfo,
  meals: [],
  activities: [],
}
const mockDispatch: Dispatch<AppActions> = vi.fn()
describe('<Meals />', () => {
  it('mounts component properly', () => {
    render(<Meals state={initialState} dispatch={mockDispatch} />)

    const nameInput = screen.getByLabelText(/Name/i)
    const caloriesInput = screen.getByLabelText(/Calories/i)
    expect(nameInput).toBeInTheDocument()
    expect(caloriesInput).toBeInTheDocument()
    expect(nameInput).toHaveValue('')
    expect(caloriesInput).toHaveValue(0)

    expect(
      screen.getByRole('heading', { name: /Add Meal/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Meal Logs/i }),
    ).toBeInTheDocument()

    const saveButton = screen.getByRole('button', { name: /Save/i })
    const cancelButton = screen.getByRole('button', { name: /Cancel/i })
    expect(saveButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })

  it('adds a new meal', async () => {
    const user = userEvent.setup()
    render(<Meals state={initialState} dispatch={mockDispatch} />)

    const nameInput = screen.getByLabelText(/Name/i)
    const caloriesInput = screen.getByLabelText(/Calories/i)
    await user.type(nameInput, 'Breakfast')
    await user.type(caloriesInput, '200')

    const saveButton = screen.getByRole('button', { name: /Save/i })
    await user.click(saveButton)
    expect(mockDispatch).toHaveBeenCalledOnce()

    const date = new Date().toLocaleString()
    const meal: Action = {
      calories: 200,
      date,
      name: 'Breakfast',
    }
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'add-meal',
      payload: { meal },
    })
  })

  it('renders Meals correctly', () => {
    const state: AppState = {
      ...initialState,
      meals: [
        { name: 'Breakfast', date: '09/02/2024, 08:27:56', calories: 300 },
        { name: 'Lunch', date: '19/02/2023, 09:16:56', calories: 500 },
      ],
    }
    render(<Meals state={state} dispatch={mockDispatch} />)

    expect(
      screen.getByRole('heading', { name: /Meal Logs/i }),
    ).toBeInTheDocument()

    const tableRows = screen.getAllByRole('row')
    expect(tableRows.length).toBe(3)

    expect(screen.getByText(/Breakfast/i)).toBeInTheDocument()
    expect(screen.getByText(/Lunch/i)).toBeInTheDocument()
    expect(screen.getByText('09/02/2024, 08:27:56')).toBeInTheDocument()
    expect(screen.getByText('19/02/2023, 09:16:56')).toBeInTheDocument()
    expect(screen.getByText(/300/i)).toBeInTheDocument()
    expect(screen.getByText(/500/i)).toBeInTheDocument()
  })
})
