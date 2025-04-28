
export default function formatDueDate(date: Date): string {
    const today = new Date();
    
    // Clear time part for clean comparison
    today.setHours(0, 0, 0, 0);
    const givenDate = new Date(date);
    givenDate.setHours(0, 0, 0, 0);
  
    // Calculate difference in days
    const diffInMs = givenDate.getTime() - today.getTime();
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24)); // milliseconds -> days
  
    if (Math.abs(diffInDays) <= 30) {
      if (diffInDays > 0) {
        return `in ${diffInDays} days`;
      } else if (diffInDays < 0) {
        return `${Math.abs(diffInDays)} days ago`;
      } else {
        return "today";
      }
    }
  
    // Else, format the full date
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    const dayOfMonth = givenDate.getDate();
    const monthName = months[givenDate.getMonth()];
    const year = givenDate.getFullYear();
    const dayName = days[givenDate.getDay()];
  
    // Add ordinal suffix (st, nd, rd, th)
    const getOrdinal = (n: number) => {
      if (n % 10 === 1 && n % 100 !== 11) return `${n}st`;
      if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`;
      if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`;
      return `${n}th`;
    };
  
    return `${monthName} ${getOrdinal(dayOfMonth)} ${year}, ${dayName}`;
  }
  
  