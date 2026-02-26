import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, BulletList, OrderedList } from '../../components/storytelling/StoryText'
import { WidgetSlot } from '../../components/storytelling/WidgetSlot'
import { ThreeWallets } from '../../components/widgets/ThreeWallets'

export function Ch11() {
  return (
    <Chapter id="ch11" number={11} title="Payments -- The Three Wallets">
      <H3>Think of It as Three Digital Wallets</H3>
      <P>
        Every GST-registered person has three "wallets" on the <Glow>GST</Glow> portal:
      </P>

      <P>
        <Glow>Wallet 1: Cash Wallet (Electronic Cash Ledger)</Glow>
      </P>
      <BulletList>
        <li>How it fills up: You deposit money via bank transfer (<Glow>PMT-06</Glow> challan)</li>
        <li>What it pays for: EVERYTHING -- tax, interest, penalties, late fees, <Glow>RCM</Glow></li>
        <li>Think of it as: Your current account</li>
      </BulletList>

      <P>
        <Glow>Wallet 2: Credit Wallet (Electronic Credit Ledger)</Glow>
      </P>
      <BulletList>
        <li>How it fills up: Automatically, when you claim <Glow>ITC</Glow> in <Glow>GSTR-3B</Glow></li>
        <li>What it pays for: ONLY output tax liability (not interest, not penalties, not late fees)</li>
        <li>Think of it as: Reward points -- can only be used for specific things</li>
      </BulletList>

      <P>
        <Glow>Wallet 3: Liability Register</Glow>
      </P>
      <BulletList>
        <li>How it fills up: Automatically, when you file returns</li>
        <li>What it shows: What you owe</li>
        <li>Think of it as: Your credit card statement</li>
      </BulletList>

      <H3>How Tax Payment Actually Works</H3>
      <P>
        Ramesh's January 2026 numbers:
      </P>
      <BulletList>
        <li>He collected INR 5 lakh <Glow>GST</Glow> from customers (output tax)</li>
        <li>He has INR 3.5 lakh <Glow>ITC</Glow> available from purchases (input credit)</li>
        <li>He owes: INR 5 lakh - INR 3.5 lakh = <Glow>INR 1.5 lakh</Glow></li>
      </BulletList>

      <P>
        On February 20th (<Glow>GSTR-3B</Glow> due date):
      </P>
      <OrderedList>
        <li>The system auto-calculates his liability: INR 5 lakh</li>
        <li>INR 3.5 lakh is offset from Credit Wallet</li>
        <li>Remaining INR 1.5 lakh: Ramesh generates a <Glow>PMT-06</Glow> challan and pays via internet banking</li>
        <li>Amount goes to Cash Wallet, then auto-debited against liability</li>
        <li>All three wallets reconcile. Done.</li>
      </OrderedList>

      <WidgetSlot title="The Three Wallets">
        <ThreeWallets />
      </WidgetSlot>

      <P>
        <Glow>If Ramesh doesn't pay by the 20th:</Glow> Interest starts at <Glow>18% per annum</Glow> from the due date. Plus INR 50/day late fee. Plus his <Glow>e-way bill</Glow> generation gets blocked after 2 months of non-payment.
      </P>
    </Chapter>
  )
}
