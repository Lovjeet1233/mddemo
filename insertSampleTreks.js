const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Trek = require("./models/Trek");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const sampleTreks = [

    {
      name: "Everest Base Camp Trek",
      image: "https://i.postimg.cc/4yShZVMM/Screenshot-20241219-103617.png",
      duration: "14 days",
      price: 1200,
      itinerary: [
        { day: "Day 1", activity: "Arrival at Kathmandu" },
        { day: "Day 2", activity: "Flight to Lukla and trek to Phakding" },
        { day: "Day 3", activity: "Trek to Namche Bazaar" },
      ],
      isTopTrek: true,
      itineraryUrl: "https://example.com/everest-itinerary.pdf",
    },
    {
      name: "Annapurna Circuit Trek",
      image: "https://i.postimg.cc/4yShZVMM/Screenshot-20241219-103617.png",
      duration: "16 days",
      price: 1500,
      itinerary: [
        { day: "Day 1", activity: "Drive to Bhulbhule" },
        { day: "Day 2", activity: "Trek to Chamje" },
        { day: "Day 3", activity: "Trek to Dharapani" },
      ],
      isTopTrek: false,
      itineraryUrl: "https://example.com/annapurna-itinerary.pdf",
    },
    {
      name: "Kashmir Great Lakes Trek",
      image: "https://i.postimg.cc/4yShZVMM/Screenshot-20241219-103617.png",
      duration: "8 days",
      price: 800,
      itinerary: [
        { day: "Day 1", activity: "Drive to Sonamarg" },
        { day: "Day 2", activity: "Trek to Nichnai" },
        { day: "Day 3", activity: "Trek to Vishansar Lake" },
      ],
      isTopTrek: true,
      itineraryUrl: "https://example.com/kashmir-itinerary.pdf",
    },
    {
      name: "Roopkund Trek",
      image: "https://i.postimg.cc/4yShZVMM/Screenshot-20241219-103617.png",
      duration: "9 days",
      price: 900,
      itinerary: [
        { day: "Day 1", activity: "Drive to Lohajung" },
        { day: "Day 2", activity: "Trek to Didna Village" },
        { day: "Day 3", activity: "Trek to Ali Bugyal" },
      ],
      isTopTrek: false,
      itineraryUrl: "https://example.com/roopkund-itinerary.pdf",
    },
    {
      name: "Hampta Pass Trek",
      image: "https://i.postimg.cc/4yShZVMM/Screenshot-20241219-103617.png",
      duration: "5 days",
      price: 500,
      itinerary: [
        { day: "Day 1", activity: "Drive to Jobra and trek to Chika" },
        { day: "Day 2", activity: "Trek to Balu Ka Ghera" },
        { day: "Day 3", activity: "Trek to Hampta Pass and descend to Shea Goru" },
      ],
      isTopTrek: true,
      itineraryUrl: "https://drive.google.com/file/d/1zY-FIlXV_5WrbICdLg-HGxl5BG26j3Qj/view?usp=sharing",
    },
 
  
 
  
];

const insertTreks = async () => {
  try {
    const existingTreks = await Trek.find();
    if (existingTreks.length === 0) {
      await Trek.insertMany(sampleTreks);
      console.log("Sample treks inserted successfully!");
    } else {
      console.log("Treks already exist. No need to reinitialize.");
    }
    mongoose.connection.close();
  } catch (err) {
    console.error(err.message);
  }
};

insertTreks();
