import { Link } from "react-router-dom";



import React from 'react'


const BottomNavbar = () => {

  const listOflinks = [{
    to: "/mobile",
    displayText: "Mobile & Tablets",
    sublist: [{
      name: "SmartPhone",
      link: "//mobile"
    },
    {
      name: "Smartwatch",
      link: "/mobile"
    },
    {
      name: "Headphone & Accessories",
      link: "/mobile"
    },
    {
      name: "Tablets",
      link: "/mobile"
    },
    {
      name: "Power Bank",
      link: "/mobile"
    },
    {
      name: "eSlates",
      link: "/mobile"
    },


    ]
  },
  {
    to: "/tv",
    displayText: "Telivision",

    sublist: [{
      name: "Telivision",
      link: "/tv"
    },
    {
      name: "smart Tv",
      link: "/tv"
    },
    {
      name: "32 inch TVs",
      link: "/tv"
    },
    {
      name: "43 inch Tvs",
      link: "/tv"
    },
    {
      name: "55 inch Tvs",
      link: "/tv"
    },
    {
      name: "Androi dTvs",
      link: "/tv"
    },



    ]


  },
  {
    to: "/audio",
    displayText: "AUDIO",
    sublist: [{
      name: "Head Phone",
      link: "/audio"
    },
    {
      name: "True Wirelass",
      link: "/audio"
    },
    {
      name: "Bluetooth Nackband ",
      link: "/audio"
    },
    {
      name: "Wired Earphone",
      link: "/audio"
    },
    {
      name: "Bluetooth Speakers",
      link: "/audio"
    },
    {
      name: "Smart Speakers",
      link: "/audio"
    },
    {
      name: "Sound Bars",
      link: "/audio"
    },
    {
      name: "Multimedia",
      link: "/audio"
    },

    ]
  },
  {
    to: "/homeappli",
    displayText: "Home Appliance",
    sublist: [{
      name: "Air Conditioners",
      link: "/homeappli"
    },
    {
      name: "Washing Machine",
      link: "/homeappli"
    },
    {
      name: "vaccum Cleaners",
      link: "/homeappli"
    },

    {
      name: "Dishwashers",
      link: "/homeappli"
    },
    {
      name: "Fans",
      link: "/homeappli"
    },
    {
      name: "Room Heaters",
      link: "/homeappli"
    },


    ]
  },
  {
    to: "computers/",
    displayText: "Computers",
    sublist: [{
      name: "Laptop",
      link: "/computers"
    },
    {
      name: "Bluetooth Speakers & wifi ",
      link: "/computers"
    },
    {
      name: "Internet Connectivity Device",
      link: "/computers"
    },
    {
      name: "Printers % Inks",
      link: "/computers"
    },
    {
      name: "Data Storage Divice",
      link: "/computers"
    },
    {
      name: "Input Device",
      link: "/computers"
    },


    ]
  },
  {
    to: "/cameras",
    displayText: "CAMERAS",
    sublist: [{
      name: "DSLr",
      link: "/cameras"
    },
    {
      name: "Mirrorless Cameres",
      link: "/cameras"
    },
    {
      name: "Action Cameras",
      link: "/cameras"
    },
    {
      name: "Point & shot cameras",
      link: "/cameras"
    },
    {
      name: "Camera Lens",
      link: "/cameras"
    },
    {
      name: "Digital Camera Accessories",
      link: "/cameras"
    },


    ]
  },
  {
    to: "/kitchan",
    displayText: "Kitchan Appliance",
    sublist: [{
      name: "Mixer",
      link: "/kitchan"
    },
    {
      name: "Cookpotes",
      link: "/kitchan"
    },
    {
      name: "Juicer",
      link: "/kitchan"
    },
    {
      name: "Electric Kettle",
      link: "/kitchan"
    },
    {
      name: "Hand Blender",
      link: "/kitchan"
    },
    {
      name: "Coffee/Tea Maker",
      link: "/kitchan"
    },




    ]

  },
  {
    to: "/personal",
    displayText: "Personal Care",
    sublist: [{
      name: "Shave & Trimmers",
      link: "/personal"
    },
    {
      name: "Epilators",
      link: "/personal"
    },
    {
      name: "Irons",
      link: "/personal"
    },
    {
      name: "Hair Dryers",
      link: "/personal"
    },

    ]

  },
  {
    to: "/accessories",
    displayText: "Accessories",
    sublist: [{
      name: "Smart Device",
      link: "/accessories"
    },
    {
      name: "Power Banks",
      link: "/accessories"
    },
    {
      name: "Webcames",
      link: "/accessories"
    },
    {
      name: "Mount & Stands",
      link: "/accessories"
    },
    {
      name: "Routers",
      link: "/accessories"
    },


    ]

  },



  ]


  return (
    < >
      <div className="BottomNav" >


        {listOflinks.map((links) => (


          <div>
            <Link key={links.to} to={links.to}>
              {links.displayText}
            </Link>

            {/* <div className="sublinks">
              {
                links.sublist.map((subele) => (

                  <Link to={subele.link}>{subele.name}</Link>
                ))
              }
            </div> */}
          </div>

        ))}


      </div>



    </>
  )
}


export { BottomNavbar }