export const dayNameByDate = date => {
    const event = new Date(date);
    const options = { weekday: 'long' };
  
    return event.toLocaleDateString('en-us', options)
  }