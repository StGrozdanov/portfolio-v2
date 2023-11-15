import styles from './AdminDashboard.module.scss';
import { faComments, faEye, faFileCirclePlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import AdminNav from './modules/components/AdminNav/AdminNav';
import AdminHeader from './modules/components/AdminHeader/AdminHeader';
import AdminStatsCard from './modules/components/AdminStatsCard/AdminStatsCard';
import VisitationsChart from './modules/components/VisitationsChart/VisitationsChart';
import { useFetchVisitations } from './modules/hooks/useFetchVisitations';
import ChartFilter from './modules/components/ChartFilter/ChartFilter';
import { useState } from 'react';
import { normalizeFilterValue } from './modules/utils/normalizeFilterValue';

export default function AdminDashboard() {
    const [filter, setFilter] = useState<number | "today" | "yesterday" | "last7days" | "last30days" | "last90days" | "lastYear">('today');
    const { visitationsData, chartData } = useFetchVisitations(filter);

    return (
        <section className={styles["admin-panel-section"]}>
            <AdminNav />
            <section className={styles["admin-panel-section-wrapper"]}>
                <article className={styles["admin-panel-content"]}>
                    <AdminHeader />
                    <main className={styles["admin-panel-content-main"]}>
                        <AdminStatsCard
                            heading={'VISITATIONS FOR ' + normalizeFilterValue(filter)}
                            icon={faFileCirclePlus}
                            value={visitationsData?.totalVisitationsCount}
                        />
                        <AdminStatsCard
                            heading={'MOST POPULAR DEVICE'}
                            icon={faUsers}
                            value={visitationsData?.mostPopularDevice}
                        />
                        <AdminStatsCard
                            heading={'MOST POPULAR LOCATION'}
                            icon={faComments}
                            value={visitationsData?.mostPopularCountry}
                        />
                        <AdminStatsCard
                            heading={'VISITATIONS TODAY'}
                            icon={faEye}
                            value={visitationsData?.todayVisitationCount}
                        />
                        <ChartFilter filter={setFilter} />
                        <VisitationsChart data={chartData} />
                    </main>
                </article>
            </section>
        </section>
    )
}