import React from "react";

const certifications = [
  {
    title: "ISO 9001:2015 Kalite Yönetim Sistemi",
    description:
      "Hizmetlerimizin uluslararası kalite standartlarına uygun olduğunu belgeleyen sertifika.",
    icon: "📄",
  },
  {
    title: "TSE Hizmet Yeterlilik Belgesi",
    description:
      "Türk Standartları Enstitüsü tarafından verilen hizmet yeterlilik belgesi.",
    icon: "🏅",
  },
  {
    title: "Yetkili Servis Sertifikası",
    description:
      "Marka ve ürünler için alınan resmi yetkili servis sertifikası.",
    icon: "🔧",
  },
];

function Certifications() {
  return (
    <section className="py-12 px-4 min-h-screen ">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Sertifikalarımız</h2>
        <p className="text-white">
          Kalite ve güvenceyi belgeleyen sertifikalarımız ile hizmetinizdeyiz.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="rounded-xl shadow-lg bg-black  p-6 flex flex-col items-center hover:scale-105 transition-transform border border-border"
          >
            <div className="text-4xl mb-3">{cert.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-center">
              {cert.title}
            </h3>
            <p className="text-sm text-muted-foreground text-center">
              {cert.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
