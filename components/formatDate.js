
export function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }