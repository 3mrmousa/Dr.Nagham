export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://drnagham.com";

export const CLINIC_FAQS = [
  {
    question: "ما هي الاعتمادات والتراخيص الرسمية للعيادة؟",
    answer:
      "الدكتورة نغم عماد ناصيف مكي استشاري أمراض جلدية وتناسلية مسجلة بالنقابة العامة لأطباء مصر (رقم التسجيل كاستشاري: 119666 - سنة 2022)، ورقم ترخيص وزارة الصحة: 247156، ورقم القيد بالجدول العام لنقابة الأطباء: 244156، وحاصلة على ماجستير الأمراض الجلدية والتناسلية وتجميل الجلد من جامعة الأزهر (2014).",
  },
  {
    question: "متى تظهر نتيجة جلسات البوتوكس؟",
    answer:
      "يبدأ مفعول البوتوكس وارتخاء العضلات التعبيرية بالظهور تدريجياً بين اليوم الثالث واليوم الخامس من الجلسة، وتكتمل النتيجة النهائية عند اليوم العاشر إلى الرابع عشر.",
  },
  {
    question: "هل تسبب جلسات الليزر وإزالة الشعر أية تصبغات؟",
    answer:
      "بالتأكيد لا، عند تطبيقها بأجهزة حديثة ومعايرة دقيقة تحت إشراف طبي متخصص. نعتمد أجهزة تبريد متطورة تحمي الطبقة السطحية للجلد وتناسب خصيصاً نوعية وتصبغات البشرة الشرقية لضمان سلامة تامة بدون أي حروق أو آثار.",
  },
  {
    question: "كم جلسة أحتاجها لعلاج تساقط الشعر واستعادة كثافته؟",
    answer:
      "يحدد الكشف الطبي المجهري السبب الجذري للتساقط. في المعتاد، يتكون الكورس العلاجي المكثف من ٤ إلى ٦ جلسات بلازما أو ميزوثيرابي بفاصل زمني من أسبوعين إلى ثلاثة أسابيع بين الجلسة والأخرى، يتبعها جلسات تثبيت دورية للحفاظ على الكثافة.",
  },
  {
    question: "هل يلزم الحجز مسبقاً قبل القدوم إلى العيادة؟",
    answer:
      "نعم، نحرص في عيادتنا على نظام المواعيد المسبقة احتراماً لوقت المراجعين ولتجنب أوقات الانتظار، ولضمان حصول كل حالة على الوقت الكافي للكشف والاستشارة المخصصة. يمكن حجز الموعد بسهولة عبر الهاتف أو الواتساب مباشرة.",
  },
];

export const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#clinic`,
      name: "عيادة د. نغم عماد تاصيف — استشاري الأمراض الجلدية والتناسلية والطب التجميلي",
      alternateName: "عيادة دكتورة نغم عماد ناصيف مكي",
      url: SITE_URL,
      image: `${SITE_URL}/images/shared/consultation-room.png`,
      logo: `${SITE_URL}/images/shared/logo.svg`,
      telephone: ["+201014056201", "+201000118500"],
      email: "nagamnm81@gmail.com",
      medicalSpecialty: "Dermatology",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "مبنى العيادات التخصصية، أعلى قطونيل وكارينا، بجوار معمل البرج",
        addressLocality: "مدينة ٦ أكتوبر",
        addressRegion: "الجيزة",
        addressCountry: "EG",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "13:30",
          closes: "18:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "18:00",
          closes: "22:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "13:00",
          closes: "18:30",
        },
      ],
      availableService: [
        { "@type": "MedicalProcedure", name: "فحص الجلد والشعر بالديرموسكوب (Dermoscopy)" },
        { "@type": "MedicalProcedure", name: "الكشف الضوئي لمرضى البهاق والتصبغات (Wood's Light)" },
        { "@type": "MedicalProcedure", name: "علاج السنط والزوائد الجلدية بالكي البارد والكهربائي" },
        { "@type": "MedicalProcedure", name: "جلسات الديرمابن والمايكروبليدينج" },
        { "@type": "MedicalProcedure", name: "علاج حب الشباب وآثاره والندبات" },
        { "@type": "MedicalProcedure", name: "الحقن التجميلي بالبوتوكس والليزر الطبي" },
      ],
      sameAs: ["https://wa.me/201014056201"],
    },
    {
      "@type": "Physician",
      "@id": `${SITE_URL}/#physician`,
      name: "د. نغم عماد ناصيف مكي",
      alternateName: "د. نغم عماد تاصيف",
      medicalSpecialty: "Dermatology",
      jobTitle: "استشاري الأمراض الجلدية والتناسلية والطب التجميلي",
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "جامعة الأزهر — ماجستير الأمراض الجلدية والتناسلية وتجميل الجلد",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "جامعة حلب — بكالوريوس الطب والجراحة العامة",
        },
      ],
      identifier: [
        { "@type": "PropertyValue", name: "رقم ترخيص وزارة الصحة", value: "247156" },
        { "@type": "PropertyValue", name: "رقم التسجيل كاستشاري بنقابة أطباء مصر", value: "119666" },
        { "@type": "PropertyValue", name: "رقم القيد بالجدول العام", value: "244156" },
      ],
    },
  ],
};

export const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: CLINIC_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

