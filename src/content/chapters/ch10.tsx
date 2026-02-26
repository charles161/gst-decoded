import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, DataTable } from '../../components/storytelling/StoryText'

export function Ch10() {
  return (
    <Chapter id="ch10" number={10} title="Reverse Charge -- When the Buyer Pays the Tax">
      <H3>The Problem It Solves</H3>
      <P>
        Some suppliers are too small or informal to collect and remit <Glow>GST</Glow>. Think of the individual truck driver who transports your goods, or the freelance lawyer who sends you a legal opinion. They might not be registered. The government still wants tax on these transactions.
      </P>
      <P>
        <Glow>Solution:</Glow> The buyer (who is a bigger, registered business) pays the <Glow>GST</Glow> directly to the government instead of paying it to the supplier.
      </P>

      <H3>An Example</H3>
      <P>
        Amit's startup hires a freelance advocate (not GST-registered) to draft a contract. The advocate charges INR 50,000.
      </P>
      <P>
        <Glow>Normal:</Glow> Advocate would charge INR 50,000 + 18% <Glow>GST</Glow> (INR 9,000) = INR 59,000. Advocate pays INR 9,000 to the government.
      </P>
      <P>
        <Glow>Under RCM:</Glow> Advocate charges INR 50,000 (no <Glow>GST</Glow>). Amit pays INR 50,000 to the advocate AND separately pays INR 9,000 <Glow>GST</Glow> to the government. Amit can then claim this INR 9,000 as <Glow>ITC</Glow>.
      </P>
      <P>
        <Glow>The twist:</Glow> <Glow>RCM</Glow> payment must be made in <Glow>cash</Glow> (from Electronic Cash Ledger, not from <Glow>ITC</Glow> balance). But Amit can immediately claim back this INR 9,000 as <Glow>ITC</Glow> -- so it's effectively cash-neutral. He just needs the cash flow to pay it upfront.
      </P>

      <H3>Key RCM Services to Know</H3>
      <DataTable
        headers={['Service', 'Why It\'s Under RCM']}
        rows={[
          ['Legal services (from individual advocates)', 'Lawyers are notoriously non-compliant with GST'],
          ['Director\'s fees (from independent directors)', 'Directors are individuals, often not GST-registered'],
          ['Goods transport (from individual GTA)', 'Millions of small transporters can\'t manage GST compliance'],
          ['Security services (from individual guards)', 'Informal sector, can\'t be expected to file returns'],
          ['Import of services', 'Foreign supplier has no Indian GST registration'],
        ]}
      />
    </Chapter>
  )
}
