interface DataType {
   id: number;
   sub_title: string;
   title: string;
   desc: string;
}[];

const road_map_data: DataType[] = [
   {
      id: 1,
      sub_title: "Q1 2025",
      title: "Platform Launch and Token Integration",
      desc: "Launch the AfriChain platform with full integration of the native token. Enable initial questing and reward systems with ICP, USDT, and the native token",
   },
   {
      id: 2,
      sub_title: "Q2 2025",
      title: "Community Ambassador Program",
      desc: "Establish a network of African-based ambassadors to promote local adoption. Partner with regional influencers to build trust and awareness.",
   },
   {
      id: 3,
      sub_title: "Q3 2025",
      title: "Grants and Accelerator Programs",
      desc: "Launch the first round of startup funding for African Web3 projects. Support 10+ startups through grants and accelerator initiatives.",
   },
   {
      id: 4,
      sub_title: "Q4 2025",
      title: "Custom Quests and Project Partnerships",
      desc: "Allow Web3 projects to design their own quests and reward systems on the platform. Partner with at least 20 Web3 projects looking to enter the African market.",
   },
   {
      id: 5,
      sub_title: "Q1 2026",
      title: "Global Expansion and Ecosystem Growth",
      desc: "Build strategic alliances with global blockchain organizations and investors. Expand the platform’s reach to emerging markets outside Africa.",
   },
];

export default road_map_data;