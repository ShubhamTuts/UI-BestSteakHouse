import {
  Clock,
  DollarSign,
  Heart,
  MapPin,
  Menu,
  Search,
  Star,
  User,
} from 'lucide-react';
import React from 'react';

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <img
              src="https://www.codewithfaraz.com/tools/placeholder?size=120x40"
              alt="Logo"
              className="h-8"
            />
            <nav className="hidden gap-6 md:flex">
              <a href="#" className="hover:text-blue-600">
                Browse Cities
              </a>
              <a href="#" className="hover:text-blue-600">
                Top Rated
              </a>
              <a href="#" className="hover:text-blue-600">
                New Additions
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden items-center text-blue-600 md:flex">
              Add Your Restaurant
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <User className="size-5" />
            </button>
            <button className="md:hidden">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Search */}
        <section className="relative h-96">
          <img
            src="https://www.codewithfaraz.com/tools/placeholder?size=1920x600"
            alt="Hero background"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-white">
            <h1 className="mb-8 text-center text-4xl font-bold md:text-5xl">
              Find the Perfect Steakhouse
            </h1>
            <div className="w-full max-w-2xl">
              <div className="flex gap-2">
                <div className="flex-1">
                  <select className="h-12 w-full appearance-none rounded-lg bg-white pl-10 pr-4 text-gray-900">
                    <option value="">Select City</option>
                    <optgroup label="Texas">
                      <option value="houston">Houston</option>
                      <option value="houston-memorial">- Memorial</option>
                      <option value="houston-galleria">- Galleria</option>
                      <option value="houston-katy">- Katy</option>
                      <option value="dallas">Dallas</option>
                      <option value="austin">Austin</option>
                    </optgroup>
                    <optgroup label="New York">
                      <option value="nyc">New York City</option>
                      <option value="nyc-manhattan">- Manhattan</option>
                      <option value="nyc-brooklyn">- Brooklyn</option>
                    </optgroup>
                  </select>
                  <MapPin className="absolute left-3 top-3.5 size-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <select className="h-12 w-full appearance-none rounded-lg bg-white pl-10 pr-4 text-gray-900">
                    <option value="">Select Steakhouse</option>
                    <option value="perrys">Perry&apos;s Steakhouse</option>
                    <option value="mastros">Mastro&apos;s Steakhouse</option>
                    <option value="mortons">Morton&apos;s Steakhouse</option>
                    <option value="ruths">Ruth&apos;s Chris Steakhouse</option>
                  </select>
                  <Search className="absolute left-3 top-3.5 size-5 text-gray-400" />
                </div>
                <button className="rounded-lg bg-blue-600 px-6 text-white hover:bg-blue-700">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Filters */}
        <section className="border-b">
          <div className="mx-auto max-w-7xl p-4">
            <div className="flex gap-4 overflow-x-auto pb-2">
              <button className="whitespace-nowrap rounded-full bg-blue-600 px-4 py-2 text-white">
                All Steakhouses
              </button>
              <button className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200">
                Fine Dining
              </button>
              <button className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200">
                Casual
              </button>
              <button className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200">
                Open Now
              </button>
              <button className="whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200">
                Price: $$$-$$$$
              </button>
            </div>
          </div>
        </section>

        {/* Featured Cities */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Popular Steakhouse Cities</h2>
              <button className="text-blue-600 hover:underline">
                View All
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1, 2, 3, 4].map((city) => (
                <div
                  key={city}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg"
                >
                  <img
                    src={`https://www.codewithfaraz.com/tools/placeholder?size=400x300`}
                    alt="City thumbnail"
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="font-semibold text-white">City Name</h3>
                    <p className="text-sm text-white">XX Restaurants</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Listings */}
        <section className="bg-gray-50 py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Latest Additions</h2>
              <div className="flex items-center gap-4">
                <select className="rounded-lg border px-3 py-2">
                  <option>Sort by: Newest</option>
                  <option>Rating: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
                <button className="text-blue-600 hover:underline">
                  View All
                </button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative">
                    <img
                      src={`https://www.codewithfaraz.com/tools/placeholder?size=400x300`}
                      alt="Restaurant thumbnail"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 hover:bg-white">
                      <Heart className="size-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <h3 className="font-bold">Restaurant Name</h3>
                      <p className="text-sm text-gray-600">Location</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="mr-1 size-4 text-yellow-400" />
                        <span>4.5</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="mr-1 size-4 text-gray-600" />
                        <span>$$$$</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 size-4 text-gray-600" />
                        <span>Open Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="rounded-xl bg-blue-50 p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Own a Steakhouse?
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                Join thousands of steakhouse owners who trust us to connect them
                with diners. List your restaurant for free today.
              </p>
              <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
                Add Your Restaurant
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <img
                src="https://www.codewithfaraz.com/tools/placeholder?size=120x40"
                alt="Logo"
                className="mb-4 h-8"
              />
              <p className="text-sm text-gray-400">
                Discover and book the best steakhouses in your city.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">For Diners</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Search Restaurants
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Top Cities
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Special Offers
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">For Restaurants</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Add Restaurant
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Partner with Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Resources
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">About</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  About Us
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Contact
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Terms & Privacy
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BestSteakhouse.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
