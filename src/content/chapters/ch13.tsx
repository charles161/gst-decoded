import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList, CodeBlock } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { PenaltyCalculator } from '../../components/widgets/PenaltyCalculator'

export function Ch13() {
  return (
    <Chapter id="ch13" number={13} title="Penalties -- The Stick Behind the Carrot">
      <H3>The Penalty Philosophy</H3>
      <P>
        <Glow>GST</Glow> penalties are designed with a simple escalation:
      </P>
      <OrderedList>
        <li><Glow>Late fees</Glow> -- fixed daily charges for late filing (like a library fine)</li>
        <li><Glow>Interest</Glow> -- charged on unpaid tax (like credit card interest)</li>
        <li><Glow>Penalties</Glow> -- for deliberate non-compliance (like a court fine)</li>
        <li><Glow>Prosecution</Glow> -- for serious fraud (like going to jail)</li>
      </OrderedList>

      <H3>What Missing Each Deadline Costs</H3>
      <P>
        <Glow>Miss GSTR-1 by one week</Glow> (filed on 18th instead of 11th):
      </P>
      <BulletList>
        <li>Late fee: 7 days x INR 50/day = INR 350</li>
        <li>Real cost: Your buyers' <Glow>ITC</Glow> for your invoices is delayed by a week</li>
      </BulletList>

      <P>
        <Glow>Miss GSTR-3B by one month</Glow> (filed on 20th of next month):
      </P>
      <BulletList>
        <li>Late fee: 30 days x INR 50/day = INR 1,500</li>
        <li>Interest: 18% p.a. on the tax amount (if your tax was INR 1 lakh, that's ~INR 1,500)</li>
        <li>Real cost: Your <Glow>e-way bill</Glow> generation might get blocked</li>
      </BulletList>

      <P>
        <Glow>Don't file GSTR-3B for 6 months:</Glow>
      </P>
      <BulletList>
        <li>Late fees: ~INR 10,000 per return x 6 = INR 60,000</li>
        <li>Interest: 18% p.a. on tax for each month</li>
        <li><Glow>Registration suspended/cancelled</Glow> -- you can't do business legally</li>
        <li>Your buyers' <Glow>ITC</Glow> on all your invoices gets reversed -- they'll never buy from you again</li>
      </BulletList>

      <P>
        <Glow>File wrong returns to evade tax (Section 74):</Glow>
      </P>
      <BulletList>
        <li>Penalty: <Glow>100% of the evaded tax</Glow></li>
        <li>Interest: 24% p.a.</li>
        <li>Time limit for government action: 5 years (not 3)</li>
        <li>If evasion {'>'} INR 5 crore: <Glow>criminal prosecution</Glow> -- up to 5 years imprisonment</li>
      </BulletList>

      <WidgetSlot title="Penalty Calculator">
        <PenaltyCalculator />
      </WidgetSlot>

      <H3>The Cascading Punishment</H3>
      <P>
        Non-compliance doesn't just hurt you -- it cascades:
      </P>
      <CodeBlock>{`You don't file GSTR-1
    \u2192 Your buyers' GSTR-2B doesn't show your invoices
        \u2192 Your buyers can't claim ITC
            \u2192 Your buyers pay more tax
                \u2192 Your buyers stop buying from you
                    \u2192 You lose business`}</CodeBlock>
      <P>
        This cascading effect is the government's <Glow>design</Glow>, not a bug. It turns every buyer into an enforcer. If you don't comply, your customers suffer. They will stop working with you. Self-enforcing compliance.
      </P>
    </Chapter>
  )
}
