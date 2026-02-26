import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, CodeBlock } from '../../components/storytelling/StoryText'

export function Ch14() {
  return (
    <Chapter id="ch14" number={14} title="Refunds -- Getting Your Money Back">
      <H3>When You've Paid Too Much</H3>
      <P>
        There are three main scenarios where the government owes you money:
      </P>

      <P>
        <Glow>Scenario 1: You're an Exporter</Glow>
      </P>
      <P>
        Sunita manufactures brass handicrafts in Moradabad and exports them to Europe. She pays 18% <Glow>GST</Glow> on raw materials (brass sheets, chemicals, packaging). But exports are <Glow>zero-rated</Glow> -- she charges 0% <Glow>GST</Glow> to her European buyers.
      </P>
      <P>
        Result: She collects zero <Glow>GST</Glow> from customers but pays 18% <Glow>GST</Glow> to suppliers. She's accumulating <Glow>ITC</Glow> with no output tax to offset against. The government must refund her.
      </P>
      <P>
        <Glow>Two routes:</Glow>
      </P>
      <BulletList>
        <li><Glow>Export with IGST:</Glow> She pays 18% <Glow>IGST</Glow> on exports, then claims refund (auto-processed through customs -- fastest)</li>
        <li><Glow>Export under LUT/Bond:</Glow> She doesn't pay <Glow>IGST</Glow> on exports, then claims refund of accumulated <Glow>ITC</Glow> (manual process -- slower but better for cash flow)</li>
      </BulletList>

      <P>
        <Glow>Scenario 2: Inverted Duty Structure</Glow>
      </P>
      <P>
        Amit's startup makes solar inverters. He buys components at 18% <Glow>GST</Glow> but his finished product is taxed at 5% <Glow>GST</Glow>. He's always paying more input tax than he collects as output tax. This is called "inverted duty structure."
      </P>
      <P>
        <Glow>Big reform (October 2025):</Glow> The government now gives <Glow>90% provisional refund within 7 days</Glow> for inverted duty claims. Before this, businesses waited months. This alone is worth lakhs in working capital for manufacturers.
      </P>

      <P>
        <Glow>Scenario 3: You Just Paid Too Much</Glow>
      </P>
      <P>
        Maybe you calculated wrong, or made duplicate payments. File <Glow>RFD-01</Glow> and claim it back.
      </P>

      <H3>The Refund Timeline</H3>
      <CodeBlock>{`Day 0:  File RFD-01 (refund application) on GST portal
Day 15: Acknowledgment (RFD-02) -- clock starts
Day 22: 90% provisional refund credited (for exports and inverted duty)
Day 60: Final order -- remaining 10% after verification
Day 60+: If delayed beyond 60 days, government pays 6% interest to YOU`}</CodeBlock>
      <P>
        <Glow>Deadline to file:</Glow> 2 years from the relevant date. Miss it? Money gone.
      </P>
    </Chapter>
  )
}
