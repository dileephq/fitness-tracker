import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('mounts App properly', () => {
    render(<App />)

    expect(
      screen.getAllByText(/Fitness Tracker/i).length,
    ).toBeGreaterThanOrEqual(2)
  })
})
