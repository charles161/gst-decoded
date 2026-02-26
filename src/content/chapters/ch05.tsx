import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { CalloutBox } from '../../components/storytelling/CalloutBox'
import { ReturnsTimeline } from '../../components/widgets/ReturnsTimeline'

export function Ch05() {
  return (
    <Chapter id="ch05" number={5} title="The Returns Calendar -- The Monthly Compliance Marathon">
      <H3>Why So Many Returns?</H3>

      <P>
        Imagine the government as a bank manager. They don't just want to know how much you deposited
        -- they want to know who gave you money, who you gave money to, whether the amounts match,
        and whether everyone is being honest.
      </P>

      <P>
        <Glow>GST</Glow> returns are designed to{' '}
        <Glow>cross-verify every transaction from both sides.</Glow> When Ramesh sells fabric to his
        buyer Suresh, Ramesh reports the sale in his return, and Suresh reports the purchase in his.
        If the numbers don't match -- red flag.
      </P>

      <H3>Meet the Returns -- As Characters in a Story</H3>

      <H3>GSTR-1: "The Sales Diary"</H3>

      <P>
        <Glow>What it is:</Glow> Every month, you tell the government about ALL your sales.
      </P>

      <P>
        <Glow>Think of it as:</Glow> A diary entry that says "This month I sold INR 10 lakh of
        fabric to these 47 buyers, here are their <Glow>GSTINs</Glow> and invoice numbers."
      </P>

      <P>
        <Glow>Why it exists:</Glow> This feeds into your buyers' records. When you upload your
        invoice to Ramesh's <Glow>GSTR-1</Glow>, it automatically shows up in Suresh's{' '}
        <Glow>GSTR-2A</Glow>/<Glow>GSTR-2B</Glow>. This is how the government creates a chain of
        verified transactions.
      </P>

      <P>
        <Glow>Due date:</Glow> 11th of next month (monthly filers) or 13th (quarterly filers)
      </P>

      <P>
        <Glow>Example:</Glow> Ramesh had 200 sales in January 2026. By February 11th, he must
        upload all 200 invoices to <Glow>GSTR-1</Glow> -- each buyer's <Glow>GSTIN</Glow>, invoice
        number, date, amount, <Glow>HSN</Glow> code, and tax charged.
      </P>

      <P>
        <Glow>The pain:</Glow> For a small business doing this manually? Opening the GST portal,
        entering 200 invoices one by one, making sure every <Glow>GSTIN</Glow> is correct, every{' '}
        <Glow>HSN</Glow> code is right. Takes hours. Miss a single digit in a <Glow>GSTIN</Glow>{' '}
        and the buyer can't claim their credit.
      </P>

      <H3>GSTR-3B: "The Summary and Cheque"</H3>

      <P>
        <Glow>What it is:</Glow> A summary of your month -- total sales, total purchases, total{' '}
        <Glow>ITC</Glow> claimed, total tax owed, and the actual payment.
      </P>

      <P>
        <Glow>Think of it as:</Glow> The settlement at the end of a card game. "I sold this much, I
        bought this much, the <Glow>ITC</Glow> cancels out this much, here's what I still owe --{' '}
        <em>and here's the money.</em>"
      </P>

      <P>
        <Glow>Why it exists:</Glow> <Glow>GSTR-1</Glow> is the detail. <Glow>GSTR-3B</Glow> is
        the payment. The government needs both -- the detail to verify, the payment to collect
        revenue.
      </P>

      <P>
        <Glow>Due date:</Glow> 20th of next month
      </P>

      <P>
        <Glow>The critical July 2025 change -- Hard-Lock:</Glow>
      </P>

      <P>
        Before July 2025, <Glow>GSTR-3B</Glow> was flexible -- you could adjust numbers even if
        they didn't match <Glow>GSTR-1</Glow>. This led to abuse (reporting lower sales in 3B to
        pay less tax, while <Glow>GSTR-1</Glow> had the real numbers).
      </P>

      <P>
        Now, <Glow>GSTR-3B</Glow> is <Glow>auto-populated and locked</Glow> from{' '}
        <Glow>GSTR-1</Glow> data. You can't edit the liability. If your <Glow>GSTR-1</Glow> says
        you sold INR 10 lakh at 18% <Glow>GST</Glow>, your <Glow>GSTR-3B</Glow> will show INR 1.8
        lakh liability and you MUST pay it.
      </P>

      <P>
        <Glow>What if you made a mistake in GSTR-1?</Glow> That's where <Glow>GSTR-1A</Glow> comes
        in -- a new amendment return you file between <Glow>GSTR-1</Glow> (11th) and{' '}
        <Glow>GSTR-3B</Glow> (20th) to fix errors. If you miss this window, you're stuck with the
        wrong liability for the month.
      </P>

      <H3>GSTR-2A and GSTR-2B: "The Mirror and The Photograph"</H3>

      <P>
        <Glow>GSTR-2A</Glow> is a <em>mirror</em> -- it shows you, in real-time, what your
        suppliers have reported about sales to you. It keeps changing as suppliers file and amend
        their returns. It's dynamic. You can look at it any time, but it's always shifting.
      </P>

      <P>
        <Glow>GSTR-2B</Glow> is a <em>photograph</em> -- taken on the 14th of every month. It
        freezes your suppliers' data at that point and says "THIS is what you can claim as{' '}
        <Glow>ITC</Glow> this month." It doesn't change after that.
      </P>

      <P>
        <Glow>Why two?</Glow> Because you need a moving picture (2A) to monitor supplier compliance
        in real-time, and a fixed picture (2B) to calculate your exact <Glow>ITC</Glow> claim. If
        you claimed <Glow>ITC</Glow> based on 2A, it would be a moving target -- how would you
        reconcile at year-end?
      </P>

      <P>
        <Glow>The pain this creates:</Glow> Let's say you bought INR 5 lakh of goods from 10
        suppliers this month. You know you paid <Glow>GST</Glow> on all of them. But when{' '}
        <Glow>GSTR-2B</Glow> comes out on the 14th:
      </P>

      <BulletList>
        <li>7 suppliers uploaded their invoices -- you can claim INR 3.5 lakh <Glow>ITC</Glow></li>
        <li>2 suppliers haven't filed their <Glow>GSTR-1</Glow> yet -- INR 1.2 lakh of your <Glow>ITC</Glow> is stuck</li>
        <li>1 supplier entered the wrong <Glow>GSTIN</Glow> -- INR 30,000 of <Glow>ITC</Glow> is showing under someone else</li>
      </BulletList>

      <P>Now you have 6 days (14th to 20th) to:</P>

      <OrderedList>
        <li>Call the 2 late suppliers and beg them to file</li>
        <li>Call the 1 wrong-<Glow>GSTIN</Glow> supplier and get them to amend</li>
        <li>Decide: Do you claim the stuck <Glow>ITC</Glow> and risk it being rejected? Or leave money on the table?</li>
      </OrderedList>

      <CalloutBox type="insight">
        This is the #1 pain point for SMEs. And the #1 product opportunity for us.
      </CalloutBox>

      <H3>IFF: "The Helping Hand for Small Businesses"</H3>

      <P>
        If you're a small business (turnover ≤INR 5 crore), you can file <Glow>GSTR-1</Glow>{' '}
        quarterly instead of monthly -- the QRMP scheme. But this creates a problem for your{' '}
        <em>buyers</em>. They need your invoice data monthly to claim <Glow>ITC</Glow>.
      </P>

      <P>
        <Glow>IFF</Glow> (Invoice Furnishing Facility) solves this: you upload just your B2B
        invoices (sales to registered businesses) monthly, even though your actual{' '}
        <Glow>GSTR-1</Glow> is quarterly. This way, your buyers get their <Glow>ITC</Glow> on time.
      </P>

      <P>
        <Glow>Think of it as:</Glow> "I'll send you a preview of my invoices now, and the full
        report later."
      </P>

      <H3>The Monthly Compliance Timeline -- What It Actually Feels Like</H3>

      <P>Here's what Ramesh goes through every single month:</P>

      <P>
        <Glow>Day 1-10:</Glow> Compile all sales invoices. If he uses a billing software that
        integrates with <Glow>GST</Glow>, this is somewhat automatic. If he's using Excel or paper
        bills... pain.
      </P>

      <P>
        <Glow>Day 11:</Glow> <Glow>GSTR-1</Glow> deadline. Upload all outward supply details.
        Ramesh's CA rushes to get it done. If he misses it? INR 50 per day penalty -- and worse, all
        his buyers' <Glow>ITC</Glow> for his invoices gets delayed.
      </P>

      <P>
        <Glow>Day 14:</Glow> <Glow>GSTR-2B</Glow> drops. Ramesh's CA downloads it and starts
        comparing it with the purchase register. "Supplier A -- matched. Supplier B -- matched.
        Supplier C -- not in 2B! Where's the invoice? Let me call them..."
      </P>

      <P>
        <Glow>Day 14-19:</Glow> The reconciliation dance. Calling suppliers, checking amounts,
        figuring out mismatches. This is the most stressful week in the <Glow>GST</Glow> calendar.
      </P>

      <P>
        <Glow>Day 20:</Glow> <Glow>GSTR-3B</Glow> + Tax Payment deadline. File the summary return
        and pay the balance tax. If Ramesh's <Glow>ITC</Glow> reconciliation isn't done, he has to
        decide: claim everything and risk reversal later, or only claim what's in 2B and lose money
        this month.
      </P>

      <P>
        <Glow>Day 20-25:</Glow> Breathe. For about 10 days.
      </P>

      <P>
        <Glow>Then it starts again.</Glow>
      </P>

      <P>
        For a regular monthly filer, that's 24 returns per year + <Glow>GSTR-9</Glow> +{' '}
        <Glow>GSTR-9C</Glow> = 26 filings. Plus daily <Glow>e-invoicing</Glow>. Plus{' '}
        <Glow>e-way bills</Glow> whenever goods move.
      </P>

      <P>No wonder SMEs pay INR 3,000 crore in penalties every year.</P>

      <WidgetSlot title="Your Monthly GST Calendar">
        <ReturnsTimeline />
      </WidgetSlot>
    </Chapter>
  )
}
