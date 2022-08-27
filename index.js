function addData(data) {
  // todo: Find a way to secure this.
  return { ...default_value, ...data };
}

function salaryStatus(salary, salary_received) {
  let half_of_salary = salary / 2;
  let is_salary_less_than_zero = salary_received <= 0;
  let is_salary_empty = salary_received === 0;

  if (is_salary_empty || is_salary_less_than_zero) {
    return [false, false, false, false];
  }

  let is_salary_not_half_paid = salary_received < half_of_salary;
  if (is_salary_not_half_paid) {
    return [true, false, false, false];
  }

  let is_salary_half_paid =
    (salary_received >= half_of_salary && salary_received <= half_of_salary) ||
    salary_received === half_of_salary;
  if (is_salary_half_paid) {
    return [true, true, false, false];
  }

  let is_salary_at_least_paid =
    salary >= salary_received && salary_received !== salary;
  if (is_salary_at_least_paid) {
    return [true, true, true, false];
  }

  let is_salary_fully_paid =
    salary <= salary_received || salary === salary_received;
  if (is_salary_fully_paid) {
    return [true, true, true, true];
  }

  return [false, false, false, false];
}

const default_value = {
  title: '',
  salary: 0,
  salary_received: 0,
  salary_status: [false, false, false, false],
  date: new Date(),
};

const finance_list = [];
const add_finance_data = addData({
  title: 'Work 1',
  salary: 2000,
});

// Push data to finance list array
finance_list.push(add_finance_data);

let received = 0;
finance_list.push(
  addData({
    title: 'Work 2',
    salary: 43000,
    salary_received: received,
    salary_status: salaryStatus(43000, received),
  })
);

console.log(finance_list);
