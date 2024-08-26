import { Button, FileInput, Input, Select } from "@mantine/core"
import { Link } from "@tanstack/react-router"
import { ProposalItemFieldCode, ProposalItemFieldType } from "../types"

export const definationFields: ProposalItemFieldType[] = [
  {
    code: "tor",
    label: <>TOR</>,
    comp: () => (
      <>
        <Select></Select>
      </>
    ), // import from another file
  },
  {
    code: "screeningStatus",
    label: <>การพิจารณา</>,
    comp: () => (
      <>
        <Select></Select>
      </>
    ), // import from another file
  },
  {
    // TODO: enable by TOR settings
    code: "screeningDataAttachment",
    label: <>เอกสารคัดกรอง</>,
    comp: () => (
      <>
        <FileInput />
      </>
    ), // import from another file
    inActive: true,
  },
  {
    code: "assessmentStatus",
    label: <>การกลั่นกรอง</>,
    comp: () => (
      <>
        <Select></Select>
      </>
    ), // import from another file
  },
  {
    // TODO: enable by TOR settings
    code: "assessmentScore",
    label: <>คะแนน</>,
    comp: () => (
      <>
        <Input />
      </>
    ), // import from another file
    inActive: true,
  },
  {
    code: "assessmentDataAttachment",
    label: <>ไฟล์ความเห็นจากผู้ทรงฯ</>,
    comp: () => (
      <>
        <FileInput />
      </>
    ), // import from another file
  },
  {
    code: "assessmentDataSugesstion",
    label: <>สรุปความเห็น</>,
    comp: () => (
      <>
        <Button>กด/พิมพ์/บันทึก</Button>
      </>
    ), // import from another file
  },
  {
    code: "contentStatus",
    label: <>สถานะงาน</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          รอตรวจสอบ
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "financeStatus",
    label: <>สถานะเงิน</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          รอตรวจสอบ
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "contractStatus",
    label: <>สถานะเอกสาร</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          รอตรวจสอบ
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "contractDuration",
    label: <>ระยะเวลาโครงการ</>,
    comp: () => (
      <>
        <div>
          <strong>12 เดือน</strong>
        </div>
        <div>2 ก.ย. 2564 - 2 ก.พ. 2565</div>
      </>
    ), // import from another file
  },
  {
    code: "budget",
    label: <>งบประมาณ (บาท)</>,
    comp: () => <>12,000,000</>, // import from another file
  },
  {
    code: "paymentTerm",
    label: <>งวดงาน/งวดเงิน</>,
    comp: () => (
      <>
        <Button>กำหนดงวด</Button>
      </>
    ), // import from another file
  },
  {
    code: "contractCodeApproval",
    label: <>ออกเลขสัญญา/ส่งขออนุมัติ</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          ออกเลขสัญญา
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "directorApproval",
    label: <>ผอ.สำนัก</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          พิจารณา
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "secretaryApproval",
    label: <>เลขานุการ ผู้บริหาร</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          พิจารณา
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "executiveApproval",
    label: <>ผู้บริหาร/ผู้จัดการ</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          พิจารณา
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "myApproval",
    label: <>การอนุมัติของฉัน</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          พิจารณา เห็นชอบ/อนุมัติ
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "contractGenerate",
    label: <>ส่งสัญญาให้ภาคีลงนาม</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          ดาวน์โหลดสัญญา
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "contractDocument",
    label: <>สัญญาลงนามแล้ว</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          แนบสัญญาตัวจริง
        </Button>
      </>
    ), // import from another file
  },
  {
    code: "bankAccount",
    label: <>จดหมายเปิดบัญชี/สมุดบัญชี</>,
    comp: () => (
      <>
        <Button component={Link} to={"#"}>
          จดหมายฯ
        </Button>
      </>
    ), // import from another file
  },
]

export const definationFieldsMap = Object.fromEntries(
  definationFields.map((field) => [field.code, field]),
) as Record<ProposalItemFieldCode, ProposalItemFieldType>
