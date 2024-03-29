import { ScrollView, Text, View } from "react-native"

import { generateRangeDatesFromYearStart } from '../utils/generate-range-between-dates'

import { daySize, HabitDay } from "../components/HabitDay"
import { Header } from "../components/Header"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSize = 10 * 5 
const amountOfDaysTofill = minimumSummaryDatesSize - datesFromYearStart.length;

export function Home () {
  return(
    <View className='flex-1 bg-background px-8 pt-16'>
    <Header />

    <View className="flex-row mt-6 mb-2">
      {
        weekDays.map((weekDay, i) => (
          <Text 
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl font-bold text-center mx-1"
            style={{ width: daySize }}
          >
            {weekDay}
          </Text>
        ))
      }
    </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View className='flex-row flex-wrap'>
        {
          datesFromYearStart.map(date => (
          <HabitDay key={date.toISOString()} />
          ))
        }

        {
          amountOfDaysTofill > 0 && Array
          .from({ length: amountOfDaysTofill })
          .map((_, index) => (
            <View 
              key={index}
              className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
              style={{ width: daySize, height: daySize }}
            />
          ))
        }
      </View>
    </ScrollView>

  </View>
)
} 