/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
function result() {
    // write your code here
    const date = new Date();
    const day = date.getDay();
    const dayOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayOfWeekIndex = dayOfWeek.indexOf(dayOfWeek[day]);
    const dayOfWeekIndex4DaysAgo = dayOfWeekIndex - 4;
    const dayOfWeekIndex4DaysAgoName = dayOfWeek[dayOfWeekIndex4DaysAgo];
    return dayOfWeekIndex4DaysAgoName;
}

console.log(result());