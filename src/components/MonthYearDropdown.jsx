function MonthYearDropDown({ selectedMonth, selectedYear, onChange }) {
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
    years.push(String(currentYear - i));
  }

  return (
    <>
      <div>
        <label htmlFor='month'>Month</label>
        <select
          name='month'
          id='month'
          data-key='month'
          onChange={onChange}
        >
          {months.map((month) => {
            if (month === selectedMonth) {
              return (
                <option key={month} value={month} selected>
                  {month}
                </option>
              );
            } else {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div>
        <label htmlFor='year'>Year</label>
        <select name='year' id='year' data-key='year' onChange={onChange}>
          {years.map((year) => {
            if (year === selectedYear) {
              return (
                <option key={year} value={year} selected>
                  {year}
                </option>
              );
            } else {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            }
          })}
        </select>
      </div>
    </>
  );
}

export default MonthYearDropDown;
