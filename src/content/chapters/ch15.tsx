import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow } from '../../components/storytelling/StoryText'
import { CalloutBox } from '../../components/storytelling/CalloutBox'

export function Ch15() {
  return (
    <Chapter id="ch15" number={15} title="Assessments and Appeals -- When the Government Disagrees">
      <H3>The Escalation Ladder</H3>

      <P>
        <Glow>Level 0: Self-Assessment (Every Return)</Glow>
      </P>
      <P>
        Every <Glow>GSTR-3B</Glow> you file is a self-assessment. You're telling the government "I owe this much" and paying it. If the numbers are right, nobody bothers you.
      </P>

      <P>
        <Glow>Level 1: Scrutiny Notice (ASMT-10)</Glow>
      </P>
      <P>
        The system flags a mismatch. Maybe your <Glow>GSTR-1</Glow> sales don't match your <Glow>GSTR-3B</Glow> liability. Maybe your <Glow>ITC</Glow> claims seem high. You get a notice asking for an explanation. You have 30 days to respond. If the explanation is accepted, case closed.
      </P>

      <P>
        <Glow>Level 2: Demand Order (Section 73/74)</Glow>
      </P>
      <P>
        If your explanation is rejected, the officer issues a demand for the tax shortfall plus interest plus penalty. For honest errors (Section 73), penalty is 10%. For fraud (Section 74), penalty is 100%.
      </P>

      <P>
        <Glow>Level 3: First Appeal (Commissioner Appeals)</Glow>
      </P>
      <P>
        Don't agree with the demand? Appeal within 3 months. Pre-deposit: 10% of disputed tax.
      </P>

      <P>
        <Glow>Level 4: GST Appellate Tribunal (GSTAT)</Glow>
      </P>
      <P>
        Still don't agree? Appeal to the newly operational <Glow>GSTAT</Glow>. Pre-deposit: additional 20% (total 30%). <Glow>GSTAT</Glow> now has 31 benches across India -- this was a huge bottleneck until 2025 because it didn't exist yet.
      </P>

      <P>
        <Glow>Level 5: High Court / Supreme Court</Glow>
      </P>
      <P>
        For questions of law. Very rare for SMEs.
      </P>

      <CalloutBox type="product">
        Most SME disputes are about <Glow>ITC</Glow> mismatches, not fraud. A smart reconciliation engine that prevents mismatches = fewer notices = fewer appeals = happy customers.
      </CalloutBox>
    </Chapter>
  )
}
