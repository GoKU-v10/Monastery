import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Image from '../../components/AppImage';
import MonasteryDetail from './components/MonasteryDetail';

const Monasteries = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedMonastery, setSelectedMonastery] = useState(null);

  const monasteries = [
    {
      id: 'rumtek-monastery',
      name: 'Rumtek Monastery',
      location: 'Gangtok, Sikkim',
      country: 'India',
      coordinates: { lat: 27.2777, lng: 88.5577 },
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'],
      description: 'The largest monastery in Sikkim and seat of the Karmapa',
      established: '1966',
      type: 'Kagyu Monastery',
      altitude: '1,550m',
      history: `Rumtek Monastery, also known as the Dharmachakra Centre, is the largest monastery in Sikkim. Built in 1966 by the 16th Karmapa, it serves as the main seat of the Karma Kagyu lineage. The monastery houses precious relics, including the Golden Stupa containing the remains of the 16th Karmapa.`,
      impact: 'Rumtek is considered one of the most significant monasteries for Tibetan Buddhism outside Tibet.',
      urgency: 'Well-maintained',
      events: [
        { name: 'Losar Festival', date: 'February/March', description: 'Tibetan New Year celebrations with traditional dances' },
        { name: 'Buddha Jayanti', date: 'May', description: 'Celebration of Buddha\'s birth, enlightenment, and death' }
      ],
      tours: [
        { name: 'Monastery Tour with Street View', duration: '2 hours', price: '₹500' },
        { name: 'Virtual Pilgrimage Experience', duration: '1 hour', price: '₹300' }
      ]
    },
    {
      id: 'pemayangtse-monastery',
      name: 'Pemayangtse Monastery',
      location: 'Pelling, West Sikkim',
      country: 'India',
      coordinates: { lat: 27.2898, lng: 88.2147 },
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop'],
      description: 'One of the oldest and most important monasteries in Sikkim',
      established: '1705',
      type: 'Nyingma Monastery',
      altitude: '2,085m',
      history: `Pemayangtse Monastery, meaning 'Perfect Sublime Lotus', was founded in 1705 by Lama Lhatsun Chempo. It is one of the oldest and most important monasteries in Sikkim, belonging to the Nyingma order. The monastery offers stunning views of Kanchenjunga and houses ancient Buddhist scriptures and artifacts.`,
      impact: 'This monastery played a crucial role in establishing Buddhism in Sikkim and crowning the first Chogyal.',
      urgency: 'Heritage conservation needed',
      events: [
        { name: 'Chaam Dance Festival', date: 'February', description: 'Sacred masked dance performances' },
        { name: 'Saga Dawa', date: 'May/June', description: 'Celebration of Buddha\'s enlightenment' }
      ],
      tours: [
        { name: 'Heritage Monastery Tour', duration: '3 hours', price: '₹600' },
        { name: 'Kanchenjunga View Experience', duration: '2 hours', price: '₹400' }
      ]
    },
    {
      id: 'tashiding-monastery',
      name: 'Tashiding Monastery',
      location: 'Tashiding, West Sikkim',
      country: 'India',
      coordinates: { lat: 27.3419, lng: 88.2736 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'],
      description: 'Sacred monastery on a hilltop with panoramic Himalayan views',
      established: '1717',
      type: 'Nyingma Monastery',
      altitude: '1,465m',
      history: `Tashiding Monastery, built in 1717, is considered one of the most sacred monasteries in Sikkim. Located on a hilltop between the Rathong and Rangeet rivers, it offers breathtaking views of the Himalayas. The monastery is famous for its holy water ceremony during Bhumchu festival.`,
      impact: 'Tashiding is believed to be blessed by Guru Padmasambhava and holds immense spiritual significance.',
      urgency: 'Structural maintenance required',
      events: [
        { name: 'Bhumchu Festival', date: 'February/March', description: 'Sacred water ceremony predicting the year ahead' },
        { name: 'Guru Rinpoche Birthday', date: 'July', description: 'Celebration of Guru Padmasambhava\'s birth' }
      ],
      tours: [
        { name: 'Sacred Hilltop Experience', duration: '4 hours', price: '₹700' },
        { name: 'Himalayan Sunrise Tour', duration: '6 hours', price: '₹1000' }
      ]
    },
    {
      id: 'enchey-monastery',
      name: 'Enchey Monastery',
      location: 'Gangtok, Sikkim',
      country: 'India',
      coordinates: { lat: 27.3389, lng: 88.6065 },
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'],
      description: 'Historic monastery in Gangtok with traditional Sikkimese architecture',
      established: '1909',
      type: 'Nyingma Monastery',
      altitude: '1,675m',
      history: `Enchey Monastery was established in 1909 above Gangtok. The name 'Enchey' means 'solitary temple'. Built on the site blessed by Lama Druptob Karpo, it follows the Nyingma order of Tibetan Buddhism. The monastery is known for its annual Chaam dance during the Enchey festival.`,
      impact: 'Enchey serves as an important spiritual center for the local community in Gangtok.',
      urgency: 'Well-preserved',
      events: [
        { name: 'Enchey Festival', date: 'December/January', description: 'Annual masked dance festival' },
        { name: 'Drupka Teshi', date: 'August', description: 'Celebration of Buddha\'s first sermon' }
      ],
      tours: [
        { name: 'City Monastery Tour', duration: '2 hours', price: '₹400' },
        { name: 'Traditional Architecture Walk', duration: '1.5 hours', price: '₹350' }
      ]
    },
    {
      id: 'dubdi-monastery',
      name: 'Dubdi Monastery',
      location: 'Yuksom, West Sikkim',
      country: 'India',
      coordinates: { lat: 27.3667, lng: 88.2167 },
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'],
      description: 'The oldest monastery in Sikkim, founded by Lhatsun Chempo',
      established: '1701',
      type: 'Nyingma Monastery',
      altitude: '2,100m',
      history: `Dubdi Monastery, also known as Yuksom Monastery, is the oldest monastery in Sikkim, established in 1701 by Lhatsun Chempo. Located near Yuksom, the first capital of Sikkim, it holds great historical significance. The monastery played a crucial role in the coronation of the first Chogyal of Sikkim.`,
      impact: 'Dubdi is historically significant as it witnessed the establishment of the Sikkimese monarchy.',
      urgency: 'Heritage preservation critical',
      events: [
        { name: 'Coronation Day', date: 'April', description: 'Commemoration of the first Chogyal\'s coronation' },
        { name: 'Founder\'s Day', date: 'September', description: 'Celebration of Lhatsun Chempo' }
      ],
      tours: [
        { name: 'Historical Heritage Tour', duration: '3 hours', price: '₹650' },
        { name: 'First Capital Experience', duration: '5 hours', price: '₹900' }
      ]
    },
    {
      id: 'phensang-monastery',
      name: 'Phensang Monastery',
      location: 'Kewzing, South Sikkim',
      country: 'India',
      coordinates: { lat: 27.1833, lng: 88.3167 },
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
      images: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop'],
      description: 'Peaceful monastery known for its meditation retreats',
      established: '1721',
      type: 'Nyingma Monastery',
      altitude: '1,400m',
      history: `Phensang Monastery was founded in 1721 and is known for its serene environment perfect for meditation and spiritual practices. The monastery follows the Nyingma tradition and is famous for its three-year retreat programs. It houses ancient manuscripts and traditional Buddhist art.`,
      impact: 'Phensang is renowned for producing accomplished meditation masters and scholars.',
      urgency: 'Moderate maintenance needed',
      events: [
        { name: 'Meditation Retreat Festival', date: 'October', description: 'Annual gathering of meditation practitioners' },
        { name: 'Manuscript Reading', date: 'June', description: 'Public reading of ancient Buddhist texts' }
      ],
      tours: [
        { name: 'Meditation Experience', duration: '4 hours', price: '₹550' },
        { name: 'Spiritual Retreat Tour', duration: '1 day', price: '₹1200' }
      ]
    }
  ];

  React.useEffect(() => {
    if (id) {
      const monastery = monasteries.find(m => m.id === id);
      setSelectedMonastery(monastery);
    }
  }, [id]);

  const handleMonasteryClick = (monastery) => {
    setSelectedMonastery(monastery);
    navigate(`/monasteries/${monastery.id}`);
  };

  const handleBackToList = () => {
    setSelectedMonastery(null);
    navigate('/monasteries');
  };

  if (selectedMonastery) {
    return <MonasteryDetail monastery={selectedMonastery} onBack={handleBackToList} />;
  }

  return (
    <>
      <Helmet>
        <title>Sacred Monasteries of Sikkim - Buddha Paths</title>
        <meta name="description" content="Explore authentic Sikkim monasteries with real locations and Google Street View virtual tours." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Sacred Monasteries of Sikkim
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore the spiritual heritage of Sikkim through authentic monastery experiences with real locations and Google Street View virtual tours.
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {monasteries.map((monastery) => (
                  <div
                    key={monastery.id}
                    onClick={() => handleMonasteryClick(monastery)}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-medium transition-all duration-300 cursor-pointer group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={monastery.image}
                        alt={monastery.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                          {monastery.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {monastery.name}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-3">
                        <Icon name="MapPin" size={16} className="mr-1" />
                        <span>{monastery.location}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {monastery.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Est. {monastery.established}
                        </span>
                        <Button variant="ghost" size="sm" iconName="ArrowRight">
                          Explore
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Monasteries;