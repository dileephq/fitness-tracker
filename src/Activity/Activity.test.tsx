import { describe, expect, vi, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { getByText, render, screen } from '@testing-library/react'
import {
  Action,
  AppActions,
  AppState,
  PersonalInfo,
} from '../shared/reducter.ts'
import { Dispatch } from 'react'
import Activity from './Activity.tsx'

const initialState: AppState = {
  info: {} as PersonalInfo,
  meals: [],
  activities: [],
}
const mockDispatch: Dispatch<AppActions> = vi.fn()

describe('Activity component', () => {
  it('mounts component properly', () => {
    render(<Activity state={initialState} dispatch={mockDispatch} />)

    const activityTypeSelect = screen.getByLabelText(/Activity Type/i)
    const timeInput = screen.getByLabelText(/Time/i)
    expect(activityTypeSelect).toBeInTheDocument()
    expect(timeInput).toBeInTheDocument()
    expect(activityTypeSelect).toHaveValue('Running')
    expect(timeInput).toHaveValue(0)
    expect(
      screen.getByRole('heading', { name: /Add Activity/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { name: /Activity Logs/i }),
    ).not.toBeInTheDocument()
    const saveButton = screen.getByRole('button', { name: /Save/i })
    const cancelButton = screen.getByRole('button', { name: /Cancel/i })
    expect(saveButton).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
  })

  it('renders Activities correctly', () => {
    const state: AppState = {
      ...initialState,
      activities: [
        { name: 'Running', date: '09/02/2024, 08:27:56', calories: 300 },
        { name: 'Swimming', date: '19/02/2023, 09:16:56', calories: 500 },
        { name: 'Walking', date: '21/01/2023, 17:27:34', calories: 150 },
      ],
    }
    render(<Activity state={state} dispatch={mockDispatch} />)

    expect(
      screen.getByRole('heading', { name: /Add Activity/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Activity Logs/i }),
    ).toBeInTheDocument()

    const tableRows = screen.getAllByRole('row')
    expect(tableRows.length).toBe(4)

    const main = screen.getByRole('table')
    expect(getByText(main, /Running/i)).toBeInTheDocument()
    expect(getByText(main, /Swimming/i)).toBeInTheDocument()
    expect(getByText(main, /Walking/i)).toBeInTheDocument()
    expect(screen.getByText('09/02/2024, 08:27:56')).toBeInTheDocument()
    expect(screen.getByText('19/02/2023, 09:16:56')).toBeInTheDocument()
    expect(screen.getByText('21/01/2023, 17:27:34')).toBeInTheDocument()
    expect(screen.getByText(/300/i)).toBeInTheDocument()
    expect(screen.getByText(/150/i)).toBeInTheDocument()
    expect(screen.getByText(/500/i)).toBeInTheDocument()
  })

  it('adds a new activity', async () => {
    const user = userEvent.setup()
    render(<Activity state={initialState} dispatch={mockDispatch} />)

    const activityTypeSelect = screen.getByLabelText(/Activity Type/i)
    const timeInput = screen.getByLabelText(/Time/i)
    await user.selectOptions(activityTypeSelect, 'Walking')
    await user.type(timeInput, '20')

    const saveButton = screen.getByRole('button', { name: /Save/i })
    await user.click(saveButton)
    expect(mockDispatch).toHaveBeenCalledOnce()

    const date = new Date().toLocaleString()
    const activity: Action = {
      calories: -10 * 20,
      date,
      name: 'Walking',
    }
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'add-activity',
      payload: { activity },
    })
  })
})
