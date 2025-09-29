import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import EventsGallery from './components/EventsGallery';
import VideoPlayer from './components/VideoPlayer';
import EventCalendar from './components/EventCalendar';

const CulturalEventPage = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const events = [
    {
      id: 1,
      name: 'Saga Dawa',
      date: '2025-9-28',
      description: 'A vibrant festival celebrating the birth, enlightenment, and nirvana of Lord Buddha.',
      longDescription: 'Saga Dawa is one of the most significant and sacred festivals for Buddhists across the world. It commemorates the three most important events in the life of Sakyamuni Buddha - his birth, his attainment of enlightenment, and his mahaparinirvana. The festival is observed in the fourth month of the Tibetan lunar calendar, which usually falls in May or June.',
      history: 'The tradition of celebrating Saga Dawa dates back centuries in Tibetan Buddhism. The name "Saga Dawa" means "fourth month" in Tibetan. It is a time for reflection, meritorious deeds, and pilgrimage.',
      culturalSignificance: 'During Saga Dawa, devotees engage in various virtuous activities such as lighting butter lamps, making offerings, turning prayer wheels, and performing circumambulations of stupas and monasteries. It is a time to practice generosity, compassion, and wisdom.',
      image: 'https://i.pinimg.com/1200x/e4/18/02/e4180287152c3226e203959d7d837f3f.jpg',
      videoUrl: 'https://youtu.be/VBJGjyWWsBo?si=Zieg5IyYhTiiX5Ji',
      location: 'Gangtok',
      monastery: 'Rumtek Monastery',
      type: 'festival',
      region: 'East Sikkim',
      googleMapsUrl: 'https://www.google.com/maps/place/Rumtek+Monastery/@27.2769,88.5633,17z',
      artists: [
        { name: 'Lama Tenzin', bio: 'A renowned Cham dancer with over 20 years of experience.' },
        { name: 'Ani Choying', bio: 'A celebrated vocalist known for her soulful renditions of ancient mantras.' }
      ],
      schedule: [
        '6:00 AM: Morning prayers and butter lamp offerings.',
        '10:00 AM: Cham dance performance.',
        '2:00 PM: Sermon by the head lama.',
        '5:00 PM: Evening prayers and circumambulation.'
      ],
      gallery: [
        'https://i.pinimg.com/1200x/4d/d1/12/4dd1122ca00f93509456cb38e8731551.jpg',
        'https://i.pinimg.com/1200x/9b/ed/9c/9bed9c1807d09e1817469669cadb1874.jpg',
        'https://i.pinimg.com/1200x/12/cc/d0/12ccd074836ef295ea6e439b11644c98.jpg'
      ]
    },
    {
      id: 2,
      name: 'Lhabab Duechen',
      date: '2025-12-23',
      description: 'Commemorating Lord Buddha\'s descent from the heavenly realm to earth.',
      longDescription: 'Lhabab Duechen is a Buddhist festival that is celebrated to observe the descent of Buddha from the Trāyastriṃśa heaven down to earth. According to legend, Buddha had left for the heavenly realm at the age of 41 to give teachings to the gods and to repay the kindness of his mother by liberating her from Samsara.',
      history: 'This event is considered to be one of the eight great deeds of the Buddha. The festival is celebrated on the 22nd day of the ninth lunar month in the Tibetan calendar.',
      culturalSignificance: 'On this day, the effects of positive or negative actions are multiplied ten million times. It is a day for pilgrimage and for lighting butter lamps.',
      image: 'https://i.pinimg.com/736x/5c/27/68/5c276878fd299cf492f00f179f5d03ee.jpg',
      videoUrl: 'https://youtu.be/YyvADQmvhKc?si=s3xfN4TqO5_8zCZK',
      location: 'Pelling',
      monastery: 'Pemayangtse Monastery',
      type: 'ceremony',
      region: 'West Sikkim',
      googleMapsUrl: 'https://www.google.com/maps/place/Pemayangtse+Monastery/@27.3005,88.2524,17z',
      artists: [
        { name: 'Dorje Lingpa', bio: 'A master of monastic rituals and chanting.' }
      ],
      schedule: [
        '5:00 AM: Pre-dawn prayers.',
        '9:00 AM: Recitation of scriptures.',
        '3:00 PM: Offerings and dedication of merit.'
      ],
      gallery: [
        'https://i.pinimg.com/1200x/6b/3d/a3/6b3da33e4a2e65894a94e2f1c7314f5d.jpg'
      ]
    },
    {
      id: 3,
      name: 'Pang Lhabsol',
      date: '2025-11-10',
      description: 'A festival unique to Sikkim, it pays homage to the guardian deity of Sikkim, Mount Khangchendzonga.',
      longDescription: 'Pang Lhabsol is a festival that is unique to Sikkim. It was popularized by the third Chogyal of Sikkim, Chakdor Namgyal. The festival is a celebration of the guardian deity of Sikkim, Mount Khangchendzonga.',
      history: 'The festival is celebrated on the 15th day of the 7th month of the Tibetan calendar. The \'chaams\' (monk dances) performed during this festival are spectacular and the acrobatic warrior dance is the highlight.',
      culturalSignificance: 'The festival also commemorates the blood brotherhood treaty signed between the Lepchas and the Bhutias, and the guardian deity is invoked to protect Sikkim from all calamities.',
      image: 'https://www.taleof2backpackers.com/wp-content/uploads/2018/09/Pang-Lhabsol_Ravangla_Sikkim-4.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=4-j6k3-3kzk',
      location: 'Tashiding',
      monastery: 'Tashiding Monastery',
      type: 'dance',
      region: 'West Sikkim',
      googleMapsUrl: 'https://www.google.com/maps/place/Tashiding+Monastery/@27.279,88.293,17z',
      artists: [
        { name: 'The Warriors of Ling', bio: 'A troupe of dancers who perform the spectacular warrior dance.' }
      ],
      schedule: [
        '11:00 AM: The grand \'Pang-Toed Chaam\' (warrior dance).'
      ],
      gallery: [
        'https://i.pinimg.com/1200x/ae/ee/7f/aeee7f8da945b3d162ab8777697e8ef3.jpg'
      ]
    }
  ];

  const handleWatchVideo = (videoUrl) => {
    setCurrentVideo(videoUrl);
    const videoPlayerElement = document.getElementById('video-player');
    if (videoPlayerElement) {
      videoPlayerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEventSelect = (eventId) => {
    const eventElement = document.getElementById(`event-card-${eventId}`);
    if (eventElement) {
      eventElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Cultural Events - Monastery Digital Heritage</title>
        <meta name="description" content="Explore and participate in vibrant cultural events and festivals from monasteries across Sikkim. Book your tickets and watch event highlights." />
        <meta name="keywords" content="cultural events, monastery festivals, Sikkim events, Buddhist festivals, online booking" />
      </Helmet>
      <div className="container mx-auto px-4 py-8 mt-20">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-2">Cultural Events & Festivals</h1>
          <p className="text-xl text-muted-foreground">Immerse Yourself in the Rich Traditions of Monastery Life</p>
        </header>
        <main>
          <EventsGallery events={events} onWatchVideo={handleWatchVideo} />
          <VideoPlayer events={events} currentVideo={currentVideo} onVideoSelect={handleWatchVideo} />
          <EventCalendar events={events} onDateClick={handleEventSelect} />
        </main>
      </div>
    </>
  );
};

export default CulturalEventPage;
