import { Dimensions, TouchableOpacity } from 'react-native'

const weekDays = 7
const screenHorizontal = (32 * 2) / 5

export const day_margin = 8
export const daySize = (Dimensions.get('screen').width / weekDays) - (screenHorizontal + 5)

export function HabitDay() {
  return (
    <TouchableOpacity 
    className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800'
    style={{ width: daySize, height: daySize}}
    activeOpacity={0.7}
      />
      
    
  )
}