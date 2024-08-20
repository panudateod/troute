export type JobFieldType = {
  code: string
  label: JSX.Element
  comp: JSX.Element
}

export type JobType = {
  path: string
  fields: JobFieldType[]
}

export const jobFieldList: JobType[] = [
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

export const allFieldsList = jobFieldList.map((job) => job.fields).flat()

// export const jobFieldsMap = Object.fromEntries(
//   jobFieldsList.map((job) => [job.path, job]),
// )
