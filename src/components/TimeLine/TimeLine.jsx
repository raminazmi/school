import React from 'react';
import TimeLineContent from './TimeLineContent';

const TimeLine = () => {
  const advantages = [
    {
      advantage: "تحفيظ القرآن الكريم كاملاً.",
      details: " نؤمن بأن تحفيظ القرآن الكريم هو أحد أهم الأهداف التعليمية، ونعمل جاهدين لتوفير بيئة تعليمية مشجعة وداعمة لتحقيق هذا الهدف بنجاح."
    },
    {
      advantage: "مناهج دراسية مختصة وطرق تعليمية حديثة.",
      details: " نهتم بتقديم مناهج دراسية مختصة تتضمن أساليب وأدوات تعليمية حديثة وفعّالة. نحرص على تطبيق أحدث الأساليب التعليمية واستخدام التقنيات المبتكرة لتحقيق أفضل النتائج في تعليم القرآن الكريم."
    },
    {
      advantage: "كادر تعليمي متميز ومتخصص في التربية.",
      details: " نفخر بأن لدينا كادر تعليمي متفانٍ ومتخصص في مجال التعليم والتربية."
    },
    {
      advantage: "عدد الطلبة في الفصل 25 - 30 طالب فقط.",
      details: " نهتم بتوفير بيئة تعليمية مريحة ومتجانسة حيث يتم تقديم الدروس والتدريب لعدد محدود من الطلاب."
    },
    {
      advantage: "مباني حديثة وصفوف نموذجية مجهزة.",
      details: "نسعى جاهدين لتوفير بيئة محفزة تدعم نمو الطلاب وتساهم في تحقيق أهدافهم التعليمية."
    },
    {
      advantage: "مكتبة مدرسية ومختبر علوم وحاسوب.",
      details: "نهتم بتوفير مكتبة مدرسية متنوعة ومتكاملة تحتوي على مجموعة واسعة من المصادر والكتب المرتبطة بالقرآن الكريم وعلومه."
    },
    {
      advantage: "صقل مواهب الطلبة والاهتمام بها وتنميتها.",
      details: "نحن نسعى جاهدين لتوفير الدعم اللازم للطلاب لتحقيق أهدافهم وتطوير قدراتهم بأفضل الطرق الممكنة."
    }
  ];

  return (
    <div className="snap-center pt-8 pb-12 mx-6 max-[400px]:mx-4 flex flex-col">
      <div className="relative text-white border-gray-200 border-r">
        {advantages.map((advantage, index) => (
          <TimeLineContent
            key={index}
            Title={advantage.advantage}
            number={index + 1}
            details={advantage.details}
            open={index === 0 ? true : false}
          />
        ))}
      </div>
    </div>
  );
}

export default TimeLine;
