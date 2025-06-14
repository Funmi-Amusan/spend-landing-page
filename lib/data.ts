import { ImageAssets } from "@/assets";

export const faqs = [
    {
      id: 1,
      question: "How does Revve work?",
      answer:
        "Security is at the core of our system. Your data is protected with industry-leading encryption, ensuring secure storage and access only for authorized users.",
    },
    {
      id: 2,
      question: "Where is Revve available?",
      answer:
        "Yes! It retains chat history, allowing you to pick up where you left off without losing context.",
    },
    {
      id: 3,
      question: "Is Revve a bank?",
      answer:
        "It means the chatbot can understand and respond to different types of input—not just text but also images—giving you a more interactive experience.",
    },
    {
      id: 4,
      question: "Is my money safe with Revve?",
      answer:
        "It leverages advanced AI capabilities similar to Gemini, offering accurate answers, creative insights, and problem-solving assistance.",
    },
    {
        id: 5,
        question: "What document do I need for verification?",
        answer:
          "It leverages advanced AI capabilities similar to Gemini, offering accurate answers, creative insights, and problem-solving assistance.",
      },
      {
        id: 6,
        question: "What should I do if my transaction is delayed or fails?",
        answer:
          "It leverages advanced AI capabilities similar to Gemini, offering accurate answers, creative insights, and problem-solving assistance.",
      },
      {
        id: 7,
        question: "What should I do if my transaction is delayed or fails?",
        answer:
          "It leverages advanced AI capabilities similar to Gemini, offering accurate answers, creative insights, and problem-solving assistance.",
      },
      {
        id: 8,
        question: "Can I transfer money within the same currency?",
        answer:
          "It leverages advanced AI capabilities similar to Gemini, offering accurate answers, creative insights, and problem-solving assistance.",
      },
  ];

  const heroBackground = ['./yellow-hero-image.png', './teal-hero-image.png', './pink-hero-image.png', './brown-hero-image.png'];

  export const slides = [
    {
      background: heroBackground[0],
      leftSection: {
        country: 'Canada',
      },
      middleSection: {
        amount: '+C$750',
        flag: ImageAssets.CanadaFlag,
        reverseOrder: false,
        transfer: {
          image: ImageAssets.GTB,
          time: 'Yesterday, 1:28 AM',
          description: 'Transfer to Lil Sis',
          amount: '-₦862,912.94'
        }
      },
      rightSection: {
        country: 'Nigeria',
      }
    },
    {
      background: heroBackground[1],
      leftSection: {
        country: 'Canada',
      },
      middleSection: {
        amount: '+₵3,920',
        flag: ImageAssets.GhanaianFlag,
        reverseOrder: true,
        transfer: {
          image: ImageAssets.Absa,
          time: 'Today, 9:45 PM',
          description: 'Online transaction',
          amount: '+₵3,920'
        }
      },
      rightSection: {
        country: 'Ghana',
      }
    },
    {
      background: heroBackground[2],
      leftSection: {
        country: 'Nigeria',
      },
      middleSection: {
        amount: '+£500',
        flag: ImageAssets.NigerianFlag,
        reverseOrder: false,
        transfer: {
          image: ImageAssets.KFC,
          time: 'Today, 11:28 AM',
          description: 'Paid at KFC',
          amount: '-₵760.87'
        }
      },
      rightSection: {
        country: 'Ghana',
      }
    },
    {
      background: heroBackground[3],
      leftSection: {
        country: 'Nigeria',
      },
      middleSection: {
        amount: '-₦17,000',
        flag: ImageAssets.NigerianFlag,
        reverseOrder: true,
        transfer: {
          image: ImageAssets.MTN,
          time: 'Today, 3:15 PM',
          description: 'Airtime top-up',
          amount: '-₦17,000'
        }
      },
      rightSection: {
        country: 'Nigeria',
      }
    }
  ];