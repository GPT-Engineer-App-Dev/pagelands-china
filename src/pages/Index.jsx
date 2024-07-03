import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <img src="https://placehold.co/1200x600" alt="Great Wall of China" className="w-full h-auto object-cover" />
        <h1 className="text-5xl font-bold">Welcome to China</h1>
        <p className="text-xl">Explore the rich culture, history, and beauty of China</p>
        <Button variant="primary" size="lg">Learn More</Button>
      </section>

      <Separator />

      {/* Culture Section */}
      <section id="culture" className="space-y-4">
        <h2 className="text-4xl font-bold">Culture</h2>
        <p>Chinese culture is one of the world's oldest cultures, tracing back thousands of years. It includes a rich heritage of art, music, literature, and cuisine.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/400x300" alt="Traditional Clothing" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Chinese Festival" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Chinese Cuisine" className="w-full h-auto object-cover" />
        </div>
      </section>

      <Separator />

      {/* History Section */}
      <section id="history" className="space-y-4">
        <h2 className="text-4xl font-bold">History</h2>
        <p>China has a long and storied history, with significant events that have shaped the nation and the world.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>221 BC: Qin Dynasty unifies China</li>
          <li>618-907 AD: Tang Dynasty, a golden age of culture and art</li>
          <li>1949: People's Republic of China established</li>
          {/* Add more historical events as needed */}
        </ul>
      </section>

      <Separator />

      {/* Travel Section */}
      <section id="travel" className="space-y-4">
        <h2 className="text-4xl font-bold">Travel</h2>
        <p>China offers a diverse range of travel destinations, from bustling cities to serene landscapes.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://placehold.co/400x300" alt="Beijing" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Shanghai" className="w-full h-auto object-cover" />
          <img src="https://placehold.co/400x300" alt="Xi'an" className="w-full h-auto object-cover" />
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-2">
        <p>Follow us on social media:</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-blue-500">Facebook</a>
          <a href="#" className="text-blue-400">Twitter</a>
          <a href="#" className="text-pink-500">Instagram</a>
        </div>
        <p>Contact us: info@discoverchina.com</p>
      </footer>
    </div>
  );
};

export default Index;