import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow } from '../../components/storytelling/StoryText'

export function Ch12() {
  return (
    <Chapter id="ch12" number={12} title="Annual Compliance -- The Year-End Reckoning">
      <H3>GSTR-9: The Annual Report Card</H3>
      <P>
        At the end of every financial year, businesses with turnover above INR 2 crore must file <Glow>GSTR-9</Glow> -- a comprehensive reconciliation of everything they reported in their 12 monthly (or 4 quarterly) returns.
      </P>
      <P>
        <Glow>Why it exists:</Glow> Monthly returns are filed under time pressure. Mistakes happen. <Glow>GSTR-9</Glow> is the government saying "take a deep breath, look at the full year, make sure everything adds up."
      </P>
      <P>
        <Glow>The pain:</Glow> You're reconciling 12 months of <Glow>GSTR-1</Glow>, 12 months of <Glow>GSTR-3B</Glow>, your audited books of accounts, and any amendments you made during the year. Mismatches between your books and your returns must be explained or corrected.
      </P>
      <P>
        <Glow>Due date:</Glow> December 31st (but almost always extended -- it's been pushed to February or March in every year since <Glow>GST</Glow> started).
      </P>

      <H3>GSTR-9C: The Audit Reconciliation</H3>
      <P>
        For businesses above INR 5 crore, there's an additional layer: <Glow>GSTR-9C</Glow>, which reconciles your <Glow>audited financial statements</Glow> (as per the Companies Act) with your <Glow>GST</Glow> returns.
      </P>
      <P>
        <Glow>Think of it as:</Glow> Your CA-audited accounts say you sold INR 50 crore. Your <Glow>GST</Glow> returns say you sold INR 48 crore. The INR 2 crore difference must be explained -- maybe it's exempt sales, or services to SEZ, or export under LUT. <Glow>GSTR-9C</Glow> is where you explain every difference.
      </P>
      <P>
        Since FY 2020-21, this is <Glow>self-certified</Glow> -- you don't need a CA to sign it (you can do it yourself). But in practice, most businesses still get their CA to prepare it because the reconciliation is genuinely complex.
      </P>
    </Chapter>
  )
}
