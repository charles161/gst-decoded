import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { CalloutBox } from '../../components/storytelling/CalloutBox'
import { DecisionTree } from '../../components/widgets/DecisionTree'

export function Ch16() {
  return (
    <Chapter id="ch16" number={16} title="The Composition vs. Regular Scheme Decision Tree">
      <H3>The Decision Every Small Business Must Make</H3>
      <P>
        Every small business owner faces a fundamental choice: go with the <Glow>Composition Scheme</Glow> (simpler, lower tax rate on turnover, but no <Glow>ITC</Glow> and no interstate sales) or the <Glow>Regular Scheme</Glow> (more compliance, but full <Glow>ITC</Glow> benefits and no restrictions).
      </P>
      <P>
        Here's how to think about it simply. The decision depends on a series of questions: Do you sell across state borders? Do you sell on Amazon/Flipkart? Is your turnover above INR 1.5 crore? Do your buyers need <Glow>ITC</Glow>? And finally -- is 1% tax on turnover cheaper than the <Glow>ITC</Glow> benefit you'd lose?
      </P>

      <WidgetSlot title="Find Your Scheme">
        <DecisionTree />
      </WidgetSlot>

      <CalloutBox type="product">
        Our product does this calculation automatically based on a few questions: What do you sell? Who do you sell to? Where are your customers? What's your monthly purchase bill?
      </CalloutBox>
    </Chapter>
  )
}
