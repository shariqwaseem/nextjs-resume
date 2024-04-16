export const contentData = [
	{
		title: "Work Experience",
		items: [
			{
				title: "Software Engineer at [Creative Chaos (Stack Labs Ltd.)](www.linkedin.com/company/creative-chaos)",
				subTitle: "Remote",
				date: "2022 - Present",
				description:
					"Working as a Front-end React.js & Next.js developer on Foxton's Website. This is an ongoing project with strict performance and security criterion. I am an active participant in building and maintaining the project.",
			},
			{
				title: "React Native Developer at WEMTECH, Islamabad",
				subTitle: "Onsite",
				date: "2020 - 2022",
				description:
					"Worked on numerous React Native and Next.js Projects with complete satisfaction from international clients.",
			},
		],
	},
	{
		title: "Education",
		items: [
			{
				title: "Bachelors in Computer Science",
				subTitle: "FAST NUCES, Islamabad",
				date: "2016 - 2020",
				description:
					"Majored in Web & Mobile development as well as in Data Mining and Blockchain. [Degree verification link](www.nu.edu.pk/verification?id=16i-0257).",
			},
		],
	},
	{
		title: "Some Major Projects",
		items: [
			{
				date: "Paktec Electric Store",
				title: "Paktec Electric Store - Next.js, Firebase, Algolia Search",
				description:
					"An online platform for electrical goods. That is currently up and live ([www.paktec.pk](www.paktec.pk)). Users can browse through the inventory, add items to their carts and place orders. The website features multiple sign in options like Google and email. Users can track their orders as well. This website is accompained by an admin panel which is also live and running. Admins can add, edit products and track user orders. They can also batch update prices for products. Admins have the convenience of using just their phones to manage everything that there is to manage (including uploading pictures of products). Algolia's powerful search and widgets are connected with the front-end to make the user experience as intuitive as possible.",
			},
			{
				date: "Foxtons UK",
				title: "Foxtons UK website revamp - Next.js",
				description:
					"Front-end developer for [foxtons.co.uk](www.foxtons.co.uk) website redesign, focusing on the user portal. The project is developed in Next.js 13 and Material UI. We are achieving 85% Lighthouse scores on all pages of our pages. I have worked on numerous techincal functionalities along with addressing security and performance concerns.",
			},
			{
				date: "Willport",
				title: "Willport Mobile app - React Native",
				description:
					"Developed in React Native, the core functionality of this project was to schedule payments and gifts into the future. I worked on core payment and scheduling functionalities as well as converting the codebase to the latest version of React Native with functional components. Available on [iOS App Store](apps.apple.com/pk/app/willport/id1439199443) & [Google Play Store](play.google.com/store/apps/details?id=com.willportapp&hl=en&gl=US)",
			},
			{
				title: "Bellona Network - React Native iOS/Android",
				date: "Bellona Network",
				description:
					"The app is a social networking and podcast platform designed specifically for women in South Africa. It offers various features such as a podcast player with background playback, news feed display, user-to-user chat with voice notes, in-app purchases, customizable system notifications, and animated elements using React Native. It also utilizes OTA updates for seamless app enhancements. The technology stack includes React Native (Bare), react-native-track-player, react-native-audio-record-player, socket.io, and expo-updates. This app is currently available on [Google Play Store](play.google.com/store/apps/details?id=com.bellona.app&hl=en&gl=US) as well as [iOS App Store](apps.apple.com/in/app/bellona-network/id1574485776).",
			},
			{
				title: "JACY Token - React Native iOS/Android",
				date: "JACY",
				description:
					"The app is developed for the ERC Token JACY deployed on the Ethereum Blockchain. The main functionalities include connecting external digital wallets like Metamask using WalletConnect, implementing a Swap Module for exchanging JACY Token to WETH and vice versa using the Uniswap SDK, and displaying real-time currency rates fetched through a GraphQL API using Apollo Client in React Native. The technology stack comprises React Native (Bare), WalletConnect, ethers, web3, and @uniswap/sdk. This app is currently available on [Google Play Store](play.google.com/store/apps/details?id=com.appname2&hl=en&gl=US).",
			},
			{
				title: "Olo Wellbeing app - React Native iOS & Android",
				date: "Olo",
				description:
					"An app for users to listen to high quality nature sounds. With a carefully crafted user interface and custom animations, users experience a very minimalist design that is to the point and very easy to understand. Users can choose length of the soundtrack from a set of given categories and just play. This project is on-going and new features are to be added in the future. This app is currently available on [iOS App Store](apps.apple.com/us/app/olo-wellbeing-journey/id1631542496) as well as [Google Play Store](play.google.com/store/apps/details?id=com.olo.soma&hl=en&gl=US).",
			},
			{
				title: "Quotation and Sales Tax Management Sytem",
				date: "Quotation and Sales Tax Management System.",
				description:
					"I devised and implemented a system within a timeframe of less than one month, currently operational within my father's business infrastructure. This system superseded an error-prone Microsoft Excel-based solution, deficient in maintenance capabilities. In anticipation of my father's absence during a trip abroad, I engineered an automated solution to optimize workflow processes. Developed using Microsoft Access, the system's design predates my enrollment in university. It remains operational, with my father attesting to its indispensability.",
			},
		],
	},
	//   @NOTE: You can add more sections here
	//   {
	//     title: "Projects",
	//     items: [
	//       {
	//         title: "Project 1",
	//         subTitle: "Sub Title",
	//         date: "2015 - 2016",
	//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
	//       },
	//     ],
	//   },
];

export type Content = {
	title: string;
	items: {
		title: string;
		subTitle?: string;
		date: string;
		description: string;
	}[];
};

export type ContentData = Content[];
