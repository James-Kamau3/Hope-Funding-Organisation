import './App.css';
import Footer from './Components/ Footer';
import Header from './Components/Header';
import About from './Components/About';

;

function App() {
  const cardObject =  [{
    "imageUrl":"https://plus.unsplash.com/premium_photo-1671070290610-aad0f9b06eef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  "imageAlt":"An example image",
  "title":"Education and Learning",
  "description":"Help children get education.Support them by providing funding for their education." },
{
  "imageUrl":"https://thumbs.dreamstime.com/b/startup-circle-process-business-concept-60485119.jpg",
  "imageAlt":"An example image",
  "title":"Business Startups.",
  "description":"Help business startups get funding for their business and get their business to the top level."
},
{
  "imageUrl":"https://www.shutterstock.com/image-photo/empowerment-enable-improvement-progress-concept-260nw-433228525.jpg",
  "imageAlt":"An example image",
  "title":"Youth Empowerment.",
  "description":"Help business startups get funding for their business and get their business to the top level."
},
{
  "imageUrl":"https://media.istockphoto.com/id/668218790/photo/group-of-friends-huddle-in-rear-view-together.jpg?b=1&s=170667a&w=0&k=20&c=T9JQ_3k2bDRRMO29JFEimr9knc24x7-ovRALVswzIBE=",
  "imageAlt":"An example image",
  "title":"Community.",
  "description":"Help business startups get funding for their business and get their business to the top level."
},
{
  "imageUrl":"https://thumbs.dreamstime.com/b/glass-jar-words-charity-heart-concept-accumulating-money-donations-saving-social-medical-help-volunteers-135369144.jpg",
  "imageAlt":"An example image",
  "title":"Calamity Relief.",
  "description":"Help business startups get funding for their business and get their business to the top level."
},
{
  "imageUrl":"https://www.shutterstock.com/image-vector/perfect-logo-women-empowerment-health-260nw-1633211929.jpg",
  "imageAlt":"An example image",
  "title":"Women Empowerment.",
<<<<<<< HEAD
  "description":"Help business startups get funding for their business and get their business to the top level."
=======
  "description":"Help business startups get funding for their business and get their business to the top level." 
>>>>>>> refs/remotes/origin/main
},
{
  "imageUrl":"https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hhcml0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
  "imageAlt":"An example image",
  "title":"Orphans.",
<<<<<<< HEAD
  "description":"Help business startups get funding for their business and get their business to the top level."
=======
  "description":"Help business startups get funding for their business and get their business to the top level." 
>>>>>>> refs/remotes/origin/main
},
{
  "imageUrl":"https://c8.alamy.com/comp/2G3BDF7/non-exclusive-a-magnificent-herd-of-handcrafted-life-size-elephants-roaming-in-the-royal-parks-made-using-lantana-camara-a-natural-plant-material-2G3BDF7.jpg",
  "imageAlt":"An example image",
  "title":"Wildlife Conservation.",
<<<<<<< HEAD
  "description":"Help business startups get funding for their business and get their business to the top level."
},
{
  "imageUrl":"https://media.istockphoto.com/id/1218623873/photo/donation-box-with-food-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=h0Q3HODN-EI_27CPM2w8XE8FCuJ48UbLZNKowDJtisE=",
  "imageAlt":"An example image",
  "title":"Food Donation.",
  "description":"Help business startups get funding for their business and get their business to the top level."
=======
  "description":"Help business startups get funding for their business and get their business to the top level." 
},
{
  "imageUrl":"https://us.123rf.com/450wm/alessandrobiascioli/alessandrobiascioli1905/alessandrobiascioli190500007/123690449-young-friends-stacking-hands-outdoor-happy-millennial-people-having-fun-joining-and-celebrating.jpg?ver=6",
  "imageAlt":"An example image",
  "title":"Youth Empowerment.",
  "description":"Help business startups get funding for their business and get their business to the top level." 
},
{
  "imageUrl":"https://media.istockphoto.com/id/1218623873/photo/donation-box-with-food-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=h0Q3HODN-EI_27CPM2w8XE8FCuJ48UbLZNKowDJtisE=",
  "imageAlt":"An example image",
  "title":"Food Donation.",
  "description":"Help business startups get funding for their business and get their business to the top level." 
>>>>>>> refs/remotes/origin/main
}
]
  return (
 <div>
  <Header />
  <About cardObject={cardObject}/>
  
  <Footer />
 </div>
  );
}
export default App;