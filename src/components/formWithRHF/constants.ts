
const ageOptions = [
    { label: '18-24', value: '18-24' },
    { label: '25-34', value: '25-34' },
    { label: '35-44', value: '35-44' },
    { label: '45-54', value: '45-54' },
    { label: '55-64', value: '55-64' },
    { label: '65+', value: '65+' }
] as const;

export type ageOptionsType = (typeof ageOptions[number])

type Age = typeof ageOptions[number]["value"]
// z.enum expects a non-empty array so to work around that
// we pull the first value out explicitly
const VALUES: [Age, ...Age[]] = [
  ageOptions[0].value,
  // And then merge in the remaining values from `ageOptions`
  ...ageOptions.slice(1).map((p) => p.value)
]

export {
    VALUES,
    ageOptions
}