import { Chapter } from '../../components/storytelling/Chapter'
import { P, H3, Glow } from '../../components/storytelling/StoryText'

export function Ch17() {
  return (
    <Chapter id="ch17" number={17} title="Special Situations -- The Edge Cases">
      <H3>Job Work -- "I'll Process It and Send It Back"</H3>
      <P>
        Ramesh (fabric manufacturer in Surat) sends raw yarn to a weaver in Ahmedabad to turn into fabric. This is <Glow>job work</Glow> -- he's not selling the yarn, just getting it processed.
      </P>
      <P>
        <Glow>The rule:</Glow> Sending goods for job work is NOT a supply (no <Glow>GST</Glow> charged). But you must get the goods back within <Glow>1 year</Glow> (for inputs) or <Glow>3 years</Glow> (for capital goods like machinery). If you don't? The government treats it as a supply, and you owe <Glow>GST</Glow> with interest.
      </P>

      <H3>SEZ Supplies -- "Exports Without Leaving India"</H3>
      <P>
        If you supply goods to a Special Economic Zone (like Infosys's campus in Bangalore that's designated as an SEZ), it's treated the same as an export -- <Glow>zero-rated</Glow>. You don't charge <Glow>GST</Glow>, and you can claim refund of your input <Glow>ITC</Glow>.
      </P>

      <H3>Reverse Charge on Imports -- "You Buy Foreign, You Pay Indian GST"</H3>
      <P>
        When Amit imports components from China for his startup, customs charges him <Glow>IGST</Glow> at the applicable rate. This is a form of reverse charge -- the foreign supplier can't charge <Glow>GST</Glow>, so the Indian importer pays it at the border. Amit can claim <Glow>ITC</Glow> on this <Glow>IGST</Glow>.
      </P>
    </Chapter>
  )
}
