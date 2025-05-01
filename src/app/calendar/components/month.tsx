import React from 'react'

interface MonthProps {
  range: [Date, Date];
}

const Month: React.FC<MonthProps> = ({ range }) => {
  return (
    <div>Month</div>
  )
}

export default Month