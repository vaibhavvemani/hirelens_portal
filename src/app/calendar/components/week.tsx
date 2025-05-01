import React from 'react'

interface WeekProps {
  range: [Date, Date];
}

const Week: React.FC<WeekProps> = ({ range }) => {
  return (
    <div>Week</div>
  )
}

export default Week