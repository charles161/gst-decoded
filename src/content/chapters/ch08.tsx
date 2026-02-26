import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList } from '../../components/storytelling/StoryText'

export function Ch08() {
  return (
    <Chapter id="ch08" number={8} title="E-Way Bills -- The Digital Passport for Goods">
      <H3>Why They Exist</H3>

      <P>
        Before <Glow>GST</Glow>, trucks waited at state borders for tax paperwork.{' '}
        <Glow>GST</Glow> eliminated border checkpoints but created a new problem: how does the
        government track goods movement to prevent tax evasion (goods sold without invoices)?
      </P>

      <P>
        <Glow>E-Way Bills</Glow> are the solution -- a digital document that must accompany any
        goods shipment worth more than <Glow>INR 50,000</Glow>. Think of it as a passport for your
        goods.
      </P>

      <H3>A Day in the Life of a Delivery</H3>

      <P>
        Meena runs a kirana store in Indore. She orders INR 2 lakh worth of goods from a wholesaler
        in Mumbai.
      </P>

      <OrderedList>
        <li>
          The Mumbai wholesaler generates an <Glow>E-Way Bill</Glow> on the portal before shipping
        </li>
        <li>
          The bill contains: who's sending (Mumbai wholesaler's <Glow>GSTIN</Glow>), who's receiving
          (Meena's <Glow>GSTIN</Glow>), what's being sent (goods description, <Glow>HSN</Glow>{' '}
          code), the invoice, and the vehicle number
        </li>
        <li>
          The truck gets a unique 12-digit <Glow>E-Way Bill Number</Glow>
        </li>
        <li>
          The truck drives from Mumbai to Indore -- 575 km. <Glow>E-Way Bill</Glow> validity:{' '}
          <Glow>3 days</Glow> (200 km/day)
        </li>
        <li>
          If stopped by a tax officer on the highway, the driver shows the <Glow>E-Way Bill</Glow>{' '}
          (printed or on mobile)
        </li>
        <li>
          The officer scans the QR code, verifies the goods match the bill, and waves the truck
          through
        </li>
        <li>
          If no <Glow>E-Way Bill</Glow>? <Glow>Vehicle detained.</Glow> Goods seized. Penalty of
          INR 10,000 or full tax amount.
        </li>
      </OrderedList>

      <H3>When You Don't Need One</H3>

      <BulletList>
        <li>
          Goods worth less than INR 50,000 (some states have higher limits -- Delhi and Maharashtra
          use INR 1,00,000)
        </li>
        <li>
          Non-motorized transport (bullock cart, hand cart -- yes, this is in the rules!)
        </li>
        <li>
          Certain goods that are always exempt: fresh milk, fruits, vegetables, currency, used
          personal effects
        </li>
      </BulletList>
    </Chapter>
  )
}
