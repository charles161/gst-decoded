import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { CalloutBox } from '../../components/storytelling/CalloutBox'
import { TaxCalculator } from '../../components/widgets/TaxCalculator'

export function Ch02() {
  return (
    <Chapter id="ch02" number={2} title="The Three Musketeers -- CGST, SGST, and IGST">
      <H3>The Constitutional Problem</H3>

      <P>
        India is a federation. Both the Centre and States have the right to tax.{' '}
        <Glow>GST</Glow> needed to respect both. So they created a clever split:
      </P>

      <P>
        <Glow>When you sell within your state (say, Delhi to Delhi):</Glow>
      </P>
      <P>
        The 18% <Glow>GST</Glow> is split: <Glow>9% CGST</Glow> (goes to Centre) +{' '}
        <Glow>9% SGST</Glow> (goes to Delhi). Your invoice shows two lines of tax.
      </P>

      <P>
        <Glow>When you sell across states (say, Delhi to Mumbai):</Glow>
      </P>
      <P>
        The 18% <Glow>GST</Glow> is charged as <Glow>18% IGST</Glow> (collected by Centre).
        Centre then shares Maharashtra's portion with Maharashtra. Your invoice shows one line of tax.
      </P>

      <P>
        <Glow>The total is always the same -- 18%.</Glow> The customer pays the same amount
        regardless. Only the <em>plumbing</em> of who collects it changes.
      </P>

      <H3>Why Does This Matter for Our Product?</H3>

      <P>
        Because <Glow>getting the split wrong is one of the most common GST errors.</Glow> If a
        Delhi business charges <Glow>CGST</Glow>+<Glow>SGST</Glow> on a sale to a Mumbai buyer,
        that's wrong -- it should be <Glow>IGST</Glow>. And fixing it means amending returns, which
        is a nightmare.
      </P>

      <CalloutBox type="product">
        Our chatbot needs to ask one simple question: "Is your buyer in the same state as you?" and
        auto-determine the correct tax type. This alone saves hours of confusion for small businesses.
      </CalloutBox>

      <H3>A Quick Example</H3>

      <P>
        Priya runs a bakery in Pune. She buys flour (5% <Glow>GST</Glow>) and sells cakes
        (18% <Glow>GST</Glow>).
      </P>

      <P>
        <Glow>Scenario 1: Local sale (Pune customer)</Glow>
      </P>
      <P>
        She charges: 9% <Glow>CGST</Glow> + 9% <Glow>SGST</Glow> = 18% on the cake.
        Her invoice to the customer says: Cake INR 500, <Glow>CGST</Glow> INR 45,{' '}
        <Glow>SGST</Glow> INR 45, Total INR 590.
      </P>

      <P>
        <Glow>Scenario 2: Online order from a customer in Chennai</Glow>
      </P>
      <P>
        She charges: 18% <Glow>IGST</Glow> on the cake.
        Her invoice says: Cake INR 500, <Glow>IGST</Glow> INR 90, Total INR 590.
      </P>

      <P>Same cake, same price, same tax amount. Different paperwork.</P>

      <WidgetSlot title="Tax Split Calculator">
        <TaxCalculator />
      </WidgetSlot>
    </Chapter>
  )
}
