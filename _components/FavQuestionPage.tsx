import React from "react";

const faq = [
  {
    question: "Chip tuning nedir ve aracıma ne gibi faydalar sağlar?",
    answer:
      "Chip tuning, aracınızın motor kontrol ünitesindeki (ECU) yazılımın optimize edilmesidir. Bu işlem sayesinde motor gücü ve tork artar, yakıt tüketimi düşebilir ve sürüş keyfi yükselir.",
  },
  {
    question: "Chip tuning işlemi aracımın garantisini bozar mı?",
    answer:
      "Aracınız garanti kapsamındaysa, chip tuning işlemi bazı durumlarda garantiyi etkileyebilir. Detaylı bilgi için servisinizle görüşmeniz önerilir.",
  },
  {
    question: "Tuning işlemi yakıt tüketimini artırır mı?",
    answer:
      "Doğru yapılan bir tuning işlemi, performans artışı sağlarken çoğu zaman yakıt tüketimini artırmaz, hatta bazı durumlarda azaltabilir.",
  },
  {
    question: "Yazılım güncellemesi sonrası muayeneden geçer miyim?",
    answer:
      "Yasal sınırlar içinde yapılan tuning işlemlerinde aracınız muayeneden sorunsuz geçer. Ancak egzoz emisyon değerleri aşılırsa sorun yaşanabilir.",
  },
  {
    question: "Ses sistemi ve hoparlör montajı araca zarar verir mi?",
    answer:
      "Profesyonelce yapılan ses sistemi ve hoparlör montajı aracınıza zarar vermez. Tüm işlemler uzman ekibimiz tarafından güvenle yapılır.",
  },
  {
    question: "Tuning işlemi sonrası bakım gerektirir mi?",
    answer:
      "Tuning sonrası düzenli bakım ve kontroller, aracınızın uzun ömürlü ve sorunsuz çalışmasını sağlar.",
  },
];

function FavQuestionPage() {
  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto py-12 px-2 md:px-8">
        {/* SSS Sol */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center lg:text-left drop-shadow-lg underline underline-offset-8 decoration-amber-700">
            Sık Sorulan Sorular (SSS)
          </h1>

          <div className="space-y-4">
            {faq.map((item, i) => (
              <div
                key={i}
                itemScope
                itemType="https://schema.org/Question"
                className="bg-neutral-900 rounded-xl p-4 md:p-6 shadow-md"
              >
                <h2
                  className="text-base md:text-lg font-semibold text-yellow-400 mb-1 md:mb-2"
                  itemProp="name"
                >
                  {item.question}
                </h2>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-white text-sm md:text-base"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-white/60 text-xs md:text-sm">
            Auto-tuning, chip tuning, yazılım ve ses sistemleriyle ilgili daha
            fazla bilgi için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FavQuestionPage;
