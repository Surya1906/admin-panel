/* eslint-disable react/jsx-key */
import styled from 'styled-components'
import { DashboardWidget1 } from '@/components'

const DashboardWidgetsRow1 = () => {
  const no_of_cards = [
    {
      id: 1,
      title: 'Total Revenues',
      value: '$2,129,430',
    },
    {
      id: 2,
      title: 'Total Transactions',
      value: '1,520',
    },
    {
      id: 3,
      title: 'Total Likes',
      value: '1,520',
    },
    {
      id: 4,
      title: 'Total Users',
      value: '892',
    },
  ]
  return (
    <div
      style={{
        paddingTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        gap: '36px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      {no_of_cards.map((item) => (
        <DashboardWidget1 item={item} />
      ))}
    </div>
  )
}

export default DashboardWidgetsRow1
