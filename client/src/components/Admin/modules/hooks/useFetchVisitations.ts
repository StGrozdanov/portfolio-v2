import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";
import { AnalyticData } from "../../../../services/interfaces/portfolio-service-interfaces";
import { portfolioAPI } from "../../../../services/portfolio-service";
import moment from "moment";

export function useFetchVisitations(query: number | "today" | "yesterday" | "last7days" | "last30days" | "last90days" | "lastYear") {
    const [visitationsData, setVisitationsData] = useState<AnalyticData>();
    const [chartData, setChartData] = useState();
    const { token } = useAuthContext();

    useEffect(() => {
        const analytics = portfolioAPI.getAnalythics(query, token);
        const todayVisitations = portfolioAPI.getAnalythicsForTodayCount(token);

        Promise
            .all([analytics, todayVisitations])
            .then(response => {
                let chartResult: any = [["Date", "Visitations"]];
                let visitationsCountForTheDate = 1;

                if (query !== 'today') {
                    for (let index = 0; index < response[0].results.length; index++) {
                        const currDate = moment(response[0].results[index].date).utc(true).format('YYYY-MM-DD');
                        let searchedIndex = index + 1 < response[0].results.length ? index + 1 : 0;
                        const nextDate = moment(response[0].results[searchedIndex]?.date).utc(true).format('YYYY-MM-DD');

                        if (currDate === nextDate) {
                            visitationsCountForTheDate++;
                            continue
                        }

                        chartResult.push([currDate, visitationsCountForTheDate]);
                        visitationsCountForTheDate = 1;
                    }
                    setChartData(chartResult);
                } else {
                    for (let index = 0; index < response[0].results.length; index++) {
                        const currDate = moment(response[0].results[index].date).utc(true).format('HH:mm');
                        chartResult.push([currDate, visitationsCountForTheDate]);
                    }
                    setChartData(chartResult);
                }

                setVisitationsData(
                    {
                        ...response[0],
                        todayVisitationCount: response[1][0].today_visitations_count as unknown as number
                    }
                );
            })
            .catch(err => console.log(err));
    }, [query]);

    return { visitationsData, chartData };
}