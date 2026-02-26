import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList } from '../../components/storytelling/StoryText'
import { CalloutBox } from '../../components/storytelling/CalloutBox'

export function Ch09() {
  return (
    <Chapter id="ch09" number={9} title="The Composition Scheme -- GST on Easy Mode">
      <H3>The Problem It Solves</H3>

      <P>
        A kirana shop with INR 80 lakh annual turnover shouldn't need to file 26 returns a year. The
        compliance cost would eat their profits. The <Glow>Composition Scheme</Glow> is "GST Lite"
        for small businesses.
      </P>

      <H3>How It Works -- Through Meena's Eyes</H3>

      <P>
        Meena's kirana shop in Indore does INR 1.2 crore annual turnover. She has two choices:
      </P>

      <P>
        <Glow>Option A: Regular GST</Glow>
      </P>

      <BulletList>
        <li>Charge 5%/12%/18% <Glow>GST</Glow> on every item (which means tracking GST rates for 500+ products)</li>
        <li>File 24 returns/year (<Glow>GSTR-1</Glow> + <Glow>GSTR-3B</Glow> monthly)</li>
        <li>Claim <Glow>ITC</Glow> on all purchases</li>
        <li>Can sell to anyone, anywhere</li>
        <li>Needs: Detailed billing software, CA visits monthly</li>
      </BulletList>

      <P>
        <Glow>Option B: Composition Scheme</Glow>
      </P>

      <BulletList>
        <li>Pay flat <Glow>1% tax</Glow> on total turnover (INR 1.2 lakh/year)</li>
        <li>File only <Glow>5 returns/year</Glow> (4 quarterly CMP-08 + 1 annual <Glow>GSTR-4</Glow>)</li>
        <li>Cannot claim <Glow>ITC</Glow> (all purchase <Glow>GST</Glow> is a cost)</li>
        <li>Can only sell within Madhya Pradesh</li>
        <li>Cannot sell on Amazon/Flipkart</li>
        <li>Needs: Basic turnover tracking</li>
      </BulletList>

      <P>
        <Glow>Meena's calculation:</Glow>
      </P>

      <BulletList>
        <li>
          Under Regular: She'd collect ~INR 8 lakh <Glow>GST</Glow> from customers, claim ~INR 6
          lakh <Glow>ITC</Glow>, pay ~INR 2 lakh to govt. But spend INR 36,000/year on CA fees.
        </li>
        <li>
          Under <Glow>Composition</Glow>: She pays INR 1.2 lakh flat. No CA needed for monthly
          filing. But she absorbs INR 6 lakh of purchase <Glow>GST</Glow>.
        </li>
      </BulletList>

      <P>
        Wait -- <Glow>Composition</Glow> seems worse? Not necessarily. In practice:
      </P>

      <BulletList>
        <li>
          Meena's customers are mostly walk-in retail (no <Glow>GSTIN</Glow>, don't need{' '}
          <Glow>ITC</Glow>)
        </li>
        <li>Meena doesn't sell online or outside MP</li>
        <li>The simplicity saves her mental energy and CA costs</li>
        <li>
          The 1% rate is on <em>turnover</em>, but her effective tax under regular would be on{' '}
          <em>margin</em> (higher rate but on a smaller base)
        </li>
      </BulletList>

      <CalloutBox type="product">
        "Meena, based on your purchase patterns and customer mix, staying on{' '}
        <Glow>Composition</Glow> saves you INR 24,000/year vs. going Regular. But if you start
        selling on Amazon next year, you'll need to switch. Want me to alert you when your
        e-commerce sales cross zero?"
      </CalloutBox>
    </Chapter>
  )
}
