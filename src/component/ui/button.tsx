type Props = {
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<'button'>

export default function Button(props: Props) {
  return (
    <button className={props.className} {...props}>
      {props.children}
    </button>
  )
}
