// Rates approved by the owner from https://lasermet.by/lazernaya-rezka-metalla/.
// Keep equipment limits separate from the thicknesses with published rates.
export const laserPrices = [
  {
    id: 'steel', name: 'Углеродистая сталь', limit: 'до 20 мм',
    rows: [['до 1', 0.7], ['1,5', 0.8], ['2', 1], ['3', 1.2], ['4', 2.1], ['5', 2.4], ['6', 2.6], ['8', 3], ['10', 3.5], ['12', 4.6], ['14', 6], ['16', 9.7], ['20', 20]],
  },
  {
    id: 'stainless', name: 'Нержавеющая сталь', limit: 'до 10 мм',
    rows: [['до 1', 0.9], ['1,5', 1], ['2', 1.5], ['3', 2], ['4', 2.4], ['5', 3.3], ['6', 4.6], ['8', 7.5], ['10', 12]],
  },
  {
    id: 'copper', name: 'Медь', limit: 'прайс до 3 мм',
    rows: [['до 1', 2.4], ['1,5', 3.8], ['2', 5], ['3', 8.6], ['свыше 3', null]],
  },
  {
    id: 'aluminium', name: 'Алюминий', limit: 'до 10 мм',
    rows: [['до 1', 0.9], ['1,5', 1], ['2', 1.5], ['3', 2], ['4', 2.4], ['5', 5], ['6', 7.5], ['8–10', null]],
  },
  {
    id: 'brass', name: 'Латунь', limit: 'прайс до 3 мм',
    rows: [['до 1', 2], ['1,5', 2.6], ['2', 3.5], ['3', 4], ['свыше 3', null]],
  },
] satisfies Array<{ id: string; name: string; limit: string; rows: Array<[string, number | null]> }>
