//conceptsssss**
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>

      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
        {/* code right about this line is same as code right below line */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
