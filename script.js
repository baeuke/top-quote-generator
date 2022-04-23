const quoteText = document.querySelector(".quote");
const sourceText = document.querySelector(".name");
quoteBtn = document.querySelector("button");

let quotes = [
 {
  quote: 'they say you love what you work hard for and you work hard on what you love',
  source: 'tipa kamila'
 },

 {
  quote: 'OTHERS CAN NEVER MAKE YOU FEEL SPECIAL FOR LONG.',
  source: 'Shwetabh Gangwar'
 },

 {
  quote: 'Whatever the case may be, the right to feel special must be earned and must only be yours to give. It shouldn’t belong to others.',
  source: 'Shwetabh Gangwar'
 },

 {
  quote: 'Specialness, in essence, does not require anybody but the individual.',
  source: 'Shwetabh Gangwar'
 },

 {
  quote: 'Real winning requires your focus on neither winning nor losing, but upon learning. You start seeing whatever you are learning from the point of view of utility, opportunity and ability. Take whatever you are learning right now, whatever you are currently doing with your life, and ask the questions below from these three points of view.',
  source: 'Shwetabh Gangwar'
 },

 {
  quote: 'First, you take ownership of the failure. It’s very different from acting as if you have been stung by failure. Both are similar realisations, but come from different points of view. The first makes you responsible, the other a victim.',
  source: 'Shwetabh Gangwar'
 },

 {
  quote: 'Чем больше человек забывает себя - отдавая себя служению важному делу или любви к другому человеческому существу - тем более он человечен и тем более он реализует себя.',
  source: 'Виктор  Франкл'
 },

 {
  quote: 'So now the question is how long is it gonna take to make the decision, to make the shift, and show some courage, show some character? You know, character - is the ability to carry out a resolution long after the excitement of the moment has passed.',
  source: 'Prince Ea'
 },

 {
  quote: 'Я сказал, что в трудные минуты кто-нибудь смотрит на нас - друг, жена, близкий человек - живой или мертвый, или Бог - и ожидает, что мы не разочаруем его. Он надеется увидеть, что мы страдаем гордо - а не униженно - и что мы знаем, как достойно умереть.',
  source: 'Виктор  Франкл'
 },

 {
  quote: 'У обоих был один и тот же довод - им нечего больше ожидать от жизни. В обоих случаях надо было их убедить, что это жизнь еще ждет от них чего-то: кто-то в будущем на них надеется. Человек, осознавший свою ответственность перед другим человеческим существом, которое страстно его ждет, или перед незаконченной работой, уже не сможет бросаться своей жизнью. Он знает, «зачем» ему жить, и будет способен вынести почти любое «как».',
  source: 'Виктор  Франкл'
 },

 {
  quote: 'Прорабатывайте свои мышцы под самыми разными углами самым тяжелым весом, какой только сможете поднять, ведь без боли нет и результатов.',
  source: 'Арнольд Шварценеггер'
 },

 {
  quote: 'все, что ты делаешь, нужно делать с охотой и энтузиазмом',
  source: 'Арнольд Шварценеггер'
 },

 {
  quote: 'гораздо важнее обладать определенным влиянием, чем властью',
  source: 'Арнольд Шварценеггер'
 },

 {
  quote: 'That said, it doesn’t matter how successful or unsuccessful you are right now. What matters is whether your habits are putting you on the path toward success. You should be far more concerned with your current trajectory than with your current results.',
  source: 'Atomic Habits'
 },

 {
  quote: 'Ultimately, it is your commitment to the process that will determine your progress.',
  source: 'Atomic Habits'
 },

 {
  quote: 'I focused on getting my life in order. While my peers stayed up late and played video games, I built good sleep habits and went to bed early each night. In the messy world of a college dorm, I made a point to keep my room neat and tidy. These improvements were minor, but they gave me a sense of control over my life. I started to feel confident again.',
  source: 'Atomic Habits'
 },

 {
  quote: 'Сегодня новый день и новые мы. Не пора ли нам стать чуть лучше, чем вчера?',
  source: 'Жизнь неизбежно будет обалденной. Основано на нереально классных событиях (Из серии сказказов Акиката Раса)'
 },

 {
  quote: 'Трагедия в том, что никто толком не знает – куда бежит и зачем. Главное – обогнать бегущего впереди босоногого ребенка, такого же как ты.  Между тем есть и другие люди. Вместо того, чтобы сразу бросаться в гонку, они учатся мастерить себе обувь. Когда обувь готова, они бегут легко, с удовольствием.  Они не ассоциируют бег с болью. Не огрубеют сердцем из-за ненужных страданий. Не будут ненавидеть тех, кто бежит впереди и презирать тех, кто бежит позади. Они будут наслаждаться пробежкой. Всей пробежкой от начала до конца. Каждым ее мигом.',
  source: 'Из серии сказказов Акиката Раса'
 },

 {
  quote: 'Иногда эти мысли бывают, скажем так, не очень добрыми. Но наши мысли – какими бы злыми и неприятными они не были – это не мы. Нас в большей степени определяют наши поступки.',
  source: 'Жизнь неизбежно будет обалденной. Основано на нереально классных событиях (Из серии сказказов Акиката Раса)'
 },

 {
  quote: 'Да, жизнь – игра, но лишь твоя игра.  Иначе в ней нет смысла… вообще.',
  source: 'Из серии сказказов Акиката Раса'
 },

 {
  quote: 'А ты знаешь, что «берсерк» произошло от Берик Сериккалиевич?',
  source: 'Из серии сказказов Акиката Раса'
 },
];

function randomQuote () {
 let random = Math.floor((Math.random())* quotes.length);
 quoteText.innerHTML = quotes[random].quote;
 sourceText.innerHTML = quotes[random].source;

}

quoteBtn.addEventListener("click", randomQuote);