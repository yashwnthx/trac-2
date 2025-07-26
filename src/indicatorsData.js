const indicatorsData = {
  Amenities: [
    {
      name: "Household with 6-8 members (%)",
      data: [{ value: 15 }, { value: 20 }, { value: 18 }, { value: 22 }, { value: 19 }],
      regionalData: [
        { name: "Uttar Pradesh", value: 18 },
        { name: "Maharashtra", value: 15 },
        { name: "Bihar", value: 22 },
        { name: "West Bengal", value: 17 },
        { name: "Madhya Pradesh", value: 20 },
        { name: "Tamil Nadu", value: 12 },
        { name: "Rajasthan", value: 19 },
        { name: "Karnataka", value: 14 },
        { name: "Gujarat", value: 13 },
        { name: "Andhra Pradesh", value: 16 },
        { name: "Odisha", value: 21 },
        { name: "Kerala", value: 10 },
        { name: "Assam", value: 23 },
        { name: "Punjab", value: 11 },
        { name: "Haryana", value: 12 },
        { name: "Chhattisgarh", value: 20 },
        { name: "Jharkhand", value: 24 },
        { name: "Uttarakhand", value: 9 },
        { name: "Himachal Pradesh", value: 8 },
        { name: "Jammu and Kashmir", value: 10 },
        { name: "Goa", value: 5 },
        { name: "Delhi", value: 7 },
        { name: "Puducherry", value: 6 },
        { name: "Chandigarh", value: 4 },
        { name: "Andaman and Nicobar Islands", value: 3 },
        { name: "Dadra and Nagar Haveli and Daman and Diu", value: 5 },
        { name: "Lakshadweep", value: 2 },
        { name: "Meghalaya", value: 18 },
        { name: "Manipur", value: 15 },
        { name: "Mizoram", value: 10 },
        { name: "Nagaland", value: 12 },
        { name: "Tripura", value: 14 },
        { name: "Sikkim", value: 7 },
        { name: "Arunachal Pradesh", value: 16 },
      ],
    },
    {
      name: "Household with five members (%)",
      data: [{ value: 25 }, { value: 28 }, { value: 26 }, { value: 30 }, { value: 27 }],
      regionalData: [
        { name: "Uttar Pradesh", value: 28 },
        { name: "Maharashtra", value: 25 },
        { name: "Bihar", value: 30 },
        { name: "West Bengal", value: 27 },
        { name: "Madhya Pradesh", value: 29 },
        { name: "Tamil Nadu", value: 22 },
        { name: "Rajasthan", value: 29 },
        { name: "Karnataka", value: 24 },
        { name: "Gujarat", value: 23 },
        { name: "Andhra Pradesh", value: 26 },
        { name: "Odisha", value: 31 },
        { name: "Kerala", value: 20 },
        { name: "Assam", value: 33 },
        { name: "Punjab", value: 21 },
        { name: "Haryana", value: 22 },
        { name: "Chhattisgarh", value: 30 },
        { name: "Jharkhand", value: 34 },
        { name: "Uttarakhand", value: 19 },
        { name: "Himachal Pradesh", value: 18 },
        { name: "Jammu and Kashmir", value: 20 },
        { name: "Goa", value: 15 },
        { name: "Delhi", value: 17 },
        { name: "Puducherry", value: 16 },
        { name: "Chandigarh", value: 14 },
        { name: "Andaman & Nicobar Island", value: 13 },
        { name: "Dadra and Nagar Haveli and Daman and Diu", value: 15 },
        { name: "Lakshadweep", value: 12 },
        { name: "Meghalaya", value: 28 },
        { name: "Manipur", value: 25 },
        { name: "Mizoram", value: 20 },
        { name: "Nagaland", value: 22 },
        { name: "Tripura", value: 24 },
        { name: "Sikkim", value: 17 },
        { name: "Arunachal Pradesh", value: 26 },
      ],
    },
    {
      name: "Household with four members (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 29 }, { value: 33 }],
    },
    {
      name: "Household with nine and above members (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Household with one member (%)",
      data: [{ value: 8 }, { value: 7 }, { value: 9 }, { value: 8 }, { value: 10 }],
    },
    {
      name: "Household with three members (%)",
      data: [{ value: 12 }, { value: 10 }, { value: 13 }, { value: 11 }, { value: 14 }],
    },
    {
      name: "Household with two members (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households availing banking services (%)",
      data: [{ value: 70 }, { value: 75 }, { value: 72 }, { value: 78 }, { value: 76 }],
    },
    {
      name: "Households having internet facility (%)",
      data: [{ value: 60 }, { value: 65 }, { value: 62 }, { value: 68 }, { value: 66 }],
    },
    {
      name: "Households having TV, Computer/Laptop, Telephone/mobile phone and Scooter/ Car (%)",
      data: [{ value: 40 }, { value: 45 }, { value: 42 }, { value: 48 }, { value: 46 }],
    },
    {
      name: "Households having a mobile phone (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Households having Bicycle (%)",
      data: [{ value: 50 }, { value: 55 }, { value: 52 }, { value: 58 }, { value: 56 }],
    },
    {
      name: "Households having BothLandline and mobile (%)",
      data: [{ value: 10 }, { value: 12 }, { value: 11 }, { value: 13 }, { value: 14 }],
    },
    {
      name: "Households having Car/ Jeep/Van (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households having Landline only (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Households having Radio/Transistor (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Households having Scooter/ Motorcycle/Moped (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Households having Television (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households used Any other material as material of Floor (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households used Any other material as material of roof (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households used Any other material as material of wall (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households used Burnt Brick as material of Floor (%)",
      data: [{ value: 10 }, { value: 12 }, { value: 11 }, { value: 13 }, { value: 14 }],
    },
    {
      name: "Households used Burnt brick as material of wall (%)",
      data: [{ value: 10 }, { value: 12 }, { value: 11 }, { value: 13 }, { value: 14 }],
    },
    {
      name: "Households used Burnt Brickas material of roof (%)",
      data: [{ value: 10 }, { value: 12 }, { value: 11 }, { value: 13 }, { value: 14 }],
    },
    {
      name: "Households used Cement as material of Floor (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households used Concrete as material of roof (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households used Concrete as material of wall (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households used G.I./ Metal/ Asbestos sheets as material of wall (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households used G.I./Metal/ Asbestos sheets as material of roof (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households used Grass/ Thatch/ Bamboo etc. as material of wall (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households used Grass/ Thatch/ Bamboo/ Wood/Mud etc. as material of roof (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households used Hand made Tiles as material of roof (%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Households used Machine made Tiles as material of roof (%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Households used Mosaic/ Floor tiles as material of Floor (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Households used Mud as material of wall Unburnt brick (%)",
      data: [{ value: 12 }, { value: 10 }, { value: 13 }, { value: 11 }, { value: 14 }],
    },
    {
      name: "Households used Mud as material of Floor (%)",
      data: [{ value: 12 }, { value: 10 }, { value: 13 }, { value: 11 }, { value: 14 }],
    },
    {
      name: "Households used Plastic/ Polythene as material of roof (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Households used Plastic/ Polythene as material of wall (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Households used Stone as material of Floor (%)",
      data: [{ value: 18 }, { value: 20 }, { value: 19 }, { value: 21 }, { value: 22 }],
    },
    {
      name: "Households used Stone not packed with mortar as material of wall (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households used Stone packed with mortar as material of wall (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households used Stone/ Slate as material of roof (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households used Wood as material of wall (%)",
      data: [{ value: 6 }, { value: 7 }, { value: 5 }, { value: 8 }, { value: 6 }],
    },
    {
      name: "Households used Wood/ Bamboo as material of Floor (%)",
      data: [{ value: 6 }, { value: 7 }, { value: 5 }, { value: 8 }, { value: 6 }],
    },
    {
      name: "Households which Does not have kitchen (%)",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Households which Does not have kitchen even outside house (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Households which has Kitchen (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households which has Kitchen outside house (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with any other ownership status (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with Cooking facilities outside house (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households with Cooking facility inside house (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Households with five and more married couples (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Households with five dwelling rooms (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households with four dwelling rooms (%)",
      data: [{ value: 12 }, { value: 10 }, { value: 13 }, { value: 11 }, { value: 14 }],
    },
    {
      name: "Households with four married couples (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Households with no exclusive room (%)",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Households with no married couple (%)",
      data: [{ value: 20 }, { value: 18 }, { value: 22 }, { value: 20 }, { value: 23 }],
    },
    {
      name: "Households with Non-Serviceable structure of census houses (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with one dwelling rooms (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Households with one married couple (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Households with Permanent structure of census houses (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Households with Semi-Permanent structure of census houses (%)",
      data: [{ value: 20 }, { value: 18 }, { value: 22 }, { value: 20 }, { value: 23 }],
    },
    {
      name: "Households with Serviceable structure of census houses (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households with six and above dwelling rooms (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with source of drinking water Within premises (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Households with three dwelling rooms (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households with three married couples (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with Total Temporary structure of census houses (%)",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Households with two dwelling rooms (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households with two married couples (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with Unclassifiable stucture (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Households Without internet facility (%)",
      data: [{ value: 40 }, { value: 35 }, { value: 38 }, { value: 32 }, { value: 34 }],
    },
    {
      name: "Households without radio, TV, Internet,Landline, mobile, bicycle, scooter, car/jeep/van (%)",
      data: [{ value: 10 }, { value: 8 }, { value: 12 }, { value: 9 }, { value: 11 }],
    },
    {
      name: "Number of households with No Cooking (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Proportion of owned households",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Proportion of rented households",
      data: [{ value: 30 }, { value: 28 }, { value: 29 }, { value: 27 }, { value: 26 }],
    },
    {
      name: "Total Residence (%)",
      data: [{ value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }, { value: 100 }],
    },
    {
      name: "Total Residence houses in Dilapidated condition (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Total Residence houses in Good condition (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Total Residence houses in Livable condition (%)",
      data: [{ value: 25 }, { value: 24 }, { value: 23 }, { value: 22 }, { value: 21 }],
    },
  ],
  Energy: [
    {
      name: "Households use Any other for cooking fuel (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households use biogas for cooking fuel (%)",
      data: [{ value: 10 }, { value: 12 }, { value: 11 }, { value: 13 }, { value: 14 }],
    },
    {
      name: "Households use Coal,Lignite,Charcoal for cooking fuel (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households use Cowdung cake for cooking fuel (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households use Crop residue for cooking fuel (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households use Electricity for cooking fuel (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Households use Fire-wood for cooking fuel (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Households use Kerosene for cooking fuel (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households use LPG/PNG for cooking fuel (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Households use No cooking for cooking fuel (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Households using clean fuel for cooking (%)",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Households using electricity as the main source of lighting (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households using solar energy as main source of lighting (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with electricity (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Households with main source of lighting from Any other (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with main source of lighting from Kerosene (%)",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Households with main source of lighting from Other oil (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Households with No lighting (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
  ],
  Wash: [
    {
      name: "Households having access to any improved source of drinking water (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households having access using improved sanitation facility (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Households having bathing facility within the premises with Enclosure without roof (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households having toilet facility within the premises (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Households not having toilet facility within the premises (%)",
      data: [{ value: 25 }, { value: 22 }, { value: 24 }, { value: 20 }, { value: 21 }],
    },
    {
      name: "Households practicing open defecation (%)",
      data: [{ value: 20 }, { value: 18 }, { value: 22 }, { value: 20 }, { value: 23 }],
    },
    {
      name: "Households use Public toilet as alternative source of toilet (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with bathrooms within the premises (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Households with Flush/pour flush toilet connected to Other system (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with Flush/pour flush toilet connected to Piped sewer system (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Households with Flush/pour flush toilet connected to Septic tank (%)",
      data: [{ value: 35 }, { value: 38 }, { value: 36 }, { value: 40 }, { value: 39 }],
    },
    {
      name: "Households with main source of drinking water from Covered well (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with main source of drinking water from Handpump (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Households with main source of drinking water from Other sources (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with main source of drinking water from River/Canal (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Households with main source of drinking water from Spring (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Households with main source of drinking water from Tank/Pond/Lake (%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Households with main source of drinking water from Tapwater from treated source (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Households with main source of drinking water from Tapwater from un-treated source (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households with main source of drinking water from Tubewell/Borehole (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Households with main source of drinking water from Un-covered well (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with Night soil removed by human (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with Night soil serviced by animal (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Households with no bathing facilites within the premises (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Households with No drainage for Waste water outlet (%)",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Households with pit toilet connected to With slab/ventilated improved pit (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Households with source of drinking water Away from household (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Households with source of drinking water Near premises (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Households with Waste water outlet connected to Closed drainage (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Households with Waste water outlet connected to Open drainage (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Households Without slab/open pit (%)",
      data: [{ value: 20 }, { value: 18 }, { value: 22 }, { value: 20 }, { value: 23 }],
    },
    {
      name: "Night soil disposed into open drain (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Women aged 15-24 years who use hygeinic methods of protection during their menstrual period (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
  ],
  Education: [
    {
      name: "Average number of Teacher per School",
      data: [{ value: 1.5 }, { value: 1.6 }, { value: 1.5 }, { value: 1.7 }, { value: 1.6 }],
    },
    {
      name: "Children aged 3-6 years currently attending pre-school education (PSE) at Anganwadi centre (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Children aged 3-6 years currently attending pre-school education (PSE) at Privately run institution (Play school, nursery etc.) (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Children aged 3-6 years currently not attending PSE (%)",
      data: [{ value: 30 }, { value: 28 }, { value: 29 }, { value: 27 }, { value: 26 }],
    },
    {
      name: "Children aged 36-71 months attended PSE in AWC for 16 or more days in the month prior to survey (among children attending PSE at AWC) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children attended before / Drop out (Age 6-17 years) (%)-Female",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Children attended before / Drop out (Age 6-17 years) (%)-Male",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Children attended before / Drop out (Age 6-17 years) (%)-Person",
      data: [{ value: 9 }, { value: 10 }, { value: 8 }, { value: 11 }, { value: 9 }],
    },
    {
      name: "Children currently attending school (Age 6-17 years) (%)-Female",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children currently attending school (Age 6-17 years) (%)-Male",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Children currently attending school (Age 6-17 years) (%)-Person",
      data: [{ value: 82 }, { value: 85 }, { value: 83 }, { value: 86 }, { value: 87 }],
    },
    {
      name: "Children who can do division (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children who can do substraction (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children who can not read any letter (%)",
      data: [{ value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }, { value: 7 }],
    },
    {
      name: "Children who can not recognize even 1-9 (%)",
      data: [{ value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }, { value: 5 }],
    },
    {
      name: "Children who can read English capital letters (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Children who can read English easy sentences (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Children who can read English simple words (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Children who can read English small letters (%)",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Children who can recognize 1-9 (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Children who can recognize 10-99 (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Dropout Rate - Grade 1",
      data: [{ value: 10 }, { value: 9 }, { value: 11 }, { value: 10 }, { value: 12 }],
    },
    {
      name: "Dropout Rate - Grade 1 to 5",
      data: [{ value: 8 }, { value: 7 }, { value: 9 }, { value: 8 }, { value: 10 }],
    },
    {
      name: "Dropout Rate - Grade 2",
      data: [{ value: 9 }, { value: 10 }, { value: 8 }, { value: 11 }, { value: 9 }],
    },
    {
      name: "Dropout Rate - Grade 3",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Dropout Rate - Grade 4",
      data: [{ value: 6 }, { value: 7 }, { value: 5 }, { value: 8 }, { value: 6 }],
    },
    {
      name: "Dropout Rate - Grade 5",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Dropout Rate - Grade 6",
      data: [{ value: 4 }, { value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }],
    },
    {
      name: "Dropout Rate - Grade 6 to 8",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Dropout Rate - Grade 7",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Dropout Rate - Grade 8",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Effective Letrecy Rate",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Effective Letrecy Rate-Female",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Effective Letrecy Rate-Male",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Enrolment at Government Schools",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Enrolment at other Schools",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Enrolment at private Schools",
      data: [{ value: 35 }, { value: 38 }, { value: 36 }, { value: 40 }, { value: 39 }],
    },
    {
      name: "Female Literacy Rate",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Female Regular Teachers with Professional Qualification (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Girls' Muslim Enrolment at Primary Level (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Girls' Muslim Enrolment at Upper Primary Level (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Girls' OBC Enrolment at Primary Level (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Girls' OBC Enrolment at Upper Primary Level (%)",
      data: [{ value: 18 }, { value: 20 }, { value: 19 }, { value: 21 }, { value: 22 }],
    },
    {
      name: "Girls' SC Enrolment at Primary Level (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Girls' SC Enrolment at Upper Primary Level (%)",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Girls' ST Enrolment at Primary Level (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Girls' ST Enrolment at Upper Primary Level (%)",
      data: [{ value: 6 }, { value: 7 }, { value: 5 }, { value: 8 }, { value: 6 }],
    },
    {
      name: "Gross Enrolment Ratio at Primary Level",
      data: [{ value: 95 }, { value: 98 }, { value: 96 }, { value: 99 }, { value: 97 }],
    },
    {
      name: "Gross Enrolment Ratio at Upper Primary Level",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Literacy Rate 5 Years & above",
      data: [{ value: 78 }, { value: 80 }, { value: 79 }, { value: 81 }, { value: 82 }],
    },
    {
      name: "Literacy Rate 6 Year & above",
      data: [{ value: 77 }, { value: 79 }, { value: 78 }, { value: 80 }, { value: 81 }],
    },
    {
      name: "Literacy Rate 7 Year & above",
      data: [{ value: 76 }, { value: 78 }, { value: 77 }, { value: 79 }, { value: 80 }],
    },
    {
      name: "Male Literacy Rate",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Male Regular Teachers with Professional Qualification (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Men who are literate (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Mothers of children aged 36-71 months aware of pre-school education at AWC (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Muslim Enrolment at Primary Level (%)",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Muslim Enrolment at Upper Primary Level (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Net Enrolment Ratio at Primary Level",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Net Enrolment Ratio at Upper Primary Level",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "OBC Enrolment at Primary Level (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "OBC Enrolment at Upper Primary Level (%)",
      data: [{ value: 22 }, { value: 24 }, { value: 23 }, { value: 25 }, { value: 26 }],
    },
    {
      name: "Out of schools",
      data: [{ value: 10 }, { value: 8 }, { value: 12 }, { value: 9 }, { value: 11 }],
    },
    {
      name: "Percentage of Total Schools with Enrolment <= 50",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Population (female) age 6 years and above who ever attended school (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Ratio of Girls' to Boys' Enrolment Grade 1 to 5",
      data: [{ value: 0.9 }, { value: 0.92 }, { value: 0.91 }, { value: 0.93 }, { value: 0.94 }],
    },
    {
      name: "Repetition Rate - Grade 1 to 5",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Repetition Rate - Grade 6 to 8",
      data: [{ value: 1 }, { value: 2 }, { value: 1 }, { value: 3 }, { value: 2 }],
    },
    {
      name: "SC Enrolment at Primary Level (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "SC Enrolment at Upper Primary Level (%)",
      data: [{ value: 18 }, { value: 20 }, { value: 19 }, { value: 21 }, { value: 22 }],
    },
    {
      name: "Schools Constituted SMC(Government & Aided Schools) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Schools Providing Mid-Day Meal (Government & Aided Schools) (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Schools that are Approachable by All Weather Road (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Schools with Boys' Toilet (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Schools with Computer (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Schools with Drinking Water facility (%)",
      data: [{ value: 95 }, { value: 98 }, { value: 96 }, { value: 99 }, { value: 97 }],
    },
    {
      name: "Schools with Electricity (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Schools with Enrolment <= 50 (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Schools with Girls' Toilet (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Schools with Kitchen-Shed (Government & Aided Schools) (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Schools with Playground Facility (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Single Classroom Schools (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Single Teacher Schools (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "ST Enrolment at Primary Level (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "ST Enrolment at Upper Primary Level (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Students in std. V who can read std. II level paragraph (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Total Female Teachers by School (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Total Girls Enrolment (%)",
      data: [{ value: 48 }, { value: 50 }, { value: 49 }, { value: 51 }, { value: 52 }],
    },
    {
      name: "Total Literacy Rate",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Total Pupil-Teacher Ratio",
      data: [{ value: 25 }, { value: 24 }, { value: 23 }, { value: 22 }, { value: 21 }],
    },
    {
      name: "Total Regular Teachers with Professional Qualification(%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Total Student Classroom Ratio",
      data: [{ value: 30 }, { value: 28 }, { value: 32 }, { value: 29 }, { value: 31 }],
    },
    {
      name: "Transition Rate (Primary to Upper Primary)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Utilized Social Development Grants (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Utilized Teaching Learning Material Grants (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who are literate (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women with 10 or more years of schooling (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Youth Literacy rate (Aged 15-24)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
  ],
  Health: [
    {
      name: "Abortion performed by skilled health personnel (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Abortion taking place in Institution (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "All women who received Postnatal Check-up within 48 hrs. of delivery (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Average Month of pregnancy at the time of abortion",
      data: [{ value: 2.5 }, { value: 2.6 }, { value: 2.5 }, { value: 2.7 }, { value: 2.6 }],
    },
    {
      name: "Average out of pocket expenditure per delivery in public health facility (Rs.)",
      data: [{ value: 1500 }, { value: 1450 }, { value: 1550 }, { value: 1400 }, { value: 1600 }],
    },
    {
      name: "Births assisted by a doctor/nurse/LHV/ANM/other health personnel (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Births delivered by caesarean section (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Births in a private health facility delivered by caesarean section (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Births in a public health facility delivered by caesarean section (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Blood sugar level - high (>140 mg/dl) (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Blood sugar level - very high (>160 mg/dl) (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Caesarean out of total delivery taken place in Government Institutions (%)",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Caesarean out of total delivery taken place in Private Institutions (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Children (aged 6-35 months) who received at least one Vitamin A dose during last six months (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children (aged 6-35 months) who received IFA tablets/syrup during last 3 months (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children age 12-23 months fully immunized (BCG, measles, and 3 doses each of polio and DPT) (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Children age 12-23 months who have received 3 doses of DPT vaccine (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children age 12-23 months who have received 3 doses of Hepatitis B vaccine (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children age 12-23 months who have received 3 doses of polio vaccine (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Children age 12-23 months who have received BCG (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Children age 12-23 months who have received measles vaccine (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children age 12-23 months who received most of the vaccinations in private health facility (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Children age 12-23 months who received most of the vaccinations in public health facility (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children age 9-59 months who received a vitamin A dose in last 6 months (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Children aged 0 –35 months weighed with 24 hours of birth (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children aged 0 –35 months with birth weight less than 2500 grams (out of those weighed) (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Children aged 0-59 months given anti-malarial drug during fever (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Children aged 0-59 months had diarrhoea in 15 days prior to survey (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Children aged 0-59 months had diarrhoea in 15 days prior to survey from whom advice or treatment was sought for diarrhoea (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children aged 0-59 months prevalence of symptoms of ARI-For whom advice or treatment was sought (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children aged 0-59 months prevalence of symptoms of ARI-Had symptoms of ARI in 15 days prior to survey (%)",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Children aged 0-59 months received Deworming medication in six months prior to survey (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Children aged 0-59 months received Vitamin A dose in six months prior to survey (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children aged 0-59 months suffered from fever in 15 days prior to survey (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Children aged 0-59 months with diarrhoea given-Oral Re-hydration Solution (ORS) including Home Available Fluids (HAF) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children aged 0-59 months with diarrhoea given-ORS and Zinc (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children aged 12-23 months drop out in vaccination from DPT 2 to DPT 3 (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Children aged 12-23 months drop out in vaccination from OPV 2 to OPV 3 (%)",
      data: [{ value: 4 }, { value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }],
    },
    {
      name: "Children aged 12-23 months Fully Immunized (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Children aged 12-23 months having Immunization Card (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Children aged 12-23 months received vaccination from Anganwadi centre (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Children aged 12-23 months received vaccination from Government health facility (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children aged 12-23 months received vaccination from Private health facility (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Children aged 12-23 months who have received 3 doses of DPT (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children aged 12-23 months who have received 3 doses of Polio vaccine (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Children aged 12-23 months who have received BCG (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Children aged 12-23 months who have received Measles vaccine (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children born at home who were taken to a health facility for check-up within 24 hours of birth (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Children suffering from Acute Respiratory Infection (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Children suffering from Acute Respiratory Infection who sought treatment (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children suffering from Diarrhoea (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Children suffering from Diarrhoea who received HAF/ORS/ORT & Zinc (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Children suffering from Fever (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Children suffering from Fever who sought treatment (%)",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "Children under age 5 years whose birth was registered (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children who did not receive any vaccination (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Children who have received Polio dose at birth (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Children who received a health check after birth from a doctor/nurse/LHV/ANM/ midwife/ otherhealth personnel within 2 days of birth (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Children whose birth weight was taken (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Children with birth weight less than 2.5 Kg. (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Children with diarrhoea in the last 2 weeks who received oral rehydration salts (ORS) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Children with diarrhoea in the last 2 weeks who received zinc (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Current Family Planning Usage- Any Method (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Current Family Planning Usage- Condom (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Current Family Planning Usage- Female Sterilization (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Current Family Planning Usage- IUD/PPIUD (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Current Family Planning Usage- Male sterilization (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Current Family Planning Usage- Pill (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Current Family Planning Usage-Any Traditional Method (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Current Family Planning Usage-Condom/Nirodh (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Current Family Planning Usage-Copper-T/IUD (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Current Family Planning Usage-Emergency Contraceptive Pills (%)",
      data: [{ value: 3 }, { value: 4 }, { value: 3 }, { value: 5 }, { value: 4 }],
    },
    {
      name: "Current Family Planning Usage-LAM (%)",
      data: [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 4 }, { value: 3 }],
    },
    {
      name: "Current Family Planning Usage-Male Sterilization (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Current Family Planning Usage-Periodic Abstinence (%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Current Family Planning Usage-Pills (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Current Family Planning Usage-Withdrawal (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Current users ever told about side effects of current method (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Currently Married Pregnant Women aged 15-49 years registered for ANC (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Currently pregnant women aware of health check-up at AWC (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Currently pregnant women aware of immunization at AWC (%)",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "Currently pregnant women aware of referral service at AWC (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Delivery at Home (%)",
      data: [{ value: 20 }, { value: 18 }, { value: 22 }, { value: 20 }, { value: 23 }],
    },
    {
      name: "Delivery at home conducted by skilled health personnel (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness (Per 100,000 Population)",
      data: [{ value: 1000 }, { value: 1050 }, { value: 1020 }, { value: 1080 }, { value: 1060 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness (Per 100,000 Population)-Female",
      data: [{ value: 550 }, { value: 580 }, { value: 560 }, { value: 600 }, { value: 590 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness (Per 100,000 Population)-Male",
      data: [{ value: 450 }, { value: 470 }, { value: 460 }, { value: 480 }, { value: 470 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness and sought Medical Care (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness and sought Medical Care (%)-Female",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "Having any kind of Symptoms of Chronic Illness and sought Medical Care (%)-Male",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment (%)-Female",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment (%)-Male",
      data: [{ value: 55 }, { value: 58 }, { value: 56 }, { value: 60 }, { value: 59 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment from Government Source (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment from Government Source (%)-Female",
      data: [{ value: 35 }, { value: 38 }, { value: 36 }, { value: 40 }, { value: 39 }],
    },
    {
      name: "Having diagnosed for any kind of Chronic Illness and getting Regular Treatment from Government Source (%)-Male",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Health worker ever talked to female non-users about family planning (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Home delivery conducted by skilled health personnel (out of total deliveries) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Households with any usual member covered by a health scheme or health insurance (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Less than 24 hrs. stay in institution after delivery",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Live Births taking place after an interval of 36 months (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Maternal Mortality Ratio",
      data: [{ value: 100 }, { value: 95 }, { value: 105 }, { value: 90 }, { value: 110 }],
    },
    {
      name: "Mean number of children ever born to Women aged 15-49 years",
      data: [{ value: 2.5 }, { value: 2.6 }, { value: 2.5 }, { value: 2.7 }, { value: 2.6 }],
    },
    {
      name: "Mean number of children ever born to Women aged 45-49 years",
      data: [{ value: 3.5 }, { value: 3.6 }, { value: 3.5 }, { value: 3.7 }, { value: 3.6 }],
    },
    {
      name: "Mean number of children surviving to Women aged 15-49 years",
      data: [{ value: 2.3 }, { value: 2.4 }, { value: 2.3 }, { value: 2.5 }, { value: 2.4 }],
    },
    {
      name: "Median age at first live birth of Women aged 15-49 years",
      data: [{ value: 22 }, { value: 23 }, { value: 22 }, { value: 24 }, { value: 23 }],
    },
    {
      name: "Median age at first live birth of Women aged 25-49 years",
      data: [{ value: 24 }, { value: 25 }, { value: 24 }, { value: 26 }, { value: 25 }],
    },
    {
      name: "Men Who have comprehensive knowledge of HIV/AIDS (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Men who know that consistant condom use can reduce the chances of getting of HIV/AIDS (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Men who tried to stop smoking or using tobacco in any other form (during the past 12 month) (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Men who use any kind of tobacco (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Moderately high (Systolic 160-179 mm of Hg and/or Diastolic 100-109 mm of Hg) (%) Men",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Moderately high (Systolic 160-179 mm of Hg and/or Diastolic 100-109 mm of Hg) (%) Women",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Modern Contraceptive Prevalence Rate (mCPR)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Mothers of children aged 36-71 months aware of health check-up at AWC (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Mothers of children aged 36-71 months aware of Immunization at AWC (%)",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "New born who received first check up within 24 hours of birth/discharge-All (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "New born who received first check up within 24 hours of birth/discharge-Home delivery (after birth) (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "New born who received first check up within 24 hours of birth/discharge-Institutional birth (after discharge) (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "New born who received first check up within 24 hours of birth/discharge-Visited by primary health worker (AWW/ANM/ ASHA) at home within one week of delivery/discharge from health Institution (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "New borns who were checked up within 24 hrs. of birth (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Major-Female",
      data: [{ value: 100 }, { value: 105 }, { value: 102 }, { value: 108 }, { value: 106 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Major-Male",
      data: [{ value: 120 }, { value: 125 }, { value: 122 }, { value: 128 }, { value: 126 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Major-Person",
      data: [{ value: 220 }, { value: 230 }, { value: 225 }, { value: 235 }, { value: 230 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Minor-Female",
      data: [{ value: 200 }, { value: 210 }, { value: 205 }, { value: 215 }, { value: 210 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Minor-Male",
      data: [{ value: 250 }, { value: 260 }, { value: 255 }, { value: 265 }, { value: 260 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Minor-Person",
      data: [{ value: 450 }, { value: 470 }, { value: 460 }, { value: 480 }, { value: 470 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Severe-Female",
      data: [{ value: 50 }, { value: 55 }, { value: 52 }, { value: 58 }, { value: 56 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Severe-Male",
      data: [{ value: 70 }, { value: 75 }, { value: 72 }, { value: 78 }, { value: 76 }],
    },
    {
      name: "Number of Injured Persons by type of Treatment received (Per 100,000 Population)-Severe-Person",
      data: [{ value: 120 }, { value: 130 }, { value: 125 }, { value: 135 }, { value: 130 }],
    },
    {
      name: "Persons diagnosed with any kind of Chronic Illness (Per 100,000 Population)",
      data: [{ value: 1000 }, { value: 1050 }, { value: 1020 }, { value: 1080 }, { value: 1060 }],
    },
    {
      name: "Persons diagnosed with any kind of Chronic Illness (Per 100,000 Population)-Female",
      data: [{ value: 550 }, { value: 580 }, { value: 560 }, { value: 600 }, { value: 590 }],
    },
    {
      name: "Persons diagnosed with any kind of Chronic Illness (Per 100,000 Population)-Male",
      data: [{ value: 450 }, { value: 470 }, { value: 460 }, { value: 480 }, { value: 470 }],
    },
    {
      name: "Persons diagnosed with Arthritis (Per 100,000 Population)",
      data: [{ value: 200 }, { value: 210 }, { value: 205 }, { value: 215 }, { value: 210 }],
    },
    {
      name: "Persons diagnosed with Arthritis (Per 100,000 Population)-Female",
      data: [{ value: 120 }, { value: 125 }, { value: 122 }, { value: 128 }, { value: 126 }],
    },
    {
      name: "Persons diagnosed with Arthritis (Per 100,000 Population)-Male",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Persons diagnosed with Asthma / Chronic Respiratory Disease (Per 100,000 Population)",
      data: [{ value: 150 }, { value: 155 }, { value: 152 }, { value: 158 }, { value: 156 }],
    },
    {
      name: "Persons diagnosed with Asthma / Chronic Respiratory Disease (Per 100,000 Population)-Female",
      data: [{ value: 70 }, { value: 75 }, { value: 72 }, { value: 78 }, { value: 76 }],
    },
    {
      name: "Persons diagnosed with Asthma / Chronic Respiratory Disease (Per 100,000 Population)-Male",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Persons diagnosed with Diabetes (Per 100,000 Population)",
      data: [{ value: 300 }, { value: 310 }, { value: 305 }, { value: 315 }, { value: 310 }],
    },
    {
      name: "Persons diagnosed with Diabetes (Per 100,000 Population)-Female",
      data: [{ value: 150 }, { value: 155 }, { value: 152 }, { value: 158 }, { value: 156 }],
    },
    {
      name: "Persons diagnosed with Diabetes (Per 100,000 Population)-Male",
      data: [{ value: 150 }, { value: 155 }, { value: 152 }, { value: 158 }, { value: 156 }],
    },
    {
      name: "Persons diagnosed with Hypertension (Per 100,000 Population)",
      data: [{ value: 400 }, { value: 410 }, { value: 405 }, { value: 415 }, { value: 410 }],
    },
    {
      name: "Persons diagnosed with Hypertension (Per 100,000 Population)-Female",
      data: [{ value: 200 }, { value: 210 }, { value: 205 }, { value: 215 }, { value: 210 }],
    },
    {
      name: "Persons diagnosed with Hypertension (Per 100,000 Population)-Male",
      data: [{ value: 200 }, { value: 210 }, { value: 205 }, { value: 215 }, { value: 210 }],
    },
    {
      name: "Persons diagnosed with Tuberculosis (TB)(Per 100,000 Population)",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Persons diagnosed with Tuberculosis (TB)(Per 100,000 Population)-Female",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Persons diagnosed with Tuberculosis (TB)(Per 100,000 Population)-Male",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Any Source (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Any Source (%)-Female",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Any Source (%)-Male",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Government Source (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Government Source (%)-Female",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Persons suffering from Acute Illness and taking treatment from Government Source (%)-Male",
      data: [{ value: 55 }, { value: 58 }, { value: 56 }, { value: 60 }, { value: 59 }],
    },
    {
      name: "Persons suffering from Acute Respiratory Infection (ARI) (Per 100,000 Population)",
      data: [{ value: 150 }, { value: 155 }, { value: 152 }, { value: 158 }, { value: 156 }],
    },
    {
      name: "Persons suffering from Acute Respiratory Infection (ARI) (Per 100,000 Population)-Female",
      data: [{ value: 70 }, { value: 75 }, { value: 72 }, { value: 78 }, { value: 76 }],
    },
    {
      name: "Persons suffering from Acute Respiratory Infection (ARI) (Per 100,000 Population)-Male",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Persons suffering from Any type of Acute Illness (Per 100,000 Population)",
      data: [{ value: 500 }, { value: 520 }, { value: 510 }, { value: 530 }, { value: 520 }],
    },
    {
      name: "Persons suffering from Any type of Acute Illness (Per 100,000 Population)-Female",
      data: [{ value: 250 }, { value: 260 }, { value: 255 }, { value: 265 }, { value: 260 }],
    },
    {
      name: "Persons suffering from Any type of Acute Illness (Per 100,000 Population)-Male",
      data: [{ value: 250 }, { value: 260 }, { value: 255 }, { value: 265 }, { value: 260 }],
    },
    {
      name: "Persons suffering from any type of Disability (Per 100,000 Population)",
      data: [{ value: 100 }, { value: 105 }, { value: 102 }, { value: 108 }, { value: 106 }],
    },
    {
      name: "Persons suffering from any type of Disability (Per 100,000 Population)-Female",
      data: [{ value: 50 }, { value: 55 }, { value: 52 }, { value: 58 }, { value: 56 }],
    },
    {
      name: "Persons suffering from any type of Disability (Per 100,000 Population)-Male",
      data: [{ value: 50 }, { value: 55 }, { value: 52 }, { value: 58 }, { value: 56 }],
    },
    {
      name: "Persons suffering from diarrhoea/dysentry (Per 100,000 Population)",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Persons suffering from diarrhoea/dysentry (Per 100,000 Population)-Female",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Persons suffering from diarrhoea/dysentry (Per 100,000 Population)-Male",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Persons suffering from Fever (Per 100,000 Population)",
      data: [{ value: 150 }, { value: 155 }, { value: 152 }, { value: 158 }, { value: 156 }],
    },
    {
      name: "Persons suffering from Fever (Per 100,000 Population)-Female",
      data: [{ value: 70 }, { value: 75 }, { value: 72 }, { value: 78 }, { value: 76 }],
    },
    {
      name: "Persons suffering from Fever (Per 100,000 Population)-Male",
      data: [{ value: 80 }, { value: 85 }, { value: 82 }, { value: 88 }, { value: 86 }],
    },
    {
      name: "Pregnancy to Women aged 15-49 years resulting in abortion (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Prevalence of diarrhoea (reported) in the last 2 weeks preceding the survey (%)",
      data: [{ value: 8 }, { value: 9 }, { value: 7 }, { value: 10 }, { value: 8 }],
    },
    {
      name: "Registered pregnancies for which the mother received Mother and Child Protection (MCP) card (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Safe Delivery (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Slightly above normal (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) Men",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Slightly above normal (Systolic 140-159 mm of Hg and/or Diastolic 90-99 mm of Hg) (%) Women",
      data: [{ value: 18 }, { value: 20 }, { value: 19 }, { value: 21 }, { value: 22 }],
    },
    {
      name: "Total Unmet need (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Total unmet need for Family Planning (%)",
      data: [{ value: 12 }, { value: 14 }, { value: 13 }, { value: 15 }, { value: 16 }],
    },
    {
      name: "Unmet need for Limiting (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Unmet need for spacing for Family Planning(%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Unmet need for Spacing (%)",
      data: [{ value: 7 }, { value: 8 }, { value: 6 }, { value: 9 }, { value: 7 }],
    },
    {
      name: "Women age 15-19 years who were already mothers or pregnant at the time of the survey (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Women age 15-49 years who have ever undergone examinations of Breast (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Women age 15-49 years who have ever undergone examinations of Cervix (%)",
      data: [{ value: 25 }, { value: 27 }, { value: 26 }, { value: 28 }, { value: 29 }],
    },
    {
      name: "Women age 15-49 years who have ever undergone examinations of Oral cavity (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Women aged 15-19 years who were already mothers or pregnant at the time of survey (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Women aged 20-24 reporting birth of order 2 & above (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Women availed benefit from national programme for safe motherhood-Both JSY and JSSK (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women availed benefit from national programme for safe motherhood-Janani Shishu Suraksha Karyakrama (JSSK) (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Women availed benefit from national programme for safe motherhood-Janani Suraksha Yojana (JSY) (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women having Mother and Child Protection (MCP) card at the time of pregnancy registration (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Women received at least one Tetanus Toxoid (TT) injection(%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women received first ANC in first trimester (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women received four or more ANCs (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women received three or more ANCs (%)",
      data: [{ value: 65 }, { value: 68 }, { value: 66 }, { value: 70 }, { value: 69 }],
    },
    {
      name: "Women received two or more Tetanus Toxoid (TT) injections (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Women received/purchased 100 or more IFA tablets /syrup during pregnancy (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women reporting birth of order 3 & above (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Women to whom ANM visited at least once during pregnancy (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women to whom ASHA visited at least once during pregnancy (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Women to whom AWW visited at least once during pregnancy (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who are aware of danger signs of ARI/Pneumonia (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women who are aware of HAF/ORS/ORT & ZINC (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women who are aware of RTI/STI (%)",
      data: [{ value: 40 }, { value: 42 }, { value: 41 }, { value: 43 }, { value: 44 }],
    },
    {
      name: "Women who are awareof HIV/AIDS (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who availed financial assistance for delivery under JSY (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Women who availed financial assistance for Government Institutional delivery under JSY (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Women who availed financial assistance for institutional delivery under JSY (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who consume alcohol (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Women who consumed 100 or more IFA tablets /syrup during pregnancy (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women who consumed iron folic acid for 100 days or more when they were pregnant (%)",
      data: [{ value: 45 }, { value: 48 }, { value: 46 }, { value: 50 }, { value: 49 }],
    },
    {
      name: "Women who delivered at any health facility (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who delivered at Public health facilities (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who Delivered by skilled health provider (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Women who delivery at Government Institution (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Women who delivery at Private Institution (%)",
      data: [{ value: 20 }, { value: 22 }, { value: 21 }, { value: 23 }, { value: 24 }],
    },
    {
      name: "Women who did not receive any Postnatal Check-up (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Women who had antenatal check-up in the first trimester (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who had at least 4 antenatal care visits (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women who had full antenatal care (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women Who have comprehensive knowledge of HIV/AIDS (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who know that consistant condom use can reduce the chances of getting of HIV/AIDS (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women who received any ANC before abortion (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who received any antenatal check-up during their last pregnancy (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Women who received financial assistance under Janani Suraksha Yojana (JSY) for births delivered in an institution (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Women who received full ANC (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Women who received PNC within 48 hours of discharge/delivery-Home delivery (after birth) (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who received PNC within 48 hours of discharge/delivery-Institutional delivery (after discharge) (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who received post-natal Check-up within 1 week of delivery (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women who received postnatal care from a doctor/nurse/LHV/ANM/midwife/other health personnel within 2 days of delivery (%)",
      data: [{ value: 75 }, { value: 78 }, { value: 76 }, { value: 80 }, { value: 79 }],
    },
    {
      name: "Women who received received ANC at-Anganwadi centre (%)",
      data: [{ value: 30 }, { value: 32 }, { value: 31 }, { value: 33 }, { value: 34 }],
    },
    {
      name: "Women who received received ANC at-Government health facility (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
    {
      name: "Women who received received ANC at-Private health facility (%)",
      data: [{ value: 10 }, { value: 11 }, { value: 9 }, { value: 12 }, { value: 10 }],
    },
    {
      name: "Women who received stayed at the health facility for 48 hours or more (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women who stayed at the health facility for less than 12 hours (%)",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "Women who tried to stop smoking or using tobacco in any other from during the past 12 months (%)",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Women who underwent Ultrasound (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "Women who went for Ultrasound before abortion (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
    {
      name: "Women whose Blood Pressure (BP) taken (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Women whose Blood taken for Hb (%)",
      data: [{ value: 85 }, { value: 88 }, { value: 86 }, { value: 89 }, { value: 90 }],
    },
    {
      name: "Women whose last birth was protected against neonatal tetanus (%)",
      data: [{ value: 90 }, { value: 92 }, { value: 91 }, { value: 93 }, { value: 94 }],
    },
    {
      name: "Women with two children wanting no more children (%)",
      data: [{ value: 60 }, { value: 62 }, { value: 61 }, { value: 63 }, { value: 64 }],
    },
  ],
  Nutrition: [
    {
      name: "All women age 15-49 years who are anaemic (%)",
      data: [{ value: 50 }, { value: 52 }, { value: 51 }, { value: 53 }, { value: 54 }],
    },
    {
      name: "Average month by which children received foods other than breast milk-Animal / Formula Milk",
      data: [{ value: 6 }, { value: 7 }, { value: 6 }, { value: 8 }, { value: 7 }],
    },
    {
      name: "Average month by which children received foods other than breast milk-Semi-Solid mashed food",
      data: [{ value: 5 }, { value: 6 }, { value: 5 }, { value: 7 }, { value: 6 }],
    },
    {
      name: "Average month by which children received foods other than breast milk-Solid (Adult) Food",
      data: [{ value: 7 }, { value: 8 }, { value: 7 }, { value: 9 }, { value: 8 }],
    },
    {
      name: "Average month by which children received foods other than breast milk-Vegetables/Fruits",
      data: [{ value: 6 }, { value: 7 }, { value: 6 }, { value: 8 }, { value: 7 }],
    },
    {
      name: "Average month by which children received foods other than breast milk-water",
      data: [{ value: 4 }, { value: 5 }, { value: 4 }, { value: 6 }, { value: 5 }],
    },
    {
      name: "Average number of days spent on PSE sessions in the month prior to survey",
      data: [{ value: 15 }, { value: 17 }, { value: 16 }, { value: 18 }, { value: 19 }],
    },
    {
      name: "AWCs conducted one or more hours a day PSE sessions in one calendar month prior to survey (%)",
      data: [{ value: 80 }, { value: 82 }, { value: 81 }, { value: 83 }, { value: 84 }],
    },
    {
      name: "AWCs conducted sixteen or more days PSE sessions in one calendar month prior to survey (%)",
      data: [{ value: 70 }, { value: 72 }, { value: 71 }, { value: 73 }, { value: 74 }],
    },
  ],
};

export default indicatorsData;