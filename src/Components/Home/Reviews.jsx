import {React,useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const reviews = [

  {

    id: 1,

    name: "Caine Wildeboer",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXmOIpJZxB8DPdUqPYrC1rjajBZ8eQVVOCFn9HYVHy8GPmDxbyg=w75-h75-p-rp-mo-ba2-br100", // Replace with actual image

    feedback:

      "Pizza tastes as good as it looks and it looks absolutely incredible. Ordered take out, arrived really quickly within about 25-30 mins on a Sunday, and now I'm the happiest I've been all day. What's better than this? Some NFL on TV, my butt in the couch and pizza in the tum tum ya heard?",

  },

  {

    id: 2,

    name: "Jena",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjU8fzcHwWPuPUsDIqNaYQsr1uQOehY3-sU0jxj5THkQMByPmKg=w75-h75-p-rp-mo-br100", // Replace with actual image

    feedback:

      "Met with old friends here recently. We had an amazing time drinking great beer (as well as NA beer) and eating excellent pizza. We got the queen of hearts and it was so delicious. Our server was amazing. They were friendly, helpful and never made us feel rushed. It was all fairly priced. I will be back soon. I absolutely recommend.",

  },

  {

    id: 3,

    name: "Clay Goldman",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUFQhM9wTfu5HTmhbmfpddO3txZ0hI1U6xRAszhc6CVVD_3oh9B=w75-h75-p-rp-mo-ba6-br100", // Replace with actual image

    feedback:

      "Max & Issy’s is a super cute date spot with great pizza.   They have a few unique pizzas, such as the Queen of Hearts,  Highly recommend stopping by for date night or just a great pizza with friends",

  },

  {

    id: 4,

    name: "leearcadia2000",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a/ACg8ocJ9hxtdYhmPQ5j-OdCd5VBHeVXH6PtfBxqIMB3SuPS829rG7w=w75-h75-p-rp-mo-ba4-br100", // Replace with actual image

    feedback:

      "Great Atmosphere... Saturday night before Christmas and it was nice and quite...great jam music by the bartender and awesome service. We got the white pizza queen of hearts and another just pepperoni & sausage...house salad was fire...we will be back!!!",

  },
  {

    id: 5,

    name: "Jerry The Pigeon And Mike L",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXOeL65Zv5p8B_PYqC5vYUhvMmmh5ehfaPJsA_gXuW6pDCDNALl=w75-h75-p-rp-mo-ba5-br100", // Replace with actual image

    feedback:

      "We stumbled on this place one evening on a walk.  Glad we stayed. The pizza was great and the staff was super friendly.  It was an old bar called Paddy Longs. So older reviews still talk about the bacon & the previous food. It’s now all about the pizza!! and they did an amazing job rehabbing it. ",

  },
  {

    id: 6,

    name: "Al Bezirgan",

    rating: 5,

    avatar: "https://lh3.googleusercontent.com/a/ACg8ocL9D1p1T_3BPQBJWiVevXqDUQS3AxOYxfwllYoT3_ZkXBv5=w75-h75-p-rp-mo-br100", // Replace with actual image

    feedback:

      "5 stars across the board!!  Pizza is some of the best I have had, service was fantastic. Staff is so friendly will be back.  Wife and I shared a veggie pizza that was fantastic, night out for under $50.( we don’t drink). Best deal in lakeview",

  },

];

const Reviews = () => {


  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = 3;

  const handleNext = () => {
    if ((currentPage + 1) * reviewsPerPage < reviews.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-center text-2xl font-bold text-yellow-500 mb-8">
       
      </h2>
      <h3 className=" text-bloody text-center text-4xl font-semibold mb-16">
        Words From Our Food Lovers
      </h3>
      <div className="relative flex justify-center items-center w-full">
      
        <FontAwesomeIcon   onClick={handlePrev} icon={faArrowLeft} className="  cursor-pointer absolute left-0 bg-peach text-bloody px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:bg-gray-500 text-4xl  mb-2 bounce-icon" />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="flex gap-8 justify-center w-full max-w-4xl"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-900 p-8 rounded-lg shadow-lg w-full md:w-1/3"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <div>
                    <h4 className="text-xl font-semibold">{review.name}</h4>
                    <div className="flex">
                      {Array.from({ length: Math.floor(review.rating) }).map(
                        (_, i) => (
                          <span key={i} className="text-yellow-500">
                            ★
                          </span>
                        )
                      )}
                      {review.rating % 1 ? (
                        <span className="text-yellow-500">☆</span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <p className="text-peach">{review.feedback}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
       
      
        <FontAwesomeIcon   disabled={(currentPage + 1) * reviewsPerPage >= reviews.length}  onClick={handleNext} icon={faArrowRight} className="  cursor-pointer absolute right-0 bg-peach text-bloody px-4 py-2 rounded-lg hover:bg-yellow-600 disabled:bg-gray-500 text-4xl  mb-2 bounce-icon" />
        
        
      </div>
    </div>
  </div>

  );

};

  

export default Reviews;