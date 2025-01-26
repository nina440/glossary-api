const glossary = [
  {
    id: 1,
    term: "Responsive Design",
    definition: "Дизайн, адаптирующийся к различным размерам экрана и устройствам.",
    related_terms: [2, 3, 5],  // Связано с Media Queries, Viewport, Flexbox
    sources: ["https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"]
  },
  {
    id: 2,
    term: "Media Queries",
    definition: "CSS-функция, позволяющая изменять стили в зависимости от размера экрана.",
    related_terms: [1],  // Связано с Responsive Design
    sources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries"]
  },
  {
    id: 3,
    term: "Viewport",
    definition: "Область просмотра веб-страницы в браузере устройства.",
    related_terms: [1],  // Связано с Responsive Design
    sources: ["https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"]
  },
  {
    id: 4,
    term: "Mobile-First Design",
    definition: "Подход к разработке, в котором дизайн создается сначала для мобильных устройств.",
    related_terms: [1],  // Связано с Responsive Design
    sources: ["https://www.smashingmagazine.com/2011/01/guidelines-for-mobile-friendly-design/"]
  },
  {
    id: 5,
    term: "Flexbox",
    definition: "CSS-модель для создания адаптивных макетов с использованием контейнеров и элементов.",
    related_terms: [1, 2],  // Связано с Responsive Design и Media Queries
    sources: ["https://css-tricks.com/snippets/css/a-guide-to-flexbox/"]
  },
  {
    id: 6,
    term: "CSS Grid",
    definition: "CSS-система для создания двухмерных макетов, подходящих для адаптивного дизайна.",
    related_terms: [5],  // Связано с Flexbox
    sources: ["https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout"]
  },
  {
    id: 7,
    term: "Breakpoints",
    definition: "Точки, при которых изменяется дизайн для адаптации под разные устройства.",
    related_terms: [1],  // Связано с Responsive Design
    sources: ["https://getbootstrap.com/docs/5.3/layout/breakpoints/"]
  },
  {
    id: 8,
    term: "Progressive Enhancement",
    definition: "Методология разработки, добавляющая улучшенные функции для более современных устройств.",
    related_terms: [9],  // Связано с Graceful Degradation
    sources: ["https://alistapart.com/article/understandingprogressiveenhancement/"]
  },
  {
    id: 9,
    term: "Graceful Degradation",
    definition: "Подход, при котором сайт остаётся функциональным даже на устаревших устройствах.",
    related_terms: [8],  // Связано с Progressive Enhancement
    sources: ["https://www.smashingmagazine.com/2010/09/the-graceful-degradation-vs-progressive-enhancement-debate/"]
  },
  {
    id: 10,
    term: "Accessibility (Доступность)",
    definition: "Практика создания веб-сайтов, доступных для пользователей с ограниченными возможностями.",
    related_terms: [11],  // Связано с WCAG
    sources: ["https://www.w3.org/WAI/fundamentals/accessibility-intro/"]
  },
  {
    id: 11,
    term: "WCAG",
    definition: "Руководство по обеспечению доступности веб-контента (Web Content Accessibility Guidelines).",
    related_terms: [10],  // Связано с Accessibility
    sources: ["https://www.w3.org/WAI/standards-guidelines/wcag/"]
  },
  {
    id: 12,
    term: "Pixel Density",
    definition: "Количество пикселей на дюйм экрана, влияющее на отображение контента.",
    related_terms: [13],  // Связано с Retina Display
    sources: ["https://en.wikipedia.org/wiki/Pixel_density"]
  },
  {
    id: 13,
    term: "Retina Display",
    definition: "Технология дисплеев с высокой плотностью пикселей, разработанная Apple.",
    related_terms: [12],  // Связано с Pixel Density
    sources: ["https://support.apple.com/en-us/HT202471"]
  },
  {
    id: 14,
    term: "Responsive Images",
    definition: "Методы загрузки изображений, оптимизированных под разные устройства и экраны.",
    related_terms: [10],  // Связано с Accessibility
    sources: ["https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"]
  },
  {
    id: 15,
    term: "Viewport Meta Tag",
    definition: "HTML-тег, определяющий, как браузер должен адаптировать контент к устройству.",
    related_terms: [1],  // Связано с Responsive Design
    sources: ["https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"]
  }
];

module.exports = glossary;
