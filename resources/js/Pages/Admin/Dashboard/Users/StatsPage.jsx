import UsersPerDayChart from './Part1/UsersPerDayChart';
import GenderChart from './Part1/GenderChart';
import AgeChart from './Part1/AgeChart';
import LeftBar from '../LeftBar';
import '../../../../../css/Admin/Dashboard/Users/StatsPage.css';
import Liste from './part2/Liste';

export default function StatsPage(props) {
    const { users_per_day, gender_stats, age_stats, users } = props;

    return (
        <div id="jl-stats-page">
            <LeftBar />
            <main id="jl-stats-content">
                <UsersPerDayChart data={users_per_day} />
                <GenderChart data={gender_stats} />
                <AgeChart data={age_stats} />
                <Liste users={users}/>
            </main>
        </div>
    );
}