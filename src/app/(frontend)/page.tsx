// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from '@thirdbracket/bracketui'
import HeroSection from '../../components/HeroSection'
import { FeatureOne } from '../../components/FeatureOne'
import { FeatureTwo } from '../../components/FeatureTwo'
import Subscription from '../../components/Subscription'

export default function Home() {
  return (
    <Bracket fluid centered padding="medium">
      <HeroSection />

      <FeatureOne />
      <FeatureTwo />
      <Subscription />
    </Bracket>
  )
}
