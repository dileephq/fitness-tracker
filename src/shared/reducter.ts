export type PersonalInfo = {
  height: number
  weight: number
  age: number
  gender: string
  activityLevel: string
}

export type Action = {
  name: string
  date: string
  calories: number
}

type SavePersonalInfoAction = {
  type: 'add-info'
  payload: {
    info: PersonalInfo
  }
}

type AddMealAction = {
  type: 'add-meal'
  payload: { meal: Action }
}

type AddActivityAction = {
  type: 'add-activity'
  payload: { activity: Action }
}

type ClearDataAction = {
  type: 'clear-data'
}

export type AppActions =
  | SavePersonalInfoAction
  | AddMealAction
  | AddActivityAction
  | ClearDataAction

export type AppState = {
  info: PersonalInfo
  meals: Action[]
  activities: Action[]
}

export const initialState: AppState = {
  info: {} as PersonalInfo,
  meals: [],
  activities: [],
}

const appReducer = (state: AppState = initialState, action: AppActions) => {
  if (action.type === 'add-info') {
    const { info } = action.payload
    return { ...state, info }
  }

  if (action.type === 'add-activity') {
    const { activity } = action.payload
    return { ...state, activities: [...state.activities, activity] }
  }

  if (action.type === 'add-meal') {
    const { meal } = action.payload
    return { ...state, meals: [...state.meals, meal] }
  }

  if (action.type === 'clear-data') {
    return initialState
  }

  return state
}

export default appReducer
