function MonthYearDropDown() {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let years = [];
  for (let i = 0; i < 100; i++) {
    years.push(currentYear - i);
  }

  return (
    <>
      <div>
        <label htmlFor="month">Month</label>
        <select name="month" id="month">
          {months.map((month) => {
            return (
              <option key={month} value={month}>{month}</option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="year">Year</label>
        <select name="year" id="year">
          {years.map((year) => {
            return (
              <option key={year} value={year}>{year}</option>
            );
          })}
        </select>
      </div>
    </>
  );
}

export default MonthYearDropDown;
