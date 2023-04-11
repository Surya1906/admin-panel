import { SigninBlock, LeftSideSignIn, TopSideSignIn } from '@/components'
import { useWindowDimensions } from '@/hooks'
export default function Home() {
  const { width } = useWindowDimensions()
  if (width >= 768) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <LeftSideSignIn />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: '#F5F5F5',
          }}
        >
          <SigninBlock />
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TopSideSignIn />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: '#F5F5F5',
          }}
        >
          <SigninBlock />
        </div>
      </div>
    )
  }
}
