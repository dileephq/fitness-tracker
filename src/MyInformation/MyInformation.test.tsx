import { describe, expect, vi, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { AppActions, AppState, PersonalInfo } from '../shared/reducter.ts'
import { Dispatch } from 'react'
import MyInformation from './MyInformation.tsx'

const initialState: AppState = {
  info: {} as PersonalInfo,
  meals: [],
  activities: [],
}
const mockDispatch: Dispatch<AppActions> = vi.fn()

describe('My Information component', () => {
  it('mounts component properly', () => {
    render(<MyInformation state={initialState} dispatch={mockDispatch} />)

    expect(
      screen.queryByText(/Your daily calorie requirement is/i),
    ).not.toBeInTheDocument()
    const heighInput = screen.getByLabelText(/Height/i)
    const weightInput = screen.getByLabelText(/Weight/i)
    const ageInput = screen.getByLabelText(/Age/i)
    const genderSelect = screen.getByLabelText(/Gender/i)
    const activityTypeSelect = screen.getByLabelText(/Activity Level/i)
    expect(heighInput).toBeInTheDocument()
    expect(weightInput).toBeInTheDocument()
    expect(ageInput).toBeInTheDocument()
    expect(genderSelect).toBeInTheDocument()
    expect(activityTypeSelect).toBeInTheDocument()
    expect(heighInput).toHaveValue(0)
    expect(weightInput).toHaveValue(0)
    expect(ageInput).toHaveValue(0)
    expect(genderSelect).toHaveValue('male')
    expect(activityTypeSelect).toHaveValue('sedentary')
    expect(
      screen.getByRole('heading', { name: /My Information/i }),
    ).toBeInTheDocument()
    const saveButton = screen.getByRole('button', { name: /Save/i })
    const cancelButton = screen.getByRole('button', { name: /Cancel/i })
    expect(saveButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })

  it('renders information correctly', () => {
    const state: AppState = {
      ...initialState,
      info: {
        height: 160,
        weight: 60,
        age: 56,
        gender: 'female',
        activityLevel: 'light',
      },
    }
    render(<MyInformation state={state} dispatch={mockDispatch} />)

    expect(
      screen.getByText(/Your daily calorie requirement is/i),
    ).toBeInTheDocument()
    const heighInput = screen.getByLabelText(/Height/i)
    const weightInput = screen.getByLabelText(/Weight/i)
    const ageInput = screen.getByLabelText(/Age/i)
    const genderSelect = screen.getByLabelText(/Gender/i)
    const activityTypeSelect = screen.getByLabelText(/Activity Level/i)
    expect(heighInput).toHaveValue(160)
    expect(weightInput).toHaveValue(60)
    expect(ageInput).toHaveValue(56)
    expect(genderSelect).toHaveValue('female')
    expect(activityTypeSelect).toHaveValue('light')
  })

  it('saves info correctly', async () => {
    const user = userEvent.setup()
    render(<MyInformation state={initialState} dispatch={mockDispatch} />)

    const heighInput = screen.getByLabelText(/Height/i)
    const weightInput = screen.getByLabelText(/Weight/i)
    const ageInput = screen.getByLabelText(/Age/i)
    const genderSelect = screen.getByLabelText(/Gender/i)
    const activityTypeSelect = screen.getByLabelText(/Activity Level/i)
    await user.type(heighInput, '165')
    await user.type(weightInput, '71')
    await user.type(ageInput, '47')
    await user.selectOptions(genderSelect, 'male')
    await user.selectOptions(activityTypeSelect, 'moderate')
    const saveButton = screen.getByRole('button', { name: /Save/i })
    await user.click(saveButton)
    expect(mockDispatch).toHaveBeenCalledOnce()

    const info: PersonalInfo = {
      height: 165,
      weight: 71,
      age: 47,
      gender: 'male',
      activityLevel: 'moderate',
    }

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'add-info',
      payload: { info },
    })
  })
})
