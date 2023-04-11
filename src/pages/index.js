import { SigninBlock, LeftSideSignIn } from '@/components'
export default function Home() {
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
}
