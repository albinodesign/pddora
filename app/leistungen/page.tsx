import React from 'react';
import PageIntro from '@/components/PageIntro';
import ServiceCard from '@/components/ServiceCard';
import { CONTACT, ICONS } from '@/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leistungen | Ambulanter Pflegedienst Dora GmbH',
  description: 'Umfassende Pflegeleistungen von Dora GmbH: Grundpflege, Behandlungspflege, Verhinderungspflege, hauswirtschaftliche Hilfe und mehr in Offenbach/Frankfurt.',
};

export default function ServicesPage() {
  const services = [
    {
      title: "Behandlungspflege (SGB V)",
      description: "Die Behandlungspflege umfasst alle medizinischen Maßnahmen, die von einem Arzt verordnet und von unseren examinierten Pflegefachkräften bei Ihnen zu Hause durchgeführt werden. Dazu gehören beispielsweise die professionelle Wundversorgung bei chronischen oder akuten Wunden, das Verabreichen von Injektionen wie Insulin bei Diabetes, die regelmäßige Medikamentengabe und deren Überwachung sowie das An- und Ausziehen von Kompressionsstrümpfen. Auch die Versorgung von Kathetern und Stomata, Blutdruck- und Blutzuckermessungen sowie die Dekubitusbehandlung fallen in diesen Bereich. Das Besondere: Diese Leistungen werden von Ihrer Krankenkasse bezahlt – Sie benötigen keinen Pflegegrad, sondern lediglich eine Verordnung von Ihrem Arzt.",
      icon: <ICONS.Medical className="w-12 h-12" />,
      features: ["Wundversorgung & Verbandwechsel", "Injektionen (z.B. Insulin)", "Medikamentengabe & Überwachung", "Blutdruck- & Blutzuckermessung", "Kompressionsstrümpfe an-/ausziehen", "Katheter- & Stomapflege"]
    },
    {
      title: "Grundpflege",
      description: "Die Grundpflege – auch körperbezogene Pflegemaßnahmen genannt – unterstützt Sie bei allen alltäglichen Verrichtungen, die Sie nicht mehr selbstständig bewältigen können. Unsere einfühlsamen Pflegekräfte helfen Ihnen bei der Körperpflege wie Waschen, Duschen, Baden und Zahnpflege, beim An- und Auskleiden sowie bei der Haar- und Nagelpflege. Wir unterstützen Sie bei der Nahrungsaufnahme, helfen beim Aufstehen, Hinsetzen und Gehen und sorgen für regelmäßige Lagerung bei bettlägerigen Patienten. Auch die Begleitung zur Toilette und die Inkontinenzversorgung gehören selbstverständlich dazu. Dabei legen wir größten Wert auf Ihre Würde und Selbstbestimmung – wir fördern Ihre Eigenständigkeit, wo immer es möglich ist.",
      icon: <ICONS.Bath className="w-12 h-12" />,
      features: ["Ganzkörper- & Teilwaschungen", "Hilfe beim An- & Auskleiden", "Unterstützung bei der Nahrungsaufnahme", "Lagerung & Mobilisation", "Inkontinenzversorgung", "Haar- & Nagelpflege"]
    },
    {
      title: "Pflegeberatung (§ 37 SGB XI)",
      description: "Unser Beratungsangebot richtet sich an alle Pflegebedürftigen und ihre Angehörigen, die Unterstützung im Umfeld der Pflegeleistungen benötigen. Bei den gesetzlich vorgeschriebenen Beratungsbesuchen nach § 37.3 SGB XI kommen wir zu Ihnen nach Hause, schauen uns die aktuelle Pflegesituation an und geben praktische Tipps zur Verbesserung. Wir informieren Sie umfassend über alle Leistungen, die Ihnen zustehen – von Pflegegeld über Verhinderungspflege bis zum Entlastungsbetrag. Darüber hinaus helfen wir Ihnen bei der Antragstellung für einen Pflegegrad oder eine Höherstufung und bereiten Sie optimal auf den MDK-Besuch vor. Unser Ziel ist es, dass Sie alle Leistungen erhalten, die Ihnen zustehen.",
      icon: <ICONS.Shield className="w-12 h-12" />,
      features: ["Beratungsbesuche nach § 37.3 SGB XI", "Hilfe bei Pflegegradanträgen", "Information über Leistungsansprüche", "Individuelle Pflegeplanung", "MDK-Vorbereitung", "Angehörigenberatung"]
    },
    {
      title: "Betreuung & Entlastung",
      description: "Unsere Betreuungs- und Entlastungsleistungen gehen über die reine Pflege hinaus und fördern Ihre Lebensqualität und sozialen Kontakte. Wir begleiten Sie bei Spaziergängen an der frischen Luft, führen Gespräche, spielen Gesellschaftsspiele oder machen gemeinsam Gedächtnistraining. Auch die Begleitung zu Arztbesuchen, Behördengängen oder kulturellen Veranstaltungen gehört zu unserem Angebot. Für pflegende Angehörige bieten wir stundenweise Entlastung an – nutzen Sie die Zeit für eigene Termine, Erholung oder einfach mal durchatmen. Diese Leistungen können über den Entlastungsbetrag von 125€ monatlich finanziert werden, der jedem Pflegebedürftigen mit Pflegegrad 1-5 zusteht.",
      icon: <ICONS.Heart className="w-12 h-12" />,
      features: ["Alltagsbegleitung & Spaziergänge", "Gedächtnistraining", "Begleitung zu Arztbesuchen", "Stundenweise Entlastung", "Gesellschaft & Gespräche", "Vorlesen & Spielen"]
    },
    {
      title: "Verhinderungspflege",
      description: "Die Verhinderungspflege ist eine wichtige Leistung für pflegende Angehörige, die eine Auszeit benötigen. Wenn Sie als pflegender Angehöriger krank werden, einen wichtigen Termin haben oder einfach mal in den Urlaub fahren möchten, springen wir ein und übernehmen die Pflege. Die Pflegekasse zahlt dafür bis zu 1.612€ pro Jahr – und zusätzlich können Sie bis zu 806€ aus der Kurzzeitpflege umwidmen, sodass insgesamt bis zu 2.418€ zur Verfügung stehen. Die Verhinderungspflege kann tageweise oder auch stundenweise genutzt werden. Bei stundenweiser Nutzung unter 8 Stunden täglich wird das Pflegegeld nicht gekürzt. So können Sie regelmäßig kleine Auszeiten nehmen, ohne finanzielle Einbußen.",
      icon: <ICONS.Users className="w-12 h-12" />,
      features: ["Vertretung bei Krankheit", "Vertretung bei Urlaub", "Stundenweise Entlastung", "Bis zu 2.418€ pro Jahr", "Flexible Nutzung", "Kombination mit Kurzzeitpflege"]
    },
    {
      title: "Hauswirtschaftliche Hilfe",
      description: "Ein sauberes und gepflegtes Zuhause trägt wesentlich zu Ihrem Wohlbefinden bei. Unsere hauswirtschaftliche Versorgung umfasst alle Tätigkeiten rund um den Haushalt, die Sie nicht mehr selbst erledigen können. Wir reinigen Ihre Wohnung, waschen und bügeln Ihre Wäsche, beziehen die Betten und sorgen für Ordnung. Auch der Einkauf von Lebensmitteln und Alltagsgegenständen gehört dazu – wir achten dabei auf Ihre Vorlieben und Gewohnheiten. Auf Wunsch bereiten wir Ihnen auch frische Mahlzeiten zu, spülen das Geschirr und entsorgen den Müll. So können Sie sicher und komfortabel in Ihren eigenen vier Wänden leben, ohne sich um den Haushalt sorgen zu müssen.",
      icon: <ICONS.HomeService className="w-12 h-12" />,
      features: ["Reinigen der Wohnung", "Wäschepflege & Bügeln", "Einkaufsservice", "Zubereitung von Mahlzeiten", "Betten beziehen", "Müllentsorgung"]
    },
    {
      title: "Vermittlung von Zusatzleistungen",
      description: "Als Ihr Pflegedienst kümmern wir uns nicht nur um die direkte Pflege, sondern helfen Ihnen auch dabei, weitere wichtige Leistungen zu organisieren. Wir vermitteln Ihnen einen Hausnotruf, der besonders für Alleinlebende mehr Sicherheit bedeutet – auf Knopfdruck ist rund um die Uhr Hilfe erreichbar. Auch bei der Organisation von Essen auf Rädern unterstützen wir Sie, sodass Sie täglich eine warme, ausgewogene Mahlzeit erhalten. Wir koordinieren Fahrdienste für Arztbesuche oder Therapien und helfen bei der Beschaffung von Hilfsmitteln wie Pflegebetten, Rollatoren oder Toilettenstühlen. So haben Sie einen Ansprechpartner für alle Fragen rund um Ihre Versorgung.",
      icon: <ICONS.Star className="w-12 h-12" />,
      features: ["Hausnotruf-Systeme", "Essen auf Rädern", "Fahrdienste", "Hilfsmittelversorgung", "Pflegebetten & Rollatoren", "Koordination aller Anbieter"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-32">
      <PageIntro 
        accent="Unser Serviceumfang"
        title="Umfassende Pflege & Betreuung"
        description="Wir bieten Ihnen ein breites Spektrum an professioneller Unterstützung, individuell auf Ihre Bedürfnisse und Ihren Pflegegrad zugeschnitten. Unser Ziel ist Ihr Wohlbefinden in den eigenen vier Wänden."
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </section>

      {/* USPs / Besonderheiten */}
      <section className="py-32 bg-brand-accent/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand">Das Besondere an Dora</h2>
            <p className="text-gray-500 mt-4">Qualität, die man spürt.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Bezugspflege", desc: "Wir achten auf Kontinuität. Sie haben feste Ansprechpartner, die Sie und Ihre Gewohnheiten kennen.", icon: <ICONS.Users className="w-6 h-6" /> },
              { title: "Individuelle Planung", desc: "Keine Stoppuhr-Pflege. Wir nehmen uns Zeit und passen die Einsätze flexibel an Ihren Bedarf an.", icon: <ICONS.Clock className="w-6 h-6" /> },
              { title: "Zertifizierte Fachkräfte", desc: "Unser Team besteht ausschließlich aus examinierten Pflegekräften und geschulten Assistenten.", icon: <ICONS.Shield className="w-6 h-6" /> }
            ].map((usp, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm text-center">
                <div className="w-16 h-16 bg-brand/5 rounded-2xl flex items-center justify-center text-brand mx-auto mb-6">
                  {usp.icon}
                </div>
                <h4 className="text-xl font-bold text-brand mb-4">{usp.title}</h4>
                <p className="text-brand-dark text-base leading-relaxed font-medium">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand text-center mb-16">Der Weg zu uns</h2>
        <div className="space-y-10">
          {[
            { step: 1, title: "Erstkontakt", desc: "Rufen Sie uns unverbindlich an oder schreiben Sie uns eine E-Mail. In einem kurzen Telefonat klären wir Ihre erste Situation und vereinbaren einen zeitnahen Termin." },
            { step: 2, title: "Persönliche Beratung & Bedarfsermittlung", desc: "Wir besuchen Sie kostenlos zu Hause. Gemeinsam mit Ihnen und Ihren Angehörigen ermitteln wir den konkreten Hilfebedarf und erstellen eine individuelle Pflegeplanung." },
            { step: 3, title: "Beginn der Versorgung", desc: "Nach Klärung der Kostenübernahme durch die Pflegekasse oder das Sozialamt starten wir mit der vereinbarten Unterstützung. Wir sind ab dann verlässlich für Sie da." }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 rounded-full bg-brand text-white flex items-center justify-center text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">{item.step}</div>
              <div>
                <h4 className="text-xl font-bold text-brand mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand py-24 text-center text-white mx-4 rounded-[4rem] mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" aria-hidden="true"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8">Haben Sie Fragen zur Finanzierung oder zum Pflegegrad?</h3>
          <p className="text-brand-accent/80 text-xl mb-12">Wir beraten Sie kompetent und helfen Ihnen bei den nötigen Anträgen – völlig kostenfrei.</p>
          <a 
            href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} 
            className="inline-flex items-center gap-6 bg-white text-brand px-12 py-6 rounded-full text-2xl font-black shadow-xl hover:scale-105 transition-transform"
          >
            <ICONS.Phone className="w-8 h-8" />
            {CONTACT.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
