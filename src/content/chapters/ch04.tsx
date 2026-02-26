import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, DataTable } from '../../components/storytelling/StoryText'
import { CalloutBox } from '../../components/storytelling/CalloutBox'

export function Ch04() {
  return (
    <Chapter id="ch04" number={4} title="The Rate Structure -- Why Some Things Are Cheap and Some Are Expensive">
      <H3>The Philosophy</H3>

      <P>
        <Glow>GST</Glow> rates are designed with a simple principle:{' '}
        <Glow>essentials are cheap, luxuries are expensive, sins are very expensive.</Glow>
      </P>

      <DataTable
        headers={['Rate', 'Philosophy', "What You'll Find Here"]}
        rows={[
          ['0%', "Things so essential the government won't tax them", 'Fresh food, milk, education, healthcare'],
          ['5%', 'Daily necessities that most people buy', 'Packaged food, cooking oil, tea, basic clothing, public transport'],
          ['18%', 'Standard goods and services', 'Electronics, cars, professional services, restaurants, most business inputs'],
          ['40%', 'Things the government actively discourages', 'Cigarettes, gutka, luxury cars, aerated drinks'],
        ]}
      />

      <H3>The GST 2.0 Simplification (September 2025)</H3>

      <P>
        Before September 2025, there were SIX slabs: 0%, 5%, 12%, 18%, 28%, and 28%+cess. This was a
        nightmare. Is this biscuit 5% (if it's glucose biscuit) or 18% (if it's cream biscuit)? Is
        this hotel room 12% or 18%? Businesses spent more time classifying products than selling
        them.
      </P>

      <P>
        The <Glow>56th GST Council</Glow> simplified it:
      </P>

      <P>
        <Glow>Old:</Glow> 0% &rarr; 5% &rarr; 12% &rarr; 18% &rarr; 28% &rarr; 28%+cess
      </P>
      <P>
        <Glow>New:</Glow> 0% &rarr; 5% &rarr; 18% &rarr; 40%
      </P>

      <P>
        The 12% slab was eliminated -- those items moved to either 5% or 18%. The 28% slab was
        eliminated -- those items moved to 18% or 40%. The complicated "28% + separate compensation
        cess" math was replaced by a single 40% rate for sin goods.
      </P>

      <P>
        <Glow>175 items became cheaper overnight.</Glow> Small cars moved from 28% to 18%.
        Refrigerators from 28% to 18%. Health insurance was exempted entirely.
      </P>

      <H3>The HSN Code Story</H3>

      <P>
        Every product in the world has a classification number called an{' '}
        <Glow>HSN code</Glow> (Harmonized System of Nomenclature). It's like a phone number for
        products.
      </P>

      <P>
        When Ramesh sells fabric, he uses <Glow>HSN</Glow> code <Glow>5208</Glow> (woven cotton
        fabric). This tells the <Glow>GST</Glow> system: "this is a 5% item." If he accidentally
        uses 5407 (synthetic fabric), the rate might be different, and he could overpay or underpay
        tax.
      </P>

      <CalloutBox type="product">
        A small business owner selling "hand-made cotton kurtas" shouldn't need to know that the{' '}
        <Glow>HSN</Glow> code is 6204 (women's suits/ensembles) at 12% and not 6206 (blouses) at
        5%. Our AI can classify products from a simple description and assign the right{' '}
        <Glow>HSN</Glow> code automatically.
      </CalloutBox>
    </Chapter>
  )
}
