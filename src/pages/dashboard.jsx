import {
  NavBar,
  DashboardHeader,
  DashboardWidgetsRow1,
  LineChart,
  DashboardWidget2,
  DashboardWidget3,
  DashboardWidget4,
} from '@/components'
import { useSession, getSession } from 'next-auth/react'
const dashboard = () => {
  const { data: session } = useSession()
  return (
    <div
      style={{
        background: '#dddddd',
        padding: '40px 60px 40px 40px',
        display: 'flex',
        flexDirection: 'row',
        gap: '60px',
        overflow: 'auto',
      }}
    >
      <NavBar />
      <div style={{ flex: '1' }}>
        <DashboardHeader UserProfilePic={session?.user?.image} />
        <div
          style={{
            display: 'flex',
            gap: '40px',
            flexDirection: 'column',
          }}
        >
          <DashboardWidgetsRow1 />
          <DashboardWidget2 />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: '40px',
            }}
          >
            <DashboardWidget3 />
            <DashboardWidget4 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return {
    props: { session },
  }
}
