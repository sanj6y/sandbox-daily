import React, { useState } from "react";
import logo from "../assets/sandbox-logo.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function CreditArticle() {
const [nav, setNav] = useState(true);

const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="container mx-auto py-12">
        <nav className="fixed flex justify-between top-0 z-50 w-full rounded-b-2xl py-2 px-6 border-b-2 bg-gray-50 bg-opacity-75">
        <div className="flex items-center md:pl-32 ease-in-out duration-300">
          <a href = "/home"><img src={logo} alt="sandbox-logo" className="w-12"/></a>
          <h1 className = "font-bold text-3xl tracking-wide px-4">
             Sandbox
          </h1>
        </div>
        <div
          onClick={handleNav}
          className="flex flex-col justify-center md:hidden hover:cursor-pointer"
        >
          {!nav ? <RiCloseFill size={30} /> : <RiMenu3Fill size={25} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] h-screen border-r border-r-gray-300 bg-gray-50 ease-in-out duration-500"
              : "fixed left-[-100%] top-0 ease-in-out duration-200"
          }

        >
          <div className="flex flex-col justify-center">
            <ul className="text-xl font-medium">
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">HOME</li>
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ABOUT</li>
              <li href="/services" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">SERVICES</li>
              <li href = "/articles" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">ARTICLES</li>
              <li href = "/home" className="w-fit p-4 hover:cursor-pointer hover:text-gray-500 ease-in-out duration-200">CONTACT</li>
            </ul>
          </div>
        </div>
        <div className="space-x-5 pr-10 md:flex hidden font-medium text-black">
          <button className="hover:text-gray-500 ease-in-out duration-200">
            HOME
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            ABOUT
          </button>
          <button
            className="hover:text-gray-500 ease-in-out duration-200"
          >
            <a href = "/services">SERVICES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            <a href = "/articles">ARTICLES</a>
          </button>
          <button className="hover:text-gray-500 ease-in-out duration-200">
            CONTACT
          </button>
        </div>
      </nav>
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Understanding Credit</h1>
        <p className="text-lg">By Parv Jain</p>
      </div>
      <div className="my-8">
      </div>
      <div className="max-w-4xl mx-auto">
        <p className="mb-8">
          Today, we're going to dive into the world of credit. Wherever you are
          in your financial journey, it's important to understand the basics of
          credit to set yourself up for a solid financial future. So, get ready
          to learn about credit cards, the difference between credit and debit,
          the importance of credit scores, and how you can start building
          credit.
        </p>
        <h2 className="text-2xl font-bold mb-4">Credit vs. Debit:</h2>
        <p className="mb-8">
          Let's start by figuring out the difference between credit and debit
          cards. While they might look similar, they serve different purposes. A
          debit card lets you spend money directly from your bank account,
          making it a handy tool for keeping track of your expenses. On the
          other hand, a credit card allows you to borrow money up to a certain
          limit. You can make purchases and pay off the balance over time.
          Remember, using credit cards responsibly helps you establish a good
          credit history, while debit cards give you easy access to your own
          funds without going into debt.
        </p>
        <h2 className="text-2xl font-bold mb-4">Credit Scores?</h2>
        <p className="mb-8">
          Now, let's talk about credit scores. These three-digit numbers are
          really important for your financial life and they range from 300 to
          850. Credit scores reflect how trustworthy you are with money and are
          used by lenders, landlords, and even potential employers to evaluate
          your financial reliability. A higher credit score means you're seen as
          less risky, making it easier for you to get loans, lower interest
          rates for cars, and even rent an apartment. To keep a healthy credit
          score, make sure to pay your bills on time, keep your credit card
          balances low, and have different types of credit accounts.
        </p>
        <p className="mb-8">
          <strong className="font-bold">Quick Tip:</strong> Regularly check
          your credit report for mistakes or errors, and report any issues to
          the credit bureaus right away.
        </p>
        <h2 className="text-2xl font-bold mb-4">Which card should I get?</h2>
        <p className="mb-8">
          Different credit cards offer various benefits and features that cater
          to different needs. For example, some cards offer cashback rewards on
          specific categories like groceries or gas, while others provide travel
          perks such as airline miles or hotel discounts. Having multiple credit
          cards can be useful as it allows you to diversify your rewards and
          take advantage of different card benefits, maximizing your potential
          savings and earning potential. Additionally, having multiple cards can
          also help you build a strong credit history, as long as you manage
          them responsibly and make timely payments.
        </p>
        <h2 className="text-2xl font-bold mb-4">Building Credit at a Young Age</h2>
        <p className="mb-8">
          If you're a student looking to start building credit, you should ask
          your parents to add you as an authorized user on one of their credit
          cards. Being an authorized user means you benefit from their good
          credit history, which can give your own credit score a boost.
          Remember, building credit takes time, so use this opportunity wisely
          and learn how to use credit cards responsibly.
        </p>
        <h2 className="text-2xl font-bold mb-4">Conclusion:</h2>
        <p className="mb-8">
          Congratulations! You've gained some valuable information into the
          world of credit. By understanding credit and credit cards, you're on
          your way to establishing a solid credit foundation. Remember to
          practice responsible credit habits, like paying your bills on time,
          keeping an eye on your spending, and regularly checking your credit
          report. And here's a last quick tip: budgeting and saving are powerful
          tools for maintaining a good credit score.
        </p>
        <p>
          Remember, financial literacy is a journey, and credit is just one
          piece of the puzzle. Stay tuned for more articles and practical tips
          to navigate the world of personal finance. Happy credit-building!
        </p>
      </div>
    </div>
  );
}

export default CreditArticle;
