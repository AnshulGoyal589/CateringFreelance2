import React from 'react';

const films = [
  { name: 'Bhool Bhulaiya 2' },
  { name: 'Gadar 2' },
  { name: 'Tubelight'},
  { name: '83 The Film'},
  { name: 'Animal'},
  { name: 'Sardar ka Grandson'},
  { name: 'De De Pyaar De' },
  { name: 'Pal Pal Dil Ke Pass'},
  { name: 'The Night Manager' },
  { name: 'HIT the First Case'},
  { name: 'Kartikeya 2' },
  { name: 'Hero' },
  { name: 'Bang Bang' },
  { name: 'Mary Com' },
  { name: 'Brahmastra' },
  { name: 'Mumbai Diaries 26/11' },
  { name: 'Shaitaan' },
  { name: 'Satyamev Jayate 2' },
  { name: 'Mrs. Chatterjee' },
  { name: 'Yeh Jawaani Hai Deewani' }
];


const FilmList = () => {
  return (
    <div className="min-h-screen bg-[#ecece2] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-amber-800">
          Bollywood Films
          <span className="block text-lg font-normal text-amber-600 mt-2">Curated by The Savoury Soiree</span>
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {films.map((film, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-400 opacity-75"></div>
              
              <h3 className="text-lg font-semibold text-amber-900 ml-3 group-hover:text-amber-600 transition-colors duration-300">
                {film.name}
              </h3>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-100 to-peach transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default FilmList;
