type PersonalInfo = {
  height: number
  weight: number
  age: number
  gender: string
  activityLevel: string
}

export type ActivityType = {
  name: 'string'
  date: string
  calories: number
}

// TODO remove one of the types
export type MealType = {
  name: string
  date: string
  calories: number
}

type SavePersonalInfoAction = {
  type: 'save-my-info'
  payload: {
    info: PersonalInfo
  }
}

type AddMealAction = {
  type: 'add-meal'
  payload: { meal: MealType }
}

type AddActivityAction = {
  type: 'add-activity'
  payload: { activity: ActivityType }
}

type AppActions = SavePersonalInfoAction | AddMealAction | AddActivityAction

type AppState = {
  info: PersonalInfo
  meals: MealType[]
  activities: ActivityType[]
}

export const initialState: AppState = {
  info: {} as PersonalInfo,
  meals: [],
  activities: [],
}

const appReducer = (state: AppState = initialState, action: AppActions) => {
  if (action.type === 'save-my-info') {
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

  return state
}

export default appReducer
