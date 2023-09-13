import { BadgesTab } from "../components/profile/badgeTab";
import { GamePlayedTab } from "../components/profile/gamePlayedTab";

export  const ProfileTabs = [
    {
      name: 'Games played',
      content: (
       <GamePlayedTab/>
      ),
    },
    {
      name: 'Badges',
      content: (
        <BadgesTab/>
      ),
    },
  ];