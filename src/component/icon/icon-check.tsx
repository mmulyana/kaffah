import { IconProps } from './type'

export default function IconCheck({ stroke = 'white', ...props }: IconProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20 6L9 17L4 12'
        stroke={stroke}
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
