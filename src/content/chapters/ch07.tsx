import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow, OrderedList } from '../../components/storytelling/StoryText'
import { CalloutBox } from '../../components/storytelling/CalloutBox'

export function Ch07() {
  return (
    <Chapter id="ch07" number={7} title="E-Invoicing -- Why the Government Wants to See Every Invoice">
      <H3>The Problem It Solves</H3>

      <P>
        Before <Glow>e-invoicing</Glow>, the government only saw your invoices when you filed{' '}
        <Glow>GSTR-1</Glow> -- sometimes 11 days after the month ended, sometimes 43 days
        (quarterly filers). By then, fake invoices had already been used to claim <Glow>ITC</Glow>{' '}
        fraudulently.
      </P>

      <P>
        <Glow>The scam that e-invoicing kills:</Glow> A fake company issues invoices to real
        companies. The real companies claim <Glow>ITC</Glow> on these fake invoices. The fake
        company disappears without paying tax. The government loses revenue. This was a{' '}
        <Glow>INR 40,000+ crore problem.</Glow>
      </P>

      <P>
        <Glow>E-invoicing</Glow> solves it by requiring every invoice to be{' '}
        <Glow>registered with the government in real-time</Glow>, before it can be used as a valid
        document.
      </P>

      <H3>How It Works -- Explained Simply</H3>

      <P>Think of it like getting a stamp on a legal document:</P>

      <OrderedList>
        <li>
          <Glow>You create an invoice</Glow> in your billing software (Tally, Zoho, your custom
          system, anything)
        </li>
        <li>
          <Glow>You send it to the IRP</Glow> (Invoice Registration Portal -- government's
          verification server)
        </li>
        <li>
          <Glow>The IRP checks it:</Glow> Is this <Glow>GSTIN</Glow> valid? Is the invoice number
          unique? Are all mandatory fields present?
        </li>
        <li>
          <Glow>If valid, the IRP stamps it:</Glow> Gives it a 64-character{' '}
          <Glow>IRN</Glow> (Invoice Reference Number) and a QR code
        </li>
        <li>
          <Glow>You give the stamped invoice to your buyer</Glow>
        </li>
        <li>
          <Glow>The buyer knows it's real</Glow> because it has the government's stamp (
          <Glow>IRN</Glow>) and they can verify the QR code
        </li>
      </OrderedList>

      <P>
        <Glow>Without the stamp, the invoice is not valid.</Glow> Your buyer cannot claim{' '}
        <Glow>ITC</Glow> on it. It's like a cheque without the bank's signature -- worthless.
      </P>

      <H3>Why It Keeps Getting Stricter</H3>

      <P>
        The government has been <em>progressively lowering the threshold</em> of who must use{' '}
        <Glow>e-invoicing</Glow>:
      </P>

      <P><Glow>2020:</Glow> Only businesses with INR 500 crore+ turnover (~500 companies)</P>
      <P><Glow>2021:</Glow> INR 100 crore+ (~4,000 companies)</P>
      <P><Glow>2022:</Glow> INR 20 crore+ then INR 10 crore+ (~2,00,000 companies)</P>
      <P><Glow>2023:</Glow> INR 5 crore+ (~1 million businesses)</P>
      <P><Glow>October 2025:</Glow> <Glow>INR 2 crore+ (millions of SMEs!)</Glow></P>

      <P>
        Every year, the threshold drops. Eventually, it will cover <em>every</em> GST-registered
        business.
      </P>

      <CalloutBox type="product">
        The INR 2 crore threshold brings millions of SMEs into <Glow>e-invoicing</Glow> for the
        first time. Most of these businesses use simple billing software (or paper bills!) that
        can't generate the JSON format required by the IRP. We can offer one-click{' '}
        <Glow>e-invoice</Glow> generation from WhatsApp -- send us your invoice details, we'll
        handle the IRP submission and send back your <Glow>IRN</Glow>.
      </CalloutBox>

      <H3>The Reporting Timeline Trap</H3>

      <P>
        If your turnover is INR 10 crore+, you must upload the <Glow>e-invoice</Glow> to IRP
        within <Glow>30 days</Glow> of the invoice date. If INR 100 crore+, within{' '}
        <Glow>3 days</Glow>.
      </P>

      <P>
        Miss the window? The IRP rejects your upload. Now you have an invoice that can't be
        registered, which means it's not valid, which means your buyer can't claim{' '}
        <Glow>ITC</Glow> on it. You have to cancel it and issue a new one -- but the original
        goods are already delivered. Chaos.
      </P>
    </Chapter>
  )
}
