import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList, DataTable } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { CalloutBox } from '../../components/storytelling/CalloutBox'
import { ITCSupplyChain } from '../../components/widgets/ITCSupplyChain'

export function Ch06() {
  return (
    <Chapter id="ch06" number={6} title="Input Tax Credit -- The Heart of GST (And Where All the Money Is)">
      <H3>The Beautiful Idea</H3>

      <P>
        <Glow>ITC</Glow> is the reason <Glow>GST</Glow> works. Without it, <Glow>GST</Glow> would
        be worse than the old system.
      </P>

      <P>
        <Glow>The problem it solves:</Glow> Tax cascading. In the old system, manufacturer paid
        excise duty, then VAT was charged on price-including-excise-duty. Tax on tax.
      </P>

      <P>
        <Glow>How ITC fixes it:</Glow> At every stage of the supply chain, you only pay tax on the{' '}
        <Glow>value you added</Glow>, not on the entire price.
      </P>

      <H3>A Supply Chain Example</H3>

      <P>Follow a cotton T-shirt from farm to your wardrobe:</P>

      <DataTable
        headers={['Stage', 'What Happens', 'Sale Price', 'GST @5%', 'ITC Claimed', 'Tax Paid to Govt']}
        rows={[
          ['Farmer', 'Grows cotton, sells to spinner', 'INR 100', 'INR 5', 'INR 0 (first stage)', 'INR 5'],
          ['Spinner', 'Makes yarn, sells to weaver', 'INR 200', 'INR 10', 'INR 5 (from farmer)', 'INR 5'],
          ['Weaver', 'Makes fabric, sells to garment maker', 'INR 400', 'INR 20', 'INR 10 (from spinner)', 'INR 10'],
          ['Garment Maker', 'Makes T-shirt, sells to retailer', 'INR 700', 'INR 35', 'INR 20 (from weaver)', 'INR 15'],
          ['Retailer', 'Sells to you', 'INR 1,000', 'INR 50', 'INR 35 (from garment maker)', 'INR 15'],
          ['Total', '', '', '', '', 'INR 50'],
        ]}
      />

      <P>
        The government collects INR 50 total -- exactly 5% of the final price of INR 1,000. Each
        person in the chain only paid tax on their <em>value addition</em>. Nobody paid tax on tax.
      </P>

      <P>
        <Glow>But here's the catch:</Glow> This beautiful chain only works if everyone in the chain
        files their returns correctly. If the spinner doesn't upload the INR 100 sale in their{' '}
        <Glow>GSTR-1</Glow>, the weaver can't claim the INR 5 <Glow>ITC</Glow>. The chain breaks.
      </P>

      <P>
        <Glow>This is why the government is so obsessive about matching.</Glow> Every claimed{' '}
        <Glow>ITC</Glow> must match a reported sale. And this is why <Glow>GSTR-2B</Glow> exists --
        it's the government's way of saying "we've verified these purchases. You can claim credit on
        these, and only these."
      </P>

      <WidgetSlot title="Trace the ITC Chain">
        <ITCSupplyChain />
      </WidgetSlot>

      <H3>When You CAN'T Claim ITC -- The Blocked Credits</H3>

      <P>
        The government blocks <Glow>ITC</Glow> on certain purchases because they want to{' '}
        <em>discourage</em> those expenses or because they're hard to verify for business use.
      </P>

      <P>
        <Glow>Story time:</Glow> Rajesh, a garment exporter, takes his team for dinner at a fancy
        restaurant. The bill is INR 50,000 plus INR 9,000 <Glow>GST</Glow>. Can he claim the INR
        9,000 as <Glow>ITC</Glow>?
      </P>

      <P>
        <Glow>No.</Glow> Food and beverages are blocked credits. Why? Because the government can't
        verify whether Rajesh was entertaining clients (business expense) or celebrating his birthday
        (personal expense). So they block it entirely.
      </P>

      <P>Here's the full "no ITC" list, with the <em>why</em> for each:</P>

      <DataTable
        headers={["What's Blocked", "Why It's Blocked"]}
        rows={[
          ['Cars and vehicles (<=13 seats)', "Can't verify if it's for business or the owner's family. Exception: If you're a taxi company or driving school -- obviously it's your business."],
          ['Food, beverages, catering', "Same reason -- can't distinguish business entertainment from personal enjoyment. Exception: If you're a restaurant, your food purchases are your business inputs."],
          ['Health club / gym memberships', 'Almost always personal benefit, even if the company pays.'],
          ['Construction of buildings', 'Buildings are long-lived assets that may be used for personal purposes. Exception: If you\'re constructing a factory with machines (plant and machinery), you CAN claim ITC.'],
          ['Gifts and free samples (>INR 50,000/person/year)', 'Without a limit, companies would "gift" products to owners tax-free.'],
          ['Personal consumption', 'Obvious -- GST credits are only for business inputs.'],
          ['Goods lost, stolen, destroyed', 'If goods are gone, the supply chain ends. No output tax will be charged on them, so no input credit is fair.'],
        ]}
      />

      <CalloutBox type="product">
        Our chatbot could flag these automatically. "Rajesh, I see a restaurant bill for INR 50,000
        in your expenses. Just so you know -- <Glow>ITC</Glow> on food is blocked under Section
        17(5). Your actual cost is INR 59,000, not INR 50,000. Should I exclude this from your{' '}
        <Glow>ITC</Glow> claim?"
      </CalloutBox>

      <H3>The ITC Reconciliation Nightmare -- A Worked Example</H3>

      <P>
        Priya is a Chartered Accountant managing 15 SME clients. It's February 14th, and{' '}
        <Glow>GSTR-2B</Glow> for January just dropped for her client Amit's startup.
      </P>

      <P>
        <Glow>Amit's purchase register shows:</Glow>
      </P>

      <DataTable
        headers={['Supplier', 'Invoice Amount', 'GST Paid', 'Status in GSTR-2B']}
        rows={[
          ['Steel Co.', 'INR 5,00,000', 'INR 90,000', 'Matched'],
          ['Paint Ltd.', 'INR 2,00,000', 'INR 36,000', 'Matched'],
          ['Transport Inc.', 'INR 80,000', 'INR 14,400', "NOT in 2B -- supplier hasn't filed GSTR-1"],
          ['Hardware Shop', 'INR 1,20,000', 'INR 21,600', 'Amount mismatch -- 2B shows INR 18,000'],
          ['Electrical Supplier', 'INR 60,000', 'INR 10,800', 'Wrong GSTIN -- supplier put the wrong recipient GSTIN'],
        ]}
      />

      <P>
        <Glow>Total GST Priya expected to claim:</Glow> INR 1,72,800
      </P>
      <P>
        <Glow>What she can actually claim from 2B:</Glow> INR 1,26,000 (Steel + Paint only)
      </P>
      <P>
        <Glow>Stuck ITC:</Glow> INR 46,800
      </P>

      <P>Priya now has 6 days to:</P>

      <OrderedList>
        <li>Call Transport Inc.: "Bhai, please file your January <Glow>GSTR-1</Glow> before the 20th"</li>
        <li>Call Hardware Shop: "Your invoice says INR 21,600 <Glow>GST</Glow> but you reported INR 18,000 -- please correct"</li>
        <li>Call Electrical Supplier: "You put the wrong <Glow>GSTIN</Glow> -- please amend in <Glow>GSTR-1A</Glow>"</li>
      </OrderedList>

      <P>
        <Glow>If even one of them doesn't fix it in time</Glow>, Amit either:
      </P>

      <BulletList>
        <li>Loses INR 46,800 this month (claims only what's in 2B)</li>
        <li>Claims the full amount and risks a notice later when the mismatch shows up in government systems</li>
      </BulletList>

      <P>
        <Glow>This happens to EVERY business, EVERY month.</Glow> And most SMEs don't have a Priya
        -- they're doing this themselves.
      </P>

      <CalloutBox type="product">
        Our product kills this pain. Automated 2B matching, supplier compliance monitoring, one-click
        follow-up messages to non-compliant suppliers, and intelligent recommendations on what to
        claim vs. defer.
      </CalloutBox>

      <H3>The Time Bomb -- Claim ITC or Lose It Forever</H3>

      <P>
        For any financial year, you must claim all your <Glow>ITC</Glow> by{' '}
        <Glow>November 30th of the next year</Glow>. Miss this date? That money is gone. Forever.
      </P>

      <P>
        <Glow>Example:</Glow> Amit discovers in December 2026 that he forgot to claim INR 50,000{' '}
        <Glow>ITC</Glow> on a March 2026 invoice. The deadline was November 30, 2026. He's a month
        late. That INR 50,000 is gone -- he can never get it back.
      </P>

      <CalloutBox type="product">
        Our product solves this: Monthly <Glow>ITC</Glow> health check. "Amit, you have INR 2.3
        lakh in unclaimed <Glow>ITC</Glow> from FY 2025-26. You have until November 30, 2026 to
        claim it. Want me to prepare the entries for your next <Glow>GSTR-3B</Glow>?"
      </CalloutBox>
    </Chapter>
  )
}
