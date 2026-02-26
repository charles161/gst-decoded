import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList, CodeBlock } from '../../components/storytelling/StoryText'
import { CalloutBox } from '../../components/storytelling/CalloutBox'

export function Ch03() {
  return (
    <Chapter id="ch03" number={3} title="Who Needs to Register? (And Why the Thresholds Exist)">
      <H3>The Logic Behind Thresholds</H3>

      <P>
        The government doesn't want the neighbourhood <em>paan wallah</em> filing{' '}
        <Glow>GST</Glow> returns. The compliance cost would be more than the tax collected. So they
        set thresholds:
      </P>

      <P>
        <Glow>If you sell goods:</Glow> Register when annual turnover crosses{' '}
        <Glow>INR 40 lakh</Glow> (about INR 1.1 lakh per day)
      </P>

      <P>
        <Glow>If you sell services:</Glow> Register when annual turnover crosses{' '}
        <Glow>INR 20 lakh</Glow> (about INR 55,000 per day)
      </P>

      <P>
        <Glow>Why is the service threshold lower?</Glow> Services have higher margins. A consultant
        billing INR 20 lakh is likely earning more than a kirana shop selling INR 40 lakh of goods
        (where most revenue is cost of goods). The government wants to capture service providers
        earlier.
      </P>

      <P>
        <Glow>Special category states</Glow> (the Northeast + Uttarakhand) have even lower
        thresholds -- INR 20 lakh for goods, INR 10 lakh for services. Why? These economies are
        smaller, and even relatively small businesses there represent significant economic activity.
      </P>

      <H3>The "Must Register" List</H3>

      <P>Some businesses must register <em>regardless</em> of turnover:</P>

      <OrderedList>
        <li>
          <Glow>Inter-state sellers</Glow> -- If you sell even INR 1 from Delhi to Mumbai, you need{' '}
          <Glow>GST</Glow> registration. Why? Because <Glow>IGST</Glow> settlement requires the
          system to track cross-state flows.
        </li>
        <li>
          <Glow>E-commerce sellers</Glow> -- Sell one kurta on Amazon? Need <Glow>GST</Glow>. Why?
          Amazon deducts TCS (tax at source) from your payment, and they need your{' '}
          <Glow>GSTIN</Glow> to do that.
        </li>
        <li>
          <Glow>Casual taxable persons</Glow> -- You're from Delhi but set up a pop-up stall at a
          Chennai trade fair for 2 weeks? You need a temporary <Glow>GST</Glow> registration in
          Tamil Nadu.
        </li>
      </OrderedList>

      <H3>Meet Meena -- The Kirana Shop Owner</H3>

      <P>
        Meena runs a grocery store in Indore. She buys from wholesalers and sells to local customers.
        Her annual turnover is INR 35 lakh -- just below the INR 40 lakh threshold.
      </P>

      <P>
        <Glow>She doesn't need to register.</Glow> But should she?
      </P>

      <P>Pros of voluntary registration:</P>
      <BulletList>
        <li>
          She can claim back <Glow>GST</Glow> paid on purchases (her wholesaler charges 5% on rice,
          12% on packaged goods, 18% on shelving she bought)
        </li>
        <li>She looks more professional to bigger buyers</li>
      </BulletList>

      <P>Cons:</P>
      <BulletList>
        <li>She now has to file 25+ returns per year</li>
        <li>She needs to maintain proper invoices and records</li>
        <li>She needs a CA or software to manage it</li>
      </BulletList>

      <CalloutBox type="product">
        This is exactly the dilemma our product solves. Our chatbot can run the numbers: "Meena,
        you're paying INR 1.2 lakh in GST on purchases every year. If you register, you'd get that
        back as ITC. Your filing costs with our tool would be INR 3,588/year. Net benefit: INR
        84,000/year. Want to register?"
      </CalloutBox>

      <H3>Your GSTIN -- Your Tax Identity Card</H3>

      <P>
        Once registered, every business gets a <Glow>GSTIN</Glow> -- a 15-digit number that works
        like your Aadhaar for taxation.
      </P>

      <P>
        Let's decode one: <Glow>27AADCS1234F1Z5</Glow>
      </P>

      <CodeBlock>{`27  = Maharashtra (state code)
AADCS1234F = The business's PAN number
1   = First registration in this state (2 = second, etc.)
Z   = Default character (always Z for now)
5   = Computer-calculated checksum`}</CodeBlock>

      <P>
        <Glow>Why this matters:</Glow> If you have offices in 3 states, you get 3 different{' '}
        <Glow>GSTINs</Glow> -- all sharing the same PAN in the middle, but different state codes at
        the start. This is why multi-state compliance is such a headache, and why a multi-GSTIN
        dashboard is a killer feature.
      </P>
    </Chapter>
  )
}
