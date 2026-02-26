import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList } from '../../components/storytelling/StoryText'

export function Ch01() {
  return (
    <Chapter id="ch01" number={1} title="Why GST Exists -- The Mess It Replaced">
      <H3>The India Before GST</H3>

      <P>
        Imagine you're Ramesh. You make textiles in Surat, Gujarat. In 2016, before <Glow>GST</Glow>,
        here's what happened every time you sold a shipment of fabric to a garment manufacturer in Bangalore:
      </P>

      <OrderedList>
        <li>You paid <Glow>Excise Duty</Glow> to the Central Government on manufacturing</li>
        <li>You paid <Glow>Gujarat VAT</Glow> to the Gujarat state government on the sale</li>
        <li>When the goods crossed the Gujarat-Karnataka border, your truck waited 2 days for <Glow>CST (Central Sales Tax)</Glow> paperwork</li>
        <li>Your buyer in Bangalore paid <Glow>Karnataka Entry Tax</Glow> when the goods entered the state</li>
        <li>The buyer paid <Glow>Karnataka VAT</Glow> again when they sold the finished garments</li>
        <li>Oh, and there was also <Glow>Octroi</Glow> at the Bangalore city limits</li>
      </OrderedList>

      <P>
        Six different taxes. Four different governments collecting them. And the worst part?{' '}
        <Glow>Tax on tax.</Glow> When Karnataka charged VAT, they charged it on a price that{' '}
        <em>already included</em> the Excise Duty. So you were paying tax on tax -- what economists
        call the <Glow>cascading effect</Glow>.
      </P>

      <P>The result:</P>

      <BulletList>
        <li>A product that cost INR 100 to make ended up costing the consumer INR 130-140 after all the stacked taxes</li>
        <li>Trucks spent 60% of their time waiting at state borders for tax paperwork</li>
        <li>Every state had different rates, different forms, different rules</li>
        <li>Businesses needed separate registrations in every state they operated</li>
        <li>Nobody could figure out how much tax they actually owed</li>
      </BulletList>

      <H3>What GST Fixed</H3>

      <P>
        On July 1, 2017, India replaced <Glow>17 different taxes</Glow> with ONE: the{' '}
        <Glow>Goods and Services Tax</Glow>.
      </P>

      <P>
        <Glow>One tax. One rate. One return system. One nation, one market.</Glow>
      </P>

      <P>Now when Ramesh ships fabric from Surat to Bangalore:</P>

      <BulletList>
        <li>He charges <Glow>18% IGST</Glow> (Integrated GST) on the invoice</li>
        <li>That's it. No excise, no VAT, no entry tax, no CST, no octroi</li>
        <li>His truck drives straight through -- no border checkpoints</li>
        <li>His buyer in Bangalore claims back the 18% as a credit against their own <Glow>GST</Glow></li>
      </BulletList>

      <P>
        The price to the consumer dropped. Trucks moved faster. India's logistics costs fell from
        14% of GDP to under 10%. And for the first time, the government could see every transaction
        in the economy through one digital system.
      </P>

      <P>
        <Glow>But</Glow> -- and this is where it gets interesting for us -- the compliance burden
        shifted. Instead of different taxes handled by different people, now every business has to
        manage one <em>very comprehensive</em> system. And that system is what we're about to decode.
      </P>
    </Chapter>
  )
}
