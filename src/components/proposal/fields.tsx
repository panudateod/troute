export const jobFieldsList = [
  {
    path: "screening",
    fields: [
      {
        code: "selectTOR",
        label: <>select TOR</>,
        comp: <>select TOR</>, // import from another file
      },
      {
        code: "screeningStatus",
        label: <>screening status</>,
        comp: <>screening status</>, // import from another file
      },
      {
        code: "screeningFile",
        label: <>screening file</>,
        comp: <>screening file</>, // import from another file
      },
    ],
  },
  {
    path: "assessment",
    fields: [
      {
        code: "assessmentStatus",
        label: <>assessment status</>,
        comp: <>assessment status</>, // import from another file
      },
      {
        code: "assessmentScore",
        label: <>assessment score</>,
        comp: <>assessment score</>, // import from another file
      },
    ],
  },
]

export const jobFieldsMap = Object.fromEntries(
  jobFieldsList.map((job) => [job.path, job]),
)

export const allFieldsList = jobFieldsList.map((job) => job.fields).flat()
