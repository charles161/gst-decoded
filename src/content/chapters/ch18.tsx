import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, OrderedList, DataTable, BlockQuote } from '../../components/storytelling/StoryText'

export function Ch18() {
  return (
    <Chapter id="ch18" number={18} title="The Big Picture -- Why This All Matters for Our Product">
      <H3>The Size of the Problem</H3>
      <DataTable
        headers={['Metric', 'Number']}
        rows={[
          ['GST-registered taxpayers', '1.53 crore (15.3 million businesses)'],
          ['Returns filed per year', '~40 crore (400 million return filings)'],
          ['Penalties paid annually', 'INR 3,000 crore (money lost to non-compliance)'],
          ['SMEs using CAs for compliance', '~60%'],
          ['Average CA cost for monthly GST', 'INR 3,000-5,000/month'],
          ['Businesses entering e-invoicing (Oct 2025)', 'Millions (INR 2 Cr threshold)'],
          ['Businesses on QRMP scheme', '~80 lakh'],
          ['ITC mismatches per month', '~20% of all claimed ITC has some mismatch'],
        ]}
      />

      <H3>The 4 Things Every SME Owner Hates About GST</H3>
      <OrderedList>
        <li><Glow>"I spent more time on GST than selling."</Glow> -- 37+ compliance events/year for regular filers</li>
        <li><Glow>"My ITC is stuck because my supplier didn't file."</Glow> -- You paid <Glow>GST</Glow>, but can't claim it back because someone else didn't do their job</li>
        <li><Glow>"I don't know which return to file when."</Glow> -- The calendar is confusing with different dates for different categories</li>
        <li><Glow>"One mistake and the penalties are brutal."</Glow> -- INR 50/day per return adds up fast when you have multiple returns</li>
      </OrderedList>

      <H3>How Our Product Solves Each One</H3>
      <DataTable
        headers={['Pain Point', 'Our Solution']}
        rows={[
          ['Too many filings', 'Auto-prepare all returns from billing data. One-tap filing on WhatsApp'],
          ['ITC stuck', 'Real-time supplier compliance monitoring. Auto-follow-up messages. ITC health dashboard'],
          ['Confusing calendar', 'Personalized compliance calendar with WhatsApp reminders 3 days, 1 day, and day-of'],
          ['Fear of penalties', 'Penalty calculator showing exactly what\'s at risk. "File now, you\'re 2 days late. Current penalty: INR 100. It grows by INR 50/day"'],
          ['Don\'t understand GST', 'This guide -- but conversational, available 24/7 on WhatsApp. "Hey, I bought a car for my business. Can I claim ITC?" -> "Only if it seats more than 13 people. Your Swift Dzire doesn\'t qualify, sorry!"'],
        ]}
      />

      <H3>The Vision</H3>
      <P>
        A world where Meena the kirana store owner sends a WhatsApp message:
      </P>
      <BlockQuote>
        "Billed 47 customers today, total INR 2.3 lakh"
      </BlockQuote>
      <P>
        And our bot responds:
      </P>
      <BlockQuote>
        "Got it, Meena. I've recorded 47 invoices totaling INR 2,30,000. Your <Glow>GST</Glow> liability for the month so far is INR 4,140. Your <Glow>GSTR-1</Glow> is due in 8 days -- I'll auto-file on the 10th evening unless you add more invoices. Your <Glow>ITC</Glow> reconciliation is clean -- all suppliers have filed. You're on track for a penalty-free month."
      </BlockQuote>
      <P>
        That's not a dream. That's what we're building.
      </P>

      <H3>Quick Reference -- The Numbers That Matter</H3>

      <P><Glow>Thresholds (memorize these!)</Glow></P>
      <DataTable
        headers={['Amount', 'What Happens']}
        rows={[
          ['INR 10 lakh', 'Must register for GST (services, special category states)'],
          ['INR 20 lakh', 'Must register for GST (services, normal states)'],
          ['INR 40 lakh', 'Must register for GST (goods, normal states)'],
          ['INR 50 lakh', 'Composition scheme limit (services)'],
          ['INR 50,000', 'E-Way Bill required (goods movement)'],
          ['INR 1.5 crore', 'Composition scheme limit (goods)'],
          ['INR 2 crore', 'E-invoicing mandatory (from October 2025)'],
          ['INR 2 crore', 'GSTR-9 filing exemption ceiling'],
          ['INR 5 crore', 'Quarterly filing (QRMP) ceiling'],
          ['INR 5 crore', 'GSTR-9C reconciliation filing threshold'],
        ]}
      />

      <P><Glow>Due Dates (set these reminders!)</Glow></P>
      <DataTable
        headers={['Date', 'What\'s Due', 'Who']}
        rows={[
          ['10th', 'GSTR-7 (TDS), GSTR-8 (TCS)', 'TDS/TCS filers'],
          ['11th', 'GSTR-1 (monthly)', 'Monthly filers'],
          ['13th', 'GSTR-1 (quarterly), IFF, GSTR-5, GSTR-6', 'Quarterly/special filers'],
          ['14th', 'GSTR-2B auto-generated -- START RECONCILING!', 'Everyone (read-only)'],
          ['18th', 'CMP-08 (composition quarterly)', 'Composition dealers'],
          ['20th', 'GSTR-3B (monthly) -- PAY TAX!', 'Monthly filers'],
          ['22nd/24th', 'GSTR-3B (quarterly QRMP, state-dependent)', 'QRMP filers'],
          ['25th', 'PMT-06 (QRMP monthly tax)', 'QRMP filers'],
          ['30th Apr', 'GSTR-4 (composition annual)', 'Composition dealers'],
          ['30th Nov', 'ITC DEADLINE -- last day to claim previous FY ITC', 'Everyone'],
          ['31st Dec', 'GSTR-9 + GSTR-9C (annual returns)', '>2Cr / >5Cr turnover'],
        ]}
      />

      <P><Glow>Penalty Quick Reference</Glow></P>
      <DataTable
        headers={['What You Did', 'What You Pay']}
        rows={[
          ['Filed GSTR-1 or GSTR-3B late', 'INR 50/day (INR 20 for nil returns), max INR 10,000'],
          ['Filed GSTR-9 late', 'INR 200/day, max 0.25% of turnover'],
          ['Paid tax late', '18% per annum interest from due date'],
          ['Claimed wrong ITC', '24% per annum interest + full reversal'],
          ['Evaded tax (fraud)', '100% penalty + 5 years imprisonment if >5 crore'],
        ]}
      />
    </Chapter>
  )
}
