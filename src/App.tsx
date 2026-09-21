import { useState, useRef, useEffect } from 'react'
import svgReadOnly from '@/imports/ReadOnlyPanel/svg-niuvmcibvu'
import svgNav from '@/imports/ProtectionNavigation/svg-7s6r3c724e'

// ─── Cover type groups ────────────────────────────────────────────────────────

const LIFE_TYPES_CORE = [
  'Life insurance',
  'Critical illness',
  'Life and critical illness',
  'Serious Illness',
]
const LIFE_TYPES_FIB = [
  'Family income benefit life cover',
  'Family income benefit life cover & CIC',
  'Family income benefit life cover & SIC',
  'Family income benefit SIC',
]
const LIFE_TYPES_ENDOWMENT = [
  'Endowment',
  'Endowment with critical illness',
]
const LIFE_TYPES_WOL = [
  'Whole of Life (WOL)',
  'WOL + Serious Illness',
]
const LIFE_TYPES = [...LIFE_TYPES_CORE, ...LIFE_TYPES_FIB, ...LIFE_TYPES_ENDOWMENT, ...LIFE_TYPES_WOL]
const IP_TYPES = ['Income Protection', 'Low Cost Income Protection']
const BUSINESS_TYPES = ['Relevant Life', 'Business Cover']
const HEALTH_TYPES = ['Private Health Insurance']
const STU_TYPES = [
  'Accident, Sickness & Unemployment',
  'Accident & Sickness',
  'Unemployment',
  'Mortgage Payment Protection Insurance (MPPI)',
  'Lifestyle Accident, Sickness & Unemployment',
  'Lifestyle Accident & Sickness / Unemployment',
  'Lifestyle Unemployment',
]

type CoverGroup = 'life' | 'income' | 'business' | 'health' | 'stu' | null

function getCoverGroup(ct: string): CoverGroup {
  if (LIFE_TYPES.includes(ct)) return 'life'
  if (IP_TYPES.includes(ct)) return 'income'
  if (BUSINESS_TYPES.includes(ct)) return 'business'
  if (HEALTH_TYPES.includes(ct)) return 'health'
  if (STU_TYPES.includes(ct)) return 'stu'
  return null
}

// ─── Constants ────────────────────────────────────────────────────────────────

const PROVIDERS_LIFE = [
  'Aegon', 'AIG Life', 'Aviva', 'AXA', 'Canada Life', 'Guardian',
  'Legal & General', 'LV=', 'MetLife', 'Prudential', 'Royal London',
  'Scottish Widows', 'Standard Life', 'The Exeter', 'Unum', 'Vitality', 'Zurich',
]

const PROVIDERS_INCOME = [
  'Aviva', 'British Friendly', 'Cirencester Friendly', 'Exeter Family Friendly',
  'Holloway Friendly', 'Legal & General', 'LV=', 'National Friendly',
  'One Family', 'Royal London', 'Shepherds Friendly', 'The Exeter',
  'Unum', 'Vitality', 'Zurich',
]

const PROVIDERS_BUSINESS = [
  'Aegon', 'AIG Life', 'Aviva', 'AXA', 'Canada Life', 'Guardian',
  'Legal & General', 'LV=', 'Prudential', 'Royal London',
  'Scottish Widows', 'Standard Life', 'Unum', 'Vitality', 'Zurich',
]

const PROVIDERS_HEALTH = [
  'AXA Health', 'Benenden Health', 'Bupa', 'CS Healthcare',
  'Exeter Family Friendly', 'Freedom Health', 'Healix', 'Simplyhealth',
  'The Exeter', 'Vitality Health', 'WPA',
]

const PROVIDERS_STU = [
  'Aviva', 'British Friendly', 'Cirencester Friendly', 'LV=',
  'Royal London', 'Unum', 'Vitality', 'Zurich',
]

function providersByGroup(group: CoverGroup): string[] {
  if (group === 'income') return PROVIDERS_INCOME
  if (group === 'business') return PROVIDERS_BUSINESS
  if (group === 'health') return PROVIDERS_HEALTH
  if (group === 'stu') return PROVIDERS_STU
  return PROVIDERS_LIFE
}

const POLICY_RELATES_TO_STU = [
  { value: 'protecting_income', label: 'Protecting your income' },
  { value: 'protecting_unemployment', label: 'Protecting your income in the event of unemployment' },
  { value: 'protecting_accident_sickness', label: 'Protecting your income in the event of accident or sickness' },
  { value: 'protecting_asu', label: 'Protecting your income in the event of accident, sickness or unemployment' },
  { value: 'other', label: 'Other' },
  { value: 'not_sure', label: 'Not sure' },
]

const TERM_TYPES = ['Level', 'Decreasing', 'Increasing']

const DEFERMENT_PERIODS = ['4 weeks', '8 weeks', '13 weeks', '26 weeks', '52 weeks', 'Other', 'Not sure']

const PHI_COVER_TYPES = ['Individual', 'Family', 'Group / Corporate']

const WHEN_PAYS_LIFE = [
  { value: 'client1', label: 'Client 1 Event', hint: "Pays out on Client 1's death or a qualifying critical illness or serious illness claim" },
  { value: 'client2', label: 'Client 2 Event', hint: "Pays out on Client 2's death or a qualifying critical illness or serious illness claim" },
  { value: 'joint', label: 'Joint Life', hint: 'Pays out on the first death or qualifying claim between both clients — whichever occurs first' },
  { value: 'other', label: 'Other', hint: 'A different trigger applies — describe this in Additional Benefits below' },
]

const WHEN_PAYS_BUSINESS = [
  { value: 'client1', label: 'Client 1 Event', hint: "Pays out on the insured person's death or a qualifying critical illness claim" },
  { value: 'client2', label: 'Client 2 Event', hint: "Pays out on the second insured person's death or qualifying claim" },
  { value: 'joint', label: 'Joint Life', hint: 'Pays out on the first death or qualifying claim between both insured persons' },
  { value: 'other', label: 'Other', hint: 'A different trigger applies — describe this in Additional Benefits below' },
]

const WHEN_PAYS_RELEVANT_LIFE = [
  { value: 'client1', label: 'Client 1 Event', hint: "Pays out on the insured employee's death in service" },
  { value: 'other', label: 'Other', hint: 'A different trigger applies — describe this in Additional Benefits below' },
]

const POLICY_RELATES_TO_INCOME = [
  { value: 'income_replacement', label: 'Income replacement' },
  { value: 'mortgage_rent', label: 'Mortgage or rent payments' },
  { value: 'household_bills', label: 'Household bills / family support' },
  { value: 'business_ip', label: 'Business income protection' },
  { value: 'loan_finance', label: 'Loan or finance commitment' },
  { value: 'personal_protection', label: 'Personal protection' },
  { value: 'something_else', label: 'Something else' },
  { value: 'not_sure', label: 'Not sure' },
]

const POLICY_RELATES_TO_BASE = [
  { value: 'mortgage', label: 'Mortgage' },
  { value: 'family', label: 'Family or dependants' },
  { value: 'business', label: 'Business' },
  { value: 'individual', label: 'Individual / personal protection' },
  { value: 'other_loan', label: 'Other loan or finance arrangement' },
  { value: 'something_else', label: 'Something else' },
  { value: 'not_sure', label: 'Not sure' },
]
const POLICY_RELATES_TO_WOL = [
  { value: 'mortgage', label: 'Mortgage' },
  { value: 'family', label: 'Family or dependants' },
  { value: 'business', label: 'Business' },
  { value: 'individual', label: 'Individual / personal protection' },
  { value: 'other_loan', label: 'Other loan or finance arrangement' },
  { value: 'inheritance_tax', label: 'Inheritance tax planning' },
  { value: 'funeral_costs', label: 'Funeral costs' },
  { value: 'something_else', label: 'Something else' },
  { value: 'not_sure', label: 'Not sure' },
]

const POLICY_RELATES_TO_BUSINESS = [
  { value: 'business_lending', label: 'Business lending' },
  { value: 'ownership_planning', label: 'Ownership planning' },
  { value: 'loss_of_key_persons', label: 'Loss of key persons' },
  { value: 'employee_benefits', label: 'Employee benefits' },
  { value: 'something_else', label: 'Other' },
]

const BENEFICIARIES = ['Client 1', 'Client 2', 'Child 1', 'Child 2', 'Child 3', 'Other']
const CLIENTS_LIST = ['Client 1', 'Client 2']

const FIB_TYPES = new Set([
  'Family income benefit life cover', 'Family income benefit life cover & CIC',
  'Family income benefit life cover & SIC', 'Family income benefit SIC',
])
const COMBINED_TYPES = new Set([
  'Life and critical illness', 'Endowment with critical illness', 'WOL + Serious Illness',
  'Family income benefit life cover & CIC', 'Family income benefit life cover & SIC',
])

function hasMonthlyBenefit(ct: string) {
  return FIB_TYPES.has(ct)
}

const WOL_TYPES = new Set(['Whole of Life (WOL)', 'WOL + Serious Illness'])


// ─── Shared UI Components ─────────────────────────────────────────────────────

const labelCls = 'font-poppins font-semibold text-[16px] leading-[1.2] text-[#231F20]'
const optionalCls = 'font-montserrat font-normal text-[12px] leading-[1.3] text-[#67686b] ml-[7px]'
const inputCls = 'w-full bg-white border border-[#67686b] rounded-[6px] px-[15px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#757575] outline-none focus:border-[#231F20] transition-colors'
const hintCls = 'font-lato text-[13px] text-[#67686b] mt-[4px]'

function FieldLabel({ label, optional, required, htmlFor }: {
  label: string; optional?: boolean; required?: boolean; htmlFor?: string
}) {
  return (
    <label htmlFor={htmlFor} className="flex items-baseline gap-0">
      {required && <span className="text-[#C61310] text-[14px] font-semibold mr-[4px] leading-none" aria-hidden>*</span>}
      <span className={labelCls}>{label}</span>
      {optional && <span className={optionalCls}>Optional</span>}
    </label>
  )
}

function FieldWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex flex-col gap-[6px] ${className}`}>{children}</div>
}

function ConditionalBlock({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`grid gap-x-px gap-y-[20px] ${className}`} style={{ gridTemplateColumns: '10px 1fr' }}>
      <div className="row-[1/-1] self-stretch pr-[20px]">
        <div className="bg-[#c2c3c4] h-full w-[5px]" />
      </div>
      <div className="flex flex-col gap-[20px] px-[16px]">
        {children}
      </div>
    </div>
  )
}

function TextInput({ id, value, onChange, placeholder = '', type = 'text' }: {
  id?: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string
}) {
  return (
    <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} className={inputCls} />
  )
}

function CurrencyInput({ id, value, onChange, placeholder = '0.00' }: {
  id?: string; value: string; onChange: (v: string) => void; placeholder?: string
}) {
  return (
    <div className="bg-white rounded-[6px] w-full flex items-stretch border border-[#67686b] overflow-hidden focus-within:border-[#231F20] transition-colors">
      <div className="bg-[#f0f0f0] flex items-center justify-center px-[8px] shrink-0">
        <div style={{ width: 14, height: 20 }}>
          <svg className="block size-full" fill="none" viewBox="-0.5 -0.5 15.13 19.83" preserveAspectRatio="none">
            <path d="M0.415 9.8063H12.1541M13.7162 4.71935C13.7162 3.57776 13.2627 2.48294 12.4555 1.67571C11.6483 0.868493 10.5535 0.415 9.41187 0.415C8.27028 0.415 7.17545 0.868493 6.36823 1.67571C5.56101 2.48294 5.10752 3.57776 5.10752 4.71935V14.502C5.10752 15.0158 5.00631 15.5247 4.80966 15.9994C4.61301 16.4742 4.32477 16.9055 3.96141 17.2689C3.59806 17.6323 3.16668 17.9205 2.69193 18.1171C2.21718 18.3138 1.70834 18.415 1.19448 18.415H13.7162" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
          </svg>
        </div>
      </div>
      <div className="w-px bg-[#c2c3c4] self-stretch shrink-0" />
      <input
        id={id}
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ''))}
        placeholder={placeholder}
        className="flex-1 min-w-0 px-[15px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#757575] outline-none bg-transparent"
      />
    </div>
  )
}

function Textarea({ id, value, onChange, placeholder = '', rows = 3 }: {
  id?: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number
}) {
  return (
    <textarea id={id} value={value} onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder} rows={rows} className={`${inputCls} resize-y`} />
  )
}

function SelectInput({ id, value, onChange, options, placeholder = 'Please select…' }: {
  id?: string; value: string; onChange: (v: string) => void
  options: { value: string; label: string }[]; placeholder?: string
}) {
  return (
    <div className="relative">
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none cursor-pointer pr-[40px]`}
        style={{ color: value ? '#231F20' : '#757575' }}>
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ color: '#231F20' }}>{o.label}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function RadioCircle({ selected }: { selected: boolean }) {
  if (selected) {
    return (
      <div className="shrink-0 w-[15px] h-[15px] mt-[2px]">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="6.5" fill="white" stroke="#231F20" strokeWidth="2" />
          <circle cx="7.5" cy="7.5" r="2.5" fill="#F26A2C" stroke="#F26A2C" strokeWidth="2" />
        </svg>
      </div>
    )
  }
  return (
    <div className="shrink-0 w-[15px] h-[18px]">
      <svg width="15" height="18" viewBox="0 0 15 18" fill="none">
        <circle cx="7.5" cy="10.5" r="7" fill="white" stroke="#67686B" />
      </svg>
    </div>
  )
}

function YesNo({ value, onChange, yesLabel = 'Yes', noLabel = 'No', extraOption }: {
  value: string; onChange: (v: string) => void; yesLabel?: string; noLabel?: string; extraOption?: string
}) {
  const opts = [
    { label: yesLabel, val: 'Yes' },
    { label: noLabel, val: 'No' },
    ...(extraOption ? [{ label: extraOption, val: extraOption }] : []),
  ]
  return (
    <div className="flex flex-col gap-[9px] pl-[2px]">
      {opts.map((opt) => (
        <button key={opt.val} type="button" onClick={() => onChange(opt.val)}
          className="flex gap-[8px] items-start cursor-pointer w-full text-left">
          <RadioCircle selected={value === opt.val} />
          <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt.label}</span>
        </button>
      ))}
    </div>
  )
}

function WhenPaysSelector({ value, onChange, options }: {
  value: string; onChange: (v: string) => void
  options: { value: string; label: string; hint: string }[]
}) {
  return (
    <div className="flex flex-col gap-[9px] pl-[2px]">
      {options.map((opt) => (
        <button key={opt.value} type="button" onClick={() => onChange(opt.value)}
          className="flex gap-[8px] items-start cursor-pointer w-full text-left">
          <RadioCircle selected={value === opt.value} />
          <div className="flex flex-col gap-[2px]">
            <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt.label}</span>
            <span className="font-lato text-[13px] text-[#67686b] leading-[1.4]">{opt.hint}</span>
          </div>
        </button>
      ))}
    </div>
  )
}

function NumberStepper({ id, value, onChange, min = 0, max = 99, suffix = ' years' }: {
  id?: string; value: string; onChange: (v: string) => void; min?: number; max?: number; suffix?: string
}) {
  const num = parseInt(value) || 0
  function decrement() { if (num > min) onChange(String(num - 1)) }
  function increment() { if (num < max) onChange(String(num + 1)) }
  return (
    <div className="inline-flex rounded-[6px] border border-[#67686b] overflow-hidden h-[40px]">
      <button type="button" onClick={decrement}
        className="bg-[#00154d] w-[40px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shrink-0">
        <svg width="14" height="2" viewBox="0 0 18.83 0.83" fill="none">
          <path d="M18.415 0.415H0.415" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
      </button>
      <div className="w-[70px] flex items-center justify-center bg-white px-[6px]">
        <input id={id} type="number" value={num}
          onChange={(e) => {
            const v = parseInt(e.target.value)
            if (!isNaN(v)) onChange(String(Math.min(max, Math.max(min, v))))
            else if (e.target.value === '') onChange('0')
          }}
          className="w-full font-lato text-[16px] text-[#231f20] text-center outline-none bg-transparent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
      </div>
      <button type="button" onClick={increment}
        className="bg-[#00154d] w-[40px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity shrink-0">
        <svg width="14" height="14" viewBox="0 0 18.83 18.83" fill="none">
          <path d="M9.41499 0.415V18.415M18.415 9.41484H0.415" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
      </button>
    </div>
  )
}

