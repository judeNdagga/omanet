"use client";
import React from "react";
import { StickyScroll } from "@/app/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Red Beefsteak Tomato",
    description:
      "The king of tomatoes, THE salsa tomato. Red Beefsteak tomatoes are large and meaty with lots of juice, making them ideal to use as a base for fresh sauces and dips. Red Beefsteak’s mild flavor makes them the perfect complement to any dish, without being too overpowering. They make a great addition to your classic hamburger or BLT, and can even hold their own as a patty substitute!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/5617/red-tomato-vegetable.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cherry Tomatoes",
    description:
      "A favorite of tomato lovers everywhere, cherry tomatoes are one the most versatile tomatoes around. With red, orange, yellow, and purple varieties, these tomatoes are a cooking mainstay, adding a burst of color and flavor to any meal. Sweet and tangy, cherry tomatoes can be cooked, grilled, sauced, and dried—and if you really can’t get enough—even eaten as a raw snack.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/4022083/pexels-photo-4022083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Green Beefsteak Tomato",
    description:
      "A green tomato doesn’t always mean “unripe”. Green Beefsteaks have a unique flavor that is tart and tangy and pairs well with other flavors to create something special. These tomatoes can be used as an interesting twist on juicing, artisan sandwiches, salsas, dips, and cold or hot sauces. They can even be used in baked items like desserts and pies (trust us, they’re delicious!), and make a great substitute in any recipe you’re using Granny Smith apples.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/17896145/pexels-photo-17896145/free-photo-of-green-tomato-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Roma Tomato",
    description:
      "The quintessential Italian plum tomato, Roma tomatoes are full of flavor with a tangy, garden-fresh tomato taste. This tomato is ideal for making a delicious stew, sauce, or tomato paste. For an even more intense flavor, try roasting your Roma in the oven and using it to create a tomato pesto or bruschetta topping that has a bit of a kick. With so many ways to use and a delicious flavor, it’s the perfect tomato to get adventurous with!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/210895/pexels-photo-210895.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "Heirloom Tomatoes",
    description:
      "Get back to your culinary roots with heirloom tomatoes that have been passed down for generations. With a wide range of sizes and vibrant colors, heirlooms are also rich in flavor, making them one of the best tomatoes to liven up your dish. These tomatoes are a perfect addition to sandwiches and salads, make a delicious grilled or roasted side dish, and taste great raw with a drizzle of olive oil and dash of salt. Whether you like your tomatoes sweet or tangy, heirlooms have something for everyone.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/6316521/pexels-photo-6316521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Heirloom Tomatoes",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/6316521/pexels-photo-6316521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];

export default function Tomatoes() {
  return (
    <div className="h-screen">
      <StickyScroll content={content} />
    </div>
  );
}
