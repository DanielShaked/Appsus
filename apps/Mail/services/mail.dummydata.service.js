import {utilService} from '../../../services/util.service.js';

export const dummyDataService = {
  getDummyEmails,
};

const DUMMY_EMAILS = [
  //INBOX
  {
    id: utilService.makeId(),
    subject: 'Hey Check It Out!',
    body: `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
       Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
    isRead: false,
    sentAt: 1637774407228,
    to: 'yuval@Appsus.com',
    from: 'daniel@hotmail.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'Quizz for dummies',
    body: `Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.

        Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get`,
    isRead: false,
    sentAt: 1638774934886,
    to: 'yuval@Appsus.com',
    from: 'gameQuizz@walla.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'You have a delivery update',
    body: `Hi yuval shai,

        Order 3014758266086439 has a delivery update. You can view the shipping status on our website.

        If you have any questions, please let us know!`,
    isRead: false,
    sentAt: 1637774407228,
    to: 'yuval@Appsus.com',
    from: 'transaction@AliExpress.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'אישור הזמנה',
    body: `תודה על הזמנתך ביס פלאנט חיפה.


        איסוף הכרטיסים:
        
        1. במידה ובחרת בכרטיס אלקטרוני, יש להציג את הכרטיס, המצורף למייל זה, בעמדת הסדרן בכניסה.
        2. במידה ובחרת באפשרות איסוף הכרטיסים בקולנוע, ניתן להדפיסם בעמדות שירות העצמי בקולנוע באמצעות מספר ההזמנה שלך.
        3. במידה ורכשת כרטיס בהנחה (אזרח ותיק/ סטודנט/ חייל/ שוטר וכו') יש לאסוף את הכרטיסים בקופות הקולנוע, בהצגת תעודת הזכאות.`,
    isRead: false,
    sentAt: 1638774934886,
    to: 'yuval@Appsus.com',
    from: 'noreply@yesplanet.co.il',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'Pango FeedBack',
    body: `He lay on his armour-like back, and if he lifted his head a little he 
        could see his brown belly, slightly domed and divided by arches into 
        stiff sections.`,
    isRead: false,
    sentAt: 1638774934886,
    to: 'yuval@Appsus.com',
    from: 'pango.donotreply@pango-service.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'Tesla Trials Dogecoin Payments for Merch',
    body: `Elon Musk recently tweeted the company would accept Dogecoin as payment for merchandise. 
        DOGE briefly traded 27% higher after the announcement.`,
    isRead: true,
    sentAt: 1637774407228,
    to: 'yuval@Appsus.com',
    from: 'BinanceUpdates@binance.com',
    status: 'inbox',
    isStarred: false,
  },
  {
    id: utilService.makeId(),
    subject: 'GlassDoor new jobs and reviews',
    body: `	To see jobs and company updates relevant to your job.
        New Glassdoor Reviews`,
    isRead: true,
    sentAt: 1638774934886,
    to: 'yuval@Appsus.com',
    from: 'Glassdoor@glassdoor-service.com',
    status: 'inbox',
    isStarred: false,
  },
];

function getDummyEmails() {
  return [...DUMMY_EMAILS];
}