function KalosCheckbox({ checked }: { checked: boolean }) {
  return (
    <div className="relative shrink-0 size-[15px]">
      <div className={`absolute left-0 top-0 size-[15px] bg-white border-solid ${checked ? 'border-2 border-[#231f20]' : 'border border-[#67686b]'}`} />
      {checked && (
        <div className="absolute inset-[-26.67%_-29.17%_30.83%_33.33%]">
          <div className="absolute inset-[-17.39%]">
            <svg className="block size-full" fill="none" height="19.3752" preserveAspectRatio="none" viewBox="0 0 19.3752 19.3752" width="19.3752">
              <path d="M16.875 2.50019L6.5625 16.8752L2.5 12.8127" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
              <path d="M16.875 2.50019L6.5625 16.8752L2.5 12.8127" stroke="#F26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

function CheckboxList({ options, selected, onChange, max }: {
  options: string[]; selected: string[]; onChange: (v: string[]) => void; max?: number
}) {
  function toggle(opt: string) {
    if (selected.includes(opt)) {
      onChange(selected.filter((s) => s !== opt))
    } else {
      if (max && selected.length >= max) return
      onChange([...selected, opt])
    }
  }
  return (
    <div className="flex flex-col gap-[9px] pl-[2px]">
      {options.map((opt) => {
        const checked = selected.includes(opt)
        const disabled = !checked && !!max && selected.length >= max
        return (
          <button key={opt} onClick={() => !disabled && toggle(opt)}
            className={`flex gap-[8px] items-start text-left ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
            <div className="flex items-start pt-[6px] shrink-0">
              <KalosCheckbox checked={checked} />
            </div>
            <p className="font-lato text-[16px] leading-[1.55] text-[#231f20] select-none">{opt}</p>
          </button>
        )
      })}
    </div>
  )
}

function KalosDateField({ month, year, onMonthChange, onYearChange }: {
  month: string; year: string; onMonthChange: (v: string) => void; onYearChange: (v: string) => void
}) {
  function handleMonth(v: string) {
    const n = v.replace(/\D/g, '').slice(0, 2)
    onMonthChange(n)
  }
  function handleYear(v: string) {
    onYearChange(v.replace(/\D/g, '').slice(0, 4))
  }
  return (
    <div className="flex gap-[20px] items-end pl-[2px]">
      <div className="flex flex-col gap-[5px]">
        <p className="font-lato font-bold text-[14px] text-[#231f20] leading-[1.55] whitespace-nowrap">Month</p>
        <input
          type="text" inputMode="numeric" value={month} onChange={(e) => handleMonth(e.target.value)}
          placeholder="MM" maxLength={2}
          className="w-[64px] px-[15px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#67686b] outline-none bg-white border border-[#67686b] rounded-[6px] focus:border-[#231F20] transition-colors"
        />
      </div>
      <div className="flex flex-col gap-[5px]">
        <p className="font-lato font-bold text-[14px] text-[#231f20] leading-[1.55] whitespace-nowrap">Year</p>
        <input
          type="text" inputMode="numeric" value={year} onChange={(e) => handleYear(e.target.value)}
          placeholder="YYYY" maxLength={4}
          className="w-[90px] px-[15px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#67686b] outline-none bg-white border border-[#67686b] rounded-[6px] focus:border-[#231F20] transition-colors"
        />
      </div>
    </div>
  )
}

function KalosFieldset({ title, children, optional }: { title: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <div className="relative pt-[10px]">
      <div className="absolute left-[14px] top-[-3px] bg-white px-[5px] py-[2px] z-10 flex items-center gap-[5px]">
        <span className="font-montserrat font-bold text-[14px] text-black leading-[1.6] tracking-[-0.5px] whitespace-nowrap">{title}</span>
        {optional && <span className={optionalCls}>Optional</span>}
      </div>
      <div className="border border-[#e1e1e1] rounded-[12px] pt-[28px] pb-[24px] px-[20px] flex flex-col gap-[30px]">
        {children}
      </div>
    </div>
  )
}

// ─── Searchable Provider Dropdown (Life Insurance only) ────────────────────────

function SearchableProviderDropdown({ providers, search, onSearchChange, selected, onSelect, otherText, onOtherTextChange }: {
  providers: string[]
  search: string; onSearchChange: (v: string) => void; selected: string; onSelect: (v: string) => void
  otherText: string; onOtherTextChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const filtered = [...providers.filter((p) => p.toLowerCase().includes(search.toLowerCase())), 'Other']
    .filter((p, i, arr) => arr.indexOf(p) === i)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div ref={ref} className="flex flex-col gap-[10px]">
      <div className="relative">
        <input type="text" value={open ? search : (selected === 'Other' ? 'Other' : selected)}
          onChange={(e) => { onSearchChange(e.target.value); onSelect(''); setOpen(true) }}
          onFocus={() => { onSearchChange(''); setOpen(true) }}
          placeholder="Search providers…" className={`${inputCls} pr-[40px]`} />
        <div className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {open && (
          <div className="absolute z-50 top-full left-0 right-0 mt-[2px] bg-white rounded-[6px] max-h-[220px] overflow-y-auto" style={{ border: '1px solid #c2c3c4', boxShadow: '0px 0px 4px 2px rgba(36,123,161,0.5)' }}>
            <div className="flex flex-col items-center py-[5px]">
              <div className="flex flex-col items-start w-full overflow-clip">
                {filtered.map((p, i) => {
                  const isLast = i === filtered.length - 1
                  const isOther = p === 'Other'
                  return (
                    <button key={p} type="button"
                      onMouseDown={() => { onSelect(p); onSearchChange(p === 'Other' ? '' : p); setOpen(false) }}
                      className={`relative bg-white w-full text-left ${selected === p ? 'bg-[#f7f9fc]' : ''}`}>
                      {!isLast && <div aria-hidden className="absolute border-b border-[#c2c3c4] inset-0 pointer-events-none" />}
                      <div className="flex gap-[10px] items-start px-[15px] py-[10px]">
                        <p className={`font-['Poppins',sans-serif] font-normal text-[14px] leading-[1.2] whitespace-nowrap ${isOther ? 'text-[#67686b] italic' : 'text-[#231f20]'}`}>{p}</p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      {selected === 'Other' && (
        <ConditionalBlock>
          <FieldWrapper>
            <FieldLabel label="Please specify provider" required />
            <TextInput value={otherText} onChange={onOtherTextChange} placeholder="Enter provider name" />
          </FieldWrapper>
        </ConditionalBlock>
      )}
    </div>
  )
}

// ─── "Not known" field state components ──────────────────────────────────────

function UnknownBadge({ onClear }: { onClear: () => void }) {
  return (
    <div className="flex items-center justify-between border border-dashed border-[#c2c3c4] rounded-[6px] px-[14px] py-[10px]">
      <div className="flex items-center gap-[8px]">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="6.5" stroke="#67686b" strokeWidth="1.2" />
          <path d="M7.5 5v3.5M7.5 10.5h.01" stroke="#67686b" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        <span className="font-lato text-[14px] text-[#67686b] italic">Not known</span>
      </div>
      <button type="button" onClick={onClear}
        className="font-lato text-[12px] text-[#67686b] hover:text-[#231F20] underline underline-offset-2 cursor-pointer transition-colors">
        Clear
      </button>
    </div>
  )
}

function WithUnknown({ fieldKey, unknowns, onToggle, children }: {
  fieldKey: string
  unknowns: string[]
  onToggle: (k: string) => void
  children: React.ReactNode
}) {
  if ((unknowns ?? []).includes(fieldKey)) {
    return <UnknownBadge onClear={() => onToggle(fieldKey)} />
  }
  return (
    <div className="flex flex-col gap-[4px]">
      {children}
      <button type="button" onClick={() => onToggle(fieldKey)}
        className="self-start font-lato text-[12px] text-[#67686b] hover:text-[#231F20] transition-colors cursor-pointer mt-[1px] underline underline-offset-2 decoration-[#c2c3c4]">
        Not known
      </button>
    </div>
  )
}

// ─── Field status (document extraction) ──────────────────────────────────────

function WithStatus({ fieldKey, fieldStates, onConfirm, children }: {
  fieldKey: string
  fieldStates: Record<string, 'found' | 'confirmed'>
  onConfirm: (k: string) => void
  children: React.ReactNode
}) {
  const state = (fieldStates ?? {})[fieldKey]
  if (!state) return <>{children}</>

  return (
    <div className={`rounded-[8px] ${state === 'found' ? 'ring-1 ring-[#F26A2C] ring-offset-0' : 'ring-1 ring-[#2e7d4f] ring-offset-0'} overflow-hidden`}>
      <div className="px-[12px] pt-[10px] pb-[8px] bg-white">
        {children}
      </div>
      <div className={`flex items-center justify-between px-[12px] py-[7px] ${state === 'found' ? 'bg-[#fff8f4]' : 'bg-[#f3faf6]'}`}>
        {state === 'found' ? (
          <>
            <div className="flex items-center gap-[6px]">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1.5H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V9M9.5 1.5l-4 4M7 1.5h2.5v2.5" stroke="#F26A2C" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-lato text-[12px] text-[#c25210] font-medium">Found in document — confirm with customer</span>
            </div>
            <button type="button" onClick={() => onConfirm(fieldKey)}
              className="flex items-center gap-[5px] font-montserrat font-semibold text-[11px] text-[#c25210] hover:text-[#231F20] transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L4.5 9L10 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Confirm
            </button>
          </>
        ) : (
          <div className="flex items-center gap-[6px]">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="#2e7d4f" strokeWidth="1.1"/>
              <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#2e7d4f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-lato text-[12px] text-[#2e7d4f] font-medium">Confirmed</span>
            <button type="button" onClick={() => onConfirm(fieldKey)}
              className="ml-[6px] font-lato text-[11px] text-[#67686b] hover:text-[#231F20] underline underline-offset-2 decoration-[#c2c3c4] cursor-pointer transition-colors">
              Undo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Quick-pick chips ─────────────────────────────────────────────────────────

function QuickPick({ options, value, onChange }: {
  options: { label: string; value: string; unsure?: boolean }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-[8px]">
      {options.map((opt) => {
        const active = value === opt.value
        const isUnsure = opt.unsure
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(active ? '' : opt.value)}
            className={`px-[14px] py-[7px] rounded-[6px] font-lato text-[14px] leading-[1.3] border transition-colors cursor-pointer select-none
              ${active
                ? isUnsure
                  ? 'bg-[#f5f0e8] text-[#6b5a34] border-[#c9a96e]'
                  : 'bg-[#00154d] text-white border-[#00154d]'
                : isUnsure
                  ? 'bg-white text-[#67686b] border-[#c2c3c4] italic hover:border-[#9a8a6a]'
                  : 'bg-white text-[#231f20] border-[#c2c3c4] hover:border-[#231f20]'
              }`}
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

// ─── Form State ───────────────────────────────────────────────────────────────

interface FormState {
  coverType: string
  businessName: string
  businessPolicyType: string
  includesSIC: boolean
  providerSearch: string; providerSelected: string; providerOtherText: string; policyNumber: string
  termType: string; termTypeFreeText: string
  ipPremiumType: string
  benefitPaymentPeriod: string
  benefitPaymentPeriodOther: string
  defermentPeriod: string
  defermentPeriodOther: string
  phiCoverType: string
  whenPays: string
  insured: string; jointDeath: string
  startMonth: string; startYear: string
  endMonth: string; endYear: string
  salary: string; monthlyNetIncome: string; salaryPercentage: number; canAmend: string
  premium: string; sumAssured: string; remainingTerm: string; monthlyBenefit: string; excess: string; annualLimit: string
  keeping: string; keepingDetails: string
  inTrust: string
  linkedTo: string; linkedToOther: string
  beneficiaries: string[]
  additionalBenefits: string
  clients: string[]
  unknownFields: string[]
  fieldStates: Record<string, 'found' | 'confirmed'>
}

const initial: FormState = {
  coverType: '', businessName: '', businessPolicyType: '', includesSIC: false,
  providerSearch: '', providerSelected: '', providerOtherText: '', policyNumber: '',
  termType: '', termTypeFreeText: '', ipPremiumType: '', benefitPaymentPeriod: '', benefitPaymentPeriodOther: '', defermentPeriod: '', defermentPeriodOther: '', phiCoverType: '',
  whenPays: '', insured: '', jointDeath: '',
  startMonth: '', startYear: '', endMonth: '', endYear: '',
  salary: '45000', monthlyNetIncome: '2800', salaryPercentage: 65, canAmend: '',
  premium: '', sumAssured: '', remainingTerm: '', monthlyBenefit: '', excess: '', annualLimit: '',
  keeping: '', keepingDetails: '', inTrust: '', linkedTo: '', linkedToOther: '',
  beneficiaries: [], additionalBenefits: '', clients: [], unknownFields: [], fieldStates: {},
}

// ─── Employer Benefits form state ────────────────────────────────────────────

const EMPLOYER_COVER_TYPES = [
  'Death in service',
  'Group income protection',
  'Employer sick pay',
  'Private medical',
]

const SALARY_BASIS_OPTIONS = [
  { value: 'basic_only', label: 'Basic only' },
  { value: 'basic_guaranteed', label: 'Basic and guaranteed allowances' },
  { value: 'total_earnings', label: 'Total earnings (incl. bonus and commission)' },
]

interface EmployerFormState {
  coverType: string
  // Death in service fields
  disEmployerName: string
  disBenefitType: string  // 'multiple_of_salary' | 'fixed_lump_sum' | 'not_sure'
  disMultiple: string
  disSalaryBasis: string
  disSalaryAmount: string
  disLumpSum: string
  disTrust: string
  // Group income protection fields
  gipEmployerName: string
  gipSalaryPercentage: number
  gipPercentageQuick: string  // '50'|'55'|'60'|'65'|'70'|'75'|'other'|'not_sure'
  gipDeferredPeriod: string
  gipDeferredPeriodOther: string
  gipBenefitDuration: string
  gipBenefitDurationOther: string
  // Employer sick pay fields
  espEmployerName: string
  espFullPayQuick: string   // '1_week'|'2_weeks'|'4_weeks'|'6_weeks'|'8_weeks'|'12_weeks'|'other'|'not_sure'
  espFullPayAmount: string
  espFullPayUnit: string
  espHasReducedPay: string  // 'yes'|'no'|'not_sure'
  espReducedPayQuick: string
  espReducedPayAmount: string
  espReducedPayUnit: string
  espAfterSickPay: string
  espAfterSickPayOther: string
  // Private medical fields
  phiCoverType: string
  providerSearch: string; providerSelected: string; providerOtherText: string
  policyNumber: string
  startMonth: string; startYear: string
  premium: string
  monthlyBenefit: string
  insured: string
  clients: string[]
  linkedTo: string; linkedToOther: string
  additionalBenefits: string
}

const initialEmployer: EmployerFormState = {
  coverType: '',
  disEmployerName: '', disBenefitType: '', disMultiple: '4', disSalaryBasis: '', disSalaryAmount: '', disLumpSum: '', disTrust: '',
  gipEmployerName: '', gipSalaryPercentage: 65, gipPercentageQuick: '', gipDeferredPeriod: '', gipDeferredPeriodOther: '', gipBenefitDuration: '', gipBenefitDurationOther: '',
  espEmployerName: '', espFullPayQuick: '', espFullPayAmount: '', espFullPayUnit: 'weeks', espHasReducedPay: '', espReducedPayQuick: '', espReducedPayAmount: '', espReducedPayUnit: 'weeks', espAfterSickPay: '', espAfterSickPayOther: '',
  phiCoverType: '',
  providerSearch: '', providerSelected: '', providerOtherText: '',
  policyNumber: '',
  startMonth: '', startYear: '',
  premium: '',
  monthlyBenefit: '',
  insured: '',
  clients: [],
  linkedTo: '', linkedToOther: '',
  additionalBenefits: '',
}

// ─── Cover type grouped dropdown options ──────────────────────────────────────

function CoverTypeSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative">
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className={`${inputCls} appearance-none cursor-pointer pr-[40px]`}
        style={{ color: value ? '#231F20' : '#757575' }}>
        <option value="" disabled hidden>Please select…</option>
        <optgroup label="Life insurance">
          {LIFE_TYPES_CORE.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Family income benefit">
          {LIFE_TYPES_FIB.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Endowment">
          {LIFE_TYPES_ENDOWMENT.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Whole of life">
          {LIFE_TYPES_WOL.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Income Protection">
          {IP_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Business">
          {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Health">
          {HEALTH_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
        <optgroup label="Short-term income &amp; payment protection">
          {STU_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </optgroup>
      </select>
      <div className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
          <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

// ─── Policy read-only panel ───────────────────────────────────────────────────

function ROField({ label, value }: { label: string; value: string }) {
  if (!value) return null
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <p className="font-lato text-[16px] text-[#67686b] leading-[1.55] mb-[2px]">{label}</p>
      <p className="font-lato font-bold text-[16px] text-[#231f20] leading-[1.55] [word-break:break-word]">{value}</p>
    </div>
  )
}

function RORow({ a, b }: { a: React.ReactNode; b?: React.ReactNode }) {
  return (
    <div className="content-stretch flex gap-[34px] items-start relative shrink-0 w-full">
      {a}
      {b ?? <div className="flex-[1_0_0] min-w-px" />}
    </div>
  )
}

function PolicyReadOnlyPanel({ policy, index, onEdit }: { policy: FormState; index: number; onEdit: () => void }) {
  const uk = policy.unknownFields ?? []
  const unk = (k: string, val: string) => uk.includes(k) ? 'Not known' : val
  const provider = policy.providerSelected === 'Other' ? policy.providerOtherText : policy.providerSelected
  const group = getCoverGroup(policy.coverType)

  const startDate = uk.includes('startDate') ? 'Not known' : [policy.startMonth, policy.startYear].filter(Boolean).join(' / ')
  const endDate = [policy.endMonth, policy.endYear].filter(Boolean).join(' / ')
  const insuredVal = policy.insured + (policy.jointDeath ? ` — ${policy.jointDeath}` : '')

  const rows: Array<[string, string, string, string]> = [
    ['Provider', unk('provider', provider), 'Policy number', unk('policyNumber', policy.policyNumber)],
    ['Who is insured', insuredVal, 'Monthly premium', unk('premium', policy.premium ? `£${policy.premium}` : '')],
    ...(group === 'stu'
      ? [['Amount of cover', unk('sumAssured', policy.sumAssured ? `£${policy.sumAssured}` : ''), 'Deferment period', unk('defermentPeriod', policy.defermentPeriod)] as [string, string, string, string]]
      : group === 'health'
      ? [['Excess', unk('excess', policy.excess ? `£${policy.excess}` : ''), 'Annual limit', policy.annualLimit ? `£${policy.annualLimit}` : ''] as [string, string, string, string]]
      : group !== 'income' && !FIB_TYPES.has(policy.coverType)
      ? [['Amount of cover', unk('sumAssured', policy.sumAssured ? `£${policy.sumAssured}` : ''), 'Monthly benefit', unk('monthlyBenefit', policy.monthlyBenefit ? `£${policy.monthlyBenefit}` : '')] as [string, string, string, string]]
      : [['Monthly benefit', unk('monthlyBenefit', policy.monthlyBenefit ? `£${policy.monthlyBenefit}` : ''), 'Deferred period', unk('defermentPeriod', policy.defermentPeriod)] as [string, string, string, string]]),
    ['Policy start date', startDate, 'Policy end date', endDate],
    ...(group !== 'stu' ? [['Policy term type', unk('termType', policy.termType || policy.termTypeFreeText), 'Remaining term', unk('remainingTerm', policy.remainingTerm ? `${policy.remainingTerm} yrs` : '')] as [string, string, string, string]] : []),
    ...(group !== 'stu' ? [['In trust', policy.inTrust, 'What this policy protects', policy.linkedTo ? policy.linkedTo.replace(/_/g, ' ') : ''] as [string, string, string, string]] : [['What this policy protects', policy.linkedTo ? policy.linkedTo.replace(/_/g, ' ') : '', '', ''] as [string, string, string, string]]),
  ].filter(([, v1, , v2]) => v1 || v2) as Array<[string, string, string, string]>

  return (
    <div className="bg-white relative rounded-[12px] w-full">
      <div aria-hidden className="absolute border border-[#e1e1e1] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative w-full">
        {/* Header */}
        <div className="content-stretch flex items-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] min-w-px">
            <span className="font-poppins font-bold leading-[1.3] text-[24px] tracking-[-0.5px] text-[#231f20]">Policy {index + 1} </span>
            <span className="font-poppins font-light leading-[1.3] text-[22px] tracking-[-0.5px] text-[#231f20]">{policy.coverType}</span>
          </p>
          <button type="button" onClick={onEdit} className="relative rounded-[1000px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center gap-[8px] px-[12px] py-[9px]">
              <p className="font-montserrat font-medium leading-[15px] shrink-0 text-[#00154d] text-[13px] whitespace-nowrap">Edit</p>
              <div className="relative shrink-0 size-[20px]">
                <div className="flex items-center justify-center size-full">
                  <div className="flex h-full items-center justify-center relative shrink-0 w-[10px]" style={{ containerType: 'size' }}>
                    <div className="-scale-y-100 flex-none rotate-90 w-[100cqh]">
                      <div className="aspect-[18/10] relative size-full">
                        <div className="absolute inset-[-4.15%_-2.44%]">
                          <svg className="block size-full" fill="none" height="10.83" preserveAspectRatio="none" viewBox="0 0 17.83 10.83" width="17.83">
                            <path d={svgReadOnly.p173f5a00} stroke="#00154D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border-2 border-[#00154d] border-solid inset-0 pointer-events-none rounded-[1000px]" />
          </button>
        </div>
        {/* Fields */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full pt-[8px]">
          {rows.map(([l1, v1, l2, v2], i) => (
            <RORow key={i}
              a={<ROField label={l1} value={v1} />}
              b={<ROField label={l2} value={v2} />}
            />
          ))}
          {policy.additionalBenefits && (
            <RORow a={<ROField label="Additional notes" value={policy.additionalBenefits} />} />
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Sticky editing header ────────────────────────────────────────────────────

function StickyFormHeader({
  label,
  segments,
  onSave,
  saveLabel,
}: {
  label: string
  segments: (string | null | undefined)[]
  onSave: () => void
  saveLabel: string
}) {
  const parts = segments.filter(Boolean) as string[]
  return (
    <div className="sticky top-0 z-30 bg-white border-b border-[#e1e1e1] px-[20px] h-[48px] flex items-center justify-between gap-[16px] shadow-[0_1px_4px_0_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-0 min-w-0 flex-1">
        <span className="font-lato text-[12px] text-[#67686b] shrink-0 mr-[8px]">{label}</span>
        {parts.length > 0 && (
          <div className="flex items-center gap-0 min-w-0">
            {parts.map((seg, i) => (
              <span key={i} className="flex items-center min-w-0">
                {i > 0 && <span className="font-lato text-[13px] text-[#c2c3c4] mx-[6px] shrink-0">·</span>}
                <span className="font-lato font-semibold text-[13px] text-[#231f20] truncate">{seg}</span>
              </span>
            ))}
          </div>
        )}
        {parts.length === 0 && (
          <span className="font-lato italic text-[13px] text-[#c2c3c4]">No details yet</span>
        )}
      </div>
      <button
        type="button"
        onClick={onSave}
        className="shrink-0 bg-[#00154d] rounded-[1000px] cursor-pointer hover:opacity-90 transition-opacity px-[16px] h-[32px] flex items-center"
      >
        <span className="font-montserrat font-medium text-[12px] text-white leading-none whitespace-nowrap">{saveLabel}</span>
      </button>
    </div>
  )
}

// ─── Sidebar Navigation ───────────────────────────────────────────────────────

type ActiveView = { applicant: 'david' | 'patricia'; section: 'protection' | 'employer' }

function ApplicantSubNav({
  name, applicantKey, activeView, onNavigate,
}: {
  name: string
  applicantKey: 'david' | 'patricia'
  activeView: ActiveView
  onNavigate: (v: ActiveView) => void
}) {
  const items: Array<{ section: ActiveView['section']; label: string }> = [
    { section: 'protection', label: 'Existing protection' },
    { section: 'employer', label: 'Employer benefits' },
  ]
  const activeIndex = activeView.applicant === applicantKey
    ? items.findIndex((i) => i.section === activeView.section)
    : -1

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="px-[7px]">
        <p className="font-lato text-[14px] text-[#67686b] leading-[1.55] whitespace-nowrap">{name}</p>
      </div>
      <div className="flex gap-[15px] items-start">
        <div className="w-[19px] shrink-0 self-stretch relative">
          <div className="absolute inset-y-0 w-px bg-[#e1e1e1]" style={{ right: 3 }} />
          {activeIndex >= 0 && (
            <div
              className="absolute right-0 w-[3px] h-[40px] bg-[#f26a2c] rounded-br-[2px] rounded-tr-[2px] transition-all duration-150"
              style={{ top: activeIndex * 40 }}
            />
          )}
        </div>
        <div className="flex flex-col">
          {items.map((item) => {
            const isActive = activeView.applicant === applicantKey && activeView.section === item.section
            return (
              <button
                key={item.section}
                type="button"
                onClick={() => onNavigate({ applicant: applicantKey, section: item.section })}
                className="h-[40px] text-left flex items-center cursor-pointer"
              >
                <span className={`font-lato text-[14px] leading-[1.3] text-[#231f20] ${isActive ? 'font-bold' : 'font-normal'}`}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function SidebarNav({ activeView, onNavigate }: { activeView: ActiveView; onNavigate: (v: ActiveView) => void }) {
  return (
    <nav className="flex flex-col gap-[20px] p-[20px]">
      {/* Progress header */}
      <div className="flex flex-col gap-[8px]">
        <p className="font-lato text-[14px] text-[#67686b] leading-[1.55]">Overall progress</p>
        <div className="relative h-[29px] w-[96px]">
          <p className="absolute font-montserrat font-bold text-[12px] text-[#67686b] leading-[1.6] whitespace-nowrap" style={{ left: 0, top: 4 }}>0 / 12</p>
          <svg className="absolute" style={{ left: 52, top: 0 }} width="44" height="29" viewBox="4 1.5 24 28" fill="none">
            <path d={svgNav.p1e840800} stroke="#E1E1E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </svg>
        </div>
        <p className="font-lato text-[14px] text-[#67686b] leading-[1.55]">0 out of 12 sections completed</p>
        <div className="h-px bg-[#e1e1e1]" />
        <button type="button" className="relative rounded-[1000px] h-[40px] w-full mt-[4px]">
          <div className="flex items-center justify-center gap-[8px] w-full h-full">
            <svg width="19" height="19" viewBox="0 0 21.83 21.83" fill="none" className="shrink-0">
              <path d={svgNav.p11f74200} stroke="#00154D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
            </svg>
            <span className="font-montserrat font-semibold text-[13px] text-[#00154d] leading-[15px]">Expand all</span>
          </div>
          <div aria-hidden className="absolute border-2 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
        </button>
      </div>

      {/* Applicant details */}
      <div className="flex gap-[8px] items-center">
        <svg width="20" height="14" viewBox="0 0 19.83 13.83" fill="none" className="shrink-0">
          <path d={svgNav.p108318e0} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Applicant details</p>
      </div>

      {/* Property & mortgage */}
      <div className="flex gap-[8px] items-center">
        <svg width="20" height="20" viewBox="0 0 20.0047 19.7052" fill="none" className="shrink-0">
          <path d={svgNav.p1c1803c0} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p1e58ec00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p1d699400} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p2f27f280} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Property &amp; mortgage</p>
      </div>

      {/* Existing coverage — interactive */}
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[8px] items-center">
          <svg width="17" height="19" viewBox="0 0 16.83 18.83" fill="none" className="shrink-0">
            <path d={svgNav.p2d602e00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
          </svg>
          <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Existing coverage</p>
        </div>
        <ApplicantSubNav name="David Johnson" applicantKey="david" activeView={activeView} onNavigate={onNavigate} />
        <ApplicantSubNav name="Patricia Johnson" applicantKey="patricia" activeView={activeView} onNavigate={onNavigate} />
      </div>

      {/* Health & medical */}
      <div className="flex gap-[8px] items-center">
        <svg width="17" height="18" viewBox="0 0 16.83 17.83" fill="none" className="shrink-0">
          <path d={svgNav.p1465500} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
          <path d={svgNav.p517fb70} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Health &amp; medical</p>
      </div>

      {/* Smart budget planner */}
      <div className="flex gap-[8px] items-center">
        <svg width="20" height="18" viewBox="0 0 20.0001 17.5" fill="none" className="shrink-0">
          <path d={svgNav.p111c300} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p102f600} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Smart budget planner</p>
      </div>

      {/* Gap analysis */}
      <div className="flex gap-[8px] items-center">
        <svg width="14" height="18" viewBox="0 0 14.1608 17.83" fill="none" className="shrink-0">
          <path d={svgNav.p2e709e00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Gap analysis</p>
      </div>

      {/* Objectives */}
      <div className="flex gap-[8px] items-center">
        <svg width="18" height="19" viewBox="0 0 17.83 18.83" fill="none" className="shrink-0">
          <path d={svgNav.p3f58fe00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Objectives</p>
      </div>

      {/* Products */}
      <div className="flex gap-[8px] items-center">
        <svg width="18" height="18" viewBox="0 0 17.83 17.83" fill="none" className="shrink-0">
          <path d={svgNav.p30949300} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Products</p>
      </div>

      {/* Suitability */}
      <div className="flex gap-[8px] items-center">
        <svg width="16" height="19" viewBox="0 0 15.6996 18.83" fill="none" className="shrink-0">
          <path d={svgNav.p10499380} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
          <path d={svgNav.p131b2380} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Suitability</p>
      </div>

      {/* Notes */}
      <div className="flex gap-[8px] items-center">
        <svg width="20" height="20" viewBox="0 0 19.9996 20" fill="none" className="shrink-0">
          <path d={svgNav.p3d9dcf80} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M3.75 3.75V0.416667" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M7.08333 3.75V0.416667" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M10.4167 3.75V0.416667" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.pbb78f00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Notes</p>
      </div>

      {/* Summary */}
      <div className="flex gap-[8px] items-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
          <path d={svgNav.pb55b98} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M3.75 9.58333H10.4167" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M3.75 4.58333H9.58333" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M3.75 12.0833H7.91667" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M3.75 14.5833H6.25" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p756cf80} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p23b43b00} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d={svgNav.p2eb324a0} stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </svg>
        <p className="font-lato text-[14px] text-[#231f20] leading-normal tracking-[0.14px] whitespace-nowrap">Summary</p>
      </div>
    </nav>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>({ applicant: 'david', section: 'protection' })

  // Employer benefits — separate state per applicant
  const [employerForms, setEmployerForms] = useState<Record<'david' | 'patricia', EmployerFormState>>({ david: initialEmployer, patricia: initialEmployer })
  const [savedEmployerPolicies, setSavedEmployerPolicies] = useState<Record<'david' | 'patricia', EmployerFormState[]>>({ david: [], patricia: [] })
  const [showEmployerForm, setShowEmployerForm] = useState(true)
  const [editingEmployerIndex, setEditingEmployerIndex] = useState<number | null>(null)
  const [employerErrors, setEmployerErrors] = useState<Record<string, string>>({})

  const currentApplicant = activeView.applicant
  const employerForm = { ...initialEmployer, ...employerForms[currentApplicant] }

  // Reset employer form UI state when switching applicant
  useEffect(() => {
    setShowEmployerForm(true)
    setEditingEmployerIndex(null)
    setEmployerErrors({})
  }, [currentApplicant])

  function setEmployer<K extends keyof EmployerFormState>(key: K, value: EmployerFormState[K]) {
    setEmployerForms((prev) => ({ ...prev, [currentApplicant]: { ...prev[currentApplicant], [key]: value } }))
    setEmployerErrors((prev) => { const n = { ...prev }; delete n[key]; return n })
  }

  function changeEmployerCoverType(v: string) {
    setEmployerForms((prev) => ({ ...prev, [currentApplicant]: { ...initialEmployer, coverType: v } }))
    setEmployerErrors({})
  }

  function validateEmployer() {
    const e: Record<string, string> = {}
    if (employerForm.coverType === 'Private medical') {
      const provider = employerForm.providerSelected === 'Other' ? employerForm.providerOtherText : employerForm.providerSelected
      if (!provider.trim()) e.provider = 'Required'
      if (!employerForm.premium.trim()) e.premium = 'Required'
      if (!employerForm.monthlyBenefit.trim()) e.monthlyBenefit = 'Required'
    }
    return e
  }

  function handleEmployerSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validateEmployer()
    if (Object.keys(errs).length > 0) { setEmployerErrors(errs); return }
    if (editingEmployerIndex !== null) {
      setSavedEmployerPolicies((prev) => ({
        ...prev,
        [currentApplicant]: prev[currentApplicant].map((p, i) => i === editingEmployerIndex ? employerForm : p),
      }))
    } else {
      setSavedEmployerPolicies((prev) => ({ ...prev, [currentApplicant]: [...prev[currentApplicant], employerForm] }))
    }
    setEditingEmployerIndex(null)
    setShowEmployerForm(false)
    setShowMoreDetailsEmp(false)
    setEmployerForms((prev) => ({ ...prev, [currentApplicant]: initialEmployer }))
    setEmployerErrors({})
  }

  function handleEditEmployer(i: number) {
    setEmployerForms((prev) => ({ ...prev, [currentApplicant]: savedEmployerPolicies[currentApplicant][i] }))
    setEditingEmployerIndex(i)
    setShowEmployerForm(true)
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleAddAnotherEmployer() {
    setEmployerForms((prev) => ({ ...prev, [currentApplicant]: initialEmployer }))
    setEditingEmployerIndex(null)
    setShowEmployerForm(true)
  }

  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'done'>('idle')
  const [savedPolicies, setSavedPolicies] = useState<FormState[]>([])
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(true)
  const [showMoreDetails, setShowMoreDetails] = useState(false)
  const [showMoreDetailsEmp, setShowMoreDetailsEmp] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const protectionFormRef = useRef<HTMLFormElement>(null)
  const employerFormRef = useRef<HTMLFormElement>(null)

  function handleDocumentUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) return
    setScanState('scanning')
    setTimeout(() => {
      setScanState('done')
      setErrors({})
      setShowMoreDetails(true)
      setForm({
        ...initial,
        coverType: 'Life insurance',
        providerSearch: 'Legal & General',
        providerSelected: 'Legal & General',
        policyNumber: 'LG-4829201',
        termType: 'Level',
        insured: 'David Johnson',
        startMonth: '03',
        startYear: '2019',
        premium: '42.50',
        sumAssured: '250000',
        remainingTerm: '18',
        inTrust: 'In trust',
        additionalBenefits: 'Waiver of premium included. Indexation applied annually at RPI.',
        fieldStates: {
          provider: 'found',
          premium: 'found',
          sumAssured: 'found',
          policyNumber: 'found',
          startDate: 'found',
          termType: 'found',
          remainingTerm: 'found',
        },
      })
    }, 2800)
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => { const n = { ...prev }; delete n[key]; return n })
  }

  function toggleUnknown(fieldKey: string) {
    setForm((prev) => {
      const isUnknown = prev.unknownFields.includes(fieldKey)
      return { ...prev, unknownFields: isUnknown ? prev.unknownFields.filter((k) => k !== fieldKey) : [...prev.unknownFields, fieldKey] }
    })
  }

  const uk = form.unknownFields

  function confirmField(fieldKey: string) {
    setForm((prev) => {
      const current = (prev.fieldStates ?? {})[fieldKey]
      const next = current === 'confirmed'
        ? Object.fromEntries(Object.entries(prev.fieldStates ?? {}).filter(([k]) => k !== fieldKey))
        : { ...(prev.fieldStates ?? {}), [fieldKey]: 'confirmed' as const }
      return { ...prev, fieldStates: next }
    })
  }

  function confirmAll() {
    setForm((prev) => ({
      ...prev,
      fieldStates: Object.fromEntries(
        Object.entries(prev.fieldStates ?? {}).map(([k]) => [k, 'confirmed' as const])
      ),
    }))
  }

  const fs = form.fieldStates ?? {}
  const foundCount = Object.values(fs).filter((v) => v === 'found').length

  function changeCoverType(v: string) {
    const newGroup = getCoverGroup(v)
    const oldGroup = getCoverGroup(form.coverType)
    // Reset provider selection when switching between groups (different provider lists)
    const keepProvider = newGroup === oldGroup
    setForm({
      ...initial,
      coverType: v,
      linkedTo: '',
      providerSearch: keepProvider ? form.providerSearch : '',
      providerSelected: keepProvider ? form.providerSelected : '',
      providerOtherText: keepProvider ? form.providerOtherText : '',
    })
    setErrors({})
  }

  const ct = form.coverType
  const group = getCoverGroup(ct)
  const showMonthlyBenefit = ct ? hasMonthlyBenefit(ct) : false
  const isWOL = WOL_TYPES.has(ct)
  const termTypeOptions = (isWOL ? ['Guaranteed', 'Reviewable', 'Not sure'] : TERM_TYPES).map((t) => ({ value: t, label: t }))
  const defermentOptions = DEFERMENT_PERIODS.map((t) => ({ value: t, label: t }))
  const phiOptions = PHI_COVER_TYPES.map((t) => ({ value: t, label: t }))

  // Which when-pays options to use
  const whenPaysOpts =
    ct === 'Relevant Life' ? WHEN_PAYS_RELEVANT_LIFE
    : group === 'business' ? WHEN_PAYS_BUSINESS
    : WHEN_PAYS_LIFE

  // Field visibility flags
  const showTermType = group !== 'health' && group !== 'stu'
  const showTermTypeDropdown = group === 'business' || group === 'life'
  const showDeferment = group === 'income' || group === 'stu'
  const showPhiCoverType = group === 'health'
  const showWhenPays = group === 'life' || group === 'business'
  const showSumAssured = group !== 'income' && group !== 'health' && group !== 'stu' && !FIB_TYPES.has(ct)
  const showStuSumAssured = group === 'stu'
  const showMonthlyBenefitField = group === 'income' || showMonthlyBenefit || group === 'stu'
  const showRemainingTerm = group === 'life' && !isWOL
  const showClients = group === 'income' || group === 'life' || group === 'health' || group === 'stu'
  const clientsMax = group === 'health' ? 2 : undefined

  function validate() {
    const e: Record<string, string> = {}
    const providerValue = form.providerSelected === 'Other' ? form.providerOtherText : form.providerSelected
    if (!providerValue.trim() && !uk.includes('provider')) e.provider = 'Required'
    if (!form.premium.trim() && !uk.includes('premium')) e.premium = 'Required'
    if (!form.insured && group !== 'stu' && ct !== 'Private medical') e.insured = 'Please select an option'
    if (form.insured === 'Joint' && !form.jointDeath) e.jointDeath = 'Please select an option'
    if ((showSumAssured || showStuSumAssured) && !form.sumAssured.trim() && !uk.includes('sumAssured')) e.sumAssured = 'Required'
    if (showMonthlyBenefit && !form.monthlyBenefit.trim() && !uk.includes('monthlyBenefit')) e.monthlyBenefit = 'Required'
    if (group === 'health' && !form.excess.trim() && !uk.includes('excess')) e.excess = 'Required'
    if ((form.linkedTo === 'something_else' || form.linkedTo === 'other') && !form.linkedToOther.trim()) e.linkedToOther = 'Required'
    return e
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    if (editingIndex !== null) {
      setSavedPolicies((prev) => prev.map((p, i) => i === editingIndex ? form : p))
    } else {
      setSavedPolicies((prev) => [...prev, form])
    }
    setEditingIndex(null)
    setShowForm(false)
    setShowMoreDetails(false)
    setForm(initial)
    setErrors({})
    setScanState('idle')
  }

  function handleEdit(i: number) {
    setForm(savedPolicies[i])
    setEditingIndex(i)
    setShowForm(true)
    setShowMoreDetails(true)
    setScanState('idle')
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleAddAnother() {
    setForm(initial)
    setEditingIndex(null)
    setShowForm(true)
    setShowMoreDetails(false)
    setScanState('idle')
  }

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-screen overflow-hidden">
      {/* ── Sidebar ── */}
      <aside className="w-[260px] shrink-0 bg-white border-r border-[#e1e1e1] overflow-y-auto">
        <SidebarNav activeView={activeView} onNavigate={setActiveView} />
      </aside>

      {/* ── Main content ── */}
      <main className="flex-1 overflow-y-auto bg-[#F2F4F7]">

        {/* ── Sticky context header — protection form ── */}
        {activeView.section === 'protection' && showForm && (() => {
          const provider = form.providerSelected === 'Other' ? form.providerOtherText : form.providerSelected
          const insuredNames = form.insured
            ? [form.insured.split(' ')[0]]
            : form.clients.map((c) => c.split(' ')[0])
          const segments = [
            form.coverType || null,
            provider || null,
            insuredNames.length > 0 ? insuredNames.join(', ') : null,
          ]
          const label = editingIndex !== null ? `Policy ${editingIndex + 1}` : 'New policy'
          return (
            <StickyFormHeader
              label={label}
              segments={segments}
              onSave={() => protectionFormRef.current?.requestSubmit()}
              saveLabel="Save Policy"
            />
          )
        })()}

        {/* ── Sticky context header — employer form ── */}
        {activeView.section === 'employer' && showEmployerForm && (() => {
          const segments = [
            employerForm.coverType || null,
          ]
          const label = editingEmployerIndex !== null ? `Benefit ${editingEmployerIndex + 1}` : 'New benefit'
          return (
            <StickyFormHeader
              label={label}
              segments={segments}
              onSave={() => employerFormRef.current?.requestSubmit()}
              saveLabel="Save Benefit"
            />
          )
        })()}

      <div className="py-[40px] px-[20px]">
      <div className="max-w-[780px] mx-auto flex flex-col gap-[16px]">

        {/* ── Page title ── */}
        <h1 className="font-poppins font-bold text-[24px] text-black leading-[1.3] tracking-[-0.5px]">
          {activeView.section === 'employer' ? 'Employer benefits' : 'Existing protection'}
        </h1>

        {activeView.section === 'employer' ? (
          <>
            {/* ── Saved employer benefit panels ── */}
            {savedEmployerPolicies[currentApplicant].map((policy, i) => editingEmployerIndex === i ? null : (
              <div key={i} className="bg-white relative rounded-[12px] w-full">
                <div aria-hidden className="absolute border border-[#e1e1e1] inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col gap-[10px] p-[20px]">
                  <div className="flex items-center">
                    <p className="flex-[1_0_0]">
                      <span className="font-poppins font-bold text-[24px] tracking-[-0.5px] text-[#231f20]">Benefit {i + 1} </span>
                      <span className="font-poppins font-light text-[22px] tracking-[-0.5px] text-[#231f20]">{policy.coverType}</span>
                    </p>
                    <button type="button" onClick={() => handleEditEmployer(i)} className="relative rounded-[1000px] shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="flex items-center gap-[8px] px-[12px] py-[9px]">
                        <p className="font-montserrat font-medium text-[13px] text-[#00154d] leading-[15px]">Edit</p>
                      </div>
                      <div aria-hidden className="absolute border-2 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
                    </button>
                  </div>
                  {policy.coverType === 'Private medical' && (
                    <div className="flex flex-col gap-[16px] pt-[8px]">
                      {policy.providerSelected && <div><p className="font-lato text-[16px] text-[#67686b]">Provider</p><p className="font-lato font-bold text-[16px] text-[#231f20]">{policy.providerSelected === 'Other' ? policy.providerOtherText : policy.providerSelected}</p></div>}
                      {policy.phiCoverType && <div><p className="font-lato text-[16px] text-[#67686b]">Cover type</p><p className="font-lato font-bold text-[16px] text-[#231f20]">{policy.phiCoverType}</p></div>}
                      {policy.premium && <div><p className="font-lato text-[16px] text-[#67686b]">Monthly premium</p><p className="font-lato font-bold text-[16px] text-[#231f20]">£{policy.premium}</p></div>}
                      {policy.monthlyBenefit && <div><p className="font-lato text-[16px] text-[#67686b]">Excess</p><p className="font-lato font-bold text-[16px] text-[#231f20]">£{policy.monthlyBenefit}</p></div>}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* ── Add another button ── */}
            {!showEmployerForm && savedEmployerPolicies[currentApplicant].length > 0 && (
              <div className="flex">
                <button type="button" onClick={handleAddAnotherEmployer} className="relative rounded-[1000px] cursor-pointer hover:opacity-80 transition-opacity">
                  <div className="flex items-center gap-[8px] px-[20px] py-[12px]">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1v12M1 7h12" stroke="#00154d" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-montserrat font-medium text-[13px] text-[#00154d] leading-[15px] whitespace-nowrap">Add another benefit</span>
                  </div>
                  <div aria-hidden className="absolute border-2 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
                </button>
              </div>
            )}

            {/* ── Employer benefits form ── */}
            <div style={{ display: showEmployerForm ? 'block' : 'none' }}>
            <div className="bg-white border border-[#e1e1e1] rounded-[12px]">
            <div className="p-[20px] flex flex-col gap-[30px]">
              <h2 className="font-poppins font-bold text-[20px] text-black leading-[1.3] tracking-[-0.5px]">
                {editingEmployerIndex !== null ? `Edit benefit ${editingEmployerIndex + 1}` : 'Add a benefit'}
              </h2>

              {Object.keys(employerErrors).length > 0 && (
                <div className="bg-[#fdf2f2] border border-[#C61310] rounded-[12px] px-[16px] py-[12px]">
                  <p className="font-lato font-bold text-[14px] text-[#C61310] mb-[4px]">Please complete the required fields before saving:</p>
                  <ul className="list-disc list-inside flex flex-col gap-[2px]">
                    {Object.values(employerErrors).map((msg, i) => (
                      <li key={i} className="font-lato text-[13px] text-[#C61310]">{msg}</li>
                    ))}
                  </ul>
                </div>
              )}

              <form ref={employerFormRef} onSubmit={handleEmployerSubmit} className="flex flex-col gap-[30px]">
                {/* Type of cover */}
                <FieldWrapper>
                  <FieldLabel label="Type of cover" optional htmlFor="employer-cover-type" />
                  {employerErrors.coverType && <p className="font-lato text-[13px] text-[#C61310]">{employerErrors.coverType}</p>}
                  <div className="relative">
                    <select
                      id="employer-cover-type"
                      value={employerForm.coverType}
                      onChange={(e) => changeEmployerCoverType(e.target.value)}
                      className={`${inputCls} appearance-none cursor-pointer pr-[40px]`}
                      style={{ color: employerForm.coverType ? '#231F20' : '#757575' }}
                    >
                      <option value="" disabled hidden>Please select…</option>
                      {EMPLOYER_COVER_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t === 'Private medical' ? 'Private medical insurance' : t}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                        <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </FieldWrapper>

                {/* No cover type selected */}
                {!employerForm.coverType && (
                  <div className="bg-white border border-[#e1e1e1] rounded-[12px] p-[40px] text-center">
                    <div className="w-[48px] h-[48px] bg-[#f0f5fb] rounded-full flex items-center justify-center mx-auto mb-[14px]">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <circle cx="11" cy="11" r="10" stroke="#1B4F8A" strokeWidth="1.5" />
                        <path d="M11 7v5M11 15h.01" stroke="#1B4F8A" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <p className="font-lato text-[15px] text-[#67686b]">Select a benefit type above to begin entering details.</p>
                  </div>
                )}

                {/* ── Death in service ── */}
                {employerForm.coverType === 'Death in service' && (() => {
                  const multiple = parseFloat(employerForm.disMultiple) || 0
                  const salary = parseFloat(employerForm.disSalaryAmount.replace(/,/g, '')) || 0
                  const coverAmount = multiple * salary

                  return (
                    <>
                      <KalosFieldset title="Employer details">
                        <FieldWrapper>
                          <FieldLabel label="Employer name" optional htmlFor="dis-employer-name" />
                          <TextInput id="dis-employer-name" value={employerForm.disEmployerName}
                            onChange={(v) => setEmployer('disEmployerName', v)}
                            placeholder="Enter employer name" />
                        </FieldWrapper>
                      </KalosFieldset>

                      <KalosFieldset title="Benefit details">
                        {/* Primary question — how does the benefit work? */}
                        <FieldWrapper>
                          <FieldLabel label="How would the employer pay the benefit?" optional />
                          <div className="flex flex-col gap-[9px] pl-[2px]">
                            {[
                              { val: 'multiple_of_salary', label: 'A multiple of salary', hint: "e.g. \"four times my salary\"" },
                              { val: 'fixed_lump_sum', label: 'A fixed lump sum', hint: 'A set amount regardless of salary' },
                              { val: 'not_sure', label: "Customer isn't sure", hint: null },
                            ].map(({ val, label, hint }) => (
                              <button key={val} type="button"
                                onClick={() => setEmployer('disBenefitType', val)}
                                className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                                <div className="mt-[2px]"><RadioCircle selected={employerForm.disBenefitType === val} /></div>
                                <div className="flex flex-col gap-[1px]">
                                  <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{label}</span>
                                  {hint && <span className="font-lato text-[13px] text-[#67686b] italic">{hint}</span>}
                                </div>
                              </button>
                            ))}
                          </div>
                        </FieldWrapper>

                        {/* Multiple of salary — hero interaction */}
                        {employerForm.disBenefitType === 'multiple_of_salary' && (
                          <ConditionalBlock>
                            {/* The hero: [ N ] × salary */}
                            <FieldWrapper>
                              <FieldLabel label="How many times their salary?" optional htmlFor="dis-multiple" />
                              <div className="flex items-center gap-[14px] flex-wrap">
                                <NumberStepper
                                  id="dis-multiple"
                                  value={employerForm.disMultiple}
                                  onChange={(v) => setEmployer('disMultiple', v)}
                                  min={1} max={20} suffix="×"
                                />
                                <span className="font-lato text-[15px] text-[#67686b]">times salary</span>
                              </div>
                              <p className={hintCls}>Common answers: 2×, 3×, 4× or 5× salary</p>
                            </FieldWrapper>

                            {/* Salary input — shown clearly but not required-looking */}
                            <FieldWrapper>
                              <FieldLabel label="Annual salary (if known)" optional htmlFor="dis-salary-amount" />
                              <CurrencyInput id="dis-salary-amount" value={employerForm.disSalaryAmount}
                                onChange={(v) => setEmployer('disSalaryAmount', v)} placeholder="e.g. 45000" />
                            </FieldWrapper>

                            {/* Calculated cover amount — shown prominently when data is available */}
                            {multiple > 0 && salary > 0 ? (
                              <div className="bg-[#F2F4F7] rounded-[10px] px-[18px] py-[14px] flex items-center justify-between gap-[12px]">
                                <div className="flex flex-col gap-[2px]">
                                  <p className="font-montserrat font-semibold text-[12px] text-[#67686b] uppercase tracking-[0.5px]">Approximate cover</p>
                                  <p className={hintCls}>{employerForm.disMultiple}× salary of £{salary.toLocaleString('en-GB')}</p>
                                </div>
                                <p className="font-poppins font-bold text-[24px] text-[#231f20] tracking-[-0.5px] shrink-0">
                                  £{coverAmount.toLocaleString('en-GB', { maximumFractionDigits: 0 })}
                                </p>
                              </div>
                            ) : multiple > 0 && !salary ? (
                              <div className="bg-[#F2F4F7] rounded-[10px] px-[18px] py-[14px] flex items-center gap-[10px]">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                                  <circle cx="7" cy="7" r="6" stroke="#67686b" strokeWidth="1.1"/>
                                  <path d="M7 4.5v3M7 9.5h.01" stroke="#67686b" strokeWidth="1.2" strokeLinecap="round"/>
                                </svg>
                                <p className="font-lato text-[13px] text-[#67686b]">Add salary above to see the approximate cover amount</p>
                              </div>
                            ) : null}

                            {/* Salary basis — secondary detail */}
                            <div>
                              <button type="button"
                                onClick={() => setEmployer('disSalaryBasis', employerForm.disSalaryBasis === '__expanded' ? '' : '__expanded')}
                                className="flex items-center gap-[6px] cursor-pointer hover:text-[#231f20] transition-colors group">
                                <span className="font-lato text-[12px] text-[#67686b] group-hover:text-[#231f20] underline underline-offset-2 decoration-[#c2c3c4]">
                                  Salary basis details (optional)
                                </span>
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                                  className={`transition-transform ${employerForm.disSalaryBasis === '__expanded' || (employerForm.disSalaryBasis && employerForm.disSalaryBasis !== '__expanded') ? 'rotate-180' : ''}`}>
                                  <path d="M1 1L5 5L9 1" stroke="#67686b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                              {(employerForm.disSalaryBasis === '__expanded' || (employerForm.disSalaryBasis && employerForm.disSalaryBasis !== '__expanded')) && (
                                <div className="mt-[10px]">
                                  <SelectInput
                                    value={employerForm.disSalaryBasis === '__expanded' ? '' : employerForm.disSalaryBasis}
                                    onChange={(v) => setEmployer('disSalaryBasis', v)}
                                    options={SALARY_BASIS_OPTIONS}
                                    placeholder="Select salary basis" />
                                </div>
                              )}
                            </div>
                          </ConditionalBlock>
                        )}

                        {/* Fixed lump sum */}
                        {employerForm.disBenefitType === 'fixed_lump_sum' && (
                          <ConditionalBlock>
                            <FieldWrapper>
                              <FieldLabel label="Lump sum amount" optional htmlFor="dis-lump-sum" />
                              <CurrencyInput id="dis-lump-sum" value={employerForm.disLumpSum}
                                onChange={(v) => setEmployer('disLumpSum', v)} placeholder="0.00" />
                            </FieldWrapper>
                          </ConditionalBlock>
                        )}

                        {/* Not sure */}
                        {employerForm.disBenefitType === 'not_sure' && (
                          <ConditionalBlock>
                            <div className="flex items-center gap-[8px] bg-[#f5f0e8] border border-[#c9a96e] rounded-[6px] px-[14px] py-[10px]">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                                <circle cx="7" cy="7" r="6" stroke="#6b5a34" strokeWidth="1.1"/>
                                <path d="M7 4.5v3M7 9.5h.01" stroke="#6b5a34" strokeWidth="1.2" strokeLinecap="round"/>
                              </svg>
                              <span className="font-lato text-[13px] text-[#6b5a34]">Record any details the customer mentions in the notes below</span>
                            </div>
                          </ConditionalBlock>
                        )}
                      </KalosFieldset>

                      <KalosFieldset title="Trust &amp; beneficiaries" optional>
                        <FieldWrapper>
                          <FieldLabel label="Is the benefit written in trust or are beneficiaries nominated?" optional />
                          <p className={hintCls}>Customers may say "I've nominated someone" or "it goes to my family". Check policy documents if available.</p>
                          <div className="flex flex-col gap-[9px] pl-[2px] mt-[4px]">
                            {[
                              { val: 'In trust', hint: null },
                              { val: 'Named/nominated beneficiaries', hint: null },
                              { val: 'In trust + named/nominated beneficiaries', hint: null },
                              { val: 'No', hint: null },
                              { val: 'Unsure', hint: null },
                            ].map(({ val }) => (
                              <button key={val} type="button"
                                onClick={() => setEmployer('disTrust', val)}
                                className="flex gap-[8px] items-center cursor-pointer w-full text-left">
                                <RadioCircle selected={employerForm.disTrust === val} />
                                <span className="font-lato text-[16px] text-[#231F20] leading-[1.55]">{val}</span>
                              </button>
                            ))}
                          </div>
                        </FieldWrapper>
                      </KalosFieldset>

                      <KalosFieldset title="Notes" optional>
                        <FieldWrapper>
                          <FieldLabel label="Additional notes" optional htmlFor="dis-notes" />
                          <Textarea id="dis-notes" value={employerForm.additionalBenefits}
                            onChange={(v) => setEmployer('additionalBenefits', v)}
                            placeholder="Any additional details the customer mentioned" rows={3} />
                        </FieldWrapper>
                      </KalosFieldset>
                    </>
                  )
                })()}

                {/* ── Group income protection ── */}
                {employerForm.coverType === 'Group income protection' && (
                  <>
                    <KalosFieldset title="Employer details">
                      <FieldWrapper>
                        <FieldLabel label="Employer name" optional htmlFor="gip-employer-name" />
                        <TextInput id="gip-employer-name" value={employerForm.gipEmployerName}
                          onChange={(v) => setEmployer('gipEmployerName', v)}
                          placeholder="Enter employer name" />
                      </FieldWrapper>
                    </KalosFieldset>

                    <KalosFieldset title="Benefit details">
                      {/* Percentage — quick-pick with Not sure */}
                      <FieldWrapper>
                        <FieldLabel label="What percentage of salary would it cover?" optional />
                        <p className={hintCls}>Most policies cover 50–75%. Customers often say "about two thirds" or a rough figure.</p>
                        <QuickPick
                          value={employerForm.gipPercentageQuick}
                          onChange={(v) => {
                            setEmployer('gipPercentageQuick', v)
                            if (v !== 'other' && v !== 'not_sure' && v !== '') {
                              setEmployer('gipSalaryPercentage', parseInt(v))
                            }
                          }}
                          options={[
                            { label: '50%', value: '50' },
                            { label: '55%', value: '55' },
                            { label: '60%', value: '60' },
                            { label: '65%', value: '65' },
                            { label: '70%', value: '70' },
                            { label: '75%', value: '75' },
                            { label: 'Other', value: 'other' },
                            { label: "I'm not sure", value: 'not_sure', unsure: true },
                          ]}
                        />
                        {employerForm.gipPercentageQuick === 'other' && (
                          <div className="mt-[10px] flex flex-col gap-[8px]">
                            <div className="flex items-center gap-[12px]">
                              <input type="range" min={0} max={100} step={5}
                                value={employerForm.gipSalaryPercentage}
                                onChange={(e) => setEmployer('gipSalaryPercentage', parseInt(e.target.value))}
                                className="flex-1 accent-[#F26A2C] h-[4px] cursor-pointer" />
                              <div className="bg-white border border-[#67686b] rounded-[6px] shrink-0 w-[70px] flex items-center focus-within:border-[#231F20] transition-colors">
                                <input type="text" inputMode="numeric"
                                  value={employerForm.gipSalaryPercentage}
                                  onChange={(e) => {
                                    const v = Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                                    setEmployer('gipSalaryPercentage', v)
                                  }}
                                  className="w-full px-[8px] py-[7px] font-lato font-bold text-[16px] text-[#231F20] text-right outline-none bg-transparent" />
                                <span className="font-lato font-bold text-[16px] text-[#231F20] pr-[8px]">%</span>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-lato text-[12px] text-[#67686b]">0%</span>
                              <span className="font-lato text-[12px] text-[#67686b]">100%</span>
                            </div>
                          </div>
                        )}
                        {employerForm.gipPercentageQuick === 'not_sure' && (
                          <div className="mt-[8px] flex items-center gap-[8px] bg-[#f5f0e8] border border-[#c9a96e] rounded-[6px] px-[14px] py-[10px]">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                              <circle cx="7" cy="7" r="6" stroke="#6b5a34" strokeWidth="1.1"/>
                              <path d="M7 4.5v3M7 9.5h.01" stroke="#6b5a34" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            <span className="font-lato text-[13px] text-[#6b5a34]">Customer unsure — note any details mentioned below</span>
                          </div>
                        )}
                      </FieldWrapper>

                      {/* Deferred period — quick-pick */}
                      <FieldWrapper>
                        <FieldLabel label="How long before payments would start?" optional />
                        <p className={hintCls}>Sometimes called the deferred or waiting period — typically 4–26 weeks.</p>
                        <QuickPick
                          value={employerForm.gipDeferredPeriod}
                          onChange={(v) => {
                            setEmployer('gipDeferredPeriod', v)
                            if (v !== 'other') setEmployer('gipDeferredPeriodOther', '')
                          }}
                          options={[
                            { label: '4 weeks', value: '4 weeks' },
                            { label: '8 weeks', value: '8 weeks' },
                            { label: '13 weeks', value: '13 weeks' },
                            { label: '26 weeks', value: '26 weeks' },
                            { label: '52 weeks', value: '52 weeks' },
                            { label: 'Other', value: 'Other' },
                            { label: "I'm not sure", value: 'Not sure', unsure: true },
                          ]}
                        />
                        {employerForm.gipDeferredPeriod === 'Other' && (
                          <div className="mt-[10px]">
                            <TextInput value={employerForm.gipDeferredPeriodOther}
                              onChange={(v) => setEmployer('gipDeferredPeriodOther', v)}
                              placeholder="Please specify" />
                          </div>
                        )}
                      </FieldWrapper>

                      {/* Benefit duration — quick-pick */}
                      <FieldWrapper>
                        <FieldLabel label="How long would payments continue?" optional />
                        <p className={hintCls}>How long the benefit would be paid if the customer remained unable to work.</p>
                        <QuickPick
                          value={employerForm.gipBenefitDuration}
                          onChange={(v) => {
                            setEmployer('gipBenefitDuration', v)
                            if (v !== 'Other') setEmployer('gipBenefitDurationOther', '')
                          }}
                          options={[
                            { label: '2 years', value: '2_years' },
                            { label: '5 years', value: '5_years' },
                            { label: 'To retirement', value: 'to_retirement' },
                            { label: 'Other', value: 'Other' },
                            { label: "I'm not sure", value: 'Not sure', unsure: true },
                          ]}
                        />
                        {employerForm.gipBenefitDuration === 'Other' && (
                          <div className="mt-[10px]">
                            <TextInput value={employerForm.gipBenefitDurationOther}
                              onChange={(v) => setEmployer('gipBenefitDurationOther', v)}
                              placeholder="Please specify" />
                          </div>
                        )}
                      </FieldWrapper>
                    </KalosFieldset>

                    <KalosFieldset title="Notes" optional>
                      <FieldWrapper>
                        <FieldLabel label="Additional notes" optional htmlFor="gip-notes" />
                        <Textarea id="gip-notes" value={employerForm.additionalBenefits}
                          onChange={(v) => setEmployer('additionalBenefits', v)}
                          placeholder="Any additional details the customer mentioned" rows={3} />
                      </FieldWrapper>
                    </KalosFieldset>
                  </>
                )}

                {/* ── Employer sick pay ── */}
                {employerForm.coverType === 'Employer sick pay' && (() => {
                  const espQuickOpts = [
                    { label: '1 week', value: '1_week' },
                    { label: '2 weeks', value: '2_weeks' },
                    { label: '4 weeks', value: '4_weeks' },
                    { label: '6 weeks', value: '6_weeks' },
                    { label: '8 weeks', value: '8_weeks' },
                    { label: '12 weeks', value: '12_weeks' },
                    { label: '6 months', value: '6_months' },
                    { label: 'Other', value: 'other' },
                    { label: "I'm not sure", value: 'not_sure', unsure: true },
                  ] as const
                  const espQuickToText = (v: string) => {
                    const map: Record<string, string> = {
                      '1_week': '1 week', '2_weeks': '2 weeks', '4_weeks': '4 weeks',
                      '6_weeks': '6 weeks', '8_weeks': '8 weeks', '12_weeks': '12 weeks', '6_months': '6 months',
                    }
                    return map[v] || ''
                  }
                  return (
                    <>
                      <KalosFieldset title="Employer details">
                        <FieldWrapper>
                          <FieldLabel label="Employer name" optional htmlFor="esp-employer-name" />
                          <TextInput id="esp-employer-name" value={employerForm.espEmployerName}
                            onChange={(v) => setEmployer('espEmployerName', v)}
                            placeholder="Enter employer name" />
                        </FieldWrapper>
                      </KalosFieldset>

                      <KalosFieldset title="Sick pay structure">

                        {/* Full pay question */}
                        <FieldWrapper>
                          <FieldLabel label="How long would the employer pay full salary for?" optional />
                          <p className={hintCls}>The customer might say "I think I get a couple of months full pay" or "not sure, just a few weeks".</p>
                          <QuickPick
                            value={employerForm.espFullPayQuick}
                            onChange={(v) => {
                              setEmployer('espFullPayQuick', v)
                              const mapped = espQuickToText(v)
                              if (mapped) {
                                const [amt, unit] = mapped.split(' ')
                                setEmployer('espFullPayAmount', amt)
                                setEmployer('espFullPayUnit', unit.includes('month') ? 'months' : 'weeks')
                              }
                              if (v === 'other') {
                                setEmployer('espFullPayAmount', '')
                              }
                            }}
                            options={espQuickOpts as unknown as { label: string; value: string; unsure?: boolean }[]}
                          />
                          {employerForm.espFullPayQuick === 'other' && (
                            <div className="mt-[10px] flex gap-[10px] items-stretch">
                              <input
                                type="text" inputMode="numeric"
                                value={employerForm.espFullPayAmount}
                                onChange={(e) => setEmployer('espFullPayAmount', e.target.value.replace(/\D/g, ''))}
                                placeholder="0"
                                className="w-[80px] px-[12px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#757575] outline-none bg-white border border-[#67686b] rounded-[6px] focus:border-[#231F20] transition-colors"
                              />
                              <div className="relative w-[120px]">
                                <select value={employerForm.espFullPayUnit}
                                  onChange={(e) => setEmployer('espFullPayUnit', e.target.value)}
                                  className={`${inputCls} appearance-none cursor-pointer pr-[40px]`}>
                                  <option value="weeks">Weeks</option>
                                  <option value="months">Months</option>
                                  <option value="days">Days</option>
                                </select>
                                <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                                  <svg width="12" height="7" viewBox="0 0 14 8" fill="none">
                                    <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                          {employerForm.espFullPayQuick === 'not_sure' && (
                            <div className="mt-[8px] flex items-center gap-[8px] bg-[#f5f0e8] border border-[#c9a96e] rounded-[6px] px-[14px] py-[10px]">
                              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                                <circle cx="7" cy="7" r="6" stroke="#6b5a34" strokeWidth="1.1"/>
                                <path d="M7 4.5v3M7 9.5h.01" stroke="#6b5a34" strokeWidth="1.2" strokeLinecap="round"/>
                              </svg>
                              <span className="font-lato text-[13px] text-[#6b5a34]">Customer unsure — note any details mentioned below</span>
                            </div>
                          )}
                        </FieldWrapper>

                        {/* Does pay drop to half? */}
                        <FieldWrapper>
                          <FieldLabel label="Does it then drop to reduced or half pay?" optional />
                          <p className={hintCls}>Many policies go full pay → half pay → nothing or SSP.</p>
                          <div className="flex flex-col gap-[9px] pl-[2px] mt-[2px]">
                            {[
                              { val: 'yes', label: 'Yes' },
                              { val: 'no', label: 'No — it stops completely' },
                              { val: 'not_sure', label: "I'm not sure" },
                            ].map(({ val, label }) => (
                              <button key={val} type="button"
                                onClick={() => setEmployer('espHasReducedPay', val)}
                                className="flex gap-[8px] items-center cursor-pointer w-full text-left">
                                <RadioCircle selected={employerForm.espHasReducedPay === val} />
                                <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{label}</span>
                              </button>
                            ))}
                          </div>
                        </FieldWrapper>

                        {/* Reduced pay duration — only if yes */}
                        {employerForm.espHasReducedPay === 'yes' && (
                          <ConditionalBlock>
                            <FieldWrapper>
                              <FieldLabel label="For how long does reduced pay last?" optional />
                              <QuickPick
                                value={employerForm.espReducedPayQuick}
                                onChange={(v) => {
                                  setEmployer('espReducedPayQuick', v)
                                  const mapped = espQuickToText(v)
                                  if (mapped) {
                                    const [amt, unit] = mapped.split(' ')
                                    setEmployer('espReducedPayAmount', amt)
                                    setEmployer('espReducedPayUnit', unit.includes('month') ? 'months' : 'weeks')
                                  }
                                  if (v === 'other') setEmployer('espReducedPayAmount', '')
                                }}
                                options={espQuickOpts as unknown as { label: string; value: string; unsure?: boolean }[]}
                              />
                              {employerForm.espReducedPayQuick === 'other' && (
                                <div className="mt-[10px] flex gap-[10px] items-stretch">
                                  <input
                                    type="text" inputMode="numeric"
                                    value={employerForm.espReducedPayAmount}
                                    onChange={(e) => setEmployer('espReducedPayAmount', e.target.value.replace(/\D/g, ''))}
                                    placeholder="0"
                                    className="w-[80px] px-[12px] py-[7px] font-lato text-[16px] leading-[1.55] text-[#231F20] placeholder-[#757575] outline-none bg-white border border-[#67686b] rounded-[6px] focus:border-[#231F20] transition-colors"
                                  />
                                  <div className="relative w-[120px]">
                                    <select value={employerForm.espReducedPayUnit}
                                      onChange={(e) => setEmployer('espReducedPayUnit', e.target.value)}
                                      className={`${inputCls} appearance-none cursor-pointer pr-[40px]`}>
                                      <option value="weeks">Weeks</option>
                                      <option value="months">Months</option>
                                      <option value="days">Days</option>
                                    </select>
                                    <div className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                                      <svg width="12" height="7" viewBox="0 0 14 8" fill="none">
                                        <path d="M1 1L7 7L13 1" stroke="#231F20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </FieldWrapper>
                          </ConditionalBlock>
                        )}

                        {/* What happens after sick pay ends */}
                        <FieldWrapper>
                          <FieldLabel label="After sick pay ends, what happens?" optional htmlFor="esp-after" />
                          <p className={hintCls}>e.g. "just statutory sick pay" or "I don't know"</p>
                          <QuickPick
                            value={employerForm.espAfterSickPay}
                            onChange={(v) => {
                              setEmployer('espAfterSickPay', v)
                              if (v !== 'other') setEmployer('espAfterSickPayOther', '')
                            }}
                            options={[
                              { label: 'SSP only', value: 'ssp_only' },
                              { label: 'Group IP kicks in', value: 'gip_kicks_in' },
                              { label: 'Personal IP policy', value: 'personal_ip' },
                              { label: 'Nothing', value: 'nothing' },
                              { label: 'Other', value: 'other' },
                              { label: "I'm not sure", value: 'not_sure', unsure: true },
                            ]}
                          />
                          {employerForm.espAfterSickPay === 'other' && (
                            <div className="mt-[10px]">
                              <TextInput value={employerForm.espAfterSickPayOther}
                                onChange={(v) => setEmployer('espAfterSickPayOther', v)}
                                placeholder="Please specify" />
                            </div>
                          )}
                        </FieldWrapper>
                      </KalosFieldset>

                      <KalosFieldset title="Notes" optional>
                        <FieldWrapper>
                          <FieldLabel label="Additional notes" optional htmlFor="esp-notes" />
                          <Textarea id="esp-notes" value={employerForm.additionalBenefits}
                            onChange={(v) => setEmployer('additionalBenefits', v)}
                            placeholder="Any additional details the customer mentioned" rows={3} />
                        </FieldWrapper>
                      </KalosFieldset>
                    </>
                  )
                })()}

                {/* ── Private medical — full PHI fields ── */}
                {employerForm.coverType === 'Private medical' && (
                  <>
                    {/* Provider */}
                    <KalosFieldset title="Provider">
                      <FieldWrapper>
                        <FieldLabel label="Who is your provider?" required />
                        {employerErrors.provider && <p className="font-lato text-[13px] text-[#C61310]">{employerErrors.provider}</p>}
                        <SearchableProviderDropdown
                          providers={PROVIDERS_HEALTH}
                          search={employerForm.providerSearch} onSearchChange={(v) => setEmployer('providerSearch', v)}
                          selected={employerForm.providerSelected} onSelect={(v) => setEmployer('providerSelected', v)}
                          otherText={employerForm.providerOtherText} onOtherTextChange={(v) => setEmployer('providerOtherText', v)}
                        />
                      </FieldWrapper>
                    </KalosFieldset>

                    {/* Lives covered */}
                    <KalosFieldset title="Lives covered">
                      <FieldWrapper>
                        <FieldLabel label="Who is covered?" optional />
                        <div className="flex flex-col gap-[9px] pl-[2px]">
                          {['David Johnson', 'Patricia Johnson'].map((opt) => {
                            const checked = employerForm.clients.includes(opt)
                            return (
                              <button key={opt} type="button"
                                onClick={() => setEmployer('clients', checked ? employerForm.clients.filter((c) => c !== opt) : [...employerForm.clients, opt])}
                                className="flex gap-[8px] items-center cursor-pointer w-full text-left">
                                <KalosCheckbox checked={checked} />
                                <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt}</span>
                              </button>
                            )
                          })}
                        </div>
                      </FieldWrapper>
                    </KalosFieldset>

                    {/* Cover figures */}
                    <KalosFieldset title="Cover figures">
                      <FieldWrapper>
                        <FieldLabel label="Type of cover" required htmlFor="emp-phi-cover-type" />
                        <SelectInput id="emp-phi-cover-type" value={employerForm.phiCoverType}
                          onChange={(v) => setEmployer('phiCoverType', v)}
                          options={PHI_COVER_TYPES.map((t) => ({ value: t, label: t }))} />
                      </FieldWrapper>
                      <FieldWrapper>
                        <FieldLabel label="Monthly premium" required htmlFor="emp-premium" />
                        <p className={hintCls}>This is the amount paid monthly for the benefit.</p>
                        {employerErrors.premium && <p className="font-lato text-[13px] text-[#C61310]">{employerErrors.premium}</p>}
                        <CurrencyInput id="emp-premium" value={employerForm.premium} onChange={(v) => setEmployer('premium', v)} />
                      </FieldWrapper>
                      <FieldWrapper>
                        <FieldLabel label="Excess" required htmlFor="emp-excess" />
                        <p className={hintCls}>The amount the customer pays towards treatment costs each policy year before the insurer covers the rest.</p>
                        {employerErrors.monthlyBenefit && <p className="font-lato text-[13px] text-[#C61310]">{employerErrors.monthlyBenefit}</p>}
                        <CurrencyInput id="emp-excess" value={employerForm.monthlyBenefit} onChange={(v) => setEmployer('monthlyBenefit', v)} />
                      </FieldWrapper>
                    </KalosFieldset>

                    {/* More details accordion */}
                    <div className="border border-[#e1e1e1] rounded-[12px] overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setShowMoreDetailsEmp((v) => !v)}
                        className="w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#f8f9fb] transition-colors cursor-pointer"
                      >
                        <div className="flex flex-col items-start gap-[2px]">
                          <span className="font-montserrat font-semibold text-[14px] text-[#231F20] leading-[1.3]">More details, if known</span>
                          <span className="font-lato text-[13px] text-[#67686b]">Policy dates, number, and other details</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                          className={`shrink-0 transition-transform duration-200 ${showMoreDetailsEmp ? 'rotate-180' : ''}`}>
                          <path d="M3 6L8 11L13 6" stroke="#67686b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {showMoreDetailsEmp && (
                        <div className="border-t border-[#e1e1e1] px-[20px] py-[20px] flex flex-col gap-[24px]">
                          <KalosFieldset title="Policy dates">
                            <FieldWrapper>
                              <FieldLabel label="Policy start date" optional />
                              <KalosDateField
                                month={employerForm.startMonth} year={employerForm.startYear}
                                onMonthChange={(v) => setEmployer('startMonth', v)}
                                onYearChange={(v) => setEmployer('startYear', v)}
                              />
                            </FieldWrapper>
                          </KalosFieldset>
                          <KalosFieldset title="Policy details">
                            <FieldWrapper>
                              <FieldLabel label="Policy number" optional htmlFor="emp-policy-number" />
                              <TextInput id="emp-policy-number" value={employerForm.policyNumber}
                                onChange={(v) => setEmployer('policyNumber', v)} placeholder="Enter policy number" />
                            </FieldWrapper>
                          </KalosFieldset>
                          <KalosFieldset title="Notes">
                            <FieldWrapper>
                              <FieldLabel label="Additional notes" optional htmlFor="emp-notes" />
                              <Textarea id="emp-notes" value={employerForm.additionalBenefits}
                                onChange={(v) => setEmployer('additionalBenefits', v)}
                                placeholder="Any additional notes about this benefit" rows={4} />
                            </FieldWrapper>
                          </KalosFieldset>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Submit */}
                {employerForm.coverType && (
                  <div className="flex items-center justify-between pt-[4px] pb-[8px]">
                    <p className="font-lato text-[13px] text-[#67686b]">
                      <span className="text-[#C61310] font-semibold">*</span> Required fields
                    </p>
                    <button type="submit" className="relative bg-[#00154d] rounded-[1000px] cursor-pointer hover:opacity-90 transition-opacity">
                      <div className="flex items-center justify-center px-[20px] py-[12px]">
                        <span className="font-montserrat font-medium text-[15px] text-white leading-[16px] whitespace-nowrap">Save Benefit</span>
                      </div>
                      <div aria-hidden className="absolute border-4 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
                    </button>
                  </div>
                )}
              </form>
            </div>
            </div>
            </div>
          </>
        ) : (
        <>

        {/* ── Saved policy panels ── */}
        {savedPolicies.map((policy, i) => editingIndex === i ? null : (
          <PolicyReadOnlyPanel key={i} policy={policy} index={i} onEdit={() => handleEdit(i)} />
        ))}

        {/* ── Add another / form card ── */}
        {!showForm && savedPolicies.length > 0 && (
          <div className="flex">
            <button type="button" onClick={handleAddAnother}
              className="relative rounded-[1000px] cursor-pointer hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-[8px] px-[20px] py-[12px]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="#00154d" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="font-['Montserrat:Medium',sans-serif] font-medium text-[13px] text-[#00154d] leading-[15px] whitespace-nowrap">Add another policy</span>
              </div>
              <div aria-hidden className="absolute border-2 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
            </button>
          </div>
        )}

        <div style={{ display: showForm ? 'block' : 'none' }}>
        <div className="bg-white border border-[#e1e1e1] rounded-[12px]">
        <div className="p-[20px] flex flex-col gap-[30px]">
          <h2 className="font-poppins font-bold text-[20px] text-black leading-[1.3] tracking-[-0.5px]">
            {editingIndex !== null ? `Edit policy ${editingIndex + 1}` : 'Add a policy'}
          </h2>

          {/* ── Document scan banner ── */}
          <input ref={fileInputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={handleDocumentUpload} />

          {/* Kalos info banner — upload / scanning / done states */}
          {scanState === 'idle' && (
            <div className="bg-[#F2F4F7] rounded-[12px] w-full border border-dashed border-[#67686b]">
              <div className="flex flex-col gap-[10px] items-start p-[20px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-[8px] items-center">
                    <svg width="20" height="20" viewBox="-1 -1 20 20" fill="none" className="shrink-0">
                      <path d="M5.21621 11.1141C8.40202 10.4365 10.967 7.69002 11.6084 4.2325C12.2499 7.69002 14.8142 10.4365 18 11.1141M18 11.118C14.8142 11.7956 12.2492 14.5421 11.6078 17.9997C10.9664 14.5421 8.40202 11.7956 5.21621 11.118" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                      <path d="M0 4.60302C2.13095 4.14981 3.84663 2.31269 4.27566 0C4.70475 2.31269 6.41999 4.14981 8.55092 4.60302M8.55092 4.60564C6.41999 5.05885 4.70431 6.89594 4.27528 9.20868C3.84625 6.89594 2.13095 5.05885 0 4.60564" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                    <p className="font-montserrat font-bold text-[18px] text-[#231f20] leading-normal">Upload policy document</p>
                  </div>
                </div>
                <div className="pl-[28px] flex flex-col gap-[10px] items-start w-full">
                  <p className="font-lato text-[16px] text-[#231f20] leading-[1.55]">Upload a PDF or image and we'll scan it to pre-populate the fields below. You can review and edit before saving.</p>
                  <button type="button" onClick={() => fileInputRef.current?.click()}
                    className="relative rounded-[1000px] flex items-center gap-[8px] px-[12px] py-[9px] cursor-pointer">
                    <svg width="16" height="14" viewBox="0 0 18.83 16.83" fill="none" className="shrink-0">
                      <path d="M12.9332 11.7569H14.8968C14.8968 11.7569 18.415 11.2817 18.415 7.70601C18.4154 7.16193 18.3097 6.62337 18.1042 6.1226C17.8987 5.62183 17.5976 5.16916 17.2191 4.7917C16.8405 4.41424 16.3922 4.11977 15.9011 3.92593C15.41 3.73209 14.8861 3.64287 14.3609 3.66362C13.8428 2.52524 12.973 1.59799 11.889 1.02834C10.805 0.458678 9.56857 0.279081 8.37498 0.517912C7.18138 0.756743 6.09867 1.40039 5.29786 2.34718C4.49705 3.29398 4.02378 4.48996 3.95282 5.74622C3.52584 5.65327 3.08422 5.66006 2.6601 5.76611C2.23598 5.87216 1.84005 6.07478 1.50114 6.35923C1.16223 6.64368 0.88888 7.00279 0.700988 7.41041C0.513095 7.81803 0.415394 8.2639 0.415 8.71555C0.415 11.8026 3.54536 11.7543 3.54536 11.7543H5.88782M9.50591 7.09879V16.415M11.9906 8.2352L9.57901 6.28015L7.16742 8.2352" stroke="#00154d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                    <span className="font-montserrat font-medium text-[13px] text-[#00154d] leading-[15px]">Upload document</span>
                    <div aria-hidden className="absolute border-2 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {scanState === 'scanning' && (
            <div className="bg-[#F2F4F7] rounded-[12px] w-full border border-dashed border-[#67686b]">
              <div className="flex flex-col gap-[10px] items-start p-[20px]">
                <div className="flex items-center gap-[8px]">
                  <svg className="animate-spin shrink-0" width="20" height="20" viewBox="-1 -1 20 20" fill="none">
                    <path d="M5.21621 11.1141C8.40202 10.4365 10.967 7.69002 11.6084 4.2325C12.2499 7.69002 14.8142 10.4365 18 11.1141M18 11.118C14.8142 11.7956 12.2492 14.5421 11.6078 17.9997C10.9664 14.5421 8.40202 11.7956 5.21621 11.118" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    <path d="M0 4.60302C2.13095 4.14981 3.84663 2.31269 4.27566 0C4.70475 2.31269 6.41999 4.14981 8.55092 4.60302M8.55092 4.60564C6.41999 5.05885 4.70431 6.89594 4.27528 9.20868C3.84625 6.89594 2.13095 5.05885 0 4.60564" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                  </svg>
                  <p className="font-montserrat font-bold text-[18px] text-[#231f20] leading-normal">Scanning document…</p>
                </div>
                <div className="pl-[28px]">
                  <p className="font-lato text-[16px] text-[#231f20] leading-[1.55]">Extracting policy details. This will only take a moment.</p>
                </div>
              </div>
            </div>
          )}

          {scanState === 'done' && (
            <div className="bg-[#F2F4F7] rounded-[12px] w-full border border-dashed border-[#67686b]">
              <div className="flex flex-col gap-[10px] items-start p-[20px]">
                <div className="flex items-center justify-between w-full">
                  <div className="flex gap-[8px] items-center">
                    <svg width="20" height="20" viewBox="-1 -1 20 20" fill="none" className="shrink-0">
                      <path d="M5.21621 11.1141C8.40202 10.4365 10.967 7.69002 11.6084 4.2325C12.2499 7.69002 14.8142 10.4365 18 11.1141M18 11.118C14.8142 11.7956 12.2492 14.5421 11.6078 17.9997C10.9664 14.5421 8.40202 11.7956 5.21621 11.118" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                      <path d="M0 4.60302C2.13095 4.14981 3.84663 2.31269 4.27566 0C4.70475 2.31269 6.41999 4.14981 8.55092 4.60302M8.55092 4.60564C6.41999 5.05885 4.70431 6.89594 4.27528 9.20868C3.84625 6.89594 2.13095 5.05885 0 4.60564" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                    <p className="font-montserrat font-bold text-[18px] text-[#231f20] leading-normal">Fields pre-populated from document</p>
                  </div>
                  <button type="button" onClick={() => setScanState('idle')} className="shrink-0 cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 18.83 18.83" fill="none">
                      <path d="M0.415 0.415L18.415 18.415M18.415 0.415L0.415 18.415" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.83" />
                    </svg>
                  </button>
                </div>
                <div className="pl-[28px]">
                  <p className="font-lato text-[16px] text-[#231f20] leading-[1.55]">Review the details below and make any corrections before saving.</p>
                </div>
              </div>
            </div>
          )}

          <form ref={protectionFormRef} onSubmit={handleSubmit} className="flex flex-col gap-[30px]">

            {/* ── Validation error summary ── */}
            {Object.keys(errors).length > 0 && (
              <div className="bg-[#fdf2f2] border border-[#C61310] rounded-[12px] px-[16px] py-[12px]">
                <p className="font-lato font-bold text-[14px] text-[#C61310] mb-[4px]">Please complete the required fields before saving:</p>
                <ul className="list-disc list-inside flex flex-col gap-[2px]">
                  {Object.values(errors).map((msg, i) => (
                    <li key={i} className="font-lato text-[13px] text-[#C61310]">{msg}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* ── Document review banner ── */}
            {foundCount > 0 && (
              <div className="flex items-center justify-between gap-[12px] bg-[#fff8f4] border border-[#F26A2C] rounded-[10px] px-[16px] py-[12px]">
                <div className="flex items-center gap-[10px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#F26A2C" strokeWidth="1.2"/>
                    <path d="M8 5v4M8 11h.01" stroke="#F26A2C" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  <span className="font-lato text-[14px] text-[#c25210]">
                    <span className="font-bold">{foundCount} field{foundCount !== 1 ? 's' : ''}</span> found in document — confirm each with the customer
                  </span>
                </div>
                <button type="button" onClick={confirmAll}
                  className="shrink-0 font-montserrat font-semibold text-[12px] text-[#c25210] hover:text-[#231F20] transition-colors cursor-pointer whitespace-nowrap underline underline-offset-2 decoration-[#f5b08a]">
                  Confirm all
                </button>
              </div>
            )}
            {foundCount === 0 && Object.keys(fs).length > 0 && (
              <div className="flex items-center gap-[10px] bg-[#f3faf6] border border-[#2e7d4f] rounded-[10px] px-[16px] py-[12px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                  <circle cx="8" cy="8" r="7" stroke="#2e7d4f" strokeWidth="1.2"/>
                  <path d="M5 8l2.5 2.5L11 5" stroke="#2e7d4f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-lato text-[14px] text-[#2e7d4f] font-medium">All extracted fields confirmed — ready to save</span>
              </div>
            )}

            {/* ── Type of Cover ── */}
            <FieldWrapper>
              <FieldLabel label="Type of cover" optional htmlFor="cover-type" />
              {errors.coverType && <p className="font-lato text-[13px] text-[#C61310]">{errors.coverType}</p>}
              <CoverTypeSelect value={form.coverType} onChange={changeCoverType} />
            </FieldWrapper>

            {!ct && (
              <div className="bg-white border border-[#e1e1e1] rounded-[12px] p-[40px] text-center">
                <div className="w-[48px] h-[48px] bg-[#f0f5fb] rounded-full flex items-center justify-center mx-auto mb-[14px]">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="#1B4F8A" strokeWidth="1.5" />
                    <path d="M11 7v5M11 15h.01" stroke="#1B4F8A" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="font-lato text-[15px] text-[#67686b]">Select a cover type above to begin entering policy details.</p>
              </div>
            )}

            {ct && (
              <>
                {/* ── ESSENTIAL: Provider ── */}
                <KalosFieldset title="Provider">
                  <FieldWrapper>
                    <FieldLabel label="Who is your provider?" required />
                    {errors.provider && <p className="font-lato text-[13px] text-[#C61310]">{errors.provider}</p>}
                    <WithStatus fieldKey="provider" fieldStates={fs} onConfirm={confirmField}>
                    <WithUnknown fieldKey="provider" unknowns={uk} onToggle={toggleUnknown}>
                      <SearchableProviderDropdown
                        providers={providersByGroup(group)}
                        search={form.providerSearch} onSearchChange={(v) => set('providerSearch', v)}
                        selected={form.providerSelected} onSelect={(v) => set('providerSelected', v)}
                        otherText={form.providerOtherText} onOtherTextChange={(v) => set('providerOtherText', v)}
                      />
                    </WithUnknown>
                    </WithStatus>
                  </FieldWrapper>
                </KalosFieldset>

                {/* ── ESSENTIAL: Lives covered ── */}
                <KalosFieldset title="Lives covered">
                  <FieldWrapper>
                    {ct === 'Private medical' || ct === 'Private Health Insurance' || group === 'stu' ? (
                      <>
                        <FieldLabel label="Who is covered?" optional />
                        <div className="flex flex-col gap-[9px] pl-[2px]">
                          {['David Johnson', 'Patricia Johnson'].map((opt) => {
                            const checked = form.clients.includes(opt)
                            return (
                              <button key={opt} type="button"
                                onClick={() => set('clients', checked ? form.clients.filter((c) => c !== opt) : [...form.clients, opt])}
                                className="flex gap-[8px] items-center cursor-pointer w-full text-left">
                                <KalosCheckbox checked={checked} />
                                <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt}</span>
                              </button>
                            )
                          })}
                        </div>
                      </>
                    ) : (
                      <>
                        <FieldLabel label="Who is insured?" required />
                        {errors.insured && <p className="font-lato text-[13px] text-[#C61310]">{errors.insured}</p>}
                        <div className="flex flex-col gap-[9px] pl-[2px]">
                          {['David Johnson', 'Patricia Johnson', ...(group !== 'income' && ct !== 'Relevant Life' ? ['Joint'] : [])].map((opt) => (
                            <button key={opt} type="button" onClick={() => { set('insured', opt); if (opt !== 'Joint') set('jointDeath', '') }}
                              className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                              <RadioCircle selected={form.insured === opt} />
                              <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt}</span>
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </FieldWrapper>
                  {form.insured === 'Joint' && (
                    <FieldWrapper>
                      <FieldLabel label="Is the policy joint first or second death?" required />
                      {errors.jointDeath && <p className="font-lato text-[13px] text-[#C61310]">{errors.jointDeath}</p>}
                      <div className="flex flex-col gap-[9px] pl-[2px]">
                        {[
                          { val: 'Joint first death', hint: 'Pays out on the first death, the surviving partner is left without cover.' },
                          ...(!FIB_TYPES.has(ct) ? [{ val: 'Joint second death', hint: 'Pays out only after both people have died, typically used for inheritance tax planning.' }] : []),
                        ].map(({ val, hint }) => (
                          <button key={val} type="button" onClick={() => set('jointDeath', val)}
                            className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                            <div className="mt-[2px] shrink-0"><RadioCircle selected={form.jointDeath === val} /></div>
                            <div className="flex flex-col gap-[2px]">
                              <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{val}</span>
                              <span className="font-lato text-[13px] text-[#67686b] leading-[1.4]">{hint}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </FieldWrapper>
                  )}
                </KalosFieldset>

                {/* ── ESSENTIAL: Cover figures ── */}
                <KalosFieldset title="Cover figures">
                  {showPhiCoverType && (
                    <FieldWrapper>
                      <FieldLabel label="Type of cover" required htmlFor="phi-cover-type" />
                      <SelectInput id="phi-cover-type" value={form.phiCoverType}
                        onChange={(v) => set('phiCoverType', v)} options={phiOptions} />
                    </FieldWrapper>
                  )}
                  <FieldWrapper>
                    <FieldLabel label="Monthly premium" required htmlFor="premium" />
                    <p className={hintCls}>This is the amount paid monthly for the benefit.</p>
                    {errors.premium && <p className="font-lato text-[13px] text-[#C61310]">{errors.premium}</p>}
                    <WithStatus fieldKey="premium" fieldStates={fs} onConfirm={confirmField}>
                    <WithUnknown fieldKey="premium" unknowns={uk} onToggle={toggleUnknown}>
                      <CurrencyInput id="premium" value={form.premium} onChange={(v) => set('premium', v)} />
                    </WithUnknown>
                    </WithStatus>
                  </FieldWrapper>
                  {showSumAssured && (
                    <FieldWrapper>
                      <FieldLabel label="Amount of cover (sum assured)" required htmlFor="sum-assured" />
                      {errors.sumAssured && <p className="font-lato text-[13px] text-[#C61310]">{errors.sumAssured}</p>}
                      <WithStatus fieldKey="sumAssured" fieldStates={fs} onConfirm={confirmField}>
                      <WithUnknown fieldKey="sumAssured" unknowns={uk} onToggle={toggleUnknown}>
                        <CurrencyInput id="sum-assured" value={form.sumAssured} onChange={(v) => set('sumAssured', v)} />
                      </WithUnknown>
                      </WithStatus>
                    </FieldWrapper>
                  )}
                  {showStuSumAssured && (
                    <FieldWrapper>
                      <FieldLabel label="Amount of cover" required htmlFor="stu-sum-assured" />
                      <p className={hintCls}>Enter the amount the policy would pay, either as a lump sum or regular monthly benefit.</p>
                      {errors.sumAssured && <p className="font-lato text-[13px] text-[#C61310]">{errors.sumAssured}</p>}
                      <WithUnknown fieldKey="sumAssured" unknowns={uk} onToggle={toggleUnknown}>
                        <CurrencyInput id="stu-sum-assured" value={form.sumAssured} onChange={(v) => set('sumAssured', v)} />
                      </WithUnknown>
                    </FieldWrapper>
                  )}
                  {showMonthlyBenefitField && group !== 'income' && group !== 'stu' && (
                    <FieldWrapper>
                      <FieldLabel label="Monthly benefit" required htmlFor="monthly-benefit" />
                      {errors.monthlyBenefit && <p className="font-lato text-[13px] text-[#C61310]">{errors.monthlyBenefit}</p>}
                      <WithUnknown fieldKey="monthlyBenefit" unknowns={uk} onToggle={toggleUnknown}>
                        <CurrencyInput id="monthly-benefit" value={form.monthlyBenefit} onChange={(v) => set('monthlyBenefit', v)} />
                      </WithUnknown>
                    </FieldWrapper>
                  )}
                  {group === 'health' && (
                    <FieldWrapper>
                      <FieldLabel label="Excess" required htmlFor="phi-excess" />
                      <p className={hintCls}>The amount the customer pays towards treatment costs each policy year before the insurer covers the rest.</p>
                      {errors.excess && <p className="font-lato text-[13px] text-[#C61310]">{errors.excess}</p>}
                      <WithUnknown fieldKey="excess" unknowns={uk} onToggle={toggleUnknown}>
                        <CurrencyInput id="phi-excess" value={form.excess} onChange={(v) => set('excess', v)} />
                      </WithUnknown>
                    </FieldWrapper>
                  )}
                  {group === 'income' && (
                    <FieldWrapper>
                      <FieldLabel label="Monthly payout amount" optional htmlFor="ip-payout" />
                      <p className={hintCls}>Calculated from salary and percentage covered. You can override this if the actual payout differs.</p>
                      <WithUnknown fieldKey="monthlyBenefit" unknowns={uk} onToggle={toggleUnknown}>
                        <CurrencyInput id="ip-payout" value={form.monthlyBenefit}
                          onChange={(v) => set('monthlyBenefit', v)}
                          placeholder={form.salary ? (parseFloat(form.salary) * form.salaryPercentage / 100 / 12).toFixed(2) : '0.00'} />
                      </WithUnknown>
                    </FieldWrapper>
                  )}
                </KalosFieldset>

                {/* ── MORE DETAILS accordion ── */}
                <div className="border border-[#e1e1e1] rounded-[12px] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowMoreDetails((v) => !v)}
                    className="w-full flex items-center justify-between px-[20px] py-[16px] bg-white hover:bg-[#f8f9fb] transition-colors cursor-pointer"
                  >
                    <div className="flex flex-col items-start gap-[2px]">
                      <span className="font-montserrat font-semibold text-[14px] text-[#231F20] leading-[1.3]">More details, if known</span>
                      <span className="font-lato text-[13px] text-[#67686b]">Policy dates, number, purpose, and other details</span>
                    </div>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={`shrink-0 transition-transform duration-200 ${showMoreDetails ? 'rotate-180' : ''}`}
                    >
                      <path d="M3 6L8 11L13 6" stroke="#67686b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {showMoreDetails && (
                    <div className="border-t border-[#e1e1e1] px-[20px] py-[20px] flex flex-col gap-[24px]">

                      {/* Policy dates */}
                      <KalosFieldset title="Policy dates">
                        <FieldWrapper>
                          <FieldLabel label="Policy start date" optional />
                          <WithStatus fieldKey="startDate" fieldStates={fs} onConfirm={confirmField}>
                          <WithUnknown fieldKey="startDate" unknowns={uk} onToggle={toggleUnknown}>
                            <KalosDateField
                              month={form.startMonth} year={form.startYear}
                              onMonthChange={(v) => set('startMonth', v)}
                              onYearChange={(v) => set('startYear', v)}
                            />
                          </WithUnknown>
                          </WithStatus>
                        </FieldWrapper>
                        {group === 'income' && (
                          <FieldWrapper>
                            <FieldLabel label="Policy end date" optional />
                            <WithUnknown fieldKey="endDate" unknowns={uk} onToggle={toggleUnknown}>
                              <KalosDateField
                                month={form.endMonth ?? ''} year={form.endYear ?? ''}
                                onMonthChange={(v) => set('endMonth', v)}
                                onYearChange={(v) => set('endYear', v)}
                              />
                            </WithUnknown>
                          </FieldWrapper>
                        )}
                      </KalosFieldset>

                      {/* Policy details */}
                      <KalosFieldset title="Policy details">
                        {group === 'health' && (
                          <FieldWrapper>
                            <FieldLabel label="Annual limit" optional htmlFor="annual-limit" />
                            <p className={hintCls}>The maximum the insurer will pay towards treatment costs in a policy year. Once reached, any further costs fall to the customer.</p>
                            <CurrencyInput id="annual-limit" value={form.annualLimit} onChange={(v) => set('annualLimit', v)} />
                          </FieldWrapper>
                        )}
                        <FieldWrapper>
                          <FieldLabel label="Policy number" optional htmlFor="policy-number" />
                          <WithStatus fieldKey="policyNumber" fieldStates={fs} onConfirm={confirmField}>
                          <WithUnknown fieldKey="policyNumber" unknowns={uk} onToggle={toggleUnknown}>
                            <TextInput id="policy-number" value={form.policyNumber}
                              onChange={(v) => set('policyNumber', v)} placeholder="Enter policy number" />
                          </WithUnknown>
                          </WithStatus>
                        </FieldWrapper>

                        {group === 'business' && (
                          <FieldWrapper>
                            <FieldLabel label="Business name" optional htmlFor="business-name" />
                            <p className={hintCls}>The name of the business that owns the policy</p>
                            <TextInput id="business-name" value={form.businessName}
                              onChange={(v) => set('businessName', v)} placeholder="Enter business name" />
                          </FieldWrapper>
                        )}

                        {ct === 'Business Cover' && (
                          <FieldWrapper>
                            <FieldLabel label="Policy type" optional htmlFor="business-policy-type" />
                            <SelectInput id="business-policy-type" value={form.businessPolicyType}
                              onChange={(v) => set('businessPolicyType', v)}
                              options={[
                                { value: 'life_insurance', label: 'Life insurance' },
                                { value: 'critical_illness_cover', label: 'Critical illness cover' },
                                { value: 'income_protection', label: 'Income protection' },
                              ]} />
                          </FieldWrapper>
                        )}

                        {showTermType && group !== 'income' && (
                          <FieldWrapper>
                            <FieldLabel label={isWOL ? "Premium type" : "Policy term type"} optional htmlFor="term-type" />
                            <WithStatus fieldKey="termType" fieldStates={fs} onConfirm={confirmField}>
                            <WithUnknown fieldKey="termType" unknowns={uk} onToggle={toggleUnknown}>
                              {(showTermTypeDropdown && !isWOL) ? (
                                <SelectInput id="term-type" value={form.termType}
                                  onChange={(v) => set('termType', v)} options={termTypeOptions} />
                              ) : (
                                <TextInput id="term-type" value={form.termTypeFreeText}
                                  onChange={(v) => set('termTypeFreeText', v)} placeholder="e.g. 20 years, to age 65" />
                              )}
                            </WithUnknown>
                            </WithStatus>
                          </FieldWrapper>
                        )}

                        {showRemainingTerm && (
                          <FieldWrapper>
                            <FieldLabel label="Remaining term" optional htmlFor="remaining-term" />
                            <WithStatus fieldKey="remainingTerm" fieldStates={fs} onConfirm={confirmField}>
                            <WithUnknown fieldKey="remainingTerm" unknowns={uk} onToggle={toggleUnknown}>
                              <div className="self-start">
                                <NumberStepper id="remaining-term" value={form.remainingTerm} onChange={(v) => set('remainingTerm', v)} suffix=" yrs" max={50} />
                              </div>
                            </WithUnknown>
                            </WithStatus>
                            <p className={hintCls}>Enter the number of years remaining.</p>
                          </FieldWrapper>
                        )}

                        {group === 'stu' && (
                          <FieldWrapper>
                            <FieldLabel label="Deferment period" optional htmlFor="stu-deferment" />
                            <WithUnknown fieldKey="defermentPeriod" unknowns={uk} onToggle={toggleUnknown}>
                              <SelectInput id="stu-deferment" value={form.defermentPeriod}
                                onChange={(v) => set('defermentPeriod', v)}
                                placeholder="Select deferment period"
                                options={['4 weeks', '8 weeks', '13 weeks', '26 weeks', '52 weeks'].map((o) => ({ value: o, label: o }))} />
                            </WithUnknown>
                          </FieldWrapper>
                        )}

                        {ct === 'Relevant Life' && (
                          <button type="button" onClick={() => set('includesSIC', !form.includesSIC)}
                            className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                            <div className="flex items-start pt-[6px] shrink-0">
                              <KalosCheckbox checked={form.includesSIC} />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                              <span className="font-lato text-[16px] leading-[1.55] text-[#231f20]">Includes serious illness cover?</span>
                              <span className={hintCls}>Applicable to old Aviva policies only</span>
                            </div>
                          </button>
                        )}
                      </KalosFieldset>

                      {/* IP-specific benefit details */}
                      {group === 'income' && (
                        <KalosFieldset title="Benefit details">
                          <FieldWrapper>
                            <FieldLabel label="Salary" optional htmlFor="ip-salary" />
                            <CurrencyInput id="ip-salary" value={form.salary ?? ''} onChange={(v) => set('salary', v)} placeholder="Annual salary" />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel label="Monthly net income" optional htmlFor="ip-net-income" />
                            <CurrencyInput id="ip-net-income" value={form.monthlyNetIncome ?? ''} onChange={(v) => set('monthlyNetIncome', v)} placeholder="Monthly take-home pay" />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel label="Percentage of salary covered" optional />
                            <p className={hintCls}>Most policies cover up to 65% of gross salary.</p>
                            <div className="flex flex-col gap-[8px]">
                              <div className="flex items-center gap-[12px]">
                                <input type="range" min={0} max={100} step={5} value={form.salaryPercentage ?? 65}
                                  onChange={(e) => set('salaryPercentage', parseInt(e.target.value))}
                                  className="flex-1 accent-[#F26A2C] h-[4px] cursor-pointer" />
                                <div className="bg-white border border-[#67686b] rounded-[6px] shrink-0 w-[70px] flex items-center focus-within:border-[#231F20] transition-colors">
                                  <input type="text" inputMode="numeric"
                                    value={form.salaryPercentage ?? 65}
                                    onChange={(e) => {
                                      const v = Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                                      set('salaryPercentage', v)
                                    }}
                                    className="w-full px-[8px] py-[7px] font-lato font-bold text-[16px] text-[#231F20] text-right outline-none bg-transparent" />
                                  <span className="font-lato font-bold text-[16px] text-[#231F20] pr-[8px]">%</span>
                                </div>
                              </div>
                              <div className="flex justify-between">
                                <span className="font-lato text-[12px] text-[#67686b]">0%</span>
                                <span className="font-lato text-[12px] text-[#67686b]">100%</span>
                              </div>
                            </div>
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel label="How long before payments start?" optional />
                            <p className={hintCls}>This is sometimes called the deferred period.</p>
                            <WithUnknown fieldKey="defermentPeriod" unknowns={uk} onToggle={toggleUnknown}>
                              <SelectInput value={form.defermentPeriod} onChange={(v) => set('defermentPeriod', v)}
                                options={DEFERMENT_PERIODS.map((o) => ({ value: o, label: o }))} />
                            </WithUnknown>
                            {form.defermentPeriod === 'Other' && !uk.includes('defermentPeriod') && (
                              <div className="pl-[14px] border-l-2 border-[#e1e1e1] ml-[2px] mt-[8px]">
                                <FieldWrapper>
                                  <FieldLabel label="Other details" optional htmlFor="deferment-other" />
                                  <TextInput id="deferment-other" value={form.defermentPeriodOther} onChange={(v) => set('defermentPeriodOther', v)}
                                    placeholder="Please specify the deferred period" />
                                </FieldWrapper>
                              </div>
                            )}
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel label="How long would payments continue for?" optional />
                            <p className={hintCls}>This is sometimes called the benefit payment period.</p>
                            <WithUnknown fieldKey="benefitPaymentPeriod" unknowns={uk} onToggle={toggleUnknown}>
                              <SelectInput value={form.benefitPaymentPeriod} onChange={(v) => set('benefitPaymentPeriod', v)}
                                options={['Full term', '1 year', '2 years', '5 years', 'Other', 'Not sure'].map((o) => ({ value: o, label: o }))} />
                            </WithUnknown>
                            {form.benefitPaymentPeriod === 'Other' && !uk.includes('benefitPaymentPeriod') && (
                              <div className="pl-[14px] border-l-2 border-[#e1e1e1] ml-[2px] mt-[8px]">
                                <FieldWrapper>
                                  <FieldLabel label="Other details" optional htmlFor="benefit-period-other" />
                                  <TextInput id="benefit-period-other" value={form.benefitPaymentPeriodOther} onChange={(v) => set('benefitPaymentPeriodOther', v)}
                                    placeholder="Please specify the benefit payment period" />
                                </FieldWrapper>
                              </div>
                            )}
                          </FieldWrapper>
                        </KalosFieldset>
                      )}

                      {/* IP policy changes */}
                      {group === 'income' && (
                        <KalosFieldset title="Policy changes">
                          <FieldWrapper>
                            <FieldLabel label="Can you increase the cover later without new medical questions? (GIO)" optional />
                            <p className={hintCls}>Some policies let you increase cover after certain life events, such as having a child, getting married, or increasing your mortgage.</p>
                            <YesNo value={form.canAmend} onChange={(v) => set('canAmend', v)} extraOption="Not sure" />
                          </FieldWrapper>
                          <FieldWrapper>
                            <FieldLabel label="Can the monthly cost change?" optional />
                            <p className={hintCls}>Check whether the premium is guaranteed, reviewable, or age-costed in your policy documents.</p>
                            <div className="flex flex-col gap-[9px] pl-[2px]">
                              {['Fixed / guaranteed', 'Reviewable', 'Increases with age', 'Not sure'].map((opt) => (
                                <button key={opt} type="button" onClick={() => set('ipPremiumType', opt)}
                                  className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                                  <RadioCircle selected={form.ipPremiumType === opt} />
                                  <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt}</span>
                                </button>
                              ))}
                            </div>
                          </FieldWrapper>
                        </KalosFieldset>
                      )}

                      {/* Policy link */}
                      {ct !== 'Private medical' && ct !== 'Private Health Insurance' && (
                        <KalosFieldset title="Policy link">
                          <FieldWrapper>
                            <FieldLabel label="What is this policy mainly linked to?" optional htmlFor="linked-to" />
                            <p className="font-lato text-[14px] text-[#67686b] leading-[1.55]">Choose the main reason the policy was set up. If more than one applies, choose the strongest link.</p>
                            {errors.linkedTo && <p className="font-lato text-[13px] text-[#C61310]">{errors.linkedTo}</p>}
                            <div className="flex flex-col gap-[9px] pl-[2px]">
                              {(group === 'stu' ? POLICY_RELATES_TO_STU : group === 'income' ? POLICY_RELATES_TO_INCOME : group === 'business' ? POLICY_RELATES_TO_BUSINESS : isWOL ? POLICY_RELATES_TO_WOL : POLICY_RELATES_TO_BASE).map((opt) => (
                                <button key={opt.value} type="button"
                                  onClick={() => { set('linkedTo', opt.value); if (opt.value !== 'something_else' && opt.value !== 'other') set('linkedToOther', '') }}
                                  className="flex gap-[8px] items-start cursor-pointer w-full text-left">
                                  <RadioCircle selected={form.linkedTo === opt.value} />
                                  <span className="font-lato text-[16px] leading-[1.25] text-[#231F20]">{opt.label}</span>
                                </button>
                              ))}
                            </div>
                          </FieldWrapper>
                          {(form.linkedTo === 'something_else' || form.linkedTo === 'other') && (
                            <ConditionalBlock>
                              <FieldWrapper>
                                <FieldLabel label="Please provide details" required htmlFor="linked-to-other" />
                                {errors.linkedToOther && <p className="font-lato text-[13px] text-[#C61310]">{errors.linkedToOther}</p>}
                                <TextInput id="linked-to-other" value={form.linkedToOther}
                                  onChange={(v) => set('linkedToOther', v)}
                                  placeholder="Describe what this policy relates to…" />
                              </FieldWrapper>
                            </ConditionalBlock>
                          )}
                        </KalosFieldset>
                      )}

                      {/* Notes */}
                      <KalosFieldset title="Notes">
                        <FieldWrapper>
                          <FieldLabel label="Additional notes" optional htmlFor="additional-benefits" />
                          <Textarea id="additional-benefits" value={form.additionalBenefits}
                            onChange={(v) => set('additionalBenefits', v)}
                            placeholder="Describe any additional benefits, policy changes or any other notes" rows={4} />
                        </FieldWrapper>
                      </KalosFieldset>

                    </div>
                  )}
                </div>

                {/* ── Submit ── */}
                <div className="flex items-center justify-between pt-[4px] pb-[8px]">
                  <p className="font-lato text-[13px] text-[#67686b]">
                    <span className="text-[#C61310] font-semibold">*</span> Required fields
                  </p>
                  <button type="submit" className="relative bg-[#00154d] rounded-[1000px] cursor-pointer hover:opacity-90 transition-opacity">
                    <div className="flex items-center justify-center px-[20px] py-[12px]">
                      <span className="font-montserrat font-medium text-[15px] text-white leading-[16px] whitespace-nowrap">Save Policy</span>
                    </div>
                    <div aria-hidden className="absolute border-4 border-[#00154d] inset-0 pointer-events-none rounded-[1000px]" />
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
        </div>
        </div>

        </>
        )}

      </div>
      </div>
      </main>
    </div>
  )
}
