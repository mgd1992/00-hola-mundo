import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
  return(
    <section className='App'>
      <TwitterFollowCard userName="mgd1992" name="Marco Garbini" initialIsFollowing />
      <TwitterFollowCard userName="Moises-V5" name="Moises Velazquez" initialIsFollowing={false} />
    </section>
  )
}
