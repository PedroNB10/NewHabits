import * as Popover from '@radix-ui/react-popover';
import { ProgressBar } from './ProgressBar';
import clsx from 'clsx'
import dayjs from 'dayjs';
import { HabitsList } from './HabitsList';
import { useState } from 'react';

interface HabitDayProps {
    date: Date
    defaultCompleted?: number
    amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {

    const [completed, setCompleted] = useState(defaultCompleted)
    const completedPercentage = amount > 0 ? Math.round(completed / amount * 100) : 0

    const dayAndMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

    function handleCompletedChanged(completed: number){
       setCompleted(completed)
    }

    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx('w-10 h-10  border-2  rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:offset-2 focus:ring-offset-background', {
                    'bg-zinc-400 border-zinc-300': completedPercentage === 0,
                    'bg-blue-900 border-blue-700': completedPercentage > 0 && completedPercentage < 20,
                    'bg-blue-800 border-blue-600': completedPercentage >= 20 && completedPercentage < 40,
                    'bg-blue-700 border-blue-500': completedPercentage >= 40 && completedPercentage < 60,
                    'bg-blue-600 border-blue-500': completedPercentage >= 60 && completedPercentage < 80,
                    'bg-blue-500 border-blue-400': completedPercentage >= 80,

                })}

            />

            <Popover.Portal>
                <Popover.Content className='  min-w-[320px] w-full p-6 rounded-2xl bg-blue-700 flex flex-col'>
                    <span className=' font-extrabold text-white'>{dayOfWeek}</span>
                    <span className='mt-1 text-white font-extrabold leading-tight text-3xl'>{dayAndMonth}</span>

                    <ProgressBar progress={completedPercentage} />

                    <HabitsList date={date} onCompletedChanged={handleCompletedChanged}/>


                    <Popover.Arrow height={8} width={16} className='fill-blue-700' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>


    )
}