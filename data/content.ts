export const contentData = [
	{
		title: "Work Experience",
		items: [
			{
				title: "Software Engineer at Creative Chaos (Stack Labs Ltd.)",
				subTitle: "Remote",
				date: "2022 - Present",
				description:
					"Working as a Front-end Next.js developer on Foxton's Website. Have worked on numerous functionalities. Maintained 85%+ lighthouse scores on every page.",
			},
			{
				title: "React Native Developer at WEMTECH Islamabad",
				subTitle: "Onsite",
				date: "2020 - 2022",
				description:
					"Worked on numerous React Native and Next.js Projects with complete satisfaction from international clients.",
			},
		],
	},
	{
		title: "Some Major Projects",
		items: [
			{
				date: "Foxtons UK",
				title: "Foxtons UK website revamp - Next.js",
				description:
					"Front-end developer for www.foxtons.co.uk website redesign, focusing on the user portal. Enhanced user experience, achieving 85% Light House scores on all pages. Addressed security issues to ensure data protection.",
			},
			{
				title: "Bellona Network - React Native iOS/Android",
				date: "Bellona Network",
				description:
					"The app is a social networking and podcast platform designed specifically for women in South Africa. It offers various features such as a podcast player with background playback, news feed display, user-to-user chat with voice notes, in-app purchases, customizable system notifications, and animated elements using React Native. It also utilizes OTA updates for seamless app enhancements. The technology stack includes React Native (Bare), react-native-track-player, react-native-audio-record-player, socket.io, and expo-updates.",
			},
			{
				title: "JACY Token - React Native iOS/Android",
				date: "JACY",
				description:
					"The app is developed for the ERC Token JACY deployed on the Ethereum Blockchain. The main functionalities include connecting external digital wallets like Metamask using WalletConnect, implementing a Swap Module for exchanging JACY Token to WETH and vice versa using the Uniswap SDK, and displaying real-time currency rates fetched through a GraphQL API using Apollo Client in React Native. The technology stack comprises React Native (Bare), WalletConnect, ethers, web3, and @uniswap/sdk.",
			},
			{
				title: "Olo Wellbeing app - React Native iOS",
				date: "Olo",
				description:
					"An app for users to listen to high quality nature sounds. With a carefully crafted user interface and custom animations, users experience a very minimalist design that is to the point and very easy to understand. Users can choose length of the soundtrack from a set of given categories and just play. This project is on-going and new features are to be added in the future. The app is deployed on iOS Appstore (OLO Wellbeing app).",
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
					"Majored in Web & Mobile development as well as in Data Mining and Blockchain",
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
		subTitle: string;
		date: string;
		description: string;
	}[];
};

export type ContentData = Content[];
